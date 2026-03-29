import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { User, Phone, CalendarDays, X } from "lucide-react";

const SESSION_KEY = "drw_lead_submitted";

// Global event for CTA buttons to trigger popup
export const openLeadPopup = () => {
  window.dispatchEvent(new CustomEvent("open-lead-popup"));
};

const LeadCapturePopup = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const alreadySubmitted = () => sessionStorage.getItem(SESSION_KEY) === "true";

  // Auto-open after 10 seconds
  useEffect(() => {
    if (alreadySubmitted()) return;
    const timer = setTimeout(() => {
      if (!alreadySubmitted()) setOpen(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  // Listen for CTA button clicks
  const handleCtaOpen = useCallback(() => {
    if (!alreadySubmitted()) setOpen(true);
  }, []);

  useEffect(() => {
    window.addEventListener("open-lead-popup", handleCtaOpen);
    return () => window.removeEventListener("open-lead-popup", handleCtaOpen);
  }, [handleCtaOpen]);

  const validate = () => {
    const errs: Record<string, string> = {};
    const trimmedName = name.trim();
    const trimmedAge = age.trim();
    const trimmedMobile = mobile.trim();

    if (!trimmedName || trimmedName.length < 2) errs.name = "Please enter your name";
    if (trimmedName.length > 100) errs.name = "Name is too long";

    const ageNum = parseInt(trimmedAge);
    if (!trimmedAge || isNaN(ageNum) || ageNum < 1 || ageNum > 120) errs.age = "Enter a valid age (1–120)";

    if (!trimmedMobile || !/^[6-9]\d{9}$/.test(trimmedMobile)) errs.mobile = "Enter a valid 10-digit mobile number";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build WhatsApp message
    const message = encodeURIComponent(
      `New Enquiry:\nName: ${name.trim()}\nAge: ${age.trim()}\nMobile: ${mobile.trim()}`
    );
    window.open(`https://wa.me/917042373880?text=${message}`, "_blank");

    sessionStorage.setItem(SESSION_KEY, "true");
    setSubmitted(true);
    toast({ title: "Thank you!", description: "Your enquiry has been sent. We'll contact you shortly." });

    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setName("");
      setAge("");
      setMobile("");
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border-0 rounded-2xl">
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-primary to-secondary p-6 text-primary-foreground">
          <DialogHeader>
            <p className="text-sm text-primary-foreground/80">Book Your Consultation with</p>
            <DialogTitle className="text-xl font-bold text-primary-foreground">
              Dr. Randeep Wadhawan
            </DialogTitle>
            <DialogDescription className="text-primary-foreground/80 mt-1 text-xs leading-relaxed">
              MBBS, MS, FICS, FALS, FMBS, FACS(USA), FRCS(Ed)<br />
              Chairman – GI, Bariatric, Laparoscopic &amp; Robotic Surgery<br />
              Max Super Speciality Hospital Dwarka
            </DialogDescription>
          </DialogHeader>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <p className="text-lg font-semibold text-foreground">Thank You!</p>
            <p className="text-muted-foreground text-sm mt-1">We'll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <Label htmlFor="lead-name" className="text-sm font-medium text-foreground">Full Name</Label>
              <div className="relative mt-1.5">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="lead-name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10"
                  maxLength={100}
                />
              </div>
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="lead-age" className="text-sm font-medium text-foreground">Age</Label>
              <div className="relative mt-1.5">
                <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="lead-age"
                  type="number"
                  placeholder="Your age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="pl-10"
                  min={1}
                  max={120}
                />
              </div>
              {errors.age && <p className="text-destructive text-xs mt-1">{errors.age}</p>}
            </div>

            <div>
              <Label htmlFor="lead-mobile" className="text-sm font-medium text-foreground">Mobile Number</Label>
              <div className="relative mt-1.5">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="lead-mobile"
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="pl-10"
                  maxLength={10}
                />
              </div>
              {errors.mobile && <p className="text-destructive text-xs mt-1">{errors.mobile}</p>}
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold py-5 text-base rounded-xl">
              Book Free Consultation
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Your details are safe & confidential 🔒
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadCapturePopup;
