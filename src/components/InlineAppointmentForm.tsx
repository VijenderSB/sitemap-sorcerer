import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Phone, ArrowRight, User, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

interface InlineAppointmentFormProps {
  heading?: string;
  subheading?: string;
  variant?: "default" | "dark";
}

const InlineAppointmentForm = ({
  heading = "Book Your Appointment",
  subheading = "Fill in your details and we'll get back to you within 24 hours.",
  variant = "default",
}: InlineAppointmentFormProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", age: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) errs.name = "Please enter your name";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.trim())) errs.phone = "Enter valid 10-digit mobile";
    const ageNum = parseInt(form.age);
    if (!form.age || isNaN(ageNum) || ageNum < 1 || ageNum > 120) errs.age = "Enter valid age (1–120)";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const msg = encodeURIComponent(
      `Appointment Request:\nName: ${form.name.trim()}\nPhone: ${form.phone.trim()}\nAge: ${form.age.trim()}\nCondition: ${form.message.trim() || "Not specified"}`
    );
    window.open(`https://wa.me/917042373880?text=${msg}`, "_blank");

    toast({ title: "Appointment Request Sent!", description: "We'll contact you within 24 hours." });
    setForm({ name: "", phone: "", age: "", message: "" });
    setErrors({});
  };

  const isDark = variant === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`rounded-2xl border p-6 sm:p-8 ${
        isDark
          ? "bg-gradient-to-br from-primary to-primary/90 border-primary/20 text-primary-foreground"
          : "bg-card border-border shadow-medical"
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        <Calendar className={`h-5 w-5 ${isDark ? "text-secondary" : "text-secondary"}`} />
        <h3 className={`text-xl font-heading font-bold ${isDark ? "text-primary-foreground" : "text-foreground"}`}>
          {heading}
        </h3>
      </div>
      <p className={`text-sm mb-6 ${isDark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {subheading}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <div className="relative">
              <User className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${isDark ? "text-primary-foreground/40" : "text-muted-foreground"}`} />
              <Input
                placeholder="Full Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className={`pl-10 ${isDark ? "bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40" : ""}`}
              />
            </div>
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <div className="relative">
              <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${isDark ? "text-primary-foreground/40" : "text-muted-foreground"}`} />
              <Input
                placeholder="Mobile Number *"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                maxLength={10}
                className={`pl-10 ${isDark ? "bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40" : ""}`}
              />
            </div>
            {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <div className="relative">
              <CalendarDays className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${isDark ? "text-primary-foreground/40" : "text-muted-foreground"}`} />
              <Input
                placeholder="Age *"
                type="number"
                min={1}
                max={120}
                value={form.age}
                onChange={(e) => setForm({ ...form, age: e.target.value })}
                className={`pl-10 ${isDark ? "bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40" : ""}`}
              />
            </div>
            {errors.age && <p className="text-destructive text-xs mt-1">{errors.age}</p>}
          </div>
          <Textarea
            placeholder="Briefly describe your condition..."
            rows={1}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            maxLength={500}
            className={`resize-none ${isDark ? "bg-primary-foreground/10 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/40" : ""}`}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button
            type="submit"
            size="lg"
            className={`w-full sm:w-auto ${isDark ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground" : "bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground"}`}
          >
            Request Appointment <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className={`text-xs ${isDark ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
            Or call: <a href="tel:+917042373880" className="underline hover:opacity-80">+91 7042373880</a> · Your details are confidential 🔒
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default InlineAppointmentForm;
