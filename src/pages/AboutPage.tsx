import { motion } from "framer-motion";
import { Award, GraduationCap, BookOpen, Users, Star, Briefcase, Stethoscope, MapPin, Phone, Mail } from "lucide-react";
import doctorImg from "@/assets/doctor-portrait.jpg";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const education = [
  { degree: "MBBS", detail: "Post Graduate Institute of Medical Sciences (PGIMS), Rohtak, Haryana, 1984–1990" },
  { degree: "MS (General Surgery)", detail: "Post Graduate Institute of Medical Sciences (PGIMS), Rohtak, Haryana, 1991–1994" },
  { degree: "FICS", detail: "Fellowship of International College of Surgeons, Chicago, USA — Recognition for work in the field of surgery, 2009" },
  { degree: "FALS", detail: "Fellowship of Advanced Laparoscopic Surgery — Awarded by IAGES in Bariatric & Colorectal Surgery, 2017" },
  { degree: "FMBS", detail: "Fellowship of Bariatric & Metabolic Surgery — Honorary Fellowship by OSSI, 2020" },
  { degree: "FACS (USA)", detail: "Fellowship of the American College of Surgeons — For work done in the field of Surgery, 2016" },
  { degree: "FRCS (Edinburgh)", detail: "Fellowship of the Royal College of Surgeons of Edinburgh — For contribution in Surgery, 2023" },
];

const expertise = [
  {
    title: "Bariatric & Metabolic Surgery (Robotic & Laparoscopic)",
    points: [
      "Trained in Bariatric surgery at the Centre of Excellence in Frankfurt, Germany",
      "Over 2,000 bariatric procedures at a Centre of Excellence accredited by OSSI",
      "Proficient in Sleeve Gastrectomy, Roux-en-Y Gastric Bypass, MGB/OAGB, DJB, SADI-S, Revision Bariatric procedures",
      "Pioneer in performing Robotic Bariatric procedures using the Da Vinci Robot",
      "Tailored Laparoscopic Metabolic procedures for remission of Type II Diabetes & Metabolic Syndrome",
    ],
  },
  {
    title: "Robotic/Laparoscopic GI Surgery & GI Oncology",
    points: [
      "Specializes in routine and advanced gastrointestinal surgeries",
      "Focus on Upper Gastrointestinal and Colorectal procedures",
      "Over 35,000 laparoscopic surgeries performed",
    ],
  },
  {
    title: "Endohernia & Abdominal Wall Reconstruction (Robotic/Laparoscopic)",
    points: [
      "Fellowship in Abdominal Wall Reconstruction under Prof. Yuri Novitsky at University Hospitals, Cleveland, USA",
      "Extensive experience in complex hernia cases",
      "Accredited as a Hernia Centre of Excellence by the Hernia Society of India",
    ],
  },
  {
    title: "Minimally Invasive Proctology",
    points: [
      "Over 5,000 MIPH (Minimally Invasive Procedures for Haemorrhoids) & STARR procedures",
      "Certified by the European Coloproctology Society",
    ],
  },
];

const positions = [
  { role: "President", org: "Obesity & Metabolic Surgery Society of India (OSSI)" },
  { role: "EC Member", org: "Indian Association of Gastrointestinal Surgeons (IAGES)" },
  { role: "EC Member", org: "Hernia Society of India (HSI)" },
  { role: "EC Member", org: "Association of Robotics & Innovative Surgery (ARIS)" },
  { role: "Faculty & Teacher", org: "National Board of Examination in Medical Sciences (NBEMS)" },
  { role: "Editorial Board Member", org: "Journal of Minimal Access Surgery (JMAS)" },
  { role: "Associate Editor", org: "Journal of Bariatric Surgery (JBS)" },
];

const achievements = [
  "Authored numerous publications in prestigious national and international indexed journals",
  "Distinguished operative faculty at national and international conferences demonstrating advanced Laparoscopic GI, Bariatric & Robotic (Da Vinci) surgeries",
  "Visiting Professor at IRCAD, Taiwan — Tele Robotic Surgery Center",
  "Delivered over 400 invited lectures at national and international conferences, CMEs & academic events",
  "Best Paper Award for video presentations on advanced Laparoscopic & Bariatric surgery at national conferences",
  "Chairman, FALS Board for IAGES (2023–2024) — organizing fellowship courses across subspecialties",
  "Honorary Secretary, OSSI (2020–2022) — organized annual conference OSSICON 2022",
  "Organized and chaired conferences including FALS UGI 2021, OSSICON 2020, and BARICON 2016",
  "Mentored approximately 500 surgeons in Minimal Access, Bariatric & Advanced Laparoscopic GI surgeries",
  "Regular health talks across print, electronic media, and television channels",
];

