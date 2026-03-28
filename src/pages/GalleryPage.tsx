import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";

const GalleryPage = () => (
  <div>
    <PageHero
      title="Gallery"
      subtitle="A visual journey through Dr. Wadhawan's surgical career and achievements."
      breadcrumb="About > Gallery"
    />
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            "Surgery Conference 2024",
            "Robotic Surgery Demo",
            "Award Ceremony",
            "Patient Interaction",
            "International Workshop",
            "Hospital Team",
            "Medical Innovation Summit",
            "Training Session",
          ].map((caption, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              <div className="aspect-square rounded-xl bg-muted flex items-center justify-center text-muted-foreground text-sm p-4 text-center">
                {caption}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default GalleryPage;
