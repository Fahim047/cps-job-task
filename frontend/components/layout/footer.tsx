import { Button } from "../ui/button";
import { Code, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  quickLinks: [
    {
      title: "Quick Links",
      links: [
        { title: "About", href: "#" },
        { title: "Curriculum", href: "#curriculum" },
        { title: "Instructors", href: "#team" },
        { title: "FAQ", href: "#faq" },
      ],
    },
  ],
  resources: [
    {
      title: "Resources",
      links: [
        { title: "Blog", href: "#" },
        { title: "Problem Sets", href: "#" },
        { title: "Contests", href: "#" },
        { title: "Contact", href: "#" },
      ],
    },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          <div className="col-span-2">
            <Link href="#" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">CPS Academy</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering the next generation of competitive programmers.
            </p>
          </div>
          {footerLinks.quickLinks.map((link) => (
            <div key={link.title}>
              <h3 className="font-semibold mb-4">{link.title}</h3>
              <ul className="space-y-3 text-sm">
                {link.links.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {footerLinks.resources.map((link) => (
            <div key={link.title}>
              <h3 className="font-semibold mb-4">{link.title}</h3>
              <ul className="space-y-3 text-sm">
                {link.links.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Github className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Twitter className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 CPS Academy. Developed by{" "}
            <Link
              href="https://github.com/Fahim047"
              className="text-primary hover:underline"
            >
              Fahimul Islam
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
