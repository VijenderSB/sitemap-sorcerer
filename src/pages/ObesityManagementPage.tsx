import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Apple, Pill, Bot, Scissors, Users, Globe, UserCheck, Cpu, HeartPulse, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Apple,
    title: "Diet & Lifestyle Modification",
    subtitle: "Foundation of Sustainable Change",
    points: [
      "Balanced, culturally relevant diets",
      "Customized fitness routines",
      "Behavioral therapy & goal setting",
      "Sleep hygiene & stress management",
      "Health literacy & ongoing motivation",
    ],
    note: "We focus on habit transformation, not just short-term weight loss.",
  },
  {
    icon: Pill,
    title: "Pharmacotherapy (Medical Management)",
    subtitle: "Safe, Evidence-Based Medical Support",
    points: [
      "GLP-1 receptor agonists (e.g., Semaglutide, Liraglutide)",
      "Appetite suppressants and metabolic enhancers",
      "Monitored for efficacy, safety, and side effects",
    ],
    note: "Each treatment is closely supervised by endocrinologists or obesity medicine specialists.",
  },
  {
    icon: Bot,
    title: "Endoscopic Weight Loss Procedures",
    subtitle: "Minimally Invasive, Maximum Impact",
    points: [
      "Intragastric Balloon (IGB)",
      "Endoscopic Sleeve Gastroplasty (ESG)",
    ],
    note: "Outpatient procedures offering significant weight loss with quick recovery and no external scars.",
  },
  {
    icon: Scissors,
    title: "Advanced Bariatric Surgery",
    subtitle: "Reclaim Health with Precision Surgery",
    points: [
      "Sleeve Gastrectomy",
      "Gastric Bypass (RYGB, Mini-Bypass)",
      "Revisional Bariatric Surgery",
    ],
    note: "Internationally trained, highly experienced surgeons supported by a dedicated multidisciplinary team.",
    criteria: [
      "Morbid obesity (BMI > 40 or > 35 with comorbidities)",
      "Failed previous weight-loss attempts",
      "Obesity-related complications (e.g., diabetes, sleep apnea, fatty liver)",
    ],
  },
];

const whyChoose = [
  { icon: Users, text: "Multidisciplinary Expertise — Nutritionists, psychologists, physicians, gastroenterologists & surgeons under one roof" },
  { icon: Globe, text: "International Protocols — Aligned with global best practices for safety and outcomes" },
  { icon: UserCheck, text: "Individualized Roadmaps — No one-size-fits-all solutions" },
  { icon: Cpu, text: "Latest Tech & Tools — Advanced surgical robotics to app-based follow-ups" },
  { icon: HeartPulse, text: "Long-Term Commitment — Regular monitoring, post-treatment support & relapse prevention" },
];

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

const ObesityManagementPage = () => (
  <>
    <SEOHead
      title="Best Obesity Management Centre in Delhi | Weight Loss Treatment | Dr. Randeep Wadhawan"
      description="Comprehensive obesity management in Delhi by Dr. Randeep Wadhawan at Max Hospital Dwarka. Diet, pharmacotherapy, endoscopic & bariatric surgery. Book consultation."
      canonical="https://www.randeepwadhawan.com/obesity-management"
    />
    <PageHero
      title="Obesity Management Centre in Delhi"
      subtitle="Comprehensive. Compassionate. Cutting-edge. A 360° integrated approach to lasting weight loss."
      breadcrumb="Home > Obesity Management Centre"
    />

    {/* Intro */}
    <section className="py-16 bg-background">
      <div className="container max-w-4xl">
        <motion.div {...fadeUp} className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Obesity is not just a cosmetic concern — it is a <strong className="text-foreground">complex, chronic disease</strong> that affects your overall health, self-esteem, and quality of life. At our Obesity Management Centre, we understand that no two journeys are the same.
          </p>
          <p>
            That's why we bring together medical science, technology, and emotional support to deliver <strong className="text-foreground">personalized, long-term solutions</strong> — all under one roof.
          </p>
          <p>
            Our mission is to empower you with the tools, knowledge, and medical expertise you need to <strong className="text-foreground">achieve sustainable weight loss</strong>, manage obesity-related health conditions, and live a fuller, healthier life.
          </p>
        </motion.div>
      </div>
    </section>

    {/* 360° Care Model */}
    <section className="py-20 bg-muted/50">
      <div className="container">
        <motion.div {...fadeUp} className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Our Approach</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mt-2">
            Integrated 360° Care Model
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent p-3">
                <p.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-1">{p.title}</h3>
              <p className="text-sm font-medium text-primary mb-4">{p.subtitle}</p>

              {p.criteria && (
                <div className="mb-4 rounded-lg bg-muted p-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase mb-2">Eligibility Criteria</p>
                  <ul className="space-y-1">
                    {p.criteria.map(c => (
                      <li key={c} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1">•</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <ul className="space-y-2 mb-4">
                {p.points.map(pt => (
                  <li key={pt} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-secondary mt-1">✓</span>{pt}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground italic border-t border-border pt-3">{p.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose */}
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div {...fadeUp} className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Why Us</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mt-2">
            Why Choose Our Obesity Management Centre?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {whyChoose.map((w, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }} className="flex gap-4 items-start rounded-xl border border-border bg-card p-6">
              <div className="shrink-0 rounded-lg bg-accent p-2">
                <w.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 bg-gradient-hero">
      <div className="container text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl font-bold font-heading text-primary-foreground mb-4">
            Take the First Step Toward a New Life
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            It's never too late to start your transformation. Whether you're struggling with emotional eating, obesity-related diabetes, or post-pregnancy weight — we are here for you.
          </p>
          <Link
            to="/book-appointment"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3 font-semibold text-secondary-foreground hover:opacity-90 transition"
          >
            Book a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  </>
);

export default ObesityManagementPage;
