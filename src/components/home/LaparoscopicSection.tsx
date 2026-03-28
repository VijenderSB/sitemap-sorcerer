import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Scissors, ArrowRight } from "lucide-react";

const LaparoscopicSection = () => (
  <section className="py-20 border-t border-border">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex rounded-xl bg-accent p-3 mb-4">
            <Scissors className="h-6 w-6 text-accent-foreground" />
          </div>
          <span className="block text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Also Available</span>
          <h2 className="text-3xl font-bold font-heading text-foreground mb-4">Advanced Laparoscopic Surgery</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            When robotic surgery isn't necessary, Dr. Wadhawan offers advanced laparoscopic techniques
            as an effective minimally invasive alternative. With the same commitment to precision and
            patient outcomes, laparoscopic surgery provides excellent results for many conditions.
          </p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {["Bariatric Surgery", "Hernia Repair", "Gallbladder Surgery", "Appendectomy"].map((p) => (
              <div key={p} className="rounded-lg bg-muted p-3 text-sm font-medium text-foreground text-center">{p}</div>
            ))}
          </div>
          <Button asChild variant="outline">
            <Link to="/laparoscopic-surgery">Explore Laparoscopic Surgery <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-muted p-8"
        >
          <h3 className="font-heading font-bold text-foreground mb-4">Robotic vs Laparoscopic — Quick Comparison</h3>
          <div className="space-y-3">
            {[
              { label: "Precision", robotic: "Sub-millimeter", lap: "Good" },
              { label: "Recovery", robotic: "1–2 weeks", lap: "2–3 weeks" },
              { label: "Scarring", robotic: "Minimal", lap: "Small" },
              { label: "Hospital Stay", robotic: "1–2 days", lap: "2–3 days" },
            ].map((row) => (
              <div key={row.label} className="flex justify-between text-sm py-2 border-b border-border last:border-0">
                <span className="font-medium text-foreground">{row.label}</span>
                <div className="flex gap-8">
                  <span className="text-primary font-medium">{row.robotic}</span>
                  <span className="text-muted-foreground">{row.lap}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LaparoscopicSection;
