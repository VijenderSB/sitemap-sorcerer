import ProcedureDetailPage from "@/components/ProcedureDetailPage";

const MetabolicSurgeryPage = () => (
  <ProcedureDetailPage
    title="Metabolic Surgery"
    subtitle="Tailored surgical solutions for type 2 diabetes, metabolic syndrome, and hormonal conditions associated with obesity."
    breadcrumb="Procedures > Metabolic Surgery"
    overview="Metabolic surgery addresses conditions like type 2 diabetes, metabolic syndrome, and hormonal disorders closely linked to obesity. Dr. Wadhawan performs tailored laparoscopic and robotic metabolic procedures including Duodeno-Jejunal Bypass (DJB) and SADI-S for remission of Type II Diabetes and Metabolic Syndrome. These procedures not only promote weight loss but directly improve metabolic function, often leading to complete remission of diabetes and other conditions even in patients with BMI < 35."
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
);

export default MetabolicSurgeryPage;
