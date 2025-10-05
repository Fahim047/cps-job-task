import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface FAQProps {
  faqs: {
    id: string | number;
    ques: string;
    ans: string;
  }[];
}

export default function FAQ({ faqs }: FAQProps) {
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
                {faq.ques}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.ans}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
