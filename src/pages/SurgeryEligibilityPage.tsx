import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";

const SurgeryEligibilityPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [eligible, setEligible] = useState(false);
  const [bmi, setBmi] = useState("");
  const [age, setAge] = useState("");
  const [conditions, setConditions] = useState<string[]>([]);

  const conditionsList = [
    "Type 2 Diabetes",
    "Hypertension",
    "Sleep Apnea",
    "Joint Problems",
    "PCOS",
    "High Cholesterol",
    "Heart Disease",
    "None of the above",
  ];

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const bmiVal = parseFloat(bmi);
    const ageVal = parseInt(age);
    const hasComorbidities = conditions.length > 0 && !conditions.includes("None of the above");

    setEligible(
      ageVal >= 18 && ageVal <= 65 && (bmiVal >= 35 || (bmiVal >= 30 && hasComorbidities))
    );
    setSubmitted(true);
  };

  return (
    <div>
      <SEOHead
        title="Surgery Eligibility Check | Bariatric Surgery Delhi | Dr. Randeep Wadhawan"
        description="Check if you're eligible for bariatric or weight loss surgery in Delhi. Free eligibility assessment. Dr. Randeep Wadhawan, Max Hospital Dwarka."
        canonical="https://www.randeepwadhawan.com/tools/eligibility"
      />
      <PageHero
        title="Surgery Eligibility Check — Delhi"
        subtitle="Find out if you may be a candidate for bariatric or metabolic surgery at Max Hospital, Dwarka, Delhi."
        breadcrumb="Tools > Surgery Eligibility"
      />

      <section className="py-20">
        <div className="container max-w-2xl">
          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleCheck}
              className="rounded-2xl border border-border bg-card p-8 shadow-medical space-y-6"
            >
              <h2 className="text-xl font-bold font-heading text-foreground">Quick Eligibility Assessment</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Your BMI</label>
                  <Input type="number" step="0.1" placeholder="e.g. 38" value={bmi} onChange={(e) => setBmi(e.target.value)} required min="15" max="80" />
                  <Link to="/tools/bmi-calculator" className="text-xs text-primary mt-1 inline-block">Calculate your BMI →</Link>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Your Age</label>
                  <Input type="number" placeholder="e.g. 42" value={age} onChange={(e) => setAge(e.target.value)} required min="10" max="100" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Do you have any of these conditions?</label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {conditionsList.map((c) => (
                    <label key={c} className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-border"
                        checked={conditions.includes(c)}
                        onChange={(e) => {
                          if (e.target.checked) setConditions([...conditions, c]);
                          else setConditions(conditions.filter((x) => x !== c));
                        }}
                      />
                      {c}
                    </label>
                  ))}
                </div>
              </div>
              <Button type="submit" className="w-full" size="lg">Check Eligibility</Button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-border bg-card p-8 shadow-medical text-center"
            >
              {eligible ? (
                <>
                  <CheckCircle2 className="h-16 w-16 text-secondary mx-auto mb-4" />
                  <h2 className="text-2xl font-bold font-heading text-foreground mb-2">You May Be Eligible!</h2>
                  <p className="text-muted-foreground mb-6">
                    Based on your responses, you may be a suitable candidate for bariatric surgery.
                    We recommend scheduling a consultation for a thorough evaluation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild size="lg">
                      <Link to="/book-appointment">Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>Re-check</Button>
                  </div>
                </>
              ) : (
                <>
                  <XCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h2 className="text-2xl font-bold font-heading text-foreground mb-2">May Not Be Eligible</h2>
                  <p className="text-muted-foreground mb-6">
                    Based on standard criteria, surgery may not be the first recommendation. However,
                    every case is unique — we encourage you to consult Dr. Wadhawan for a personalized assessment.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild>
                      <Link to="/book-appointment">Get Second Opinion</Link>
                    </Button>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>Re-check</Button>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SurgeryEligibilityPage;
