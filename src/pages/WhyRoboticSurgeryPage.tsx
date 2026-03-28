import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, Clock, Minimize2, Target, HeartPulse, Zap } from "lucide-react";
import PageHero from "@/components/PageHero";

const reasons = [
  { icon: Target, title: "High Precision", desc: "Sub-millimeter accuracy with 3D HD visualization and 10x magnification for unmatched surgical precision." },
  { icon: Minimize2, title: "Small Incisions", desc: "Tiny 8–12mm incisions mean minimal scarring, better cosmetic results, and faster wound healing." },
  { icon: HeartPulse, title: "Less Pain", desc: "Smaller incisions and precise tissue handling lead to significantly less post-operative pain." },
  { icon: Clock, title: "Faster Recovery", desc: "Most patients return home within 24–48 hours and resume normal activities within 1–2 weeks." },
  { icon: Shield, title: "Fewer Complications", desc: "Reduced blood loss, lower infection rates, and fewer complications compared to open surgery." },
  { icon: Zap, title: "Superior Outcomes", desc: "Better surgical outcomes with lower recurrence rates and higher patient satisfaction." },
];

const WhyRoboticSurgeryPage = () => (
  <div>
    <PageHero
      title="Why Choose Robotic Surgery?"
      subtitle="Discover why robotic-assisted surgery is the gold standard in modern minimally invasive procedures."
      breadcrumb="Robotic Surgery > Why Robotic Surgery"
    />

    <section className="py-20">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-8 hover:shadow-medical-lg transition-shadow"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent p-3">
                <r.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
            Ready to Experience the Future of Surgery?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Schedule a consultation to discuss if robotic surgery is right for you.
          </p>
          <Button asChild size="lg">
            <Link to="/book-appointment">Book Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default WhyRoboticSurgeryPage;
