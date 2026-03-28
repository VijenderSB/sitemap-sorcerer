import ProcedureDetailPage from "@/components/ProcedureDetailPage";

const GISurgeryPage = () => (
  <ProcedureDetailPage
    title="GI Surgery"
    subtitle="Advanced gastrointestinal surgery — over 35,000 laparoscopic surgeries performed. Specializing in Upper GI and Colorectal procedures."
    breadcrumb="Procedures > GI Surgery"
    overview="Dr. Wadhawan specializes in routine and advanced gastrointestinal surgeries with a focus on Upper Gastrointestinal and Colorectal procedures. With over 35,000 laparoscopic surgeries performed and certification by the European Coloproctology Society, he offers both robotic and laparoscopic approaches, selecting the best technique for each patient's unique needs. Over 5,000 MIPH (Minimally Invasive Procedures for Haemorrhoids) & STARR procedures have been performed."
    procedures={[
      { name: "Gallbladder Surgery (Cholecystectomy)", description: "Removal of the gallbladder for gallstones or gallbladder disease. Available in robotic and laparoscopic approaches with same-day discharge in most cases.", href: "/robotic-gi-surgery/gallbladder" },
      { name: "Colon & Rectal Surgery", description: "Treatment of colon cancer, rectal malignancy, rectal prolapse, and other colorectal conditions using robotic and laparoscopic approaches.", href: "/robotic-gi-surgery/colon" },
      { name: "Gastric Cancer Surgery", description: "Laparoscopic gastrectomy for stomach cancer including Endoscopic Mucosal Resection and LADG techniques.", href: "/laparoscopic-surgery/gi/gastric-cancer" },
      { name: "Esophageal Surgery (Oesophagectomy)", description: "Minimally invasive esophagectomy removing part or all of the esophagus for esophageal cancer, rebuilding the passage from part of the stomach.", href: "/robotic-gi-surgery/cancer" },
      { name: "Liver Resections", description: "Surgical removal of cancerous liver segments for liver cancer, metastatic colorectal cancers, and gallbladder cancers.", href: "/robotic-advanced-gi-surgery/liver" },
      { name: "Whipple Procedure (Pancreatic Cancer)", description: "Complex surgery for pancreatic/periampullary cancer removing the head of the pancreas, duodenum, bile duct, and gallbladder.", href: "/robotic-advanced-gi-surgery/pancreatic" },
      { name: "Surgery for Portal Hypertension", description: "Surgical shunt procedures for elevated portal vein pressure when endoscopic techniques fail.", href: "/robotic-advanced-gi-surgery/portal-hypertension" },
      { name: "MIPH & Proctology", description: "Over 5,000 Minimally Invasive Procedures for Haemorrhoids (MIPH) & STARR procedures. Certified by European Coloproctology Society.", href: "/laparoscopic-surgery/gi/rectal" },
    ]}
    benefits={[
      "Over 35,000 laparoscopic surgeries performed",
      "European Coloproctology Society certified",
      "Over 5,000 MIPH & STARR procedures",
      "Da Vinci robotic and laparoscopic options",
      "Multi-disciplinary team approach",
      "State-of-the-art infrastructure",
    ]}
  />
);

export default GISurgeryPage;
