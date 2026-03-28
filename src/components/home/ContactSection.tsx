import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section className="py-20 border-t border-border">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Get in Touch</span>
        <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mt-2">Contact Us in Delhi</h2>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
        {[
          { icon: Phone, label: "Call", value: "+91 99999 99999", href: "tel:+919999999999" },
          { icon: MessageCircle, label: "WhatsApp", value: "Quick Chat", href: "https://wa.me/919999999999" },
          { icon: Mail, label: "Email", value: "info@drrandeep.com", href: "mailto:info@drrandeep.com" },
          { icon: MapPin, label: "Location", value: "New Delhi, India", href: "/hospitals" },
        ].map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="rounded-2xl border border-border bg-card p-6 text-center hover:shadow-medical transition-shadow block"
          >
            <div className="inline-flex rounded-xl bg-accent p-3 mb-3">
              <c.icon className="h-5 w-5 text-accent-foreground" />
            </div>
            <p className="font-heading font-semibold text-foreground text-sm">{c.label}</p>
            <p className="text-xs text-muted-foreground mt-1">{c.value}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
