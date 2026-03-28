import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";

const GalleryPage = () => (
  <div>
    <PageHero
      title="Gallery"
      subtitle="A visual journey through Dr. Wadhawan's surgical career and achievements."
      breadcrumb="About > Gallery"
    />
    <section className="py-20">
      <div className="container text-center">
        <p className="text-muted-foreground">Gallery images coming soon.</p>
      </div>
    </section>
  </div>
);

export default GalleryPage;
