import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const hospitals = [
  "Apollo Hospitals",
  "Fortis Hospital",
  "Max Super Speciality Hospital",
  "Medanta — The Medicity",
];

const HospitalsSection = () => (
  <section className="py-16 border-t border-border">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Affiliations</span>
        <h2 className="text-2xl font-bold font-heading text-foreground mt-2">Hospital Affiliations</h2>
      </motion.div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {hospitals.map((h, i) => (
          <motion.div
            key={h}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-5"
          >
            <Building2 className="h-6 w-6 text-primary shrink-0" />
            <span className="font-heading font-medium text-foreground text-sm">{h}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HospitalsSection;
