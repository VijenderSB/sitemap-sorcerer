import { motion } from "framer-motion";
import { Award, GraduationCap, BookOpen, Users, Star, Camera } from "lucide-react";
import doctorImg from "@/assets/doctor-portrait.jpg";
import PageHero from "@/components/PageHero";

const qualifications = [
  "MBBS — All India Institute of Medical Sciences (AIIMS), New Delhi",
  "MS (General Surgery) — AIIMS, New Delhi",
  "Fellowship in Robotic Surgery — International Center",
  "Fellowship in Advanced Laparoscopic Surgery",
  "Fellowship in Bariatric & Metabolic Surgery",
];

const experience = [
  "20+ years in General, Laparoscopic & Robotic Surgery",
  "5000+ successful robotic & laparoscopic procedures",
  "Pioneer in Robotic GI Surgery in North India",
  "Trained surgeons across India and abroad in robotic techniques",
  "Performed India's first complex robotic GI procedures",
];

const awards = [
  "Best Robotic Surgeon Award — National Medical Conference 2023",
  "Excellence in Bariatric Surgery — Indian Association of Surgeons",
  "International Fellowship in Minimally Invasive Surgery",
  "Pioneer in Robotic GI Surgery — Healthcare Leadership Award",
  "Top Doctor Award — Times Health Awards 2022",
  "Distinguished Surgeon — World Congress of Surgery",
];

const memberships = [
  "Association of Surgeons of India (ASI)",
  "Indian Association of Gastrointestinal Endo Surgeons (IAGES)",
  "Obesity and Metabolic Surgery Society of India (OSSI)",
  "International Federation for Surgery of Obesity (IFSO)",
  "Society of American Gastrointestinal and Endoscopic Surgeons (SAGES)",
  "Asia Pacific Hernia Society (APHS)",
  "Indian Hernia Society (IHS)",
];

const publications = [
  "Published 50+ research papers in national and international peer-reviewed journals",
  "Authored chapters in textbooks on robotic surgery and bariatric surgery",
  "Regular contributor to Indian Journal of Surgery, Asian Journal of Surgery",
  "Research on robotic vs laparoscopic outcomes in bariatric procedures",
  "Studies on long-term metabolic outcomes post-bariatric surgery",
];

const AboutPage = () => (
  <div>
    <PageHero
      title="About Dr. Randeep Wadhawan"
      subtitle="India's leading robotic GI & bariatric surgeon with over two decades of surgical excellence."
    />

    {/* About intro */}
    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={doctorImg}
              alt="Dr. Randeep Wadhawan"
              className="rounded-2xl shadow-medical-lg w-full max-w-md mx-auto"
              loading="lazy"
              width={800}
              height={1024}
            />
            <div className="absolute -bottom-4 -right-4 rounded-xl bg-primary p-4 shadow-medical text-primary-foreground">
              <div className="text-2xl font-bold font-heading">20+</div>
              <div className="text-xs">Years of Excellence</div>
            </div>
          </motion.div>

          <div>
            <h2 id="about" className="text-3xl font-bold font-heading text-foreground mb-5">
              A Pioneer in Robotic Surgery
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dr. Randeep Wadhawan is one of India's most accomplished robotic surgeons, specializing
                in robotic-assisted GI and bariatric surgery. With over 5,000 successful procedures
                spanning two decades, he has established himself as a pioneer in minimally invasive
                surgical techniques.
              </p>
              <p>
                Having trained at India's premier medical institutions and international centers of
                excellence, Dr. Wadhawan combines world-class surgical skills with a compassionate,
                patient-centered approach. His expertise in robotic surgery has helped thousands of
                patients achieve better outcomes with faster recovery.
              </p>
              <p>
                He is an active educator and trainer, having taught robotic surgical techniques to
                surgeons across India and internationally. His commitment to advancing surgical
                innovation continues to shape the future of minimally invasive surgery in India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Qualifications */}
    <section id="qualifications" className="py-16 bg-muted/50">
      <div className="container max-w-4xl">
        <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" /> Qualifications
        </h2>
        <ul className="space-y-3">
          {qualifications.map((q) => (
            <li key={q} className="flex items-start gap-3 text-muted-foreground">
              <Star className="h-4 w-4 text-secondary mt-1 shrink-0" />
              {q}
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Experience */}
    <section className="py-16">
      <div className="container max-w-4xl">
        <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Experience & Expertise</h2>
        <ul className="space-y-3">
          {experience.map((e) => (
            <li key={e} className="flex items-start gap-3 text-muted-foreground">
              <Star className="h-4 w-4 text-secondary mt-1 shrink-0" />
              {e}
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Awards */}
    <section id="awards" className="py-16 bg-muted/50">
      <div className="container max-w-4xl">
        <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center gap-2">
          <Award className="h-6 w-6 text-primary" /> Awards & Recognition
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {awards.map((a) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-card p-4 flex items-start gap-3"
            >
              <Award className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <span className="text-sm text-foreground">{a}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Memberships */}
    <section id="memberships" className="py-16">
      <div className="container max-w-4xl">
        <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center gap-2">
          <Users className="h-6 w-6 text-primary" /> Memberships & Associations
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {memberships.map((m) => (
            <div key={m} className="flex items-start gap-2.5 text-sm text-muted-foreground">
              <div className="rounded-full bg-accent p-1 mt-0.5 shrink-0">
                <Star className="h-3 w-3 text-accent-foreground" />
              </div>
              {m}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Publications */}
    <section id="publications" className="py-16 bg-muted/50">
      <div className="container max-w-4xl">
        <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" /> Publications & Research
        </h2>
        <ul className="space-y-3">
          {publications.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
              <Star className="h-4 w-4 text-secondary mt-1 shrink-0" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Gallery */}
    <section className="py-16">
      <div className="container max-w-4xl">
        <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center gap-2">
          <Camera className="h-6 w-6 text-primary" /> Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-square rounded-xl bg-muted flex items-center justify-center text-muted-foreground text-sm">
              Gallery Image {i}
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4 text-center">
          Professional images will be added here — surgery demonstrations, conferences, awards ceremonies.
        </p>
      </div>
    </section>
  </div>
);

export default AboutPage;
