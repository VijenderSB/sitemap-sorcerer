import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Robotic Surgery",
    faqs: [
      { q: "What is robotic surgery?", a: "Robotic surgery uses a computer-controlled robotic system operated by the surgeon from a console. The robot's arms hold tiny instruments and a 3D HD camera, providing enhanced precision and control." },
      { q: "Is robotic surgery safe?", a: "Yes. Robotic surgery is FDA-approved and used worldwide. Studies show it often results in fewer complications, less blood loss, and faster recovery than conventional surgery." },
      { q: "How long does robotic surgery take?", a: "Most robotic procedures take 1–3 hours, depending on the complexity. You'll be under general anesthesia throughout." },
      { q: "Will there be scars?", a: "Robotic surgery uses tiny 8–12mm incisions, resulting in minimal scarring that fades significantly over time." },
    ],
  },
  {
    title: "Bariatric Surgery",
    faqs: [
      { q: "Who qualifies for bariatric surgery?", a: "Generally, patients with BMI ≥ 35 with comorbidities (diabetes, hypertension, sleep apnea) or BMI ≥ 40. Individual assessment determines candidacy." },
      { q: "How much weight will I lose?", a: "Most patients lose 60–80% of their excess weight within 12–18 months after surgery, with proper diet and lifestyle adherence." },
      { q: "Is the weight loss permanent?", a: "With proper lifestyle changes and follow-up care, the majority of patients maintain significant weight loss long-term." },
      { q: "What is the recovery time after bariatric surgery?", a: "Most patients go home within 24–48 hours and return to work within 1–2 weeks. Full recovery takes about 4–6 weeks." },
    ],
  },
  {
    title: "General Questions",
    faqs: [
      { q: "Does insurance cover these surgeries?", a: "Many insurance providers now cover bariatric and robotic surgeries. Our team can help verify your coverage and assist with claims." },
      { q: "How do I book a consultation?", a: "You can book online through our website, call us at +91 99999 99999, or reach us on WhatsApp for quick scheduling." },
      { q: "What should I bring to my first consultation?", a: "Bring your medical records, current medications list, previous test reports, and any insurance documents." },
      { q: "Do you offer second opinions?", a: "Yes, Dr. Wadhawan provides second opinions for patients who have been advised surgery elsewhere and want expert guidance." },
    ],
  },
];

const FAQsPage = () => (
  <div>
    <PageHero
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about robotic surgery, bariatric procedures, and patient care."
      breadcrumb="Patient Resources > FAQs"
    />

    <section className="py-20">
      <div className="container max-w-3xl">
        {faqCategories.map((cat) => (
          <div key={cat.title} className="mb-10">
            <h2 className="text-xl font-bold font-heading text-foreground mb-4">{cat.title}</h2>
            <Accordion type="single" collapsible className="space-y-2">
              {cat.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`${cat.title}-${i}`}
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
        ))}
      </div>
    </section>
  </div>
);

export default FAQsPage;
