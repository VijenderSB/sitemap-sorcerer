import ProcedureDetailPage from "@/components/ProcedureDetailPage";

const MetabolicSurgeryPage = () => (
  <ProcedureDetailPage
    title="Metabolic Surgery"
    subtitle="Surgical solutions for diabetes, metabolic syndrome, and hormonal conditions associated with obesity."
    breadcrumb="Procedures > Metabolic Surgery"
    overview="Metabolic surgery addresses conditions like type 2 diabetes, metabolic syndrome, and hormonal disorders that are closely linked to obesity. These procedures not only promote weight loss but directly improve metabolic function, often leading to remission of diabetes and other conditions."
    benefits={[
      "Type 2 diabetes remission in up to 80% of patients",
      "Improvement in hypertension and cholesterol levels",
      "Resolution of metabolic syndrome",
      "Hormonal balance improvement",
      "Long-term cardiovascular risk reduction",
      "Improved quality of life and life expectancy",
    ]}
    procedures={[
      { name: "Diabetes Surgery (Metabolic Bypass)", description: "A specialized surgical procedure designed to improve blood sugar control in type 2 diabetic patients, often leading to complete remission of diabetes without lifelong medication." },
      { name: "Metabolic Syndrome Surgery", description: "Targets the cluster of conditions — high blood pressure, high blood sugar, excess abdominal fat, and abnormal cholesterol — through surgical intervention for lasting improvement." },
      { name: "Hormonal Surgery", description: "Addresses obesity-related hormonal imbalances including PCOS, thyroid dysfunction, and hormone-mediated conditions through weight loss surgery and metabolic correction." },
    ]}
  />
);

export default MetabolicSurgeryPage;
