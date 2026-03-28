import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";

const BeforeAfterPage = () => (
  <div>
    <SEOHead
      title="Before & After Results | Weight Loss Surgery Delhi | Dr. Randeep Wadhawan"
      description="Before and after bariatric surgery results in Delhi. Real patient transformations by Dr. Randeep Wadhawan at Max Hospital Dwarka."
      canonical="https://www.randeepwadhawan.com/patient-resources/before-after"
    />
    <PageHero
      title="Before & After Results — Delhi"
      subtitle="Real transformations from our patients in Delhi NCR. Results may vary based on individual conditions."
      breadcrumb="Resources > Before & After"
    />

    <section className="py-20">
      <div className="container max-w-4xl">
        <div className="grid sm:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="grid grid-cols-2">
                <div className="aspect-square bg-muted flex items-center justify-center text-muted-foreground text-sm p-4 text-center border-r border-border">
                  Before
                </div>
                <div className="aspect-square bg-muted flex items-center justify-center text-muted-foreground text-sm p-4 text-center">
                  After
                </div>
              </div>
              <div className="p-4">
                <p className="font-heading font-semibold text-foreground text-sm">Patient {i}</p>
                <p className="text-xs text-muted-foreground">Robotic Bariatric Surgery — Lost {30 + i * 10} kgs</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center mt-8">
          Actual patient photos will be added with consent. Results vary based on individual conditions and adherence to post-operative guidelines.
        </p>
      </div>
    </section>
  </div>
);

export default BeforeAfterPage;
