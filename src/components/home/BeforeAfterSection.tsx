import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

const BeforeAfterSection = () => (
  <section className="py-20 bg-muted/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Results</span>
        <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mt-2">Before & After</h2>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Real patient transformations showcasing surgical outcomes.</p>
      </motion.div>
      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card overflow-hidden"
          >
            <div className="grid grid-cols-2">
              <div className="aspect-square bg-muted flex items-center justify-center text-muted-foreground text-xs border-r border-border">Before</div>
              <div className="aspect-square bg-muted flex items-center justify-center text-muted-foreground text-xs">After</div>
            </div>
            <div className="p-3 text-center">
              <p className="text-xs text-muted-foreground">Patient {i} — Lost {30 + i * 10} kgs</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
