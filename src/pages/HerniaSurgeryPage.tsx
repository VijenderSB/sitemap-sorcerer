import ProcedureDetailPage from "@/components/ProcedureDetailPage";

const HerniaSurgeryPage = () => (
  <ProcedureDetailPage
    title="Hernia Surgery"
    subtitle="Comprehensive hernia treatment options — robotic, laparoscopic, and open approaches."
    breadcrumb="Procedures > Hernia Surgery"
    overview="Hernias occur when an organ or tissue pushes through a weak spot in surrounding muscle or connective tissue. Dr. Wadhawan offers all approaches to hernia repair, with robotic surgery as the preferred option for its superior precision and faster recovery."
    benefits={[
      "Multiple surgical approaches available",
      "Robotic precision for complex hernias",
      "Mesh reinforcement for long-term strength",
      "Low recurrence rates",
      "Same-day or next-day discharge",
      "Rapid return to normal activities",
    ]}
    procedures={[
      { name: "Robotic Hernia Surgery", description: "The gold standard for hernia repair — robotic assistance provides 3D visualization and precise mesh placement for inguinal, incisional, umbilical, hiatus, and complex hernias.", href: "/robotic-gi-surgery/hernia" },
      { name: "Laparoscopic Hernia Surgery", description: "A proven minimally invasive approach for hernia repair through small incisions, offering faster recovery than open surgery.", href: "/laparoscopic-surgery/gi/hernia" },
      { name: "Open Hernia Surgery", description: "Traditional approach used for specific hernia types or when minimally invasive options are not suitable. Still effective with proper mesh reinforcement." },
    ]}
  />
);

export default HerniaSurgeryPage;
