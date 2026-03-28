import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Bot, Scissors, Stethoscope } from "lucide-react";
import roboticImg from "@/assets/robotic-surgery.jpg";

const comparisons = [
  { feature: "Precision", robotic: "Sub-millimeter", laparoscopic: "Good", open: "Limited" },
  { feature: "Incision Size", robotic: "8–12mm ports", laparoscopic: "5–12mm ports", open: "Large incision" },
  { feature: "Blood Loss", robotic: "Minimal", laparoscopic: "Low", open: "Higher" },
  { feature: "Recovery Time", robotic: "1–2 weeks", laparoscopic: "2–3 weeks", open: "4–8 weeks" },
  { feature: "Hospital Stay", robotic: "1–2 days", laparoscopic: "2–3 days", open: "5–7 days" },
  { feature: "Scarring", robotic: "Minimal", laparoscopic: "Small scars", open: "Significant" },
];

const RoboticSurgeryPage = () => (
  <div>
    <section className="bg-gradient-hero py-20">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-5xl font-extrabold font-heading text-primary-foreground text-center"
        >
          Robotic Surgery
        </motion.h1>
        <p className="text-primary-foreground/70 text-center mt-4 max-w-2xl mx-auto">
          The most advanced approach to minimally invasive surgery — precision, safety, and faster recovery.
        </p>
      </div>
    </section>

    <section className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold font-heading text-foreground mb-5">What is Robotic Surgery?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Robotic surgery is a type of minimally invasive surgery where the surgeon controls a sophisticated
              robotic system from a console. The robot's arms hold tiny instruments and a 3D high-definition camera,
              translating the surgeon's hand movements into precise micro-movements inside the body.
            </p>
            <h3 className="text-xl font-bold font-heading text-foreground mb-3">Key Benefits</h3>
            <ul className="space-y-2.5 mb-8">
              {[
                "Enhanced 3D visualization with 10x magnification",
                "360° wrist-like movement of instruments",
                "Tremor filtration for steady precision",
                "Smaller incisions with faster healing",
                "Reduced risk of infection and complications",
                "Shorter hospital stays",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" /> {b}
                </li>
              ))}
            </ul>
            <Button asChild>
              <Link to="/contact">Book Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
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

    <section className="py-24 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold font-heading text-foreground text-center mb-10">
          Robotic vs Laparoscopic vs Open Surgery
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
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
                <tr key={row.feature} className="border-b border-border">
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
  </div>
);

export default RoboticSurgeryPage;
