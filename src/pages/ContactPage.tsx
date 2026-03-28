import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message Sent", description: "We'll get back to you shortly." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div>
      <section className="bg-gradient-hero py-20">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-extrabold font-heading text-primary-foreground text-center"
          >
            Reach Us
          </motion.h1>
          <p className="text-primary-foreground/70 text-center mt-4 max-w-xl mx-auto">
            Book a consultation or get a second opinion from Dr. Randeep Wadhawan.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold font-heading text-foreground mb-2">Dr. Randeep Wadhawan</h2>
              <p className="text-sm font-semibold text-primary mb-4">
                MBBS, MS, FICS, FALS, FMBS, FACS(USA), FRCS(Ed)
              </p>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                Chairman – Gastrointestinal, Bariatric, Laparoscopic, and Robotic Surgery<br />
                Max Super Speciality Hospital Dwarka<br />
                (A Unit of Muthoot Hospitals Pvt Ltd.)
              </p>

              <div className="space-y-5 mb-10">
                <a href="tel:+917042373880" className="flex items-center gap-3 text-foreground hover:text-primary transition">
                  <div className="rounded-lg bg-accent p-3"><Phone className="h-5 w-5 text-accent-foreground" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Mobile</p>
                    <p className="font-medium">+91 7042373880</p>
                  </div>
                </a>
                <a href="mailto:randeepwadhawan@yahoo.com" className="flex items-center gap-3 text-foreground hover:text-primary transition">
                  <div className="rounded-lg bg-accent p-3"><Mail className="h-5 w-5 text-accent-foreground" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">randeepwadhawan@yahoo.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-foreground">
                  <div className="rounded-lg bg-accent p-3"><MapPin className="h-5 w-5 text-accent-foreground" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Plot No. 1, Sector 10, Dwarka, New Delhi – 110075</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <div className="rounded-lg bg-accent p-3"><Clock className="h-5 w-5 text-accent-foreground" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Timings</p>
                    <p className="font-medium">10:00 AM to 6:00 PM</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919810155826"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-secondary/10 px-5 py-3 text-secondary font-medium hover:bg-secondary/20 transition"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>

              {/* Google Map */}
              <div className="mt-10 rounded-xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5!2d77.0367!3d28.5823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b2e6f2a3b7d%3A0x6b3b3b3b3b3b3b3b!2sMax+Super+Speciality+Hospital%2C+Dwarka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Max Super Speciality Hospital, Dwarka Location"
                />
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-8 shadow-medical space-y-5 h-fit"
            >
              <h3 className="text-xl font-bold font-heading text-foreground">Book a Consultation</h3>
              <Input placeholder="Full Name" required maxLength={100} />
              <Input type="tel" placeholder="Phone Number" required maxLength={20} />
              <Input placeholder="Procedure of Interest" maxLength={200} />
              <Input placeholder="Country" maxLength={100} />
              <Textarea placeholder="Your Message" rows={4} maxLength={1000} />
              <Button type="submit" className="w-full" disabled={sending}>
                <Send className="mr-2 h-4 w-4" />
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
