import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Years in Delhi" },
  { value: "60,000+", label: "Surgeries Performed" },
  { value: "98%", label: "Success Rate" },
  { value: "50+", label: "Awards & Honors" },
];

const StatsSection = () => (
  <section className="relative -mt-12 z-20">
    <div className="container">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 rounded-2xl bg-card shadow-medical-lg border border-border overflow-hidden">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center justify-center py-8 lg:py-10 border-b lg:border-b-0 lg:border-r last:border-r-0 border-border"
          >
            <span className="text-3xl lg:text-4xl font-extrabold font-heading text-primary">{stat.value}</span>
            <span className="text-sm text-muted-foreground mt-1">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
