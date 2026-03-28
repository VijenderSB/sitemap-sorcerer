import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Apple, Pill, Bot, Scissors } from "lucide-react";

const steps = [
  { icon: Apple, title: "Diet & Lifestyle", desc: "Personalized nutrition, fitness routines & behavioral coaching for sustainable change." },
  { icon: Pill, title: "Pharmacotherapy", desc: "FDA-approved medications like GLP-1 agonists, supervised by obesity medicine specialists." },
  { icon: Bot, title: "Endoscopic Procedures", desc: "Non-surgical options like intragastric balloon & endoscopic sleeve gastroplasty." },
  { icon: Scissors, title: "Bariatric Surgery", desc: "Sleeve gastrectomy, gastric bypass & revision surgeries with robotic precision." },
];

const ObesityManagementSection = () => (
  <section className="py-24 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Centre for Excellence</span>
        <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mt-2">
          Obesity Management — 360° Care
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
          A comprehensive, compassionate approach combining medical science, technology & emotional support for lasting weight loss.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 text-center"
          >
            <div className="mb-4 mx-auto inline-flex rounded-xl bg-accent p-3">
              <s.icon className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/obesity-management"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
        >
          Explore the Centre <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default ObesityManagementSection;
