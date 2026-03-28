import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight, CheckCircle2, Star, Clock, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { cities, getNearbyCities, type CityData } from "@/data/cityData";
import doctorImg from "@/assets/doctor-portrait.jpg";
import surgeryRoboticImg from "@/assets/surgery-robotic-bariatric.jpg";

const services = [
  {
    title: "Robotic Bariatric Surgery",
    desc: "Da Vinci robotic-assisted weight loss surgery — Sleeve Gastrectomy, Gastric Bypass, Mini Gastric Bypass, Revision Surgery",
    href: "/robotic-bariatric-surgery",
    icon: "🤖",
  },
  {
    title: "Robotic GI Surgery",
    desc: "Gallbladder, appendix, hernia repair, and colon surgery with robotic precision",
    href: "/robotic-gi-surgery",
    icon: "🔬",
  },
  {
    title: "Robotic Advanced GI Surgery",
    desc: "Complex liver, pancreatic (Whipple), splenectomy, and esophageal procedures",
    href: "/robotic-advanced-gi-surgery",
    icon: "⚕️",
  },
  {
    title: "Laparoscopic Bariatric Surgery",
    desc: "Proven keyhole weight loss procedures — Sleeve, Bypass, OAGB, Gastric Banding",
    href: "/laparoscopic-surgery/bariatric",
    icon: "💪",
  },
  {
    title: "Laparoscopic GI Surgery",
    desc: "Minimally invasive hernia, gallbladder, appendix, and colorectal surgery",
    href: "/laparoscopic-surgery/gi",
    icon: "🩺",
  },
  {
    title: "Hernia Surgery",
    desc: "All types — inguinal, umbilical, incisional, hiatus, complex abdominal wall reconstruction",
    href: "/hernia-surgery",
    icon: "🛡️",
  },
];

const whyChoose = [
  { icon: Award, text: "30+ years of surgical excellence" },
  { icon: Star, text: "60,000+ successful procedures" },
  { icon: Shield, text: "Da Vinci robotic surgical system" },
  { icon: Users, text: "FACS(USA), FRCS(Edinburgh) certified" },
  { icon: Clock, text: "Faster recovery — home in 24–48 hours" },
  { icon: CheckCircle2, text: "Centre of Excellence accredited by OSSI" },
];

