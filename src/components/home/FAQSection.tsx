import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is robotic surgery and how is it different from laparoscopic surgery?",
    a: "Robotic surgery uses a computer-controlled robotic system that gives the surgeon enhanced 3D vision, precision, and control. Unlike laparoscopic surgery, the robotic arms can rotate 360° and make sub-millimeter movements, allowing more delicate and precise operations.",
  },
  {
    q: "Is robotic surgery safe?",
    a: "Yes. Robotic surgery is extremely safe with FDA-approved systems used worldwide. It often results in fewer complications, less blood loss, and faster recovery compared to open and conventional laparoscopic surgery.",
  },
  {
    q: "How long is the recovery after robotic bariatric surgery?",
    a: "Most patients are discharged within 24–48 hours and can return to light activities within a week. Full recovery typically takes 2–4 weeks, which is significantly faster than open surgery.",
  },
  {
    q: "Am I a candidate for robotic surgery?",
    a: "Most patients who qualify for laparoscopic surgery are also candidates for robotic surgery. During your consultation, Dr. Wadhawan will assess your condition and recommend the best approach for your situation.",
  },
  {
    q: "What is the cost of robotic surgery in India?",
    a: "The cost varies depending on the procedure. We offer transparent pricing and can discuss insurance options during your consultation. Many insurance providers now cover robotic-assisted procedures.",
  },
];

const FAQSection = () => (
  <section className="py-24 bg-muted/50">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-secondary">FAQ</span>
        <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mt-2">
          Frequently Asked Questions
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="rounded-xl border border-border bg-card px-5"
          >
            <AccordionTrigger className="text-left font-heading font-medium text-foreground py-4 text-sm hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
