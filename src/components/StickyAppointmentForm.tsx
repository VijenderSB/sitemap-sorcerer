import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Phone, ArrowRight, X, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const StickyAppointmentForm = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", age: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) errs.name = "Enter your name";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.trim())) errs.phone = "Enter valid 10-digit mobile";
    const ageNum = parseInt(form.age);
    if (!form.age || isNaN(ageNum) || ageNum < 1 || ageNum > 120) errs.age = "Enter valid age";
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
    setOpen(false);
  };

  return (
    <>
      {/* Floating toggle button — positioned above WhatsApp button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-24 right-6 z-50 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Book Appointment"
          >
            <Calendar className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sliding form panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm z-50 bg-card shadow-2xl border-l border-border overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-secondary" />
                    <h3 className="text-lg font-heading font-bold text-foreground">Book Appointment</h3>
                  </div>
                  <button onClick={() => setOpen(false)} className="p-1.5 rounded-full hover:bg-muted transition-colors" aria-label="Close">
                    <X className="h-5 w-5 text-muted-foreground" />
                  </button>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  Fill in your details and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Full Name *"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      maxLength={100}
                      className="border-border"
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <Input
                      placeholder="Mobile Number *"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                      maxLength={10}
                      className="border-border"
                    />
                    {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <Input
                      placeholder="Age *"
                      type="number"
                      min={1}
                      max={120}
                      value={form.age}
                      onChange={(e) => setForm({ ...form, age: e.target.value })}
                      className="border-border"
                    />
                    {errors.age && <p className="text-destructive text-xs mt-1">{errors.age}</p>}
                  </div>

                  <Textarea
                    placeholder="Briefly describe your condition..."
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    maxLength={500}
                    className="border-border resize-none"
                  />

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground">
                    Request Appointment <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Or call us: <a href="tel:+917042373880" className="underline hover:text-foreground"><Phone className="inline h-3 w-3" /> +91 7042373880</a>
                  </p>

                  <p className="text-center text-xs text-muted-foreground">
                    Your details are safe & confidential 🔒
                  </p>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default StickyAppointmentForm;
