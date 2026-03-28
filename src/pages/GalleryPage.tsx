import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

import img1 from "@/assets/gallery/dr-wadhawan-profile.jpg";
import img2 from "@/assets/gallery/dr-wadhawan-about.png";
import img3 from "@/assets/gallery/dr-wadhawan-globalhealthtrip.jpg";
import img4 from "@/assets/gallery/dr-wadhawan-bestoneintl.webp";
import img5 from "@/assets/gallery/dr-wadhawan-video1.jpg";
import img6 from "@/assets/gallery/dr-wadhawan-video2.jpg";
import img7 from "@/assets/gallery/dr-wadhawan-video3.jpg";
import img8 from "@/assets/gallery/dr-wadhawan-video4.jpg";
import img9 from "@/assets/gallery/dr-wadhawan-video5.jpg";
import img10 from "@/assets/gallery/dr-wadhawan-video6.jpg";
import img11 from "@/assets/gallery/dr-wadhawan-video7.png";
import img12 from "@/assets/gallery/dr-wadhawan-video8.png";

const galleryImages = [
  { src: img1, caption: "Dr. Randeep Wadhawan — Chairman, GI & Bariatric Surgery" },
  { src: img2, caption: "Dr. Wadhawan at Max Super Speciality Hospital, Dwarka" },
  { src: img3, caption: "Dr. Wadhawan — Leading Bariatric Surgeon" },
  { src: img4, caption: "Dr. Wadhawan — HOD, Minimal Access Surgery" },
  { src: img5, caption: "Robotic Cholecystectomy Demonstration" },
  { src: img6, caption: "Patient Testimonial — Revision Bariatric Surgery" },
  { src: img7, caption: "Abdominal Wall Reconstruction Surgery" },
  { src: img8, caption: "Dr. Wadhawan with International Patient" },
  { src: img9, caption: "Patient Success Story — Gastric Bypass" },
  { src: img10, caption: "Patient from Canada — Hiatus Hernia Surgery" },
  { src: img11, caption: "Dr. Wadhawan — Surgical Conference" },
  { src: img12, caption: "Dr. Wadhawan — Medical Innovation Talk" },
];

const GalleryPage = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div>
      <PageHero
        title="Gallery"
        subtitle="A visual journey through Dr. Wadhawan's surgical career, conferences, and patient interactions."
        breadcrumb="About > Gallery"
      />
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setLightbox(i)}
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-muted">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">{item.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].caption}
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
          />
          <p className="absolute bottom-6 text-white/80 text-sm text-center">
            {galleryImages[lightbox].caption}
          </p>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
