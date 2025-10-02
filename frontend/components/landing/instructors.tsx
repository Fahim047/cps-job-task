"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const instructors = [
  {
    name: "Shahriar Manzoor",
    title: "Lead Instructor, ICPC World Finals Judge",
    bio: "Expert in algorithms and problem-setting with 15+ years of coaching experience.",
    image: "https://placehold.co/100x100/1a1a1a/60a5fa?text=SM",
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Jane Alam Jan",
    title: "Algorithms Specialist, Ex-Google",
    bio: "Specializes in advanced data structures and preparing students for FAANG interviews.",
    image: "https://placehold.co/100x100/1a1a1a/60a5fa?text=JA",
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
  {
    name: "Anisul Islam",
    title: "Codeforces Grandmaster",
    bio: "Focuses on competitive programming mindset, speed, and advanced contest strategies.",
    image: "https://placehold.co/100x100/1a1a1a/60a5fa?text=AI",
    socials: { linkedin: "#", github: "#", twitter: "#" },
  },
];

export default function Instructors() {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet your instructors
          </h2>
          <p className="text-lg text-muted-foreground">
            Learn from the best in the field.
          </p>
        </div>

        {/* Instructor Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <Card
              key={instructor.name}
              className="text-center border-border bg-card hover:border-primary/50 transition-all"
            >
              <CardHeader className="flex flex-col items-center pb-4">
                {/* Avatar Centered */}
                <Avatar className="w-24 h-24 mb-4 mx-auto">
                  <AvatarImage
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                  />
                  <AvatarFallback>
                    {instructor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                {/* Name & Title */}
                <CardTitle className="text-xl">{instructor.name}</CardTitle>
                <CardDescription className="text-center">
                  {instructor.title}
                </CardDescription>
              </CardHeader>

              {/* Bio */}
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {instructor.bio}
                </p>
              </CardContent>

              {/* Social Links */}
              <CardFooter className="justify-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                  <Link href={instructor.socials.linkedin}>
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href={instructor.socials.github}>
                    <Github className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href={instructor.socials.twitter}>
                    <Twitter className="w-5 h-5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
