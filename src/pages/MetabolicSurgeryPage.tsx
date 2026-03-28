import ProcedureDetailPage from "@/components/ProcedureDetailPage";
import SEOHead from "@/components/SEOHead";

const MetabolicSurgeryPage = () => (
  <>
    <SEOHead
      title="Best Metabolic Surgery in Delhi | Diabetes Surgery | Dr. Randeep Wadhawan"
      description="Best metabolic surgery for diabetes in Delhi by Dr. Randeep Wadhawan at Max Hospital Dwarka. DJB, SADI-S for type 2 diabetes remission. Book consultation."
    />
    <ProcedureDetailPage
      title="Metabolic Surgery in Delhi"
      subtitle="Tailored surgical solutions for type 2 diabetes and metabolic syndrome at Max Hospital, Dwarka, Delhi."
      breadcrumb="Procedures > Metabolic Surgery in Delhi"
      overview="Looking for metabolic surgery for diabetes in Delhi? Dr. Wadhawan performs tailored robotic and laparoscopic metabolic procedures including DJB and SADI-S at Max Super Speciality Hospital, Dwarka. These procedures promote weight loss and directly improve metabolic function, often leading to complete remission of type 2 diabetes even in patients with BMI < 35. Patients across Delhi NCR and India trust his expertise."
    benefits={[
      "Type 2 diabetes remission in up to 80% of patients",
      "Tailored DJB and SADI-S procedures",
      "Improvement in hypertension and cholesterol levels",
      "Resolution of metabolic syndrome",
      "Hormonal balance improvement (PCOS, thyroid)",
      "Long-term cardiovascular risk reduction",
      "Effective even at lower BMI",
      "Improved quality of life and life expectancy",
    ]}
    procedures={[
      { name: "Duodeno-Jejunal Bypass (DJB)", description: "A specialized metabolic procedure designed to improve blood sugar control in type 2 diabetic patients by bypassing a portion of the duodenum and jejunum, leading to hormonal changes that improve insulin sensitivity." },
      { name: "SADI-S (Single Anastomosis Duodeno-Ileal Bypass)", description: "A powerful metabolic procedure combining sleeve gastrectomy with a single-anastomosis duodeno-ileal bypass for excellent diabetes remission and weight loss in one operation." },
      { name: "Metabolic Gastric Bypass", description: "Modified Roux-en-Y gastric bypass tailored for metabolic correction, often leading to complete remission of type 2 diabetes without lifelong medication." },
      { name: "Metabolic Syndrome Surgery", description: "Targets the cluster of conditions — high blood pressure, high blood sugar, excess abdominal fat, and abnormal cholesterol — through surgical intervention for lasting improvement." },
    ]}
  />
  </>
);

export default MetabolicSurgeryPage;
