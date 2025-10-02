"use client";

import {
  PlayCircle,
  BookOpen,
  Clock,
  Video,
  Users,
  Trophy,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const keyFeatures = [
  {
    icon: PlayCircle,
    title: "100+ Live Classes",
    description: "Interactive live sessions with expert instructors.",
  },
  {
    icon: BookOpen,
    title: "70+ Topics Covered",
    description: "A comprehensive curriculum from basics to advanced.",
  },
  {
    icon: Clock,
    title: "1 Year Class Access",
    description: "Revisit concepts anytime with long-term access.",
  },
  {
    icon: Video,
    title: "Class Recordings",
    description: "Never miss a lecture with provided video recordings.",
  },
  {
    icon: Users,
    title: "Past Batch Videos",
    description: "Access a rich library of content from previous cohorts.",
  },
  {
    icon: Trophy,
    title: "Marathon Contests",
    description: "Test your endurance with topic-specific long contests.",
  },
  {
    icon: TrendingUp,
    title: "Weekly Speed Contests",
    description: "Sharpen your speed and accuracy with regular contests.",
  },
  {
    icon: CheckCircle,
    title: "Structured Learning",
    description: "Follow a clear path designed for optimal skill growth.",
  },
];

export default function KeyFeatures() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete toolkit for your competitive programming journey.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="hover:shadow-lg transition-all border-border"
              >
                <CardHeader className="flex flex-col items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {feature.title}
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
