import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcedureDetailPage from "@/components/ProcedureDetailPage";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import BookAppointmentPage from "./pages/BookAppointmentPage";
import RoboticSurgeryPage from "./pages/RoboticSurgeryPage";
import WhyRoboticSurgeryPage from "./pages/WhyRoboticSurgeryPage";
import HospitalsPage from "./pages/HospitalsPage";
import BMICalculatorPage from "./pages/BMICalculatorPage";
import SurgeryEligibilityPage from "./pages/SurgeryEligibilityPage";
import CostEstimatorPage from "./pages/CostEstimatorPage";
import PatientJourneyPage from "./pages/PatientJourneyPage";
import FAQsPage from "./pages/FAQsPage";
import BeforeAfterPage from "./pages/BeforeAfterPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import InsurancePage from "./pages/InsurancePage";
import MediaPage from "./pages/MediaPage";
import BlogsPage from "./pages/BlogsPage";
import VideosPage from "./pages/VideosPage";
import PatientStoriesPage from "./pages/PatientStoriesPage";
import NewsPage from "./pages/NewsPage";
import MetabolicSurgeryPage from "./pages/MetabolicSurgeryPage";
import ObesityManagementPage from "./pages/ObesityManagementPage";
import HerniaSurgeryPage from "./pages/HerniaSurgeryPage";
import GISurgeryPage from "./pages/GISurgeryPage";
import SEOLandingPage from "./pages/SEOLandingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// --- Procedure Data ---

const roboticBariatricProcedures = [
  { name: "Robotic Sleeve Gastrectomy", description: "Removes ~80% of the stomach using robotic precision. The most commonly performed bariatric procedure worldwide.", href: "/robotic-bariatric-surgery/sleeve-gastrectomy" },
  { name: "Robotic Gastric Bypass", description: "Creates a small stomach pouch and reroutes the intestine. Gold standard for long-term weight loss and diabetes remission.", href: "/robotic-bariatric-surgery/gastric-bypass" },
  { name: "Robotic Mini Gastric Bypass", description: "A simplified bypass with excellent weight loss outcomes and fewer complications, enhanced by robotic precision.", href: "/robotic-bariatric-surgery/mini-gastric-bypass" },
  { name: "Robotic Revision Bariatric Surgery", description: "Corrective procedures for patients needing revision after previous bariatric surgery. Robotic assistance navigates altered anatomy safely.", href: "/robotic-bariatric-surgery/revision-surgery" },
  { name: "Robotic Metabolic Surgery", description: "Targets metabolic conditions like type 2 diabetes and metabolic syndrome through surgical intervention with robotic precision.", href: "/robotic-bariatric-surgery/metabolic-surgery" },
];

const roboticGIProcedures = [
  { name: "Robotic Hernia Surgery", description: "Repair of inguinal, incisional, umbilical, hiatus, and complex hernias with robotic precision and 3D visualization.", href: "/robotic-gi-surgery/hernia" },
  { name: "Robotic Gallbladder Surgery", description: "Enhanced cholecystectomy for gallstone disease with superior visualization of delicate biliary anatomy.", href: "/robotic-gi-surgery/gallbladder" },
  { name: "Robotic Appendix Surgery", description: "Appendectomy for acute and chronic conditions with minimal scarring and rapid recovery.", href: "/robotic-gi-surgery/appendix" },
  { name: "Robotic Colon Surgery", description: "Treatment of diverticulitis, polyps, and colon conditions using robotic-assisted colectomy.", href: "/robotic-gi-surgery/colon" },
  { name: "Robotic Rectal Surgery", description: "Complex rectal surgeries including cancer resection with the precision only robotic assistance provides.", href: "/robotic-gi-surgery/rectal" },
  { name: "Robotic GI Cancer Surgery", description: "Oncological procedures for stomach, colon, rectal, and esophageal cancers with precise tumor removal.", href: "/robotic-gi-surgery/cancer" },
];

