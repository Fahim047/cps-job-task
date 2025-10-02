import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { GraduationCap } from "lucide-react";
const syllabus = [
  {
    title: "Module 1: Basic Programming and Problem-Solving",
    content:
      "Covers fundamentals of C++, basic syntax, I/O, loops, conditions, and solving your first set of programming problems.",
  },
  {
    title: "Module 2: C++ STL",
    content:
      "A deep dive into the Standard Template Library, including vectors, pairs, sets, maps, and other essential containers and algorithms.",
  },
  {
    title: "Module 3: Basic Algorithms and Data Structures",
    content:
      "Learn about sorting, searching, complexity analysis, and foundational data structures like stacks, queues, and linked lists.",
  },
  {
    title: "Module 4: Basic Graph Theory and Dynamic Programming",
    content:
      "Introduction to graph traversal algorithms (BFS, DFS) and the core concepts of dynamic programming to solve optimization problems.",
  },
  {
    title: "Module 5: Basic Number Theory",
    content:
      "Explore essential number theory concepts for competitive programming, such as primality testing, GCD, LCM, and modular arithmetic.",
  },
  {
    title: "Module 6: Intermediate Topics",
    content:
      "Tackle more complex subjects including advanced graph algorithms, DP on trees, and data structures like Segment Trees.",
  },
];
export default function CourseSyllabus() {
  return (
    <section id="curriculum" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Comprehensive curriculum
          </h2>
          <p className="text-lg text-muted-foreground">
            Our course covers everything from the ground up.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {syllabus.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-semibold">{item.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 pl-8">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
