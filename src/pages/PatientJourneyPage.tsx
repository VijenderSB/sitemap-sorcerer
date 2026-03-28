import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, UserCheck, ClipboardCheck, Stethoscope, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";

const steps = [
  { icon: UserCheck, title: "First Consultation", desc: "Meet Dr. Wadhawan for a thorough evaluation. Discuss your condition, medical history, and treatment options. All your questions will be answered." },
  { icon: ClipboardCheck, title: "Pre-Surgery Preparation", desc: "Complete pre-operative tests and assessments. Receive personalized dietary and lifestyle guidance. Learn about the surgery in detail." },
  { icon: Stethoscope, title: "Surgery Day", desc: "Arrive at the hospital as scheduled. The surgical team will guide you through the process. Most robotic procedures take 1–3 hours." },
  { icon: HeartPulse, title: "Recovery & Follow-up", desc: "Most patients go home within 24–48 hours. Follow-up visits ensure optimal recovery. Long-term support and monitoring provided." },
];

const PatientJourneyPage = () => (
  <div>
    <PageHero
      title="Your Patient Journey"
      subtitle="What to expect from your first consultation through surgery to full recovery."
      breadcrumb="Patient Resources > Patient Journey"
    />

    <section className="py-20">
      <div className="container max-w-3xl">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="relative z-10 rounded-xl bg-primary p-3 shrink-0 shadow-medical">
                  <step.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-secondary font-semibold uppercase tracking-wider mb-1">Step {i + 1}</p>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button asChild size="lg">
            <Link to="/book-appointment">Start Your Journey <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default PatientJourneyPage;
