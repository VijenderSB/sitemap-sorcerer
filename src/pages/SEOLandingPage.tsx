import ProcedureDetailPage from "@/components/ProcedureDetailPage";

const seoPages: Record<string, { title: string; subtitle: string; overview: string; breadcrumb: string }> = {
  "robotic-surgeon-delhi": {
    title: "Best Robotic Surgeon in Delhi",
    subtitle: "Dr. Randeep Wadhawan — Delhi's top robotic surgeon with 60,000+ successful procedures at Max Hospital, Dwarka.",
    overview: "Looking for the best robotic surgeon in Delhi? Dr. Randeep Wadhawan is a pioneer in robotic-assisted surgery with over 30 years of experience. Specializing in robotic GI surgery, bariatric surgery, and hernia repair, he operates at Max Super Speciality Hospital, Dwarka, New Delhi. His expertise in the Da Vinci robotic surgical system ensures patients receive the highest standard of care with faster recovery, minimal scarring, and superior outcomes.",
    breadcrumb: "Best Robotic Surgeon in Delhi",
  },
  "robotic-bariatric-surgeon-delhi": {
    title: "Best Robotic Bariatric Surgeon in Delhi",
    subtitle: "Expert robotic weight loss surgery in Delhi with proven results and faster recovery.",
    overview: "Dr. Randeep Wadhawan is recognized as one of Delhi's leading robotic bariatric surgeons. With extensive experience in robotic sleeve gastrectomy, gastric bypass, and metabolic surgery, he has helped thousands of patients achieve lasting weight loss and remission of obesity-related conditions. His robotic-first approach ensures maximum precision, minimal scarring, and the fastest possible recovery.",
    breadcrumb: "Best Robotic Bariatric Surgeon in Delhi",
  },
  "robotic-hernia-surgeon-delhi": {
    title: "Best Robotic Hernia Surgeon in Delhi",
    subtitle: "Advanced robotic hernia repair in Delhi — all hernia types treated with precision.",
    overview: "For expert robotic hernia repair in Delhi, Dr. Randeep Wadhawan offers the most advanced surgical techniques for inguinal, incisional, umbilical, hiatus, and complex hernias. The robotic approach provides 3D visualization and precise mesh placement, resulting in lower recurrence rates and faster recovery compared to traditional methods.",
    breadcrumb: "Best Robotic Hernia Surgeon in Delhi",
  },
  "robotic-gi-surgeon-delhi": {
    title: "Best Robotic GI Surgeon in Delhi",
    subtitle: "Expert robotic gastrointestinal surgery in Delhi for complex abdominal conditions.",
    overview: "Dr. Wadhawan is a leading robotic GI surgeon in Delhi, performing advanced robotic procedures for gallbladder disease, colon conditions, rectal surgery, GI cancers, and more. His expertise in robotic-assisted techniques ensures patients benefit from enhanced precision, reduced complications, and faster recovery from complex GI procedures.",
    breadcrumb: "SEO > Robotic GI Surgeon Delhi",
  },
  "laparoscopic-surgeon-delhi": {
    title: "Best Laparoscopic Surgeon in Delhi",
    subtitle: "Expert laparoscopic surgery in Delhi for bariatric, hernia, and GI procedures.",
    overview: "Dr. Randeep Wadhawan is among Delhi's most experienced laparoscopic surgeons, offering advanced minimally invasive procedures for weight loss, hernia repair, gallbladder removal, appendectomy, and colorectal conditions. While he specializes in robotic surgery, his mastery of laparoscopic techniques provides patients with excellent outcomes through proven minimally invasive approaches.",
    breadcrumb: "SEO > Laparoscopic Surgeon Delhi",
  },
};

interface SEOLandingPageProps {
  slug: string;
}

const SEOLandingPage = ({ slug }: SEOLandingPageProps) => {
  const page = seoPages[slug];
  if (!page) return null;

  return (
    <ProcedureDetailPage
      title={page.title}
      subtitle={page.subtitle}
      overview={page.overview}
      breadcrumb={page.breadcrumb}
      procedures={[]}
      benefits={[
        "20+ years of surgical experience",
        "5000+ successful procedures",
        "State-of-the-art robotic surgical systems",
        "Operating at Delhi's best hospitals",
        "Internationally trained and recognized",
        "Comprehensive pre and post-operative care",
      ]}
      ctaText="Book Free Consultation"
    />
  );
};

export default SEOLandingPage;
