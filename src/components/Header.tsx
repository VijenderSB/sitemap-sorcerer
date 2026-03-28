import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

interface NavChild {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

interface NavItem {
  name: string;
  href: string;
  children?: NavChild[];
}

const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    children: [
      { name: "About Dr. Wadhawan", href: "/about" },
      { name: "Qualifications", href: "/about#qualifications" },
      { name: "Awards & Recognition", href: "/about#awards" },
      { name: "Memberships", href: "/about#memberships" },
      { name: "Publications", href: "/about#publications" },
      { name: "Gallery", href: "/about/gallery" },
    ],
  },
  {
    name: "Robotic Surgery",
    href: "/robotic-surgery",
    children: [
      { name: "Robotic Surgery Overview", href: "/robotic-surgery" },
      {
        name: "Robotic Bariatric Surgery",
        href: "/robotic-bariatric-surgery",
        children: [
          { name: "Robotic Sleeve Gastrectomy", href: "/robotic-bariatric-surgery/sleeve-gastrectomy" },
          { name: "Robotic Gastric Bypass", href: "/robotic-bariatric-surgery/gastric-bypass" },
          { name: "Robotic Mini Gastric Bypass", href: "/robotic-bariatric-surgery/mini-gastric-bypass" },
          { name: "Robotic Revision Surgery", href: "/robotic-bariatric-surgery/revision-surgery" },
          { name: "Robotic Metabolic Surgery", href: "/robotic-bariatric-surgery/metabolic-surgery" },
        ],
      },
      {
        name: "Robotic GI Surgery",
        href: "/robotic-gi-surgery",
        children: [
          { name: "Robotic Hernia Surgery", href: "/robotic-gi-surgery/hernia" },
          { name: "Robotic Gallbladder Surgery", href: "/robotic-gi-surgery/gallbladder" },
          { name: "Robotic Appendix Surgery", href: "/robotic-gi-surgery/appendix" },
          { name: "Robotic Colon Surgery", href: "/robotic-gi-surgery/colon" },
          { name: "Robotic Rectal Surgery", href: "/robotic-gi-surgery/rectal" },
          { name: "Robotic GI Cancer Surgery", href: "/robotic-gi-surgery/cancer" },
        ],
      },
      {
        name: "Robotic Advanced GI Surgery",
        href: "/robotic-advanced-gi-surgery",
        children: [
          { name: "Robotic Liver Surgery", href: "/robotic-advanced-gi-surgery/liver" },
          { name: "Robotic Pancreatic Surgery", href: "/robotic-advanced-gi-surgery/pancreatic" },
          { name: "Robotic Splenectomy", href: "/robotic-advanced-gi-surgery/splenectomy" },
          { name: "Robotic Achalasia Surgery", href: "/robotic-advanced-gi-surgery/achalasia" },
        ],
      },
      { name: "Why Robotic Surgery", href: "/why-robotic-surgery" },
    ],
  },
  {
    name: "Laparoscopic Surgery",
    href: "/laparoscopic-surgery",
    children: [
      {
        name: "Laparoscopic Bariatric",
        href: "/laparoscopic-surgery/bariatric",
        children: [
          { name: "Lap. Sleeve Gastrectomy", href: "/laparoscopic-surgery/bariatric/sleeve" },
          { name: "Lap. Gastric Bypass", href: "/laparoscopic-surgery/bariatric/gastric-bypass" },
          { name: "Lap. Mini Gastric Bypass", href: "/laparoscopic-surgery/bariatric/mini-gastric-bypass" },
          { name: "Lap. Revision Surgery", href: "/laparoscopic-surgery/bariatric/revision" },
        ],
      },
      {
        name: "Laparoscopic GI Surgery",
        href: "/laparoscopic-surgery/gi",
        children: [
          { name: "Lap. Hernia Surgery", href: "/laparoscopic-surgery/gi/hernia" },
          { name: "Lap. Gallbladder Surgery", href: "/laparoscopic-surgery/gi/gallbladder" },
          { name: "Lap. Appendix Surgery", href: "/laparoscopic-surgery/gi/appendix" },
          { name: "Lap. Colon Surgery", href: "/laparoscopic-surgery/gi/colon" },
          { name: "Lap. Rectal Surgery", href: "/laparoscopic-surgery/gi/rectal" },
        ],
      },
    ],
  },
  {
    name: "Procedures",
    href: "/bariatric-surgery",
    children: [
      { name: "Bariatric Surgery", href: "/bariatric-surgery" },
      { name: "Hernia Surgery", href: "/hernia-surgery" },
      { name: "GI Surgery", href: "/gi-surgery" },
      { name: "Metabolic Surgery", href: "/metabolic-surgery" },
    ],
  },
  {
    name: "Patient Resources",
    href: "/patient-resources",
    children: [
      { name: "Patient Journey", href: "/patient-resources/journey" },
      { name: "FAQs", href: "/patient-resources/faqs" },
      { name: "Before & After", href: "/patient-resources/before-after" },
      { name: "Testimonials", href: "/patient-resources/testimonials" },
      { name: "Insurance & Cost", href: "/patient-resources/insurance" },
    ],
  },
  {
    name: "Media",
    href: "/media",
    children: [
      { name: "Blogs", href: "/media/blogs" },
      { name: "Videos", href: "/media/videos" },
      { name: "Patient Stories", href: "/media/patient-stories" },
      { name: "News & Media", href: "/media/news" },
    ],
  },
  { name: "Hospitals", href: "/hospitals" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [hoveredSub, setHoveredSub] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileSubExpanded, setMobileSubExpanded] = useState<string | null>(null);
  const location = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredMenu(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
      setHoveredSub(null);
    }, 150);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary">
        <div className="container flex items-center justify-between py-2 text-sm text-primary-foreground">
          <span className="hidden sm:block font-body">Robotic GI & Bariatric Surgery Specialist</span>
          <div className="flex items-center gap-4">
            <a href="tel:+919999999999" className="flex items-center gap-1.5 text-primary-foreground hover:opacity-80 transition">
              <Phone className="h-3.5 w-3.5" />
              <span>+91 99999 99999</span>
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-primary-foreground/15 px-3 py-0.5 text-primary-foreground hover:bg-primary-foreground/25 transition font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground font-heading">RW</span>
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-bold font-heading text-foreground">Dr. Randeep Wadhawan</span>
              <span className="block text-xs text-muted-foreground">Robotic & Laparoscopic Surgeon</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-0.5 px-2.5 py-2 text-[13px] font-medium rounded-md transition-colors ${
                    location.pathname === item.href || location.pathname.startsWith(item.href + "/")
                      ? "text-primary bg-accent"
                      : "text-foreground hover:text-primary hover:bg-accent"
                  }`}
                >
                  {item.name}
                  {item.children && <ChevronDown className="h-3 w-3" />}
                </Link>

                {/* Mega menu dropdown */}
                {item.children && hoveredMenu === item.name && (
                  <div
                    className="absolute top-full left-0 pt-1"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="min-w-[240px] rounded-xl border border-border bg-popover p-2 shadow-medical-lg">
                      {item.children.map((child) => (
                        <div
                          key={child.href}
                          className="relative"
                          onMouseEnter={() => child.children && setHoveredSub(child.name)}
                          onMouseLeave={() => !child.children && setHoveredSub(null)}
                        >
                          <Link
                            to={child.href}
                            className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-popover-foreground hover:bg-accent transition-colors"
                          >
                            {child.name}
                            {child.children && <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />}
                          </Link>

                          {/* Sub-submenu */}
                          {child.children && hoveredSub === child.name && (
                            <div className="absolute left-full top-0 ml-1">
                              <div className="min-w-[220px] rounded-xl border border-border bg-popover p-2 shadow-medical-lg">
                                {child.children.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    to={sub.href}
                                    className="block rounded-md px-3 py-2 text-sm text-popover-foreground hover:bg-accent transition-colors"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link to="/book-appointment">Book Appointment</Link>
            </Button>
            <button
              className="xl:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-border xl:hidden bg-background max-h-[80vh] overflow-y-auto"
            >
              <nav className="container py-4 space-y-0.5">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center">
                      <Link
                        to={item.href}
                        className="flex-1 rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors"
                        onClick={() => !item.children && setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.children && (
                        <button
                          className="p-2 text-muted-foreground"
                          onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === item.name ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    {item.children && mobileExpanded === item.name && (
                      <div className="pl-4 space-y-0.5">
                        {item.children.map((child) => (
                          <div key={child.href}>
                            <div className="flex items-center">
                              <Link
                                to={child.href}
                                className="flex-1 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent transition-colors"
                                onClick={() => !child.children && setMobileOpen(false)}
                              >
                                {child.name}
                              </Link>
                              {child.children && (
                                <button
                                  className="p-2 text-muted-foreground"
                                  onClick={() => setMobileSubExpanded(mobileSubExpanded === child.name ? null : child.name)}
                                >
                                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mobileSubExpanded === child.name ? "rotate-180" : ""}`} />
                                </button>
                              )}
                            </div>
                            {child.children && mobileSubExpanded === child.name && (
                              <div className="pl-4 space-y-0.5">
                                {child.children.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    to={sub.href}
                                    className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground hover:bg-accent transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3">
                  <Button asChild className="w-full">
                    <Link to="/book-appointment" onClick={() => setMobileOpen(false)}>Book Appointment</Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
