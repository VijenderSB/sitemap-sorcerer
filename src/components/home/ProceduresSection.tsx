import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Scissors, Weight, Activity } from "lucide-react";

const procedures = [
  {
    icon: Bot,
    title: "Robotic Bariatric Surgery",
    desc: "Sleeve gastrectomy, gastric bypass & revision surgeries with robotic precision.",
    href: "/robotic-bariatric-surgery",
  },
  {
    icon: Activity,
    title: "Robotic GI Surgery",
    desc: "Hernia, gallbladder, colon, rectal & cancer surgeries using robotic assistance.",
    href: "/robotic-gi-surgery",
  },
  {
    icon: Scissors,
    title: "Laparoscopic Surgery",
    desc: "Advanced laparoscopic bariatric, hernia, gallbladder & appendix procedures.",
    href: "/laparoscopic-surgery",
  },
  {
    icon: Weight,
    title: "Bariatric / Weight Loss",
    desc: "Comprehensive weight loss solutions including BMI assessment & surgery options.",
    href: "/bariatric-surgery",
  },
];

const ProceduresSection = () => (
  <section className="py-24 bg-muted/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Procedures</span>
        <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mt-2">
          Surgical Specialties
        </h2>
        <p className="mt-3 max-w-xl mx-auto text-muted-foreground">
          Advanced robotic and laparoscopic procedures tailored to your needs.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {procedures.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to={p.href}
              className="group block h-full rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-medical-lg hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent p-3">
                <p.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
              <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all gap-1">
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProceduresSection;
