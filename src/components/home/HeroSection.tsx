import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Phone, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroBg from "@/assets/hero-bg.jpg";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", age: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Appointment Request Sent", description: "We will contact you shortly to confirm your appointment." });
    setForm({ name: "", phone: "", age: "", message: "" });
  };

  return (
    <section className="relative overflow-hidden min-h-[60vh] flex items-center">
      <img
        src={heroBg}
        alt="Robotic surgery technology"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1024}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-medical-navy/95 via-medical-navy/80 to-medical-navy/40" />

      <div className="container relative z-10 py-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-1.5 text-sm text-primary-foreground/90 backdrop-blur-sm">
                <Shield className="h-3.5 w-3.5" />
                Delhi's Leading Robotic Surgeon | Max Hospital Dwarka
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading leading-tight text-primary-foreground mb-6"
            >
              Best Robotic Surgeon in Delhi for{" "}
              <span className="text-medical-teal">GI & Bariatric Surgery</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-primary-foreground/70 mb-8 max-w-lg leading-relaxed"
            >
              <span className="block font-semibold text-primary-foreground/90 whitespace-nowrap mb-2">Chairman – Gastrointestinal, Bariatric, Laparoscopic, and Robotic Surgery<br />Max Super Speciality Hospital Dwarka</span>
              Dr. Randeep Wadhawan — Delhi's top robotic surgeon with 20+ years of expertise in robotic GI &
              bariatric surgery at Max Hospital, Dwarka. Smaller incisions. Faster recovery. Superior results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" variant="outline" asChild className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link to="/robotic-surgery">Explore Robotic Surgery</Link>
              </Button>
            </motion.div>
          </div>

          {/* Right - Appointment Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur-md p-6 sm:p-8 space-y-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-secondary" />
                <h3 className="text-lg font-heading font-bold text-primary-foreground">Book Appointment</h3>
              </div>
              <p className="text-sm text-primary-foreground/60 -mt-2 mb-4">Fill in your details and we'll get back to you within 24 hours.</p>

              <Input
                placeholder="Full Name *"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-secondary"
              />
              <Input
                placeholder="Phone Number *"
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-secondary"
              />
              <Input
                placeholder="Age *"
                required
                type="number"
                min="1"
                max="120"
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                className="bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-secondary"
              />
              <Textarea
                placeholder="Briefly describe your condition..."
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-secondary resize-none"
              />
              <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Request Appointment <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-xs text-primary-foreground/40 text-center">
                Or call us: <a href="tel:+917042373880" className="underline text-primary-foreground/60 hover:text-primary-foreground"><Phone className="inline h-3 w-3" /> +91 7042373880</a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
