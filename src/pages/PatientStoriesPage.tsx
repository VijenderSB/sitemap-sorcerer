import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import { stories, categories } from "@/data/patientStories";

const STORIES_PER_PAGE = 12;

const PatientStoriesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(STORIES_PER_PAGE);

  const filtered = useMemo(
    () => activeCategory === "All" ? stories : stories.filter((s) => s.procedure === activeCategory),
    [activeCategory]
  );

  const visible = filtered.slice(0, visibleCount);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(STORIES_PER_PAGE);
  };

  return (
    <div>
      <PageHero
        title="Patient Stories"
        subtitle="100+ real stories of transformation and healing across all our surgical services."
        breadcrumb="Media > Patient Stories"
      />

      {/* Category Filter */}
      <section className="py-8 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-20">
        <div className="container">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter by Service:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1 opacity-70">
                    ({stories.filter((s) => s.procedure === cat).length})
                  </span>
                )}
                {cat === "All" && <span className="ml-1 opacity-70">({stories.length})</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((s, i) => (
              <motion.div
                key={s.name + s.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 6) * 0.05 }}
                className="rounded-2xl border border-border bg-card p-6 hover:shadow-medical transition-shadow"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="inline-block rounded-full bg-primary/10 text-primary text-[10px] font-semibold px-2.5 py-0.5 mb-3">
                  {s.procedure}
                </span>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{s.text}"</p>
                <p className="font-heading font-semibold text-foreground text-sm">{s.name}</p>
              </motion.div>
            ))}
          </div>

          {visibleCount < filtered.length && (
            <div className="text-center mt-10">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setVisibleCount((v) => v + STORIES_PER_PAGE)}
              >
                Load More Stories ({filtered.length - visibleCount} remaining)
              </Button>
            </div>
          )}

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/book-appointment">
                Start Your Story <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PatientStoriesPage;
