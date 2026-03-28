import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calculator } from "lucide-react";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";

const BMICalculatorPage = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w > 0 && h > 0) {
      setBmi(Math.round((w / (h * h)) * 10) / 10);
    }
  };

  const getCategory = (bmi: number) => {
    if (bmi < 18.5) return { label: "Underweight", color: "text-secondary", suggestion: "You may be underweight. Consult a doctor for nutritional guidance." };
    if (bmi < 25) return { label: "Normal", color: "text-secondary", suggestion: "You are at a healthy weight. Maintain your lifestyle!" };
    if (bmi < 30) return { label: "Overweight", color: "text-yellow-600", suggestion: "You may benefit from lifestyle changes. Consider consulting Dr. Wadhawan for guidance." };
    if (bmi < 35) return { label: "Obese (Class I)", color: "text-orange-600", suggestion: "You may be eligible for bariatric surgery. We recommend a consultation to explore your options." };
    if (bmi < 40) return { label: "Obese (Class II)", color: "text-destructive", suggestion: "Bariatric surgery can be highly effective for you. Book a consultation with Dr. Wadhawan." };
    return { label: "Obese (Class III)", color: "text-destructive", suggestion: "You are a strong candidate for bariatric/metabolic surgery. Contact us today for a personalized assessment." };
  };

  return (
    <div>
      <PageHero
        title="BMI Calculator"
        subtitle="Calculate your Body Mass Index and understand if you may be a candidate for weight loss surgery."
        breadcrumb="Tools > BMI Calculator"
      />

      <section className="py-20">
        <div className="container max-w-2xl">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={calculateBMI}
            className="rounded-2xl border border-border bg-card p-8 shadow-medical space-y-5"
          >
            <h2 className="text-xl font-bold font-heading text-foreground flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" /> Calculate Your BMI
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Weight (kg)</label>
                <Input
                  type="number"
                  placeholder="e.g. 85"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  min="20"
                  max="300"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Height (cm)</label>
                <Input
                  type="number"
                  placeholder="e.g. 170"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  min="100"
                  max="250"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full">Calculate BMI</Button>
          </motion.form>

          {bmi !== null && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 rounded-2xl border border-border bg-card p-8 shadow-medical text-center"
            >
              <p className="text-muted-foreground text-sm mb-2">Your BMI</p>
              <p className={`text-5xl font-extrabold font-heading ${getCategory(bmi).color}`}>{bmi}</p>
              <p className={`text-lg font-semibold font-heading mt-2 ${getCategory(bmi).color}`}>
                {getCategory(bmi).label}
              </p>
              <p className="text-sm text-muted-foreground mt-4 max-w-md mx-auto">
                {getCategory(bmi).suggestion}
              </p>
              {bmi >= 30 && (
                <Button asChild className="mt-6">
                  <Link to="/book-appointment">
                    Book Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </motion.div>
          )}

          {/* BMI Chart */}
          <div className="mt-12 rounded-2xl border border-border bg-card p-6">
            <h3 className="text-lg font-bold font-heading text-foreground mb-4">BMI Categories</h3>
            <div className="space-y-2 text-sm">
              {[
                { range: "Below 18.5", label: "Underweight" },
                { range: "18.5 – 24.9", label: "Normal Weight" },
                { range: "25.0 – 29.9", label: "Overweight" },
                { range: "30.0 – 34.9", label: "Obese Class I" },
                { range: "35.0 – 39.9", label: "Obese Class II — Surgery Eligible" },
                { range: "40.0+", label: "Obese Class III — Strong Surgery Candidate" },
              ].map((row) => (
                <div key={row.range} className="flex justify-between py-2 border-b border-border last:border-0">
                  <span className="text-muted-foreground">{row.range}</span>
                  <span className="font-medium text-foreground">{row.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BMICalculatorPage;