const faqs = (city: string) => [
  {
    q: `Who is the best robotic surgeon near ${city}?`,
    a: `Dr. Randeep Wadhawan at Max Super Speciality Hospital, Dwarka, New Delhi is widely considered the best robotic surgeon accessible from ${city}. With 60,000+ procedures and 30+ years of experience, he specializes in robotic bariatric, GI, and hernia surgery using the Da Vinci system.`,
  },
  {
    q: `How can patients from ${city} book an appointment?`,
    a: `Patients from ${city} can book a consultation by calling +91 7042373880 or via the online booking form. Tele-consultations are also available for initial assessments before traveling to Delhi.`,
  },
  {
    q: `What is the cost of robotic surgery for patients from ${city}?`,
    a: `The cost varies by procedure. Robotic bariatric surgery typically ranges ₹3–6 lakhs, while robotic hernia repair ranges ₹1.5–3 lakhs. Insurance and cashless options are available at Max Hospital Dwarka. Contact us for a personalized estimate.`,
  },
  {
    q: `Is there accommodation support for patients traveling from ${city}?`,
    a: `Yes, Max Hospital Dwarka assists out-of-city patients with nearby accommodation options, airport/railway station pick-up, and a dedicated patient coordinator to ensure a smooth experience.`,
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const CityLandingPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = cities.find(c => c.slug === citySlug);

  if (!city) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold">City not found</h1>
        <Link to="/" className="text-primary underline mt-4 inline-block">Go to Home</Link>
      </div>
    );
  }

  const nearby = getNearbyCities(city.slug, 8);
  const cityFaqs = faqs(city.name);
  const isNCR = ["gurgaon", "noida", "ghaziabad", "faridabad", "greater-noida"].includes(city.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `Dr. Randeep Wadhawan — Best Robotic Surgeon for ${city.name} Patients`,
    description: `Top robotic & laparoscopic surgeon serving patients from ${city.name}. 60,000+ surgeries. Max Hospital Dwarka, Delhi.`,
    url: `https://www.randeepwadhawan.com/best-surgeon/${city.slug}`,
    telephone: "+917042373880",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 1, Sector 10, Dwarka",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      postalCode: "110075",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    medicalSpecialty: ["Bariatric Surgery", "Gastrointestinal Surgery", "Robotic Surgery", "Hernia Surgery"],
  };

  return (
    <div>
      <SEOHead
        title={`Best Robotic & Laparoscopic Surgeon for ${city.name} Patients | Dr. Randeep Wadhawan`}
        description={`Looking for the best robotic surgeon near ${city.name}? Dr. Randeep Wadhawan at Max Hospital Dwarka, Delhi — 60,000+ surgeries. Robotic bariatric, GI & hernia surgery. Book consultation.`}
        canonical={`https://www.randeepwadhawan.com/best-surgeon/${city.slug}`}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-2 text-sm text-secondary font-semibold mb-4">
                <MapPin className="h-4 w-4" />
                Serving patients from {city.name}, {city.state}
              </div>
              <h1 className="text-3xl lg:text-5xl font-extrabold font-heading text-foreground leading-tight mb-6">
                Best Robotic & Laparoscopic Surgeon for{" "}
                <span className="text-primary">{city.name}</span> Patients
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {isNCR
                  ? `As a neighbouring city to Delhi, ${city.name} patients can easily access Dr. Randeep Wadhawan's world-class robotic surgery expertise at Max Super Speciality Hospital, Dwarka — just a short drive away.`
                  : `Patients from ${city.name} trust Dr. Randeep Wadhawan for advanced robotic and laparoscopic surgery at Max Super Speciality Hospital, Dwarka, New Delhi. With 60,000+ successful procedures and 30+ years of experience, he is India's most sought-after robotic surgeon.`}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/book-appointment">
                    Book Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+917042373880">
                    <Phone className="mr-2 h-4 w-4" />
                    Call +91 7042373880
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={doctorImg}
                alt="Dr. Randeep Wadhawan — Best Robotic Surgeon in Delhi"
                className="rounded-2xl shadow-medical-lg w-full max-w-md mx-auto"
                loading="lazy"
                width={800}
                height={1024}
              />
              <div className="absolute -bottom-4 -right-4 rounded-xl bg-primary p-4 shadow-medical text-primary-foreground">
                <div className="text-2xl font-bold font-heading">60,000+</div>
                <div className="text-xs">Successful Surgeries</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16">
        <div className="container">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground mb-8 text-center">
              Why {city.name} Patients Choose Dr. Wadhawan
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyChoose.map((item) => (
                <div key={item.text} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
                  <item.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground mb-3 text-center">
              Surgical Services Available for {city.name} Patients
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              All procedures performed at Max Super Speciality Hospital, Dwarka, New Delhi using state-of-the-art Da Vinci robotic system and advanced laparoscopic equipment.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link
                  key={s.title}
                  to={s.href}
                  className="group rounded-xl border border-border bg-card p-6 hover:shadow-medical transition-shadow"
                >
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-3">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Travel Info for non-NCR cities */}
      {!isNCR && (
        <section className="py-16">
          <div className="container max-w-4xl">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6 text-center">
                Traveling from {city.name} to Delhi for Surgery?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "📞 Tele-Consultation First", desc: `Get an initial online consultation from ${city.name} before traveling. Assessment, reports review, and surgery planning — all from home.` },
                  { title: "🏥 World-Class Facility", desc: "Max Super Speciality Hospital, Dwarka is equipped with the latest Da Vinci robotic system, advanced ICU, and dedicated bariatric suites." },
                  { title: "🏨 Stay Assistance", desc: "We help arrange nearby accommodation for patients and attendants traveling from outside Delhi. Affordable guest houses and hotels near the hospital." },
                  { title: "🚗 Pick-Up Service", desc: "Airport and railway station pick-up can be arranged. The hospital is well connected via Delhi Metro (Dwarka Sector 10 station)." },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="py-16 bg-muted/50">
        <div className="container max-w-3xl">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl font-bold font-heading text-foreground mb-8 text-center">
              FAQs for {city.name} Patients
            </h2>
            <div className="space-y-4">
              {cityFaqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nearby Cities Interlinking */}
      <section className="py-16">
        <div className="container">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6 text-center">
              Also Serving Patients From
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {nearby.map((c) => (
                <Link
                  key={c.slug}
                  to={`/best-surgeon/${c.slug}`}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {c.name}
                </Link>
              ))}
              <Link
                to="/best-surgeon/delhi"
                className="rounded-full border border-primary bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Delhi (Base)
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center max-w-3xl">
          <h2 className="text-2xl lg:text-3xl font-bold font-heading mb-4">
            Ready to Consult from {city.name}?
          </h2>
          <p className="mb-8 opacity-90">
            Call us or book online. Tele-consultation available for initial assessment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/book-appointment">Book Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="tel:+917042373880">Call +91 7042373880</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityLandingPage;
