import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import { cities, type CityData } from "@/data/cityData";

const groupByState = (list: CityData[]) => {
  const map: Record<string, CityData[]> = {};
  list.forEach((c) => {
    if (!map[c.state]) map[c.state] = [];
    map[c.state].push(c);
  });
  return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
};

const tierLabel: Record<number, string> = { 1: "Metro & NCR Cities", 2: "Tier 2 Cities", 3: "Tier 3 Cities" };

const CitiesPage = () => {
  const grouped = [1, 2, 3].map((tier) => ({
    tier,
    label: tierLabel[tier],
    states: groupByState(cities.filter((c) => c.tier === tier)),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Dr. Randeep Wadhawan — Cities We Serve",
    description: "Best robotic surgeon serving patients from 130+ cities across India. Max Hospital Dwarka, Delhi.",
    url: "https://www.randeepwadhawan.com/cities-we-serve",
    areaServed: cities.map((c) => ({ "@type": "City", name: c.name })),
  };

  return (
    <div>
      <SEOHead
        title="Cities We Serve | Best Robotic Surgeon in India | Dr. Randeep Wadhawan"
        description="Dr. Randeep Wadhawan serves patients from 130+ cities across India — Metro, Tier 2 & Tier 3. Robotic & laparoscopic surgery at Max Hospital Dwarka, Delhi."
        canonical="https://www.randeepwadhawan.com/cities-we-serve"
        jsonLd={jsonLd}
      />
      <PageHero
        title="Cities We Serve"
        subtitle="Patients from across India trust Dr. Randeep Wadhawan for robotic & laparoscopic surgery at Max Super Speciality Hospital, Dwarka, New Delhi"
      />

      <section className="py-16">
        <div className="container">
          {grouped.map(({ tier, label, states }) => (
            <motion.div
              key={tier}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14 last:mb-0"
            >
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {label}
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {states.map(([state, stateCities]) => (
                  <div key={state} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-semibold text-foreground mb-3">{state}</h3>
                    <div className="flex flex-wrap gap-2">
                      {stateCities.map((c) => (
                        <Link
                          key={c.slug}
                          to={`/best-surgeon/${c.slug}`}
                          className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CitiesPage;
