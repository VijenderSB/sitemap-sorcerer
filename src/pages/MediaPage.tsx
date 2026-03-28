import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Video, Users, Newspaper } from "lucide-react";
import PageHero from "@/components/PageHero";

const sections = [
  { icon: BookOpen, title: "Blogs", desc: "Expert articles on robotic surgery, bariatric procedures, hernia treatment, and GI health.", href: "/media/blogs", count: "50+ Articles" },
  { icon: Video, title: "Videos", desc: "Watch procedure explanations, surgical demonstrations, and educational content.", href: "/media/videos", count: "30+ Videos" },
  { icon: Users, title: "Patient Stories", desc: "Inspiring stories from patients who transformed their lives through surgery.", href: "/media/patient-stories", count: "100+ Stories" },
  { icon: Newspaper, title: "News & Media", desc: "Dr. Wadhawan in the news — media appearances, interviews, and press coverage.", href: "/media/news", count: "Latest Coverage" },
];

const MediaPage = () => (
  <div>
    <PageHero title="Media & Education" subtitle="Stay informed with the latest insights on robotic surgery, patient health, and medical advances." />

    <section className="py-20">
      <div className="container">
        <div className="grid sm:grid-cols-2 gap-6">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={s.href}
                className="group block rounded-2xl border border-border bg-card p-8 hover:shadow-medical-lg hover:-translate-y-1 transition-all h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-xl bg-accent p-3">
                    <s.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <span className="text-xs font-medium text-secondary">{s.count}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center text-sm font-medium text-primary gap-1 group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default MediaPage;
