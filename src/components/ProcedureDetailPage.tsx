import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, Shield, Activity, Heart, Stethoscope, Zap } from "lucide-react";
import PageHero from "@/components/PageHero";
import InlineAppointmentForm from "@/components/InlineAppointmentForm";

interface Procedure {
  name: string;
  description: string;
  href?: string;
}

interface ContentSection {
  title: string;
  content?: string;
  bullets?: string[];
  icon?: "clock" | "shield" | "activity" | "heart" | "stethoscope" | "zap";
}

interface ProcedureDetailPageProps {
  title: string;
  subtitle: string;
  breadcrumb?: string;
  overview?: string;
  procedures: Procedure[];
  benefits?: string[];
  ctaText?: string;
  sections?: ContentSection[];
  imageSrc?: string;
  imageAlt?: string;
}

const iconMap = {
  clock: Clock,
  shield: Shield,
  activity: Activity,
  heart: Heart,
  stethoscope: Stethoscope,
  zap: Zap,
};

const ProcedureDetailPage = ({
  title,
  subtitle,
  breadcrumb,
  overview,
  procedures,
  benefits,
  ctaText = "Book Consultation",
  sections,
  imageSrc,
  imageAlt,
}: ProcedureDetailPageProps) => (
  <div>
    <PageHero title={title} subtitle={subtitle} breadcrumb={breadcrumb} />

    {/* Overview with optional image */}
    {(overview || imageSrc) && (
      <section className="py-14">
        <div className="container max-w-6xl">
          <div className={`${imageSrc ? "grid lg:grid-cols-2 gap-10 items-center" : ""}`}>
            {overview && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-muted-foreground leading-relaxed text-lg">{overview}</p>
              </motion.div>
            )}
            {imageSrc && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <img
                  src={imageSrc}
                  alt={imageAlt || title}
                  className="rounded-2xl shadow-medical-lg w-full object-contain aspect-[4/3] bg-black/5"
                  loading="lazy"
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>
    )}

    {/* Visual content sections — cards with bullets */}
    {sections && sections.length > 0 && (
      <section className="py-12 bg-muted/30">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s, i) => {
              const Icon = s.icon ? iconMap[s.icon] : Stethoscope;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-card p-6 hover:shadow-medical transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-xl bg-primary/10 p-2.5">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-foreground">{s.title}</h3>
                  </div>
                  {s.content && (
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.content}</p>
                  )}
                  {s.bullets && s.bullets.length > 0 && (
                    <ul className="space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                          <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    )}

    {/* Benefits */}
    {benefits && benefits.length > 0 && (
      <section className="py-14">
        <div className="container max-w-6xl">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-8 text-center">Why Patients Choose This Procedure</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-start gap-3 rounded-xl bg-secondary/5 border border-secondary/10 p-4"
              >
                <div className="rounded-full bg-secondary/15 p-1 mt-0.5 shrink-0">
                  <Check className="h-3.5 w-3.5 text-secondary" />
                </div>
                <span className="text-sm font-medium text-foreground">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )}

    {/* Sub-procedures list */}
    {procedures.length > 0 && (
      <section className="py-14 bg-muted/30">
        <div className="container max-w-6xl">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-8">
            {procedures.length === 1 ? "Overview" : "Procedures & Services"}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {procedures.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-border bg-card p-6 hover:shadow-medical transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{p.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  </div>
                  {p.href && (
                    <Link to={p.href} className="text-primary hover:text-primary/80 shrink-0 mt-1">
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )}

    {/* Inline Appointment Form */}
    <section className="py-14 bg-muted/30">
      <div className="container max-w-4xl">
        <InlineAppointmentForm
          heading="Book Your Consultation"
          subheading="Discuss your treatment options with Dr. Randeep Wadhawan. Fill in your details below."
        />
      </div>
    </section>

    {/* CTA */}
    <section className="py-14">
      <div className="container max-w-4xl text-center">
        <h2 className="text-2xl font-bold font-heading text-foreground mb-3">Ready to Take the Next Step?</h2>
        <p className="text-muted-foreground mb-6">Book a consultation with Dr. Randeep Wadhawan to discuss your treatment options.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" onClick={() => { import("@/components/LeadCapturePopup").then(m => m.openLeadPopup()); }}>
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="tel:+917042373880">Call +91 7042373880</a>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default ProcedureDetailPage;
