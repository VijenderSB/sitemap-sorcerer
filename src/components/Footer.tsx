import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-medical-navy text-primary-foreground/80">
    <div className="container py-16">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10">
              <span className="text-lg font-bold text-primary-foreground font-heading">RW</span>
            </div>
            <span className="font-heading font-bold text-primary-foreground">Dr. Randeep Wadhawan</span>
          </div>
          <p className="text-sm leading-relaxed text-primary-foreground/60">
            Leading Robotic GI & Bariatric Surgeon with 20+ years of experience in minimally invasive surgery.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">Robotic Surgery</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/robotic-bariatric-surgery" className="hover:text-primary-foreground transition">Robotic Bariatric Surgery</Link></li>
            <li><Link to="/robotic-gi-surgery" className="hover:text-primary-foreground transition">Robotic GI Surgery</Link></li>
            <li><Link to="/laparoscopic-surgery" className="hover:text-primary-foreground transition">Laparoscopic Surgery</Link></li>
            <li><Link to="/bariatric-surgery" className="hover:text-primary-foreground transition">Bariatric Surgery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-primary-foreground transition">About Doctor</Link></li>
            <li><Link to="/patient-resources" className="hover:text-primary-foreground transition">Patient Resources</Link></li>
            <li><Link to="/media" className="hover:text-primary-foreground transition">Media & Blogs</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              <a href="tel:+919999999999" className="hover:text-primary-foreground transition">+91 99999 99999</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <a href="mailto:info@drrandeep.com" className="hover:text-primary-foreground transition">info@drrandeep.com</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>New Delhi, India</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container flex flex-col sm:flex-row items-center justify-between py-5 text-xs text-primary-foreground/40">
        <span>© 2026 Dr. Randeep Wadhawan. All rights reserved.</span>
        <span className="mt-2 sm:mt-0">Robotic GI & Bariatric Surgery Specialist</span>
      </div>
    </div>
  </footer>
);

export default Footer;
