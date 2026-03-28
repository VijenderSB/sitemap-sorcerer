import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SEOHead from "@/components/SEOHead";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  { title: "Understanding Robotic Surgery: A Complete Guide", excerpt: "Learn how robotic surgery works, its benefits, and why it's becoming the preferred choice for complex procedures.", date: "March 15, 2026", category: "Robotic Surgery" },
  { title: "Is Robotic Bariatric Surgery Right for You?", excerpt: "Explore the advantages of robotic-assisted weight loss surgery and how it compares to traditional approaches.", date: "March 10, 2026", category: "Bariatric Surgery" },
  { title: "Robotic Hernia Repair: What to Expect", excerpt: "A detailed look at how robotic hernia surgery offers better outcomes with faster recovery times.", date: "March 5, 2026", category: "Hernia" },
  { title: "Life After Bariatric Surgery: A Patient's Guide", excerpt: "Tips and guidelines for maintaining your weight loss and health after bariatric surgery.", date: "February 28, 2026", category: "Bariatric Surgery" },
  { title: "Advances in Robotic GI Surgery", excerpt: "How robotic technology is revolutionizing gastrointestinal surgery with improved precision and outcomes.", date: "February 20, 2026", category: "GI Surgery" },
  { title: "Choosing Between Robotic and Laparoscopic Surgery", excerpt: "An objective comparison to help you understand which surgical approach may be best for your condition.", date: "February 15, 2026", category: "Robotic Surgery" },
];

const BlogsPage = () => (
  <div>
    <SEOHead
      title="Blogs — Robotic & Bariatric Surgery Delhi | Dr. Randeep Wadhawan"
      description="Expert blogs on robotic surgery, bariatric surgery, hernia repair, GI surgery in Delhi by Dr. Randeep Wadhawan at Max Hospital Dwarka."
      canonical="https://www.randeepwadhawan.com/media/blogs"
    />
    <PageHero title="Blogs & Articles" subtitle="Expert insights on robotic surgery, bariatric care, and surgical innovation from Dr. Wadhawan in Delhi." breadcrumb="Resources > Blogs" />

    <section className="py-20">
      <div className="container max-w-4xl">
        <div className="space-y-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-card p-6 hover:shadow-medical transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full">{post.category}</span>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">{post.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{post.excerpt}</p>
              <span className="inline-flex items-center text-sm font-medium text-primary gap-1">
                Read More <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default BlogsPage;
