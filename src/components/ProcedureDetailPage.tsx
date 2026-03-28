import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";

interface Procedure {
  name: string;
  description: string;
  href?: string;
}

interface ContentSection {
  title: string;
  content: string;
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
      <section className="py-16">
        <div className="container max-w-5xl">
          <div className={`${imageSrc ? "grid lg:grid-cols-2 gap-12 items-start" : ""}`}>
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
                  className="rounded-2xl shadow-medical-lg w-full object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>
    )}

    {/* Detailed content sections */}
    {sections && sections.length > 0 && (
      <section className="py-12">
        <div className="container max-w-5xl">
          <div className="space-y-10">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <h2 className="text-2xl font-bold font-heading text-foreground mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )}

    {benefits && benefits.length > 0 && (
      <section className="py-16 bg-muted/50">
        <div className="container max-w-5xl">
          <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Key Benefits</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                <div className="rounded-full bg-secondary/10 p-1 mt-0.5 shrink-0">
                  <Check className="h-3.5 w-3.5 text-secondary" />
                </div>
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>
    )}

    <section className="py-16">
      <div className="container max-w-5xl">
        {procedures.length > 0 && (
          <>
            <h2 className="text-2xl font-bold font-heading text-foreground mb-8">
              {procedures.length === 1 ? "Overview" : "Procedures & Services"}
            </h2>
            <div className="grid gap-5">
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
          </>
        )}

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/book-appointment">
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default ProcedureDetailPage;
