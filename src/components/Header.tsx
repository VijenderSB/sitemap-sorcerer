import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Robotic Surgery",
    href: "/robotic-surgery",
    children: [
      { name: "What is Robotic Surgery", href: "/robotic-surgery" },
      { name: "Robotic Bariatric Surgery", href: "/robotic-bariatric-surgery" },
      { name: "Robotic GI Surgery", href: "/robotic-gi-surgery" },
    ],
  },
  {
    name: "Laparoscopic Surgery",
    href: "/laparoscopic-surgery",
  },
  {
    name: "Bariatric Surgery",
    href: "/bariatric-surgery",
  },
  { name: "About", href: "/about" },
  { name: "Patient Resources", href: "/patient-resources" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const location = useLocation();

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
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground font-heading">RW</span>
            </div>
            <div className="leading-tight">
              <span className="block text-sm font-bold font-heading text-foreground">Dr. Randeep Wadhawan</span>
              <span className="block text-xs text-muted-foreground">Robotic & Laparoscopic Surgeon</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setHoveredMenu(item.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === item.href
                      ? "text-primary bg-accent"
                      : "text-foreground hover:text-primary hover:bg-accent"
                  }`}
                >
                  {item.name}
                  {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                {item.children && hoveredMenu === item.name && (
                  <div className="absolute top-full left-0 pt-1">
                    <div className="w-60 rounded-lg border border-border bg-popover p-2 shadow-medical-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block rounded-md px-3 py-2 text-sm text-popover-foreground hover:bg-accent transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild className="hidden sm:inline-flex">
              <Link to="/contact">Book Consultation</Link>
            </Button>
            <button
              className="lg:hidden p-2 text-foreground"
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
              className="overflow-hidden border-t border-border lg:hidden bg-background"
            >
              <nav className="container py-4 space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.children?.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block rounded-md px-6 py-2 text-sm text-muted-foreground hover:bg-accent transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ))}
                <div className="pt-3">
                  <Button asChild className="w-full">
                    <Link to="/contact" onClick={() => setMobileOpen(false)}>Book Consultation</Link>
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
