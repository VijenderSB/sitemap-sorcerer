import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, IndianRupee } from "lucide-react";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";

const procedures = [
  { name: "Robotic Sleeve Gastrectomy", min: 350000, max: 500000 },
  { name: "Robotic Gastric Bypass", min: 400000, max: 600000 },
  { name: "Robotic Mini Gastric Bypass", min: 380000, max: 550000 },
  { name: "Robotic Hernia Repair", min: 200000, max: 350000 },
  { name: "Robotic Gallbladder Surgery", min: 180000, max: 280000 },
  { name: "Laparoscopic Sleeve Gastrectomy", min: 250000, max: 400000 },
  { name: "Laparoscopic Hernia Repair", min: 120000, max: 200000 },
  { name: "Laparoscopic Gallbladder Surgery", min: 100000, max: 180000 },
];

const CostEstimatorPage = () => {
  const [selected, setSelected] = useState("");
  const proc = procedures.find((p) => p.name === selected);

  return (
    <div>
      <PageHero
        title="Surgery Cost Estimator"
        subtitle="Get an approximate cost range for your procedure. Actual costs may vary based on individual needs."
        breadcrumb="Tools > Cost Estimator"
      />

      <section className="py-20">
        <div className="container max-w-2xl">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-medical">
            <h2 className="text-xl font-bold font-heading text-foreground mb-4 flex items-center gap-2">
              <IndianRupee className="h-5 w-5 text-primary" /> Select Procedure
            </h2>
            <select
              className="w-full rounded-md border border-input bg-background px-3 py-3 text-sm text-foreground mb-6"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              <option value="">Choose a procedure...</option>
              {procedures.map((p) => (
                <option key={p.name} value={p.name}>{p.name}</option>
              ))}
            </select>

            {proc && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl bg-muted p-6 text-center"
              >
                <p className="text-sm text-muted-foreground mb-2">Estimated Cost Range</p>
                <p className="text-3xl font-extrabold font-heading text-primary">
                  ₹{(proc.min / 1000).toFixed(0)}K – ₹{(proc.max / 1000).toFixed(0)}K
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  *Costs include surgeon fees, hospital charges, and basic investigations.
                  Actual costs may vary based on hospital, complexity, and insurance coverage.
                </p>
                <Button asChild className="mt-5">
                  <Link to="/book-appointment">Get Exact Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </motion.div>
            )}
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <h3 className="font-heading font-semibold text-foreground mb-3">Insurance Coverage</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Many insurance providers now cover bariatric and robotic surgeries. Our team can help
              you verify your insurance coverage and assist with the claims process. Contact us for details.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CostEstimatorPage;
