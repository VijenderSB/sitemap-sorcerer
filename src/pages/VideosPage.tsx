import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

const videos = [
  { id: "LOa9oeapp3c", title: "Robotic Surgery Insights" },
  { id: "L6JqkKPTQrg", title: "Advanced Bariatric Procedures" },
  { id: "wPzV4yzGfx8", title: "Patient Success Stories" },
  { id: "BXHfdb9k1P0", title: "Minimally Invasive Techniques" },
  { id: "AXH6wSzJ_2Y", title: "GI Surgery Excellence" },
];

const VideosPage = () => (
  <div>
    <PageHero title="Video Library" subtitle="Educational videos on robotic surgery, patient experiences, and surgical techniques." breadcrumb="Media > Videos" />

    <section className="py-20">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card overflow-hidden hover:shadow-medical transition-shadow"
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-foreground">{v.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@randeepwadhawan7610/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            View All Videos on YouTube →
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default VideosPage;
