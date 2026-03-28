import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Clock, Minimize2, Target, HeartPulse, Zap } from "lucide-react";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const reasons = [
  { icon: Target, title: "High Precision", desc: "Sub-millimeter accuracy with 3D HD visualization and 10x magnification for unmatched surgical precision." },
  { icon: Minimize2, title: "Small Incisions", desc: "Tiny 8–12mm incisions mean minimal scarring, better cosmetic results, and faster wound healing." },
  { icon: HeartPulse, title: "Less Pain", desc: "Smaller incisions and precise tissue handling lead to significantly less post-operative pain." },
  { icon: Clock, title: "Faster Recovery", desc: "Most patients return home within 24–48 hours and resume normal activities within 1–2 weeks." },
  { icon: Shield, title: "Fewer Complications", desc: "Reduced blood loss, lower infection rates, and fewer complications compared to open surgery." },
  { icon: Zap, title: "Superior Outcomes", desc: "Better surgical outcomes with lower recurrence rates and higher patient satisfaction." },
];

const faqs = [
  { q: "What is robotic assisted surgery?", a: "Robotic assisted surgery is a minimally invasive technique where the surgeon operates using a robotic system that provides enhanced 3D vision, precision, and control through tiny incisions." },
  { q: "How does robotic surgery differ from laparoscopic surgery?", a: "Robotic surgery offers 360° wrist-like instrument movement, 3D HD visualization with 10x magnification, and tremor filtration — advantages not available in standard laparoscopic surgery." },
  { q: "Is robotic surgery safe?", a: "Yes. Robotic surgery is FDA-approved and used worldwide. It typically results in fewer complications, less blood loss, and faster recovery compared to open surgery." },
  { q: "What are the benefits of robotic surgery over open surgery?", a: "Robotic surgery offers smaller incisions, less pain, reduced blood loss, shorter hospital stays, faster recovery, and better cosmetic outcomes compared to open surgery." },
  { q: "How long does robotic surgery take?", a: "The duration depends on the procedure. Most robotic surgeries take 1–3 hours, similar to or slightly longer than laparoscopic surgery, but with superior precision." },
  { q: "What is the recovery time after robotic surgery?", a: "Most patients are discharged within 24–48 hours and return to normal activities within 1–2 weeks, significantly faster than open surgery recovery of 4–8 weeks." },
  { q: "Will there be scars after robotic surgery?", a: "Robotic surgery uses tiny 8–12mm incisions, resulting in minimal scarring that fades significantly over time compared to large open surgery scars." },
  { q: "Who is a candidate for robotic surgery?", a: "Most patients who qualify for laparoscopic surgery are candidates for robotic surgery. Dr. Wadhawan will assess your condition during consultation to recommend the best approach." },
  { q: "Does insurance cover robotic surgery?", a: "Many insurance providers now cover robotic-assisted procedures. Our team can help verify your coverage and assist with insurance claims during your consultation." },
  { q: "What procedures can be done with robotic surgery?", a: "Robotic surgery can be used for bariatric surgery, hernia repair, gallbladder removal, appendectomy, colon and rectal surgery, cancer surgery, and many other GI procedures." },
  { q: "Is robotic surgery more expensive than laparoscopic surgery?", a: "While the initial cost may be slightly higher, the reduced complications, shorter hospital stay, and faster return to work often make it more cost-effective overall." },
  { q: "How experienced is Dr. Wadhawan with robotic surgery?", a: "Dr. Randeep Wadhawan has 20+ years of surgical experience and has performed thousands of minimally invasive procedures including robotic GI and bariatric surgeries." },
];

const WhyRoboticSurgeryPage = () => (
  <div>
    <PageHero
      title="Why Choose Robotic Surgery?"
      subtitle="Discover why robotic-assisted surgery is the gold standard in modern minimally invasive procedures."
      breadcrumb="Robotic Surgery > Why Robotic Surgery"
    />

    <section className="py-20">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-8 hover:shadow-medical-lg transition-shadow"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent p-3">
                <r.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
            Ready to Experience the Future of Surgery?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Schedule a consultation to discuss if robotic surgery is right for you.
          </p>
          <Button asChild size="lg">
            <Link to="/book-appointment">Book Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* FAQ Section - 12 FAQs */}
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
            Frequently Asked Questions About Robotic Surgery
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
  </div>
);

export default WhyRoboticSurgeryPage;
