import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";

const stories = [
  { name: "Rahul M., 38", title: "From 140 kgs to 85 kgs", text: "Robotic sleeve gastrectomy gave me my life back. I can now play with my kids and enjoy activities I'd given up years ago.", procedure: "Robotic Sleeve Gastrectomy" },
  { name: "Anjali S., 45", title: "Diabetes-Free After Surgery", text: "My type 2 diabetes went into complete remission within 3 months of metabolic surgery. I no longer need insulin injections.", procedure: "Robotic Metabolic Surgery" },
  { name: "Deepak R., 52", title: "Back to Work in a Week", text: "My robotic hernia repair was smooth. The tiny incisions healed quickly and I was back to my desk job within 5 days.", procedure: "Robotic Hernia Surgery" },
  { name: "Kavita P., 32", title: "PCOS Reversed After Weight Loss", text: "After losing 45 kgs post-surgery, my PCOS symptoms disappeared. I'm now a proud mother of a healthy baby.", procedure: "Robotic Gastric Bypass" },
];

const PatientStoriesPage = () => (
  <div>
    <PageHero title="Patient Stories" subtitle="Real stories of transformation and healing from our patients." breadcrumb="Media > Patient Stories" />

    <section className="py-20">
      <div className="container max-w-4xl">
        <div className="space-y-6">
          {stories.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">"{s.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.procedure}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/book-appointment">Start Your Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default PatientStoriesPage;
