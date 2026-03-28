import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import { motion } from "framer-motion";

const videos = [
  { id: "LOa9oeapp3c", title: "Robotic Surgery Insights" },
  { id: "L6JqkKPTQrg", title: "Advanced Bariatric Procedures" },
  { id: "wPzV4yzGfx8", title: "Patient Success Stories" },
  { id: "BXHfdb9k1P0", title: "Minimally Invasive Techniques" },
  { id: "AXH6wSzJ_2Y", title: "GI Surgery Excellence" },
];

const VideosSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <span className="text-primary font-medium text-sm tracking-wide uppercase">Watch & Learn</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Videos by Dr. Wadhawan
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => scroll("left")} className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-accent transition" aria-label="Scroll left">
              <ChevronRight className="h-4 w-4 rotate-180" />
            </button>
            <button onClick={() => scroll("right")} className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-accent transition" aria-label="Scroll right">
              <ChevronRight className="h-4 w-4" />
            </button>
            <a
              href="https://www.youtube.com/@randeepwadhawan7610/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              View More <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {videos.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[320px] sm:min-w-[380px] md:min-w-[calc(33.333%-16px)] snap-start flex-shrink-0"
            >
              <div className="rounded-xl overflow-hidden shadow-md bg-card border border-border">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
