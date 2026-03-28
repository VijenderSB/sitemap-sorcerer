import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import { Newspaper } from "lucide-react";

const news = [
  { title: "Dr. Wadhawan Performs 1000th Robotic Surgery", source: "Times of India", date: "March 2026" },
  { title: "Interview: The Future of Robotic Surgery in India", source: "NDTV Health", date: "February 2026" },
  { title: "Pioneer in Minimally Invasive GI Surgery Honored", source: "The Hindu", date: "January 2026" },
  { title: "Robotic Bariatric Surgery: India's Growing Expertise", source: "India Today", date: "December 2025" },
  { title: "Healthcare Leadership Award for Surgical Innovation", source: "Economic Times", date: "November 2025" },
];

const NewsPage = () => (
  <div>
    <PageHero title="News & Media Coverage" subtitle="Dr. Wadhawan in the press — latest media appearances and coverage." breadcrumb="Media > News" />

    <section className="py-20">
      <div className="container max-w-4xl">
        <div className="space-y-4">
          {news.map((n, i) => (
            <motion.div
              key={n.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <div className="rounded-xl bg-accent p-2.5 shrink-0">
                <Newspaper className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{n.title}</h3>
                <p className="text-xs text-muted-foreground">{n.source} • {n.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default NewsPage;
