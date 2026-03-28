import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl bg-gradient-hero p-10 md:p-16 text-center"
      >
        <h2 className="text-3xl lg:text-4xl font-bold font-heading text-primary-foreground mb-4">
          Consult Delhi's Best Robotic Surgeon
        </h2>
        <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8 leading-relaxed">
          Schedule a consultation with Dr. Randeep Wadhawan at Max Hospital, Dwarka, New Delhi.
          Discover how robotic surgery can transform your treatment with faster recovery and superior outcomes.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Link to="/contact">
              Book Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <a href="tel:+917042373880">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
