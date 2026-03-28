import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    procedure: "Robotic Sleeve Gastrectomy",
    text: "Dr. Wadhawan's robotic surgery changed my life. I lost 40 kgs and the recovery was incredibly fast. I was back to work within a week!",
  },
  {
    name: "Priya Sharma",
    procedure: "Robotic Hernia Repair",
    text: "I was scared of surgery, but Dr. Wadhawan explained every step. The robotic precision meant minimal pain, and the tiny scars are barely visible now.",
  },
  {
    name: "Amit Patel",
    procedure: "Robotic Gallbladder Surgery",
    text: "After years of digestive issues, the robotic cholecystectomy gave me a new lease on life. Discharged the next day with almost no discomfort.",
  },
];

const TestimonialsSection = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Testimonials</span>
        <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mt-2">
          Patient Success Stories
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 relative"
          >
            <Quote className="h-8 w-8 text-accent-foreground/20 absolute top-6 right-6" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-5">"{t.text}"</p>
            <div>
              <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.procedure}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