const memberships = [
  "Obesity & Metabolic Surgery Society of India (OSSI)",
  "Hernia Society of India (HSI)",
  "Association of Surgeons of India (ASI)",
  "Indian Association of Gastrointestinal Endo Surgeons (IAGES)",
  "Association of Minimal Access Surgeons of India (AMASI)",
  "International Federation for Surgery of Obesity & Metabolic Disorders (IFSO)",
  "Asia-Pacific Hernia Society (APHS)",
  "Society of Endoscopic & Laparoscopic Surgeons of India (SELSI)",
  "Delhi Chapter of Association of Surgeons of India",
  "Indian Medical Association (IMA)",
  "Delhi Medical Association — South Delhi Branch (DMA)",
];

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const AboutPage = () => (
  <div>
    <SEOHead
      title="About Dr. Randeep Wadhawan | Best Robotic Surgeon in Delhi | Max Hospital Dwarka"
      description="Dr. Randeep Wadhawan — Chairman GI, Bariatric, Laparoscopic & Robotic Surgery at Max Hospital Dwarka, Delhi. MBBS, MS, FACS(USA), FRCS(Ed). 60,000+ surgeries. Book consultation."
      canonical="https://www.randeepwadhawan.com/about"
    />
    <PageHero
      title="About Dr. Randeep Wadhawan"
      subtitle="Chairman — Gastrointestinal, Bariatric, Laparoscopic & Robotic Surgery | Max Super Speciality Hospital, Dwarka, New Delhi"
    />

    {/* Intro Section */}
    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeIn} className="relative">
            <img
              src={doctorImg}
              alt="Dr. Randeep Wadhawan"
              className="rounded-2xl shadow-medical-lg w-full max-w-md mx-auto"
              loading="lazy"
              width={800}
              height={1024}
            />
            <div className="absolute -bottom-4 -right-4 rounded-xl bg-primary p-4 shadow-medical text-primary-foreground">
              <div className="text-2xl font-bold font-heading">30+</div>
              <div className="text-xs">Years of Excellence</div>
            </div>
          </motion.div>

          <div>
            <h2 id="about" className="text-3xl font-bold font-heading text-foreground mb-5">
              A Pioneer in Robotic & Laparoscopic Surgery
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Dr. Randeep Wadhawan</strong> is currently the Chairman — Gastrointestinal, Bariatric, Laparoscopic, and Robotic Surgery at Max Super Speciality Hospital, Dwarka, New Delhi. He is a distinguished surgeon with extensive expertise in gastrointestinal, bariatric, and metabolic surgeries.
              </p>
              <p>
                With <strong className="text-foreground">over 35,000 laparoscopic surgeries</strong> and <strong className="text-foreground">2,000+ bariatric procedures</strong> to his credit, he has established himself as a leader in both clinical practice and academia. He is a pioneer in performing Robotic Bariatric procedures using the Da Vinci Robot.
              </p>
              <p>
                He leads a successful Obesity, Bariatric & Metabolic surgery program at a Centre of Excellence accredited by the Obesity and Metabolic Surgery Society of India (OSSI).
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                Max Super Speciality Hospital, Plot No. 1, Sector 10, Dwarka, New Delhi – 110075
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+917042373880" className="hover:text-foreground">+91 7042373880</a> / <a href="tel:+919810155826" className="hover:text-foreground">+91 9810155826</a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:randeepwadhawan@yahoo.com" className="hover:text-foreground">randeepwadhawan@yahoo.com</a>
              </div>
            </div>

            <Button asChild className="mt-6">
              <Link to="/book-appointment">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Education & Fellowships */}
    <section id="qualifications" className="py-16 bg-muted/50">
      <div className="container max-w-5xl">
        <motion.div {...fadeIn}>
          <h2 className="text-2xl font-bold font-heading text-foreground mb-8 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" /> Education & Fellowships
          </h2>
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.degree} className="rounded-xl border border-border bg-card p-4 flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2 mt-0.5 shrink-0">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{e.degree}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Areas of Expertise */}
    <section className="py-16">
      <div className="container max-w-5xl">
        <motion.div {...fadeIn}>
          <h2 className="text-2xl font-bold font-heading text-foreground mb-8 flex items-center gap-2">
            <Stethoscope className="h-6 w-6 text-primary" /> Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((area) => (
              <div key={area.title} className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-bold text-foreground mb-3">{area.title}</h3>
                <ul className="space-y-2">
                  {area.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Star className="h-3.5 w-3.5 text-secondary mt-1 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Positions Held */}
    <section className="py-16 bg-muted/50">
      <div className="container max-w-5xl">
        <motion.div {...fadeIn}>
          <h2 className="text-2xl font-bold font-heading text-foreground mb-8 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" /> Positions in National Associations & Journals
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {positions.map((p) => (
              <div key={p.org} className="rounded-xl border border-border bg-card p-4">
                <span className="inline-block rounded-full bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 mb-2">
                  {p.role}
                </span>
                <p className="text-sm text-foreground">{p.org}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Academic Achievements */}
    <section id="awards" className="py-16">
      <div className="container max-w-5xl">
        <motion.div {...fadeIn}>
          <h2 className="text-2xl font-bold font-heading text-foreground mb-8 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" /> Academic Achievements & Teaching
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((a) => (
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
        </motion.div>
      </div>
    </section>

    {/* Life Memberships */}
    <section id="memberships" className="py-16 bg-muted/50">
      <div className="container max-w-5xl">
        <motion.div {...fadeIn}>
          <h2 className="text-2xl font-bold font-heading text-foreground mb-8 flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" /> Life Memberships
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {memberships.map((m) => (
              <div key={m} className="flex items-start gap-2.5 text-sm text-muted-foreground rounded-lg border border-border bg-card p-3">
                <div className="rounded-full bg-accent p-1 mt-0.5 shrink-0">
                  <Star className="h-3 w-3 text-accent-foreground" />
                </div>
                {m}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16">
      <div className="container max-w-3xl text-center">
        <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
          Consult Dr. Randeep Wadhawan
        </h2>
        <p className="text-muted-foreground mb-6">
          30+ years of surgical excellence. Book your consultation today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link to="/book-appointment">Book Appointment</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="tel:+917042373880">Call +91 7042373880</a>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
