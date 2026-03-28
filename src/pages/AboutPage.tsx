import { motion } from "framer-motion";
import { Award, GraduationCap, BookOpen, Users, Star } from "lucide-react";
import doctorImg from "@/assets/doctor-portrait.jpg";

const qualifications = [
  "MBBS — All India Institute of Medical Sciences (AIIMS)",
  "MS (General Surgery) — AIIMS, New Delhi",
  "Fellowship in Robotic Surgery",
  "Fellowship in Advanced Laparoscopic Surgery",
];

const awards = [
  "Best Robotic Surgeon Award — National Medical Conference 2023",
  "Excellence in Bariatric Surgery — Indian Association of Surgeons",
  "International Fellowship in Minimally Invasive Surgery",
  "Pioneer in Robotic GI Surgery — Healthcare Leadership Award",
];

const AboutPage = () => (
  <div>
    <section className="bg-gradient-hero py-20">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-5xl font-extrabold font-heading text-primary-foreground text-center"
        >
          About Dr. Randeep Wadhawan
        </motion.h1>
        <p className="text-primary-foreground/70 text-center mt-4 max-w-2xl mx-auto">
          India's leading robotic GI & bariatric surgeon with over two decades of surgical excellence.
        </p>
      </div>
    </section>

    <section className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            src={doctorImg}
            alt="Dr. Randeep Wadhawan"
            className="rounded-2xl shadow-medical-lg w-full max-w-md mx-auto"
            loading="lazy"
            width={800}
            height={1024}
          />

          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-bold font-heading text-foreground mb-4 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" /> Qualifications
              </h2>
              <ul className="space-y-2">
                {qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Star className="h-3.5 w-3.5 text-secondary mt-1 shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-foreground mb-4 flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" /> Awards & Recognition
              </h2>
              <ul className="space-y-2">
                {awards.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Star className="h-3.5 w-3.5 text-secondary mt-1 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-foreground mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" /> Memberships
              </h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Association of Surgeons of India (ASI)</li>
                <li>• Indian Association of Gastrointestinal Endo Surgeons (IAGES)</li>
                <li>• Obesity and Metabolic Surgery Society of India (OSSI)</li>
                <li>• International Federation for Surgery of Obesity (IFSO)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-heading text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" /> Publications
              </h2>
              <p className="text-sm text-muted-foreground">
                Dr. Wadhawan has published 50+ research papers in national and international journals on
                robotic surgery, bariatric outcomes, and minimally invasive techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
