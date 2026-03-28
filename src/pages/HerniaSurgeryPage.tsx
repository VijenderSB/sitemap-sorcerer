import ProcedureDetailPage from "@/components/ProcedureDetailPage";
import SEOHead from "@/components/SEOHead";

const HerniaSurgeryPage = () => (
  <>
    <SEOHead
      title="Best Hernia Surgery in Delhi | Robotic & Laparoscopic | Dr. Randeep Wadhawan"
      description="Best hernia surgery in Delhi by Dr. Randeep Wadhawan at Max Hospital Dwarka. Robotic & laparoscopic hernia repair — inguinal, incisional, umbilical, hiatus. Book consultation."
    />
    <ProcedureDetailPage
      title="Hernia Surgery in Delhi"
      subtitle="Delhi's best hernia treatment — robotic, laparoscopic, and open approaches at Max Hospital, Dwarka. Hernia Centre of Excellence accredited by the Hernia Society of India."
      breadcrumb="Procedures > Hernia Surgery in Delhi"
      overview="Looking for the best hernia surgery in Delhi? Dr. Wadhawan offers all approaches to hernia repair at Max Super Speciality Hospital, Dwarka, with robotic surgery as the preferred option for its superior precision and faster recovery. He completed fellowship in Abdominal Wall Reconstruction under Prof. Yuri Novitsky at University Hospitals, Cleveland, USA. Patients across Delhi NCR trust him for complex hernia cases. The department is accredited as a Hernia Centre of Excellence by the Hernia Society of India."
    benefits={[
      "Fellowship-trained under Prof. Novitsky (Cleveland, USA)",
      "Hernia Centre of Excellence (HSI accredited)",
      "Robotic precision for complex and recurrent hernias",
      "Mesh reinforcement for long-term strength",
      "Low recurrence rates",
      "Same-day or next-day discharge",
      "Rapid return to normal activities",
    ]}
    procedures={[
      { name: "Robotic Hernia Surgery", description: "The gold standard for hernia repair — Da Vinci robotic assistance provides 3D visualization and precise mesh placement for inguinal, incisional, umbilical, hiatus, and complex hernias including abdominal wall reconstruction.", href: "/robotic-gi-surgery/hernia" },
      { name: "Laparoscopic Hernia Surgery", description: "A proven minimally invasive approach for hernia repair through small incisions, offering faster recovery than open surgery. Suitable for most hernia types.", href: "/laparoscopic-surgery/gi/hernia" },
      { name: "Abdominal Wall Reconstruction", description: "Complex multi-defect, large, or recurrent hernias requiring advanced surgical expertise. Fellowship-trained approach using component separation and mesh reinforcement." },
      { name: "Hiatus Hernia Repair", description: "Repair of diaphragmatic hernias associated with esophageal reflux, often combined with fundoplication for acid reflux prevention." },
    ]}
  />
);

export default HerniaSurgeryPage;
