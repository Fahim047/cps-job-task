import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <Badge variant="outline" className="mb-6">
          🎯 Next Batch Starts November 15, 2025
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1] mb-6">
          The complete platform to master{" "}
          <span className="text-primary">competitive programming.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance">
          Go from beginner to expert with our structured curriculum, hands-on
          problem solving, and guidance from ICPC finalists and industry
          experts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-base">
            Enroll Now <ArrowRight className="ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base bg-transparent"
          >
            Download Syllabus
          </Button>
        </div>
      </div>
    </section>
  );
}
