import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

const hospitals = [
  {
    name: "Max Super Speciality Hospital, Saket",
    address: "1, Press Enclave Road, Saket, New Delhi – 110017",
    phone: "+91 99999 99999",
    timing: "Monday – Saturday: 10:00 AM – 6:00 PM",
    primary: true,
  },
  {
    name: "Max Hospital, Patparganj",
    address: "108A, I.P. Extension, Patparganj, New Delhi – 110092",
    phone: "+91 99999 99999",
    timing: "By Appointment",
    primary: false,
  },
  {
    name: "Max Hospital, Vaishali",
    address: "W-3, Sector 1, Vaishali, Ghaziabad – 201012",
    phone: "+91 99999 99999",
    timing: "By Appointment",
    primary: false,
  },
];

const HospitalsPage = () => (
  <div>
    <PageHero
      title="Hospitals & Locations"
      subtitle="Dr. Wadhawan consults and operates at India's premier hospitals."
    />

    <section className="py-20">
      <div className="container max-w-4xl">
        <div className="space-y-6">
          {hospitals.map((h, i) => (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl border bg-card p-6 lg:p-8 ${h.primary ? "border-primary/30 shadow-medical-lg" : "border-border"}`}
            >
              {h.primary && (
                <span className="inline-block text-xs font-semibold text-primary bg-accent px-3 py-1 rounded-full mb-4">
                  Primary Location
                </span>
              )}
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-accent p-3 shrink-0">
                  <Building2 className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">{h.name}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> {h.address}</p>
                    <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> {h.phone}</p>
                    <p className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0" /> {h.timing}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/book-appointment">Book Appointment <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default HospitalsPage;
