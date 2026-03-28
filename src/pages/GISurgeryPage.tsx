import ProcedureDetailPage from "@/components/ProcedureDetailPage";

const GISurgeryPage = () => (
  <ProcedureDetailPage
    title="GI Surgery"
    subtitle="Advanced gastrointestinal surgery for gallbladder, appendix, and other digestive conditions."
    breadcrumb="Procedures > GI Surgery"
    overview="Gastrointestinal (GI) surgery addresses conditions affecting the digestive system. Dr. Wadhawan offers both robotic and laparoscopic approaches, selecting the best technique for each patient's unique needs."
    procedures={[
      { name: "Gallbladder Surgery (Cholecystectomy)", description: "Removal of the gallbladder for gallstones or gallbladder disease. Available in robotic and laparoscopic approaches with same-day discharge in most cases.", href: "/robotic-gi-surgery/gallbladder" },
      { name: "Appendix Surgery (Appendectomy)", description: "Emergency and elective appendix removal using minimally invasive techniques for rapid recovery.", href: "/robotic-gi-surgery/appendix" },
      { name: "Robotic Gallbladder Surgery", description: "Enhanced precision cholecystectomy using robotic assistance for complex biliary anatomy.", href: "/robotic-gi-surgery/gallbladder" },
      { name: "Robotic Appendix Surgery", description: "Robotic-assisted appendectomy for acute and chronic cases with minimal scarring.", href: "/robotic-gi-surgery/appendix" },
      { name: "Laparoscopic Gallbladder Surgery", description: "Standard minimally invasive gallbladder removal — proven, safe, and effective.", href: "/laparoscopic-surgery/gi/gallbladder" },
      { name: "Laparoscopic Appendix Surgery", description: "Keyhole appendectomy for quick recovery and return to activities.", href: "/laparoscopic-surgery/gi/appendix" },
    ]}
  />
);

export default GISurgeryPage;
