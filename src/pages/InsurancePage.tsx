import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, FileCheck, CreditCard } from "lucide-react";
import PageHero from "@/components/PageHero";

const InsurancePage = () => (
  <div>
    <PageHero
      title="Insurance & Cost Information"
      subtitle="Transparent pricing and insurance support for your surgical journey."
      breadcrumb="Patient Resources > Insurance & Cost"
    />

    <section className="py-20">
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Shield, title: "Insurance Coverage", desc: "We work with all major insurance providers including HDFC Ergo, Star Health, ICICI Lombard, New India Assurance, and more." },
            { icon: FileCheck, title: "Claims Assistance", desc: "Our dedicated team handles insurance pre-authorization and claims processing to minimize your hassle." },
            { icon: CreditCard, title: "Payment Options", desc: "We offer multiple payment options including cash, cards, bank transfers, and EMI options through select partners." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="rounded-xl bg-accent p-3 inline-flex mb-4">
                <item.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="text-xl font-bold font-heading text-foreground mb-4">Insurance Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {[
              "Star Health", "HDFC Ergo", "ICICI Lombard",
              "New India Assurance", "Max Bupa", "Bajaj Allianz",
              "United India", "National Insurance", "Niva Bupa",
            ].map((ins) => (
              <div key={ins} className="rounded-lg bg-muted p-3 text-center text-sm font-medium text-foreground">
                {ins}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            This is not an exhaustive list. Contact us to verify your specific insurance coverage.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/tools/cost-estimator">View Cost Estimates <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/book-appointment">Verify Your Insurance</Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default InsurancePage;
