import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Clock,
  BookOpen,
  PlayCircle,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { tryCatch } from "@/lib/try-catch";
import { createStrapiImageUrl, fetchStrapiData } from "@/lib/utils";
import { coursesQuery } from "@/data/strapi-query/query";
import { ErrorState } from "@/components/shared/error-state";
import { EmptyState } from "@/components/shared/empty-state";
import { Module } from "@/types";

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: courseData, error } = await tryCatch(
    fetchStrapiData(`api/courses/${id}`, coursesQuery)
  );

  if (error) {
    return (
      <div className="min-h-screen mt-24">
        <ErrorState message="We could not load the courses. Please try again later." />
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="min-h-screen mt-24">
        <EmptyState
          icon={<BookOpen className="w-8 h-8 text-muted-foreground" />}
          title="No courses available"
          description="Check back later as new courses are added frequently."
        />
      </div>
    );
  }
  const totalClasses = courseData.modules.reduce(
    (acc: number, module: Module) => acc + module.classes.length,
    0
  );
  const totalTopics = courseData.modules.reduce(
    (acc: number, module: Module) => acc + module.topics.length,
    0
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              CPS Academy
            </Link>
            <nav className="flex items-center gap-6">
              <Link
                href="/courses"
                className="text-sm font-medium text-foreground"
              >
                Courses
              </Link>
              <Link
                href="/dashboard"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/profile"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Profile
              </Link>
              <Button variant="outline" size="sm" asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <div className="border-b border-border/40">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/courses">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Link>
          </Button>
        </div>
      </div>

      {/* Course Banner */}
      <section className="border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="aspect-[21/9] relative overflow-hidden rounded-lg my-6">
            <img
              src={createStrapiImageUrl(courseData.thumbnail.url)}
              alt={courseData.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Course Header */}
      <section className="border-b border-border/40 bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">
                {courseData.title}
              </h1>

              <p className="text-xl text-foreground font-medium text-pretty">
                {courseData.short_description}
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span>{courseData.modules.length} modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <PlayCircle className="h-4 w-4 text-muted-foreground" />
                  <span>{totalClasses} classes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{totalTopics} topics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Modules, Classes & Topics</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {courseData.modules.map((module: Module, index: number) => (
                      <AccordionItem
                        key={module.id}
                        value={`module-${module.id}`}
                      >
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-start gap-4 text-left">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-lg">
                                {module.title}
                              </div>
                              <div className="text-sm text-muted-foreground mt-1">
                                {module.description}
                              </div>
                              <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                                <span>{module.classes.length} classes</span>
                                <span>•</span>
                                <span>{module.topics.length} topics</span>
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="ml-12 space-y-6 pt-4">
                            {/* Classes */}
                            <div>
                              <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                                Classes
                              </h4>
                              <div className="space-y-2">
                                {module.classes.length === 0 ? (
                                  <p className="text-sm text-muted-foreground">
                                    No classes available for this module.
                                  </p>
                                ) : (
                                  module.classes.map((classItem) => (
                                    <Link
                                      key={classItem.id}
                                      href={`/learn/${courseData.id}/${classItem.id}`}
                                      className="flex items-start justify-between p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group"
                                    >
                                      <div className="flex items-start gap-3 flex-1">
                                        <PlayCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                        <div className="flex-1">
                                          <div className="font-medium mb-1">
                                            {classItem.title}
                                          </div>
                                          <div className="text-sm text-muted-foreground">
                                            {classItem.description}
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                  ))
                                )}
                              </div>
                            </div>

                            {/* Topics */}
                            {module.topics.length > 0 && (
                              <div>
                                <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                                  Topics & Resources
                                </h4>
                                <div className="grid gap-2">
                                  {module.topics.map((topic) => (
                                    <Link
                                      key={topic.id}
                                      href={topic.resourceUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-colors group"
                                    >
                                      <span className="text-sm font-medium">
                                        {topic.title}
                                      </span>
                                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
