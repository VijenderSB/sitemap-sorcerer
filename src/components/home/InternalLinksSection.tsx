import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const links = [
  { label: "Robotic Bariatric Surgery in Delhi", href: "/robotic-bariatric-surgery" },
  { label: "Robotic GI Surgery in Delhi", href: "/robotic-gi-surgery" },
  { label: "Laparoscopic Surgery in Delhi", href: "/laparoscopic-surgery/bariatric" },
  { label: "Hernia Surgery in Delhi", href: "/hernia-surgery" },
  { label: "Bariatric Surgery in Delhi", href: "/bariatric-surgery" },
  { label: "Weight Loss Surgery in Delhi", href: "/obesity-management" },
  { label: "Metabolic Surgery for Diabetes in Delhi", href: "/metabolic-surgery" },
  { label: "Best Robotic Surgeon in Delhi", href: "/best/robotic-surgeon-delhi" },
  { label: "Gastric Bypass Surgery Delhi", href: "/robotic-bariatric-surgery/gastric-bypass" },
  { label: "Sleeve Gastrectomy Delhi", href: "/robotic-bariatric-surgery/sleeve-gastrectomy" },
  { label: "Gallbladder Surgery in Delhi", href: "/robotic-gi-surgery/gallbladder" },
  { label: "Colon Surgery in Delhi", href: "/robotic-gi-surgery/colon" },
];

const InternalLinksSection = () => (
  <section className="py-16 border-t border-border">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl font-bold font-heading text-foreground">
          Explore Our Surgical Specialities in Delhi
        </h2>
        <p className="text-muted-foreground mt-2 text-sm">
          Dr. Randeep Wadhawan offers a full spectrum of robotic and laparoscopic surgeries at Max Hospital, Dwarka, New Delhi.
        </p>
      </motion.div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {links.map((l) => (
          <Link
            key={l.href}
            to={l.href}
            className="group flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground hover:border-primary/40 hover:shadow-medical transition-all"
          >
            <ArrowRight className="h-3.5 w-3.5 text-primary shrink-0 group-hover:translate-x-0.5 transition-transform" />
            <span className="leading-tight">{l.label}</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default InternalLinksSection;
