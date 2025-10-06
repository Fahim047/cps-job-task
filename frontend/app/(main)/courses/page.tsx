import { BookOpen } from "lucide-react";
import { EmptyState } from "@/components/shared/empty-state";
import { ErrorState } from "@/components/shared/error-state";
import { PublicCourseCard } from "@/components/courses/public-course-card";
import { fetchStrapiData } from "@/lib/utils";
import { coursesQuery } from "@/data/strapi-query/query";
import { tryCatch } from "@/lib/try-catch";

export default async function PublicCoursesPage() {
  const { data: courses, error } = await tryCatch(
    fetchStrapiData("api/courses", coursesQuery)
  );
  console.log(courses);
  if (error) {
    return (
      <div className="min-h-screen mt-24">
        <ErrorState message="We could not load the courses. Please try again later." />
      </div>
    );
  }

  if (!courses || courses.length === 0) {
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

  return (
    <div className="min-h-screen mt-24 max-w-7xl mx-auto">
      <div className="flex flex-col space-y-2 mb-10">
        <h1 className="text-2xl font-bold">Explore Courses</h1>
        <p className="text-muted-foreground max-w-2xl">
          Browse through our selection of courses and start learning today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course: any) => (
          <PublicCourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            shortDescription={course.short_description}
            thumbnailUrl={course.thumbnailUrl}
          />
        ))}
      </div>
    </div>
  );
}
