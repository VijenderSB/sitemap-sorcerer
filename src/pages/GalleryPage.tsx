import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";

const GalleryPage = () => (
  <div>
    <SEOHead
      title="Gallery | Dr. Randeep Wadhawan | Best Robotic Surgeon Delhi"
      description="Photo gallery of Dr. Randeep Wadhawan — robotic surgery, awards, conferences in Delhi. Max Hospital Dwarka."
      canonical="https://www.randeepwadhawan.com/about/gallery"
    />
    <PageHero
      title="Gallery"
      subtitle="A visual journey through Dr. Wadhawan's surgical career and achievements in Delhi."
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
