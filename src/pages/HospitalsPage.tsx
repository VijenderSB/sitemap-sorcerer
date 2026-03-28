import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, Phone, Clock, Mail, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";

const HospitalsPage = () => (
  <div>
    <SEOHead
      title="Max Hospital Dwarka Delhi | Dr. Randeep Wadhawan Location & Contact"
      description="Visit Dr. Randeep Wadhawan at Max Super Speciality Hospital, Plot No. 1, Sector 10, Dwarka, New Delhi – 110075. Robotic surgery centre. Call +91 7042373880."
      canonical="https://www.randeepwadhawan.com/hospitals"
    />
    <PageHero
      title="Hospital & Location — Delhi"
      subtitle="Dr. Wadhawan consults and operates at Max Super Speciality Hospital, Dwarka, New Delhi."
    />

    <section className="py-20">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-primary/30 bg-card p-8 lg:p-10 shadow-medical-lg"
        >
          <span className="inline-block text-xs font-semibold text-primary bg-accent px-3 py-1 rounded-full mb-4">
            Primary Location
          </span>

          <div className="flex items-start gap-4 mb-8">
            <div className="rounded-xl bg-accent p-3 shrink-0">
              <Building2 className="h-6 w-6 text-accent-foreground" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                Max Super Speciality Hospital, Dwarka
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                A state-of-the-art multi-super speciality hospital equipped with cutting-edge robotic surgical systems, advanced ICU care, and world-class infrastructure. The hospital is accredited as a Centre of Excellence for Bariatric & Metabolic Surgery by OSSI, offering comprehensive care under one roof — from diagnostics and surgery to post-operative rehabilitation.
              </p>

              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  Plot No. 1, Sector 10, Dwarka, New Delhi – 110075
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <a href="tel:+917042373880" className="hover:text-foreground transition">+91 7042373880</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <a href="mailto:randeepwadhawan@yahoo.com" className="hover:text-foreground transition">randeepwadhawan@yahoo.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0 text-primary" />
                  Monday – Saturday: 10:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5!2d77.0422!3d28.5725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b2e6f2a3b7d%3A0x2b1a3c4d5e6f7890!2sMax+Super+Speciality+Hospital%2C+Dwarka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Max Super Speciality Hospital, Dwarka - Location Map"
            />
          </div>
        </motion.div>

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
