import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Bot, Scissors, Stethoscope } from "lucide-react";
import roboticImg from "@/assets/robotic-surgery.jpg";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";

const comparisons = [
  { feature: "Precision", robotic: "Sub-millimeter", laparoscopic: "Good", open: "Limited" },
  { feature: "Incision Size", robotic: "8–12mm ports", laparoscopic: "5–12mm ports", open: "Large incision" },
  { feature: "Blood Loss", robotic: "Minimal", laparoscopic: "Low", open: "Higher" },
  { feature: "Recovery Time", robotic: "1–2 weeks", laparoscopic: "2–3 weeks", open: "4–8 weeks" },
  { feature: "Hospital Stay", robotic: "1–2 days", laparoscopic: "2–3 days", open: "5–7 days" },
  { feature: "Scarring", robotic: "Minimal", laparoscopic: "Small scars", open: "Significant" },
  { feature: "3D Vision", robotic: "Yes — HD", laparoscopic: "2D standard", open: "Direct" },
  { feature: "Wrist Movement", robotic: "360° rotation", laparoscopic: "Limited", open: "Full" },
];

const candidates = [
  "Patients requiring GI surgery (hernia, gallbladder, colon, rectal, cancer)",
  "Obese patients eligible for bariatric/weight loss surgery",
  "Patients with complex abdominal conditions",
  "Patients who have had previous abdominal surgeries",
  "Patients seeking faster recovery with minimal scarring",
  "Cases requiring high-precision surgery in tight spaces",
];

const RoboticSurgeryPage = () => (
  <div>
    <SEOHead
      title="Best Robotic Surgery in Delhi | Da Vinci Robot | Dr. Randeep Wadhawan"
      description="Best robotic surgery in Delhi by Dr. Randeep Wadhawan at Max Hospital Dwarka. Da Vinci robotic system for GI, bariatric, hernia surgery. Book consultation."
    />
    <PageHero
      title="Robotic Assisted Surgery in Delhi"
      subtitle="Delhi's most advanced robotic surgery — precision, safety, and faster recovery at Max Hospital, Dwarka."
    />

    {/* What is Robotic Surgery */}
    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold font-heading text-foreground mb-5">What is Robotic Surgery?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Robotic surgery is a type of minimally invasive surgery where the surgeon controls a sophisticated
              robotic system from a console. The robot's arms hold tiny instruments and a 3D high-definition camera,
              translating the surgeon's hand movements into precise micro-movements inside the body.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Unlike traditional surgery, the robotic system provides enhanced dexterity, tremor filtration,
              and 10x magnification — enabling procedures that were previously impossible through small incisions.
            </p>
            <h3 className="text-xl font-bold font-heading text-foreground mb-3">Benefits of Robotic Surgery</h3>
            <ul className="space-y-2.5 mb-8">
              {[
                "Enhanced 3D visualization with 10x magnification",
                "360° wrist-like movement of instruments",
                "Tremor filtration for steady precision",
                "Smaller incisions with faster healing",
                "Reduced risk of infection and complications",
                "Shorter hospital stays",
                "Less post-operative pain and scarring",
                "Faster return to normal activities",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" /> {b}
                </li>
              ))}
            </ul>
            <Button asChild>
              <Link to="/book-appointment">Book Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <img
            src={roboticImg}
            alt="Robotic surgery system"
            className="rounded-2xl shadow-medical-lg"
            loading="lazy"
            width={1280}
            height={864}
          />
        </div>
      </div>
    </section>

    {/* Comparison Table */}
    <section className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold font-heading text-foreground text-center mb-4">
          Robotic vs Laparoscopic vs Open Surgery
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          See how robotic surgery compares with traditional approaches across key parameters.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse bg-card rounded-xl overflow-hidden shadow-medical">
            <thead>
              <tr>
                <th className="text-left p-4 font-heading font-semibold text-foreground border-b border-border">Feature</th>
                <th className="p-4 font-heading font-semibold text-primary border-b border-border bg-accent/50">
                  <div className="flex items-center gap-2 justify-center"><Bot className="h-4 w-4" /> Robotic</div>
                </th>
                <th className="p-4 font-heading font-semibold text-foreground border-b border-border">
                  <div className="flex items-center gap-2 justify-center"><Scissors className="h-4 w-4" /> Laparoscopic</div>
                </th>
                <th className="p-4 font-heading font-semibold text-foreground border-b border-border">
                  <div className="flex items-center gap-2 justify-center"><Stethoscope className="h-4 w-4" /> Open</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row) => (
                <tr key={row.feature} className="border-b border-border last:border-0">
                  <td className="p-4 font-medium text-foreground">{row.feature}</td>
                  <td className="p-4 text-center text-primary font-medium bg-accent/30">{row.robotic}</td>
                  <td className="p-4 text-center text-muted-foreground">{row.laparoscopic}</td>
                  <td className="p-4 text-center text-muted-foreground">{row.open}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {/* Who is a Candidate */}
    <section className="py-20">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold font-heading text-foreground mb-6">Who is a Candidate for Robotic Surgery?</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Robotic surgery is suitable for a wide range of patients and conditions. During your consultation,
          Dr. Wadhawan will assess your condition and recommend the most appropriate surgical approach.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {candidates.map((c) => (
            <div key={c} className="flex items-start gap-2.5 text-sm text-foreground">
              <div className="rounded-full bg-secondary/10 p-1 mt-0.5 shrink-0">
                <Check className="h-3.5 w-3.5 text-secondary" />
              </div>
              {c}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <Link to="/book-appointment">Check Your Eligibility <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default RoboticSurgeryPage;