const roboticAdvancedGIProcedures = [
  { name: "Robotic Liver Surgery", description: "Complex liver resections and tumor removal using robotic precision for this delicate organ.", href: "/robotic-advanced-gi-surgery/liver" },
  { name: "Robotic Pancreatic Surgery", description: "Whipple procedure and other pancreatic surgeries with robotic assistance for superior outcomes.", href: "/robotic-advanced-gi-surgery/pancreatic" },
  { name: "Robotic Splenectomy", description: "Removal of the spleen using robotic-assisted technique for blood disorders and splenic conditions.", href: "/robotic-advanced-gi-surgery/splenectomy" },
  { name: "Robotic Achalasia Surgery", description: "Heller myotomy for achalasia (swallowing difficulty) performed with robotic precision for optimal results.", href: "/robotic-advanced-gi-surgery/achalasia" },
];

const lapBariatricProcedures = [
  { name: "Laparoscopic Sleeve Gastrectomy", description: "Proven weight loss procedure through keyhole incisions, removing a large portion of the stomach.", href: "/laparoscopic-surgery/bariatric/sleeve" },
  { name: "Laparoscopic Gastric Bypass", description: "Roux-en-Y gastric bypass through minimally invasive approach for effective long-term weight loss.", href: "/laparoscopic-surgery/bariatric/gastric-bypass" },
  { name: "Laparoscopic Mini Gastric Bypass", description: "Simplified bypass procedure with excellent results and shorter operating time.", href: "/laparoscopic-surgery/bariatric/mini-gastric-bypass" },
  { name: "Laparoscopic Revision Surgery", description: "Corrective bariatric procedures for patients requiring revision of previous weight loss surgery.", href: "/laparoscopic-surgery/bariatric/revision" },
];

const lapGIProcedures = [
  { name: "Laparoscopic Hernia Surgery", description: "Effective minimally invasive hernia repair with mesh reinforcement through small incisions.", href: "/laparoscopic-surgery/gi/hernia" },
  { name: "Laparoscopic Gallbladder Surgery", description: "Gold standard cholecystectomy for gallstones — same-day discharge in most cases.", href: "/laparoscopic-surgery/gi/gallbladder" },
  { name: "Laparoscopic Appendix Surgery", description: "Keyhole appendectomy for rapid recovery and minimal post-operative discomfort.", href: "/laparoscopic-surgery/gi/appendix" },
  { name: "Laparoscopic Colon Surgery", description: "Minimally invasive approach to colon conditions including diverticulitis and polyps.", href: "/laparoscopic-surgery/gi/colon" },
  { name: "Laparoscopic Rectal Surgery", description: "Advanced laparoscopic techniques for rectal conditions and surgery.", href: "/laparoscopic-surgery/gi/rectal" },
];

const bariatricProcedures = [
  { name: "Weight Loss Surgery Overview", description: "Comprehensive weight loss solutions combining surgical expertise with long-term lifestyle support and monitoring." },
  { name: "Who is Eligible?", description: "Generally, patients with BMI ≥ 35 with comorbidities or BMI ≥ 40. Individual assessment determines the best approach." },
  { name: "Sleeve Gastrectomy", description: "The most common bariatric procedure — removes ~80% of the stomach to restrict food intake and reduce hunger hormones." },
  { name: "Gastric Bypass (Roux-en-Y)", description: "Creates a small stomach pouch and reroutes intestines for both restriction and malabsorption, excellent for diabetes remission." },
  { name: "Mini Gastric Bypass", description: "A simplified single-anastomosis bypass with comparable results to Roux-en-Y and shorter surgery time." },
  { name: "Revision Surgery", description: "For patients who need corrective procedures after previous bariatric surgery — weight regain, complications, or conversion." },
];

