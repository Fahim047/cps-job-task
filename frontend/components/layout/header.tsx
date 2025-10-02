"use client";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Code } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const HeaderLinks = [
  "Features",
  "Curriculum",
  "Team",
  "Reviews",
  "FAQ",
] as const;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
              <Code className="size-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">CPS Academy</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {HeaderLinks.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>CPS Academy</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8 px-4">
                {HeaderLinks.map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-3 mt-8 pt-8 border-t border-border px-4">
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
                <Button className="w-full">Sign Up</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
