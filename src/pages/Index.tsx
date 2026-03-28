import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import RoboticHighlight from "@/components/home/RoboticHighlight";
import ProceduresSection from "@/components/home/ProceduresSection";
import ObesityManagementSection from "@/components/home/ObesityManagementSection";
import LaparoscopicSection from "@/components/home/LaparoscopicSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";

import AwardsSection from "@/components/home/AwardsSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import CTASection from "@/components/home/CTASection";
import VideosSection from "@/components/home/VideosSection";
import InternalLinksSection from "@/components/home/InternalLinksSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Randeep Wadhawan",
  description: "Delhi's best robotic GI & bariatric surgeon with 60,000+ successful procedures at Max Super Speciality Hospital, Dwarka.",
  image: "https://www.randeepwadhawan.com/wp-content/uploads/2023/dr-randeep-wadhawan.jpg",
  url: "https://www.randeepwadhawan.com",
  telephone: "+917042373880",
  email: "randeepwadhawan@yahoo.com",
  medicalSpecialty: ["Bariatric Surgery", "Gastrointestinal Surgery", "Robotic Surgery", "Laparoscopic Surgery"],
  alumniOf: "Fellowship in Robotic Surgery — International Centers of Excellence",
  award: "50+ National and International Awards",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 1, Sector 10, Dwarka",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110075",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Hospital",
    name: "Max Super Speciality Hospital, Dwarka",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 1, Sector 10, Dwarka",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110075",
      addressCountry: "IN",
    },
  },
  sameAs: [
    "https://www.instagram.com/drrandeepwadhawan",
  ],
};

const Index = () => (
  <>
    <SEOHead
      title="Best Robotic Surgeon in Delhi | Dr. Randeep Wadhawan — GI & Bariatric Surgery"
      description="Dr. Randeep Wadhawan is Delhi's best robotic GI & bariatric surgeon at Max Hospital Dwarka. 60,000+ surgeries. Robotic sleeve gastrectomy, gastric bypass, hernia surgery in Delhi. Book consultation."
      canonical="https://www.randeepwadhawan.com/"
      jsonLd={jsonLd}
    />
    <HeroSection />
    <StatsSection />
    <AboutSection />
    <RoboticHighlight />
    <ProceduresSection />
    <ObesityManagementSection />
    <LaparoscopicSection />
    <TestimonialsSection />
    <BeforeAfterSection />
    <VideosSection />
    
    <AwardsSection />
    <InternalLinksSection />
    <FAQSection />
    <ContactSection />
    <CTASection />
  </>
);

export default Index;
