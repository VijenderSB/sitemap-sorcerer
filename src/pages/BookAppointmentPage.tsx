import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Send, ArrowRight, Calendar, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";

const BookAppointmentPage = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Appointment Request Sent!", description: "Our team will confirm your appointment shortly." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div>
      <PageHero
        title="Book Your Appointment"
        subtitle="Schedule a consultation with Dr. Randeep Wadhawan — India's leading robotic surgeon."
      />

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left side - quick actions */}
            <div>
              <h2 className="text-2xl font-bold font-heading text-foreground mb-2">Quick Appointment</h2>
              <p className="text-muted-foreground mb-8">Choose your preferred way to connect with us.</p>

              <div className="space-y-4 mb-10">
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:shadow-medical transition-shadow"
                >
                  <div className="rounded-xl bg-accent p-3"><Phone className="h-6 w-6 text-accent-foreground" /></div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">Call Now</p>
                    <p className="text-sm text-muted-foreground">+91 99999 99999</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground ml-auto" />
                </a>

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:shadow-medical transition-shadow"
                >
                  <div className="rounded-xl bg-secondary/10 p-3"><MessageCircle className="h-6 w-6 text-secondary" /></div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Quick response on WhatsApp</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground ml-auto" />
                </a>

                <a
                  href="mailto:info@drrandeep.com"
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:shadow-medical transition-shadow"
                >
                  <div className="rounded-xl bg-accent p-3"><Mail className="h-6 w-6 text-accent-foreground" /></div>
                  <div>
                    <p className="font-heading font-semibold text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">info@drrandeep.com</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground ml-auto" />
                </a>
              </div>

              <div className="rounded-2xl bg-muted p-6 space-y-4">
                <h3 className="font-heading font-semibold text-foreground flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" /> Consultation Hours
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Monday – Friday: 10:00 AM – 6:00 PM</p>
                  <p>Saturday: 10:00 AM – 2:00 PM</p>
                  <p>Sunday: By Appointment Only</p>
                </div>
                <div className="flex items-start gap-2 mt-4">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">Max Super Speciality Hospital, Saket, New Delhi</p>
                </div>
              </div>
            </div>

            {/* Right side - form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-8 shadow-medical space-y-5"
            >
              <h3 className="text-xl font-bold font-heading text-foreground flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" /> Online Booking Form
              </h3>
              <p className="text-sm text-muted-foreground">Fill in your details and we'll confirm your appointment.</p>
              <Input placeholder="Full Name *" required maxLength={100} />
              <Input type="email" placeholder="Email Address *" required maxLength={255} />
              <Input type="tel" placeholder="Phone Number *" required maxLength={20} />
              <Input placeholder="Preferred Date" type="date" />
              <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground">
                <option value="">Select Procedure of Interest</option>
                <option>Robotic Bariatric Surgery</option>
                <option>Robotic GI Surgery</option>
                <option>Robotic Hernia Surgery</option>
                <option>Laparoscopic Surgery</option>
                <option>Weight Loss Surgery</option>
                <option>Second Opinion</option>
                <option>Other</option>
              </select>
              <Textarea placeholder="Additional Message" rows={4} maxLength={1000} />
              <Button type="submit" className="w-full" size="lg" disabled={sending}>
                <Send className="mr-2 h-4 w-4" />
                {sending ? "Sending..." : "Request Appointment"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Your information is secure and will only be used to schedule your appointment.
              </p>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookAppointmentPage;
