import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden min-h-[60vh] flex items-center">
    <img
      src={heroBg}
      alt="Robotic surgery technology"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1024}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-medical-navy/95 via-medical-navy/80 to-transparent" />

    <div className="container relative z-10 py-14">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-sm text-primary-foreground/90 backdrop-blur-sm">
            <Shield className="h-3.5 w-3.5" />
            India's Leading Robotic Surgeon
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading leading-tight text-primary-foreground mb-6"
        >
          Precision Robotic Surgery for{" "}
          <span className="text-medical-teal">Better Outcomes</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-primary-foreground/70 mb-8 max-w-lg leading-relaxed"
        >
          Dr. Randeep Wadhawan — 20+ years of expertise in robotic GI &
          bariatric surgery. Smaller incisions. Faster recovery. Superior results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Link to="/book-appointment">
              Book Appointment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/robotic-surgery">Explore Robotic Surgery</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
