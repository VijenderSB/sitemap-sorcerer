import { motion } from "framer-motion";
import { Award, Medal, Trophy } from "lucide-react";

const credentials = [
  { icon: Trophy, title: "Best Robotic Surgeon Award", org: "National Medical Conference 2023" },
  { icon: Award, title: "Excellence in Bariatric Surgery", org: "Indian Association of Surgeons" },
  { icon: Medal, title: "International Fellowship", org: "Minimally Invasive Surgery" },
  { icon: Trophy, title: "Top Doctor Award", org: "Times Health Awards 2022" },
];

const AwardsSection = () => (
  <section className="py-20 border-t border-border">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Recognition</span>
        <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mt-2">Awards & Credentials</h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {credentials.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 text-center"
          >
            <div className="inline-flex rounded-xl bg-accent p-3 mb-3">
              <c.icon className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{c.title}</h3>
            <p className="text-xs text-muted-foreground">{c.org}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AwardsSection;
