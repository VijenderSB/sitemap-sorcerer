import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

const videos = [
  { title: "How Robotic Surgery Works", desc: "An animated explanation of the robotic surgical system and its advantages." },
  { title: "Patient Testimonial — Robotic Sleeve Gastrectomy", desc: "Rajesh shares his weight loss journey after robotic bariatric surgery." },
  { title: "Robotic vs Laparoscopic: Key Differences", desc: "Dr. Wadhawan explains when robotic surgery is preferred over laparoscopic." },
  { title: "What to Expect on Surgery Day", desc: "A step-by-step walkthrough of your surgery day experience." },
  { title: "Recovery After Robotic Hernia Surgery", desc: "Tips and timeline for recovering from robotic-assisted hernia repair." },
  { title: "Understanding BMI and Bariatric Eligibility", desc: "Learn how BMI is calculated and when weight loss surgery is recommended." },
];

const VideosPage = () => (
  <div>
    <PageHero title="Video Library" subtitle="Educational videos on robotic surgery, patient experiences, and surgical techniques." breadcrumb="Media > Videos" />

    <section className="py-20">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-medical transition-shadow"
            >
              <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground">
                ▶ Video
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-foreground mb-1.5">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default VideosPage;
