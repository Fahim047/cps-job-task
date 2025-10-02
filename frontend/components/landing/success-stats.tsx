import { BarChart, Briefcase, Star, Trophy } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const successStats = [
  { value: 106, label: "Codeforces Pupil", icon: <BarChart /> },
  { value: 29, label: "Codeforces Specialist", icon: <Trophy /> },
  { value: 4, label: "Codeforces Expert", icon: <Star /> },
  { value: 15, label: "Placed in BD Big Tech", icon: <Briefcase /> },
];
export default function SuccessStats() {
  return (
    <section id="stats" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Proven student success
          </h2>
          <p className="text-lg text-muted-foreground">
            Our students achieve remarkable results and land jobs at top
            companies.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {successStats.map((stat) => (
            <Card key={stat.label} className="border-border bg-card">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
