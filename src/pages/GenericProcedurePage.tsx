import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  procedures: { name: string; description: string }[];
}

const GenericProcedurePage = ({ title, subtitle, procedures }: Props) => (
  <div>
    <section className="bg-gradient-hero py-20">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-5xl font-extrabold font-heading text-primary-foreground text-center"
        >
          {title}
        </motion.h1>
        <p className="text-primary-foreground/70 text-center mt-4 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>

    <section className="py-24">
      <div className="container max-w-4xl">
        <div className="grid gap-6">
          {procedures.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/contact">Book Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default GenericProcedurePage;
