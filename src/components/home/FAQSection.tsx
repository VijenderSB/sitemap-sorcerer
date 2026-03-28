import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  // Robotic Surgery – General
  {
    q: "What is robotic-assisted surgery and how does it work?",
    a: "Robotic-assisted surgery, available at Max Hospital Dwarka, Delhi, uses a state-of-the-art robotic system (like the da Vinci Xi) controlled by the surgeon. It offers 3D HD visualization, 360° instrument rotation, and sub-millimeter precision — enabling complex procedures through tiny incisions with greater accuracy than the human hand alone.",
  },
  {
    q: "Is robotic surgery safe?",
    a: "Yes. Robotic surgery is FDA-approved and used globally with an excellent safety profile. Studies consistently show fewer complications, less blood loss, reduced infection risk, and faster recovery compared to open and conventional laparoscopic surgery.",
  },
  {
    q: "What are the advantages of robotic surgery over traditional laparoscopic surgery?",
    a: "Robotic surgery provides enhanced 3D visualization, tremor-free precision, greater range of instrument motion (360° wrist-like movement), and ergonomic control for the surgeon — translating to smaller incisions, less pain, fewer complications, and faster recovery for patients.",
  },
  {
    q: "Does the robot perform the surgery on its own?",
    a: "No. The robot never acts independently. Dr. Wadhawan controls every movement of the robotic arms from a console in the operating room. The system enhances the surgeon's capabilities but does not make autonomous decisions.",
  },
  // Robotic Bariatric Surgery
  {
    q: "What robotic bariatric (weight loss) surgeries does Dr. Wadhawan perform?",
    a: "Dr. Wadhawan performs robotic sleeve gastrectomy, robotic gastric bypass (Roux-en-Y), robotic mini gastric bypass, robotic metabolic surgery for diabetes, and robotic revision bariatric surgery for patients who need correction of a previous procedure.",
  },
  {
    q: "Who is eligible for robotic bariatric surgery?",
    a: "Generally, patients with a BMI ≥ 40, or BMI ≥ 35 with obesity-related conditions (diabetes, hypertension, sleep apnea), who have not achieved lasting weight loss through diet and exercise. Dr. Wadhawan evaluates each patient individually during consultation.",
  },
  {
    q: "How much weight can I expect to lose after robotic bariatric surgery?",
    a: "Most patients lose 60–80% of their excess weight within 12–18 months. Robotic sleeve gastrectomy typically achieves 60–70% excess weight loss, while robotic gastric bypass can achieve 70–80%, with additional improvement in diabetes and metabolic conditions.",
  },
  {
    q: "What is the recovery time after robotic bariatric surgery?",
    a: "Most patients are discharged within 24–48 hours and can return to light activities within a week. Full recovery typically takes 2–4 weeks — significantly faster than open surgery. Many patients return to work within 7–10 days.",
  },
  {
    q: "Can robotic surgery help with diabetes and metabolic conditions?",
    a: "Yes. Robotic metabolic surgery has shown up to 80% remission of type 2 diabetes. It also significantly improves hypertension, high cholesterol, metabolic syndrome, and sleep apnea, often reducing or eliminating the need for medications.",
  },
  {
    q: "What is robotic revision bariatric surgery?",
    a: "Revision surgery corrects or converts a previous bariatric procedure — due to weight regain, complications, or inadequate results. The robotic system is especially valuable here as it provides superior visualization of altered anatomy and scar tissue, enabling safer revision.",
  },
  // Robotic GI Surgery
  {
    q: "What robotic GI (gastrointestinal) surgeries are offered?",
    a: "Dr. Wadhawan performs robotic hernia repair (inguinal, incisional, hiatus, complex), robotic gallbladder surgery, robotic appendectomy, robotic colon and rectal surgery, robotic GI cancer surgery, and advanced procedures like robotic liver, pancreatic, and achalasia surgery.",
  },
  {
    q: "How does robotic surgery benefit hernia repair?",
    a: "Robotic hernia surgery allows precise mesh placement with 3D visualization, reducing recurrence rates. It's especially advantageous for complex, recurrent, or multi-defect hernias where the precision of robotic instruments enables stronger and more accurate repairs.",
  },
  {
    q: "Is robotic surgery suitable for GI cancer treatment?",
    a: "Yes. Robotic-assisted surgery provides precise tumor removal with clear margins, thorough lymph node dissection, and preservation of surrounding healthy tissue. This translates to better oncological outcomes for stomach, colon, rectal, and esophageal cancers with faster recovery.",
  },
  {
    q: "What are the benefits of robotic surgery for rectal conditions?",
    a: "The pelvis is a narrow, confined space. Robotic arms can navigate it with 360° movement, enabling precise dissection around critical nerves and structures. This results in better nerve preservation, lower positive margin rates, and superior functional outcomes.",
  },
  // Laparoscopic Surgery
  {
    q: "What is laparoscopic surgery and when is it recommended?",
    a: "Laparoscopic (keyhole) surgery uses small incisions and a camera to perform procedures. It's a proven, cost-effective minimally invasive approach for bariatric, hernia, gallbladder, appendix, and colorectal surgeries with faster recovery than open surgery.",
  },
  {
    q: "How do I choose between robotic and laparoscopic surgery?",
    a: "Both are minimally invasive. Robotic surgery offers greater precision for complex cases, while laparoscopic surgery is excellent for straightforward procedures. Dr. Wadhawan recommends the best approach based on your specific condition, anatomy, and goals during consultation.",
  },
  // Practical & Cost
  {
    q: "How long does a robotic surgery procedure take?",
    a: "Most robotic procedures take 1–3 hours depending on complexity. Robotic sleeve gastrectomy typically takes about 60–90 minutes, while complex procedures like robotic gastric bypass or cancer surgeries may take 2–4 hours.",
  },
  {
    q: "Will there be visible scars after robotic surgery?",
    a: "Robotic surgery uses 4–5 incisions of just 8–12 mm each. These heal into tiny, barely visible marks. The cosmetic outcome is significantly better than open surgery and often better than standard laparoscopic approaches.",
  },
  {
    q: "Is robotic surgery covered by insurance in India?",
    a: "Many insurance providers now cover robotic-assisted procedures. Our team assists with insurance pre-authorization and provides transparent cost breakdowns. Contact us to verify coverage with your specific insurance plan.",
  },
  {
    q: "How do I book a consultation with Dr. Randeep Wadhawan?",
    a: "You can book a consultation through our online appointment form, call us at +91 7042373880, or message on WhatsApp. We offer in-person consultations at Max Super Speciality Hospital, Dwarka, New Delhi, and virtual consultations for outstation patients across India.",
  },
  {
    q: "Why choose Dr. Randeep Wadhawan for robotic surgery in Delhi?",
    a: "Dr. Wadhawan is Delhi's most experienced robotic surgeon with 60,000+ successful procedures, 20+ years of expertise, and 50+ national and international awards. He operates at Max Super Speciality Hospital, Dwarka — a NABH-accredited and OSSI Centre of Excellence for Bariatric Surgery. Patients from across Delhi NCR, India, and internationally choose him for his precision and outcomes.",
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
          Frequently Asked Questions About Robotic Surgery in Delhi
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