// Helper for sub-procedure pages
const subProcedure = (title: string, subtitle: string, breadcrumb: string, description: string, benefits: string[]) => (
  <ProcedureDetailPage
    title={title}
    subtitle={subtitle}
    breadcrumb={breadcrumb}
    overview={description}
    benefits={benefits}
    procedures={[]}
  />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* About */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about/gallery" element={<GalleryPage />} />
            
            {/* Robotic Surgery */}
            <Route path="/robotic-surgery" element={<RoboticSurgeryPage />} />
            <Route path="/why-robotic-surgery" element={<WhyRoboticSurgeryPage />} />
            
            {/* Robotic Bariatric */}
            <Route path="/robotic-bariatric-surgery" element={
              <ProcedureDetailPage title="Robotic Bariatric Surgery" subtitle="Advanced robotic-assisted weight loss procedures with unmatched precision and faster recovery." breadcrumb="Robotic Surgery > Bariatric" procedures={roboticBariatricProcedures} benefits={["Sub-millimeter robotic precision","Smaller incisions & minimal scarring","Faster recovery — return home in 24–48 hours","Less post-operative pain","Lower complication rates","Enhanced 3D visualization"]} />
            } />
            <Route path="/robotic-bariatric-surgery/sleeve-gastrectomy" element={subProcedure("Robotic Sleeve Gastrectomy", "The most precise approach to sleeve gastrectomy using robotic-assisted technology.", "Robotic Surgery > Bariatric > Sleeve Gastrectomy", "Robotic sleeve gastrectomy removes approximately 80% of the stomach, creating a banana-shaped sleeve. The robotic system provides Dr. Wadhawan with enhanced 3D visualization and precise instrument control, ensuring optimal staple line placement and reduced risk of complications. This procedure reduces hunger hormones (ghrelin) and restricts food intake, leading to significant and sustained weight loss.", ["Sub-millimeter precision stapling","Reduced risk of staple line leak","Less blood loss during surgery","1–2 day hospital stay","60–70% excess weight loss in 12–18 months","Resolution of obesity-related conditions"])} />
            <Route path="/robotic-bariatric-surgery/gastric-bypass" element={subProcedure("Robotic Gastric Bypass", "Gold standard weight loss surgery enhanced with robotic precision.", "Robotic Surgery > Bariatric > Gastric Bypass", "Robotic gastric bypass (Roux-en-Y) creates a small stomach pouch and reroutes a portion of the small intestine. The robotic system enables precise anastomosis (connection) creation with enhanced visualization, reducing leak risk. This procedure works through both restriction and mild malabsorption, providing excellent long-term weight loss and often leads to diabetes remission.", ["Superior anastomosis precision","Highest diabetes remission rates","70–80% excess weight loss","Effective for BMI > 40","Long-term sustained results","Improvement in cardiovascular risk factors"])} />
            <Route path="/robotic-bariatric-surgery/mini-gastric-bypass" element={subProcedure("Robotic Mini Gastric Bypass", "Simplified bypass procedure with excellent outcomes, enhanced by robotic precision.", "Robotic Surgery > Bariatric > Mini Gastric Bypass", "Robotic mini gastric bypass (one anastomosis gastric bypass) is a simplified version of the traditional gastric bypass with comparable weight loss results. The single connection point reduces surgical complexity while the robotic system ensures precise execution. This procedure offers excellent weight loss with shorter operating time.", ["Shorter surgical time","Single anastomosis — simpler procedure","Comparable weight loss to Roux-en-Y","Excellent diabetes improvement","Reversible if needed","Lower complication rates"])} />
            <Route path="/robotic-bariatric-surgery/revision-surgery" element={subProcedure("Robotic Revision Bariatric Surgery", "Expert revision procedures for patients needing correction after previous bariatric surgery.", "Robotic Surgery > Bariatric > Revision Surgery", "Revision bariatric surgery is performed when a previous weight loss procedure needs correction — due to weight regain, complications, or conversion to a different procedure. Robotic assistance is especially valuable here, as it provides superior visualization of altered anatomy and scar tissue, enabling safer and more precise revision.", ["Safe navigation of altered anatomy","3D visualization of scar tissue","Precise correction of previous procedures","Conversion between procedure types","Lower revision complication rates","Expert handling of complex cases"])} />
            <Route path="/robotic-bariatric-surgery/metabolic-surgery" element={subProcedure("Robotic Metabolic Surgery", "Surgical treatment for diabetes and metabolic conditions with robotic precision.", "Robotic Surgery > Bariatric > Metabolic Surgery", "Robotic metabolic surgery targets type 2 diabetes and metabolic syndrome through surgical intervention. The procedure modifies the gastrointestinal tract to improve metabolic function, often leading to complete remission of diabetes even in patients with BMI < 35. Robotic precision ensures optimal outcomes with minimal risk.", ["Up to 80% diabetes remission rate","Improvement in metabolic syndrome","Reduced cardiovascular risk","Effective even at lower BMI","Long-term metabolic benefits","Precision hormonal modification"])} />
            
            {/* Robotic GI */}
            <Route path="/robotic-gi-surgery" element={
              <ProcedureDetailPage title="Robotic GI Surgery" subtitle="State-of-the-art robotic gastrointestinal surgeries for complex abdominal conditions." breadcrumb="Robotic Surgery > GI Surgery" procedures={roboticGIProcedures} benefits={["3D HD visualization for complex anatomy","Precise dissection around critical structures","Less blood loss and fewer complications","Faster patient recovery","Smaller incisions","Surgeon-controlled robotic precision"]} />
            } />
            <Route path="/robotic-gi-surgery/hernia" element={
              <ProcedureDetailPage title="Robotic Hernia Surgery" subtitle="Comprehensive robotic hernia repair for all hernia types with superior precision." breadcrumb="Robotic Surgery > GI > Hernia" overview="Robotic hernia repair offers the most precise approach to treating all types of hernias. The 3D visualization and articulating instruments allow Dr. Wadhawan to perform exact mesh placement, ensuring stronger repairs with lower recurrence rates." procedures={[
                { name: "Inguinal Hernia Repair", description: "Robotic repair of groin hernias with precise mesh placement using TAPP or TEP approach." },
                { name: "Incisional Hernia Repair", description: "Repair of hernias occurring at previous surgical incision sites, often complex cases requiring robotic precision." },
                { name: "Umbilical Hernia Repair", description: "Treatment of belly button hernias with mesh reinforcement for lasting results." },
                { name: "Hiatus Hernia Repair", description: "Repair of diaphragmatic hernias that cause acid reflux, often combined with fundoplication." },
                { name: "Complex Hernia Repair", description: "Multi-defect, large, or recurrent hernias requiring the advanced capabilities of robotic surgery." },
              ]} benefits={["Precise mesh placement","Lower recurrence rates","Less post-operative pain","Rapid return to activities","Suitable for complex cases","3D visualization advantage"]} />
            } />
            <Route path="/robotic-gi-surgery/gallbladder" element={subProcedure("Robotic Gallbladder Surgery", "Enhanced cholecystectomy with robotic precision for gallstone disease.", "Robotic Surgery > GI > Gallbladder", "Robotic cholecystectomy provides enhanced visualization of the critical biliary anatomy, reducing the risk of bile duct injury — the most feared complication of gallbladder surgery. The 3D view and precise dissection capabilities make this especially valuable for inflamed or difficult gallbladders.", ["Critical view of safety enhanced","Reduced bile duct injury risk","Same-day or next-day discharge","Minimal scarring","Suitable for difficult cases","Precise handling of inflamed tissue"])} />
            <Route path="/robotic-gi-surgery/appendix" element={subProcedure("Robotic Appendix Surgery", "Robotic-assisted appendectomy for acute and chronic appendicitis.", "Robotic Surgery > GI > Appendix", "Robotic appendectomy offers precise removal of the appendix with excellent visualization, particularly beneficial in cases with abscess formation or unusual anatomy. Patients typically return home within 24 hours with minimal discomfort.", ["Fast recovery","Minimal scarring","Precise handling of complex cases","Same-day discharge possible","Low complication rates","Suitable for complicated appendicitis"])} />
            <Route path="/robotic-gi-surgery/colon" element={subProcedure("Robotic Colon Surgery", "Advanced robotic-assisted colectomy for colon conditions and disease.", "Robotic Surgery > GI > Colon", "Robotic colon surgery addresses conditions including diverticulitis, polyps, inflammatory bowel disease, and colon cancer. The robotic platform provides superior access to deep pelvic anatomy and precise vascular control, leading to better oncological and functional outcomes.", ["Precise lymph node dissection","Better access to difficult anatomy","Lower conversion-to-open rates","Faster bowel recovery","Reduced post-operative ileus","Superior oncological outcomes"])} />
            <Route path="/robotic-gi-surgery/rectal" element={subProcedure("Robotic Rectal Surgery", "Complex rectal procedures with the precision of robotic-assisted technology.", "Robotic Surgery > GI > Rectal", "Robotic rectal surgery is where the robotic platform truly excels. The confined space of the pelvis makes traditional surgery challenging, but the robotic arms can navigate these tight spaces with 360° movement, ensuring precise dissection around critical nerves and structures.", ["Optimal nerve preservation","Precise pelvic dissection","Better functional outcomes","Lower positive margin rates","Reduced complications","Superior access in narrow pelvis"])} />
            <Route path="/robotic-gi-surgery/cancer" element={
              <ProcedureDetailPage title="Robotic GI Cancer Surgery" subtitle="Precision oncological surgery for gastrointestinal cancers." breadcrumb="Robotic Surgery > GI > Cancer" overview="Robotic-assisted cancer surgery provides the precision needed for complete tumor removal with clear margins, adequate lymph node dissection, and preservation of surrounding healthy tissue. This translates to better oncological outcomes and faster recovery." procedures={[
                { name: "Stomach (Gastric) Cancer", description: "Robotic gastrectomy for stomach cancer with precise tumor excision and lymph node clearance." },
                { name: "Colon Cancer", description: "Robotic colectomy with complete mesocolic excision for optimal cancer clearance." },
                { name: "Rectal Cancer", description: "Total mesorectal excision (TME) with robotic precision for the best oncological and functional outcomes." },
                { name: "Esophageal Cancer", description: "Robotic esophagectomy for esophageal cancer with reduced pulmonary complications and faster recovery." },
              ]} benefits={["Precise tumor margin control","Complete lymph node dissection","Nerve and organ preservation","Faster post-cancer recovery","Lower post-operative complications","Better long-term survival outcomes"]} />
            } />

            {/* Robotic Advanced GI */}
            <Route path="/robotic-advanced-gi-surgery" element={
              <ProcedureDetailPage title="Robotic Advanced GI Surgery" subtitle="Complex hepato-pancreato-biliary and advanced GI procedures with robotic precision." breadcrumb="Robotic Surgery > Advanced GI" procedures={roboticAdvancedGIProcedures} benefits={["Expert handling of complex anatomy","Precise dissection near major vessels","Enhanced 3D visualization","Reduced blood loss","Faster recovery from major procedures","Lower complication rates"]} />
            } />
            <Route path="/robotic-advanced-gi-surgery/liver" element={subProcedure("Robotic Liver Surgery", "Complex liver resections using robotic-assisted precision.", "Robotic Surgery > Advanced GI > Liver", "Robotic liver surgery enables precise hepatic resections with enhanced control near major blood vessels. The 3D visualization and steady robotic movements allow safe parenchymal transection and precise control of hepatic vasculature.", ["Precise parenchymal transection","Safe handling near major vessels","Less blood loss","Faster liver regeneration","Shorter hospital stay","Suitable for various liver conditions"])} />
            <Route path="/robotic-advanced-gi-surgery/pancreatic" element={subProcedure("Robotic Pancreatic Surgery", "Advanced pancreatic procedures including Whipple procedure with robotic assistance.", "Robotic Surgery > Advanced GI > Pancreatic", "Robotic pancreatic surgery, including the complex Whipple procedure (pancreaticoduodenectomy), benefits enormously from the robotic platform's precision. The multiple anastomoses required can be performed with superior accuracy, reducing leak rates.", ["Precise anastomosis creation","Lower pancreatic fistula rates","Better vessel preservation","Reduced surgical trauma","Faster recovery from major surgery","Expert handling of complex anatomy"])} />
            <Route path="/robotic-advanced-gi-surgery/splenectomy" element={subProcedure("Robotic Splenectomy", "Robotic-assisted spleen removal for blood disorders and splenic conditions.", "Robotic Surgery > Advanced GI > Splenectomy", "Robotic splenectomy offers precise removal of the spleen with excellent control of the splenic hilum vasculature. This approach is ideal for conditions like ITP, hereditary spherocytosis, splenic cysts, and certain lymphomas.", ["Precise vascular control","Minimal blood loss","Short hospital stay","Rapid return to activities","Suitable for enlarged spleens","Low complication rates"])} />
            <Route path="/robotic-advanced-gi-surgery/achalasia" element={subProcedure("Robotic Achalasia Surgery (Heller Myotomy)", "Precise esophageal myotomy for swallowing disorders using robotic technology.", "Robotic Surgery > Advanced GI > Achalasia", "Robotic Heller myotomy for achalasia provides precise division of the lower esophageal sphincter muscle fibers while preserving the underlying mucosa. The robotic system's enhanced visualization and steady movements make this delicate procedure safer and more effective, often combined with a partial fundoplication to prevent reflux.", ["Precise muscle fiber division","Mucosal preservation","Combined anti-reflux procedure","Rapid symptom relief","Quick recovery","Long-lasting results"])} />

            {/* Laparoscopic Surgery */}
            <Route path="/laparoscopic-surgery" element={
              <ProcedureDetailPage title="Laparoscopic Surgery" subtitle="Advanced minimally invasive laparoscopic procedures — proven, effective, and widely trusted." procedures={[
                { name: "Laparoscopic Bariatric Surgery", description: "Complete range of weight loss procedures through keyhole incisions.", href: "/laparoscopic-surgery/bariatric" },
                { name: "Laparoscopic GI Surgery", description: "Hernia repair, gallbladder removal, appendectomy, and colorectal procedures.", href: "/laparoscopic-surgery/gi" },
              ]} benefits={["Minimally invasive keyhole approach","Proven track record worldwide","Faster recovery than open surgery","Less post-operative pain","Shorter hospital stays","Cost-effective option"]} />
            } />
            <Route path="/laparoscopic-surgery/bariatric" element={
              <ProcedureDetailPage title="Laparoscopic Bariatric Surgery" subtitle="Proven weight loss procedures through minimally invasive keyhole approach." breadcrumb="Laparoscopic Surgery > Bariatric" procedures={lapBariatricProcedures} />
            } />
            <Route path="/laparoscopic-surgery/bariatric/sleeve" element={subProcedure("Laparoscopic Sleeve Gastrectomy", "Proven keyhole approach to sleeve gastrectomy for effective weight loss.", "Laparoscopic > Bariatric > Sleeve", "Laparoscopic sleeve gastrectomy is the most commonly performed bariatric procedure worldwide. Through 4-5 small incisions, approximately 80% of the stomach is removed, creating a tube-shaped stomach. This reduces food intake and hunger hormones, leading to significant weight loss.", ["Proven worldwide success","4-5 small incisions","60-70% excess weight loss","Reduced hunger hormones","No intestinal rerouting","2-3 day hospital stay"])} />
            <Route path="/laparoscopic-surgery/bariatric/gastric-bypass" element={subProcedure("Laparoscopic Gastric Bypass", "Gold standard Roux-en-Y gastric bypass through minimally invasive approach.", "Laparoscopic > Bariatric > Gastric Bypass", "Laparoscopic gastric bypass creates a small stomach pouch and bypasses a portion of the small intestine. This dual mechanism of restriction and mild malabsorption provides excellent long-term weight loss and is particularly effective for diabetes remission.", ["Excellent diabetes remission","70-80% excess weight loss","Long-term sustained results","Proven over decades","Effective for higher BMI","Reduces cardiovascular risk"])} />
            <Route path="/laparoscopic-surgery/bariatric/mini-gastric-bypass" element={subProcedure("Laparoscopic Mini Gastric Bypass", "Simplified bypass with excellent outcomes through minimally invasive technique.", "Laparoscopic > Bariatric > Mini Gastric Bypass", "Laparoscopic mini gastric bypass is a simplified single-anastomosis procedure offering comparable weight loss to traditional Roux-en-Y bypass with shorter operating time and fewer potential complications.", ["Shorter surgery duration","Comparable weight loss results","Single anastomosis","Good diabetes improvement","Potentially reversible","Lower complication rate"])} />
            <Route path="/laparoscopic-surgery/bariatric/revision" element={subProcedure("Laparoscopic Revision Surgery", "Corrective bariatric procedures through minimally invasive approach.", "Laparoscopic > Bariatric > Revision", "Laparoscopic revision surgery corrects or converts previous bariatric procedures when needed — for weight regain, inadequate weight loss, or complications from prior surgery.", ["Correction of previous procedures","Conversion between surgery types","Minimally invasive approach","Expert handling of complex anatomy","Effective for weight regain","Second-chance weight loss"])} />
            <Route path="/laparoscopic-surgery/gi" element={
              <ProcedureDetailPage title="Laparoscopic GI Surgery" subtitle="Proven minimally invasive approaches for gastrointestinal conditions." breadcrumb="Laparoscopic Surgery > GI" procedures={lapGIProcedures} />
            } />
            <Route path="/laparoscopic-surgery/gi/hernia" element={subProcedure("Laparoscopic Hernia Surgery", "Effective keyhole hernia repair with mesh reinforcement.", "Laparoscopic > GI > Hernia", "Laparoscopic hernia repair uses small incisions and a mesh to reinforce the weakened area. This approach provides excellent results for inguinal, incisional, and ventral hernias with faster recovery than open repair.", ["Small incisions","Mesh reinforcement","Low recurrence rates","Faster recovery than open","Less post-operative pain","Proven long-term results"])} />
            <Route path="/laparoscopic-surgery/gi/gallbladder" element={subProcedure("Laparoscopic Gallbladder Surgery", "Gold standard cholecystectomy for gallstone disease.", "Laparoscopic > GI > Gallbladder", "Laparoscopic cholecystectomy is the gold standard treatment for gallstones and gallbladder disease. Through 3-4 small incisions, the gallbladder is safely removed with most patients going home the same day.", ["Same-day discharge","3-4 tiny incisions","Gold standard treatment","Rapid recovery","Proven safety record","Minimal scarring"])} />
            <Route path="/laparoscopic-surgery/gi/appendix" element={subProcedure("Laparoscopic Appendix Surgery", "Minimally invasive appendectomy for rapid recovery.", "Laparoscopic > GI > Appendix", "Laparoscopic appendectomy removes the inflamed appendix through 2-3 small incisions. This is the standard approach for appendicitis, offering faster recovery and less pain compared to open surgery.", ["2-3 tiny incisions","Quick procedure","Rapid recovery","Less pain","Early discharge","Minimal scarring"])} />
            <Route path="/laparoscopic-surgery/gi/colon" element={subProcedure("Laparoscopic Colon Surgery", "Minimally invasive colon procedures for various conditions.", "Laparoscopic > GI > Colon", "Laparoscopic colon surgery addresses diverticulitis, polyps, inflammatory bowel disease, and early-stage colon cancer through small incisions. This approach offers faster recovery of bowel function and shorter hospital stays.", ["Faster bowel recovery","Shorter hospital stay","Less post-operative pain","Suitable for many colon conditions","Proven oncological outcomes","Earlier return to diet"])} />
            <Route path="/laparoscopic-surgery/gi/rectal" element={subProcedure("Laparoscopic Rectal Surgery", "Advanced minimally invasive rectal procedures.", "Laparoscopic > GI > Rectal", "Laparoscopic rectal surgery provides a minimally invasive approach to rectal conditions including rectal cancer, rectal prolapse, and inflammatory conditions. While challenging due to the narrow pelvis, Dr. Wadhawan's expertise ensures excellent outcomes.", ["Minimally invasive approach","Nerve preservation","Better cosmetic outcomes","Faster recovery","Reduced hospital stay","Expert surgical technique"])} />

            {/* Procedures */}
            <Route path="/bariatric-surgery" element={
              <ProcedureDetailPage title="Bariatric Surgery" subtitle="Comprehensive weight loss surgery solutions for lasting health transformation." overview="Bariatric surgery is a life-changing solution for patients struggling with severe obesity. Dr. Wadhawan offers both robotic and laparoscopic approaches, selecting the best technique based on each patient's unique needs and goals." procedures={bariatricProcedures} benefits={["60-80% excess weight loss","Diabetes remission in up to 80%","Resolution of sleep apnea","Improvement in hypertension","Better quality of life","Long-term health benefits"]} />
            } />
            <Route path="/hernia-surgery" element={<HerniaSurgeryPage />} />
            <Route path="/gi-surgery" element={<GISurgeryPage />} />
            <Route path="/metabolic-surgery" element={<MetabolicSurgeryPage />} />
            <Route path="/obesity-management" element={<ObesityManagementPage />} />

            {/* Patient Resources */}
            <Route path="/patient-resources" element={
              <ProcedureDetailPage title="Patient Resources" subtitle="Everything you need before, during, and after your surgical journey." procedures={[
                { name: "Patient Journey", description: "Step-by-step guide from consultation to recovery.", href: "/patient-resources/journey" },
                { name: "FAQs", description: "Answers to commonly asked questions about surgery.", href: "/patient-resources/faqs" },
                { name: "Before & After", description: "Real patient transformation results.", href: "/patient-resources/before-after" },
                { name: "Testimonials", description: "Hear from patients who've been through it.", href: "/patient-resources/testimonials" },
                { name: "Insurance & Cost", description: "Insurance coverage and payment information.", href: "/patient-resources/insurance" },
              ]} />
            } />
            <Route path="/patient-resources/journey" element={<PatientJourneyPage />} />
            <Route path="/patient-resources/faqs" element={<FAQsPage />} />
            <Route path="/patient-resources/before-after" element={<BeforeAfterPage />} />
            <Route path="/patient-resources/testimonials" element={<TestimonialsPage />} />
            <Route path="/patient-resources/insurance" element={<InsurancePage />} />

            {/* Media */}
            <Route path="/media" element={<MediaPage />} />
            <Route path="/media/blogs" element={<BlogsPage />} />
            <Route path="/media/videos" element={<VideosPage />} />
            <Route path="/media/patient-stories" element={<PatientStoriesPage />} />
            <Route path="/media/news" element={<NewsPage />} />

            {/* Hospitals & Contact */}
            <Route path="/hospitals" element={<HospitalsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book-appointment" element={<BookAppointmentPage />} />

            {/* Tools */}
            <Route path="/tools/bmi-calculator" element={<BMICalculatorPage />} />
            <Route path="/tools/eligibility" element={<SurgeryEligibilityPage />} />
            <Route path="/tools/cost-estimator" element={<CostEstimatorPage />} />

            {/* SEO Landing Pages */}
            <Route path="/robotic-surgeon-delhi" element={<SEOLandingPage slug="robotic-surgeon-delhi" />} />
            <Route path="/robotic-bariatric-surgeon-delhi" element={<SEOLandingPage slug="robotic-bariatric-surgeon-delhi" />} />
            <Route path="/robotic-hernia-surgeon-delhi" element={<SEOLandingPage slug="robotic-hernia-surgeon-delhi" />} />
            <Route path="/robotic-gi-surgeon-delhi" element={<SEOLandingPage slug="robotic-gi-surgeon-delhi" />} />
            <Route path="/laparoscopic-surgeon-delhi" element={<SEOLandingPage slug="laparoscopic-surgeon-delhi" />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
