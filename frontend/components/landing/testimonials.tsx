"use client";

import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Rafiul Islam",
    role: "ICPC World Finalist 2024",
    quote:
      "CPS Academy's structured approach was instrumental in my journey to the ICPC World Finals. The mentorship and community are unparalleled.",
    avatar: "https://placehold.co/40x40/1a1a1a/60a5fa?text=RI",
  },
  {
    name: "Tasnim Ahmed",
    role: "Google SWE Intern",
    quote:
      "The problem-solving skills I honed here were directly applicable to my Google interviews. This was the best investment I made in my career.",
    avatar: "https://placehold.co/40x40/1a1a1a/60a5fa?text=TA",
  },
  {
    name: "Sakib Rahman",
    role: "Codeforces Expert",
    quote:
      "From a newbie to a Codeforces Expert in just 6 months! The quality of problems made all the difference. Highly recommended!",
    avatar: "https://placehold.co/40x40/1a1a1a/60a5fa?text=SR",
  },
];

export default function Testimonials() {
  const autoplayPlugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    })
  );

  return (
    <section
      id="reviews"
      className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Student success stories
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we've helped students achieve their goals.
          </p>
        </div>
        <Carousel
          plugins={[autoplayPlugin.current]}
          className="w-full"
          onMouseEnter={() => autoplayPlugin.current.stop()}
          onMouseLeave={() => autoplayPlugin.current.play()}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="border-border bg-card">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex gap-1 text-primary mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <div className="text-6xl text-primary/20 mb-4 leading-none">
                      "
                    </div>
                    <blockquote className="text-xl md:text-2xl mb-8 leading-relaxed -mt-8">
                      {testimonial.quote}
                    </blockquote>
                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                      <Avatar className="w-14 h-14">
                        <AvatarImage
                          src={testimonial.avatar || "/placeholder.svg"}
                        />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-lg">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
