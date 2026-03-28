import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Award, GraduationCap, ArrowRight } from "lucide-react";
import doctorImg from "@/assets/doctor-portrait.jpg";

const AboutSection = () => (
  <section className="py-24 bg-gradient-section">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <img
              src={doctorImg}
              alt="Dr. Randeep Wadhawan"
              className="rounded-2xl shadow-medical-lg w-full max-w-md mx-auto"
              loading="lazy"
              width={800}
              height={1024}
            />
            <div className="absolute -bottom-4 -right-4 rounded-xl bg-primary p-4 shadow-medical text-primary-foreground">
              <div className="text-2xl font-bold font-heading">20+</div>
              <div className="text-xs">Years of Excellence</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">About the Surgeon</span>
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-foreground mt-2 mb-5">
            Dr. Randeep Wadhawan
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            One of India's most experienced robotic surgeons, Dr. Randeep Wadhawan specializes in
            robotic-assisted GI and bariatric surgery. With over 60,000 successful procedures, he is
            recognized nationally and internationally for his expertise in minimally invasive surgery.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-accent p-2.5">
                <GraduationCap className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h4 className="font-semibold font-heading text-foreground">Advanced Training</h4>
                <p className="text-sm text-muted-foreground">Fellowship in Robotic Surgery from international centers of excellence</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-accent p-2.5">
                <Award className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h4 className="font-semibold font-heading text-foreground">Award-Winning Surgeon</h4>
                <p className="text-sm text-muted-foreground">Recognized with 50+ national and international awards for surgical innovation</p>
              </div>
            </div>
          </div>

          <Button asChild>
            <Link to="/about">
              Learn More About Dr. Wadhawan
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
