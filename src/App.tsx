import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RoboticSurgeryPage from "./pages/RoboticSurgeryPage";
import GenericProcedurePage from "./pages/GenericProcedurePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const roboticBariatricProcedures = [
  { name: "Robotic Sleeve Gastrectomy", description: "A precise robotic-assisted procedure that removes approximately 80% of the stomach, creating a sleeve-shaped stomach. Ideal for patients with BMI > 35." },
  { name: "Robotic Gastric Bypass", description: "The gold standard in bariatric surgery performed with robotic precision. Creates a small stomach pouch and reroutes the small intestine for effective weight loss." },
  { name: "Robotic Mini Gastric Bypass", description: "A simplified version of the gastric bypass with excellent long-term weight loss outcomes and fewer complications, enhanced by robotic precision." },
  { name: "Robotic Revision Surgery", description: "For patients who need corrective or revision procedures after previous bariatric surgery. Robotic assistance allows safe navigation of altered anatomy." },
];

const roboticGIProcedures = [
  { name: "Robotic Hernia Surgery", description: "Repair of inguinal, ventral, incisional, and hiatal hernias using robotic-assisted technique for stronger repair and faster recovery." },
  { name: "Robotic Gallbladder Surgery", description: "Robotic cholecystectomy for gallstone disease with enhanced visualization and precision in the delicate biliary anatomy." },
  { name: "Robotic Appendix Surgery", description: "Robotic appendectomy for acute and chronic appendicitis with minimal scarring and rapid return to normal activities." },
  { name: "Robotic Colon Surgery", description: "Treatment of colon conditions including diverticulitis, polyps, and colon cancer using robotic-assisted colectomy." },
  { name: "Robotic Rectal Surgery", description: "Complex rectal surgeries including cancer resection performed with the precision that only robotic assistance can provide." },
  { name: "Robotic Cancer Surgery", description: "Robotic-assisted oncological procedures for GI cancers with precise tumor removal and lymph node dissection." },
];

const laparoscopicProcedures = [
  { name: "Laparoscopic Bariatric Surgery", description: "Weight loss surgeries including sleeve gastrectomy and gastric bypass performed through small keyhole incisions." },
  { name: "Laparoscopic Hernia Surgery", description: "Repair of all types of hernias using advanced laparoscopic techniques with mesh reinforcement." },
  { name: "Laparoscopic Gallbladder Surgery", description: "Gold standard treatment for gallstones and gallbladder disease with same-day discharge in most cases." },
  { name: "Laparoscopic Appendix Surgery", description: "Minimally invasive appendectomy with rapid recovery and minimal post-operative discomfort." },
];

const bariatricProcedures = [
  { name: "Weight Loss Surgery Overview", description: "Comprehensive weight loss solutions for patients struggling with obesity. Our approach combines surgical expertise with long-term lifestyle support." },
  { name: "Who is Eligible?", description: "Candidates typically have BMI > 35 with comorbidities or BMI > 40. A thorough evaluation determines the best approach for each patient." },
  { name: "BMI Calculator & Assessment", description: "Calculate your Body Mass Index and understand your weight category. Our team provides personalized assessments during consultation." },
  { name: "Surgery Options", description: "Choose from sleeve gastrectomy, gastric bypass, mini gastric bypass, and revision surgery — available in both robotic and laparoscopic approaches." },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/robotic-surgery" element={<RoboticSurgeryPage />} />
            <Route path="/robotic-bariatric-surgery" element={<GenericProcedurePage title="Robotic Bariatric Surgery" subtitle="Advanced robotic-assisted weight loss procedures with unmatched precision and faster recovery." procedures={roboticBariatricProcedures} />} />
            <Route path="/robotic-gi-surgery" element={<GenericProcedurePage title="Robotic GI Surgery" subtitle="State-of-the-art robotic gastrointestinal surgeries for complex abdominal conditions." procedures={roboticGIProcedures} />} />
            <Route path="/laparoscopic-surgery" element={<GenericProcedurePage title="Laparoscopic Surgery" subtitle="Advanced minimally invasive laparoscopic procedures as an effective surgical option." procedures={laparoscopicProcedures} />} />
            <Route path="/bariatric-surgery" element={<GenericProcedurePage title="Bariatric Surgery" subtitle="Comprehensive weight loss surgery solutions to help you achieve lasting health transformation." procedures={bariatricProcedures} />} />
            <Route path="/patient-resources" element={<GenericProcedurePage title="Patient Resources" subtitle="Everything you need to know before, during, and after your surgical journey." procedures={[
              { name: "Patient Journey", description: "From initial consultation through surgery to full recovery — we guide you every step of the way." },
              { name: "Recovery Timeline", description: "Understand what to expect in the days, weeks, and months following your procedure." },
              { name: "Insurance Information", description: "We work with major insurance providers. Our team can help verify your coverage and benefits." },
            ]} />} />
            <Route path="/media" element={<GenericProcedurePage title="Media & Blogs" subtitle="Stay informed with the latest insights on robotic surgery and patient wellness." procedures={[
              { name: "Latest Articles", description: "Expert articles on robotic surgery advances, patient care, and health tips." },
              { name: "Video Library", description: "Watch procedure explanations, patient testimonials, and educational content." },
              { name: "Patient Stories", description: "Read inspiring stories from patients who transformed their lives through surgery." },
            ]} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
