import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
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
            Contact Us
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
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-5 mb-10">
                <a href="tel:+919999999999" className="flex items-center gap-3 text-foreground hover:text-primary transition">
                  <div className="rounded-lg bg-accent p-3"><Phone className="h-5 w-5 text-accent-foreground" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+91 99999 99999</p>
                  </div>
                </a>
                <a href="mailto:info@drrandeep.com" className="flex items-center gap-3 text-foreground hover:text-primary transition">
                  <div className="rounded-lg bg-accent p-3"><Mail className="h-5 w-5 text-accent-foreground" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">info@drrandeep.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-foreground">
                  <div className="rounded-lg bg-accent p-3"><MapPin className="h-5 w-5 text-accent-foreground" /></div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">New Delhi, India</p>
                  </div>
                </div>
              </div>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-secondary/10 px-5 py-3 text-secondary font-medium hover:bg-secondary/20 transition"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-8 shadow-medical space-y-5"
            >
              <h3 className="text-xl font-bold font-heading text-foreground">Book a Consultation</h3>
              <Input placeholder="Full Name" required maxLength={100} />
              <Input type="email" placeholder="Email Address" required maxLength={255} />
              <Input type="tel" placeholder="Phone Number" required maxLength={20} />
              <Input placeholder="Procedure of Interest" maxLength={200} />
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
