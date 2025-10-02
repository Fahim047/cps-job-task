import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
const faqs = [
  {
    q: "What are the prerequisites for the course?",
    a: "Basic programming knowledge in C++ or Java is recommended. This course is designed to build upon foundational skills.",
  },
  {
    q: "Are the classes live or recorded?",
    a: "Classes are conducted live for interactive learning, but all sessions are recorded and available on the platform within 24 hours.",
  },
  {
    q: "What is the course schedule?",
    a: "The course runs for 20 weeks with 2-3 classes per week. A new cohort starts every 2 months.",
  },
  {
    q: "Do you provide certificates?",
    a: "Yes! Students who complete the course with 80% attendance and pass the final assessment receive a certificate of completion.",
  },
  {
    q: "What is the pricing?",
    a: "The course fee is BDT 5,000. Early bird discounts are available for the first 50 enrollments in each cohort.",
  },
];
export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our program.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6 font-semibold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
