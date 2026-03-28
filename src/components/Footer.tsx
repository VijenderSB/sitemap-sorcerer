import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ChevronRight, Facebook, Instagram, Youtube, Twitter, Linkedin } from "lucide-react";


const footerLinks = [
  {
    title: "Robotic Surgery",
    links: [
      { name: "Robotic Surgery Overview", href: "/robotic-surgery" },
      { name: "Robotic Bariatric Surgery", href: "/robotic-bariatric-surgery" },
      { name: "Robotic GI Surgery", href: "/robotic-gi-surgery" },
      { name: "Robotic Advanced GI Surgery", href: "/robotic-advanced-gi-surgery" },
      { name: "Why Robotic Surgery", href: "/why-robotic-surgery" },
    ],
  },
  {
    title: "Laparoscopic Surgery",
    links: [
      { name: "Laparoscopic Bariatric", href: "/laparoscopic-surgery/bariatric" },
      { name: "Laparoscopic GI Surgery", href: "/laparoscopic-surgery/gi" },
      { name: "Lap. Sleeve Gastrectomy", href: "/laparoscopic-surgery/bariatric/sleeve" },
      { name: "Lap. Gastric Bypass", href: "/laparoscopic-surgery/bariatric/gastric-bypass" },
      { name: "Lap. Hernia Surgery", href: "/laparoscopic-surgery/gi/hernia" },
    ],
  },
  {
    title: "Procedures",
    links: [
      { name: "Bariatric Surgery", href: "/bariatric-surgery" },
      { name: "Hernia Surgery", href: "/hernia-surgery" },
      { name: "GI Surgery", href: "/gi-surgery" },
      { name: "Metabolic Surgery", href: "/metabolic-surgery" },
      { name: "Obesity Management", href: "/obesity-management" },
    ],
  },
  {
    title: "Patient Resources",
    links: [
      { name: "Patient Journey", href: "/patient-resources/journey" },
      { name: "FAQs", href: "/patient-resources/faqs" },
      { name: "Before & After", href: "/patient-resources/before-after" },
      { name: "Testimonials", href: "/media/patient-stories" },
      { name: "Insurance & Cost", href: "/patient-resources/insurance" },
    ],
  },
  {
    title: "Media & Resources",
    links: [
      { name: "Blogs", href: "/media/blogs" },
      { name: "Videos", href: "/media/videos" },
      { name: "Patient Stories", href: "/media/patient-stories" },
      { name: "News & Media", href: "/media/news" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "About Dr. Wadhawan", href: "/about" },
      { name: "Hospitals & Locations", href: "/hospitals" },
      { name: "Book Appointment", href: "/book-appointment" },
      { name: "Contact Us", href: "/contact" },
      { name: "Cities We Serve", href: "/cities-we-serve" },
      { name: "BMI Calculator", href: "/bmi-calculator" },
    ],
  },
  {
    title: "Tools",
    links: [
      { name: "BMI Calculator", href: "/bmi-calculator" },
      { name: "Surgery Eligibility", href: "/surgery-eligibility" },
      { name: "Cost Estimator", href: "/cost-estimator" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-medical-navy text-primary-foreground/80">
    <div className="container py-16">
      {/* Top row: Doctor details + contact */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12 pb-10 border-b border-primary-foreground/10">
        <div className="lg:col-span-2">
          <div className="mb-4">
            <span className="block font-heading font-bold text-primary-foreground text-xl leading-tight">Dr. Randeep Wadhawan</span>
            <span className="block text-[10px] text-primary-foreground/50 mt-1">MBBS, MS, FICS, FALS, FMBS, FACS(USA), FRCS(Ed)</span>
          </div>
          <p className="text-sm leading-relaxed text-primary-foreground/60 max-w-xl mb-4">
            <span className="whitespace-nowrap">Chairman – Gastrointestinal, Bariatric, Laparoscopic, and Robotic Surgery</span><br />
            Max Super Speciality Hospital Dwarka<br />
            (A Unit of Muthoot Hospitals Pvt Ltd.)
          </p>
          <p className="text-sm text-primary-foreground/60">
            Plot No. 1, Sector 10, Dwarka, New Delhi – 110075
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href="https://www.facebook.com/DrRandeepWadhawan" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/80 transition">
              <Facebook className="h-4 w-4 text-primary-foreground" />
            </a>
            <a href="https://www.instagram.com/drrandeepwadhawan" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/80 transition">
              <Instagram className="h-4 w-4 text-primary-foreground" />
            </a>
            <a href="https://www.youtube.com/@DrRandeepWadhawan" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/80 transition">
              <Youtube className="h-4 w-4 text-primary-foreground" />
            </a>
            <a href="https://twitter.com/DrRWadhawan" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/80 transition">
              <Twitter className="h-4 w-4 text-primary-foreground" />
            </a>
            <a href="https://www.linkedin.com/in/drrandeepwadhawan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/80 transition">
              <Linkedin className="h-4 w-4 text-primary-foreground" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              <a href="tel:+917042373880" className="hover:text-primary-foreground transition">+91 7042373880</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <a href="mailto:randeepwadhawan@yahoo.com" className="hover:text-primary-foreground transition">randeepwadhawan@yahoo.com</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>Max Super Speciality Hospital, Dwarka, New Delhi</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-primary-foreground mb-4">Timings</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>Mon – Sat: 10:00 AM – 6:00 PM</li>
            <li>Sunday: By Appointment</li>
          </ul>
          <div className="mt-4">
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
            >
              Book Appointment
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 className="font-heading font-semibold text-primary-foreground mb-3 text-sm">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href + link.name}>
                  <Link
                    to={link.href}
                    className="text-xs text-primary-foreground/50 hover:text-primary-foreground transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/10">
      <div className="container flex flex-col sm:flex-row items-center justify-between py-5 text-xs text-primary-foreground/40">
        <span>© 2026 Dr. Randeep Wadhawan. All rights reserved.</span>
        <span className="mt-2 sm:mt-0">Robotic GI & Bariatric Surgery Specialist</span>
      </div>
    </div>
  </footer>
);

export default Footer;
