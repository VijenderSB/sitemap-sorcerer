import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import roboticImg from "@/assets/robotic-surgery.jpg";

const benefits = [
  "Sub-millimeter precision with 3D visualization",
  "Smaller incisions & minimal scarring",
  "Reduced blood loss & lower infection risk",
  "Faster recovery — return home sooner",
  "Less post-operative pain",
  "Surgeon-controlled robotic arms for steady movements",
];

const RoboticHighlight = () => (
  <section className="py-24">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Why Choose</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mt-2 mb-5">
            Robotic Surgery — The Future of Precision Care
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Robotic-assisted surgery represents the pinnacle of modern surgical technology. Using
            state-of-the-art robotic systems, Dr. Wadhawan delivers unparalleled surgical precision
            with outcomes that surpass traditional approaches.
          </p>

          <ul className="space-y-3 mb-8">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                <div className="rounded-full bg-secondary/10 p-1 mt-0.5">
                  <Check className="h-3.5 w-3.5 text-secondary" />
                </div>
                {b}
              </li>
            ))}
          </ul>

          <Button asChild>
            <Link to="/robotic-surgery">
              Learn About Robotic Surgery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={roboticImg}
            alt="Robotic surgery equipment"
            className="rounded-2xl shadow-medical-lg w-full"
            loading="lazy"
            width={1280}
            height={864}
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default RoboticHighlight;
