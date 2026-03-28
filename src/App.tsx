import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProcedureDetailPage from "@/components/ProcedureDetailPage";
import * as SC from "@/data/surgeryContent";
import surgeryRoboticImg from "@/assets/surgery-robotic-bariatric.jpg";
import surgeryGIImg from "@/assets/surgery-gi.jpg";
import surgerySleeveImg from "@/assets/surgery-sleeve.jpg";
import surgeryLiverImg from "@/assets/surgery-liver-pancreas.jpg";
import surgeryHerniaImg from "@/assets/surgery-hernia.jpg";
import surgeryLapImg from "@/assets/surgery-laparoscopic.jpg";
import surgeryBypassImg from "@/assets/surgery-gastric-bypass.jpg";
import surgeryColonImg from "@/assets/surgery-colon.jpg";
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
  { name: "Robotic Sleeve Gastrectomy", description: "Removes ~80% of the stomach using robotic precision, creating a banana-shaped sleeve. Reduces hunger hormones (ghrelin) and restricts food intake for significant, sustained weight loss.", href: "/robotic-bariatric-surgery/sleeve-gastrectomy" },
  { name: "Robotic Gastric Bypass", description: "Creates a small stomach pouch and reroutes the intestine for both restriction and mild malabsorption. Gold standard for long-term weight loss and diabetes remission.", href: "/robotic-bariatric-surgery/gastric-bypass" },
  { name: "Robotic Mini Gastric Bypass (OAGB)", description: "A simplified single-anastomosis bypass with excellent weight loss outcomes, shorter surgery time, and fewer complications, enhanced by robotic precision.", href: "/robotic-bariatric-surgery/mini-gastric-bypass" },
  { name: "Robotic Revision Bariatric Surgery", description: "Corrective procedures for patients needing revision after previous bariatric surgery. Robotic assistance navigates altered anatomy and scar tissue safely.", href: "/robotic-bariatric-surgery/revision-surgery" },
  { name: "Robotic Metabolic Surgery (DJB/SADI-S)", description: "Tailored procedures targeting type 2 diabetes and metabolic syndrome. Includes Duodeno-Jejunal Bypass and SADI-S for metabolic correction with robotic precision.", href: "/robotic-bariatric-surgery/metabolic-surgery" },
];

const roboticGIProcedures = [
  { name: "Robotic Hernia Surgery", description: "Repair of inguinal, incisional, umbilical, hiatus, and complex hernias with robotic precision, 3D visualization, and superior mesh placement. Fellowship-trained under Prof. Yuri Novitsky (Cleveland, USA).", href: "/robotic-gi-surgery/hernia" },
  { name: "Robotic Gallbladder Surgery (Cholecystectomy)", description: "Enhanced cholecystectomy using the Da Vinci robotic system for superior visualization of critical biliary anatomy, reducing bile duct injury risk.", href: "/robotic-gi-surgery/gallbladder" },
  { name: "Robotic Appendix Surgery", description: "Robotic-assisted appendectomy for acute and chronic appendicitis with minimal scarring and rapid recovery.", href: "/robotic-gi-surgery/appendix" },
  { name: "Robotic Colon & Rectal Surgery", description: "Advanced robotic procedures for colon and rectal conditions including cancer, diverticulitis, polyps, and rectal prolapse with nerve preservation.", href: "/robotic-gi-surgery/colon" },
  { name: "Robotic GI Cancer Surgery", description: "Oncological procedures for stomach, colon, rectal, and esophageal cancers with precise tumor removal and lymph node dissection.", href: "/robotic-gi-surgery/cancer" },
];

const roboticAdvancedGIProcedures = [
  { name: "Robotic Liver Resections", description: "Complex liver resections for liver cancer, metastatic colorectal cancers, gallbladder cancers, and benign tumors using robotic precision near major blood vessels.", href: "/robotic-advanced-gi-surgery/liver" },
  { name: "Robotic Whipple Procedure (Pancreatic Cancer)", description: "Robotic pancreaticoduodenectomy for pancreatic and periampullary cancers — removing the head of the pancreas, duodenum, bile duct, and gallbladder with superior anastomosis precision.", href: "/robotic-advanced-gi-surgery/pancreatic" },
  { name: "Robotic Splenectomy", description: "Robotic-assisted spleen removal for blood disorders (ITP, hereditary spherocytosis), splenic cysts, and certain lymphomas with minimal blood loss.", href: "/robotic-advanced-gi-surgery/splenectomy" },
  { name: "Robotic Achalasia Surgery (Heller Myotomy)", description: "Precise esophageal myotomy for achalasia (swallowing difficulty) with mucosal preservation and combined anti-reflux procedure.", href: "/robotic-advanced-gi-surgery/achalasia" },
  { name: "Robotic Surgery for Portal Hypertension", description: "Surgical shunt procedures for portal vein hypertension when endoscopic techniques fail, including distal splenorenal shunt (DSRS) and TIPS procedures.", href: "/robotic-advanced-gi-surgery/portal-hypertension" },
];

const lapBariatricProcedures = [
  { name: "Laparoscopic Sleeve Gastrectomy", description: "Reshaping the stomach into a tube or 'sleeve' by removing approximately 85% of the stomach. Preserves stomach function, removes ghrelin (appetite hormone). Mean excess weight loss at one year is 70%. Hospital stay is 2-3 days.", href: "/laparoscopic-surgery/bariatric/sleeve" },
  { name: "Laparoscopic Gastric Bypass (Roux-en-Y)", description: "Creates a small stomach pouch and bypasses a portion of the small intestine. Dual mechanism of restriction and malabsorption for excellent long-term weight loss and diabetes remission.", href: "/laparoscopic-surgery/bariatric/gastric-bypass" },
  { name: "Laparoscopic Mini Gastric Bypass (OAGB)", description: "Simplified single-anastomosis procedure offering comparable weight loss to traditional Roux-en-Y bypass with shorter operating time.", href: "/laparoscopic-surgery/bariatric/mini-gastric-bypass" },
  { name: "LAGB (Laparoscopic Adjustable Gastric Banding)", description: "A safe, reliable, and minimally invasive procedure placing a silicone band around the upper stomach to restrict food intake. Adjustable and reversible depending on patient requirements.", href: "/laparoscopic-surgery/bariatric/gastric-banding" },
  { name: "Laparoscopic Revision Surgery", description: "Corrective bariatric procedures for patients requiring revision of previous weight loss surgery due to weight regain or complications.", href: "/laparoscopic-surgery/bariatric/revision" },
];

const lapGIProcedures = [
  { name: "Laparoscopic Hernia Surgery", description: "Effective minimally invasive hernia repair with mesh reinforcement through small incisions. Accredited as a Hernia Centre of Excellence by the Hernia Society of India.", href: "/laparoscopic-surgery/gi/hernia" },
  { name: "Laparoscopic Gallbladder Surgery", description: "Gold standard cholecystectomy for gallstones — same-day discharge in most cases. Over 35,000 laparoscopic surgeries performed by Dr. Wadhawan.", href: "/laparoscopic-surgery/gi/gallbladder" },
  { name: "Laparoscopic Appendix Surgery", description: "Keyhole appendectomy for rapid recovery and minimal post-operative discomfort.", href: "/laparoscopic-surgery/gi/appendix" },
  { name: "Laparoscopic Colon & Rectal Surgery", description: "Minimally invasive laparoscopic colectomy and rectal malignancy surgery with faster bowel recovery and shorter hospital stays.", href: "/laparoscopic-surgery/gi/colon" },
  { name: "Laparoscopic Surgery for Gastric Cancer", description: "Laparoscopic gastrectomy removing cancerous stomach tissue and lymph nodes. Includes techniques like Endoscopic Mucosal Resection and Laparoscopic Assisted Distal Gastrectomy (LADG).", href: "/laparoscopic-surgery/gi/gastric-cancer" },
];

const bariatricProcedures = [
  { name: "Weight Loss Surgery Overview", description: "Dr. Wadhawan specializes in minimally invasive robotic-assisted procedures for weight loss. With over 2,000 bariatric procedures at a Centre of Excellence accredited by OSSI, the program combines surgical expertise with comprehensive pre- and post-operative support." },
  { name: "Who is Eligible?", description: "Generally, patients with BMI ≥ 35 with comorbidities (diabetes, hypertension, sleep apnea) or BMI ≥ 40. Individual assessment determines the best approach — robotic or laparoscopic." },
  { name: "Sleeve Gastrectomy", description: "Removes ~85% of the stomach, creating a tube-shaped sleeve. Reduces hunger hormones (ghrelin), restricts food intake. Mean excess weight loss at one year is 70%. Hospital stay is 2-3 days." },
  { name: "Gastric Bypass (Roux-en-Y)", description: "Creates a small stomach pouch and reroutes intestines. Dual mechanism of restriction and malabsorption. Gold standard for long-term weight loss and diabetes remission." },
  { name: "Mini Gastric Bypass (OAGB)", description: "A simplified single-anastomosis bypass with comparable results to Roux-en-Y, shorter surgery time, and excellent metabolic outcomes." },
  { name: "LAGB (Adjustable Gastric Banding)", description: "Silicone band placed around the upper stomach to restrict food intake. Adjustable, reversible, and one of the safest bariatric procedures available." },
  { name: "Revision Surgery", description: "Corrective procedures for patients with weight regain, complications, or need for conversion after previous bariatric surgery." },
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
              <ProcedureDetailPage title="Robotic Bariatric Surgery" subtitle="Advanced robotic-assisted weight loss procedures using the Da Vinci Robot with unmatched precision and faster recovery. Over 2,000 bariatric procedures at a Centre of Excellence accredited by OSSI." breadcrumb="Robotic Surgery > Bariatric" procedures={roboticBariatricProcedures} overview="Dr. Randeep Wadhawan is a pioneer in performing Robotic Bariatric procedures using the Da Vinci Robot. Trained in Bariatric surgery at the Centre of Excellence in Frankfurt, Germany, he is proficient in Sleeve Gastrectomy, Roux-en-Y Gastric Bypass, MGB/OAGB, DJB, SADI-S, and Revision Bariatric procedures. The robotic system provides sub-millimeter precision, 3D HD visualization, and 360° wrist articulation for optimal outcomes." benefits={["Sub-millimeter robotic precision with Da Vinci system","Smaller incisions & minimal scarring","Faster recovery — return home in 24–48 hours","Less post-operative pain","Lower complication rates","Enhanced 3D HD visualization","360° wrist articulation for precise stapling","Pioneer in robotic bariatric procedures in India"]} />
            } />
            <Route path="/robotic-bariatric-surgery/sleeve-gastrectomy" element={subProcedure("Robotic Sleeve Gastrectomy", "The most precise approach to sleeve gastrectomy using the Da Vinci robotic system.", "Robotic Surgery > Bariatric > Sleeve Gastrectomy", "Robotic sleeve gastrectomy removes approximately 85% of the stomach, reshaping it into a tube or 'sleeve'. The Da Vinci robotic system provides Dr. Wadhawan with enhanced 3D visualization and precise instrument control, ensuring optimal staple line placement and reduced risk of complications. The function of the stomach is preserved by not altering the nerves or the outlet valve. This procedure reduces hunger hormones (ghrelin) and restricts food intake, leading to significant and sustained weight loss. Mean excess weight loss at one year is 70%.", ["Sub-millimeter precision stapling","Reduced risk of staple line leak","Less blood loss during surgery","Ghrelin (appetite hormone) removed","2–3 day hospital stay","Return to normal activity in 4 days","60–70% excess weight loss in 12–18 months","Resolution of obesity-related conditions"])} />
            <Route path="/robotic-bariatric-surgery/gastric-bypass" element={subProcedure("Robotic Gastric Bypass (Roux-en-Y)", "Gold standard weight loss surgery enhanced with robotic precision for optimal anastomosis creation.", "Robotic Surgery > Bariatric > Gastric Bypass", "Robotic gastric bypass (Roux-en-Y) creates a small stomach pouch and reroutes a portion of the small intestine. The robotic system enables precise anastomosis (connection) creation with enhanced visualization, reducing leak risk. This procedure works through both restriction and mild malabsorption, providing excellent long-term weight loss and often leads to diabetes remission.", ["Superior anastomosis precision","Highest diabetes remission rates","70–80% excess weight loss","Effective for BMI > 40","Long-term sustained results","Improvement in cardiovascular risk factors"])} />
            <Route path="/robotic-bariatric-surgery/mini-gastric-bypass" element={subProcedure("Robotic Mini Gastric Bypass (OAGB)", "Simplified bypass procedure with excellent outcomes, enhanced by robotic precision.", "Robotic Surgery > Bariatric > Mini Gastric Bypass", "Robotic mini gastric bypass (One Anastomosis Gastric Bypass) is a simplified version of the traditional gastric bypass with comparable weight loss results. The single connection point reduces surgical complexity while the robotic system ensures precise execution. Dr. Wadhawan's expertise in both MGB/OAGB ensures tailored outcomes for each patient.", ["Shorter surgical time","Single anastomosis — simpler procedure","Comparable weight loss to Roux-en-Y","Excellent diabetes improvement","Reversible if needed","Lower complication rates"])} />
            <Route path="/robotic-bariatric-surgery/revision-surgery" element={subProcedure("Robotic Revision Bariatric Surgery", "Expert revision procedures for patients needing correction after previous bariatric surgery.", "Robotic Surgery > Bariatric > Revision Surgery", "Revision bariatric surgery is performed when a previous weight loss procedure needs correction — due to weight regain, complications, or conversion to a different procedure. Robotic assistance is especially valuable here, as it provides superior visualization of altered anatomy and scar tissue, enabling safer and more precise revision. Dr. Wadhawan has extensive experience in handling complex revision cases.", ["Safe navigation of altered anatomy","3D visualization of scar tissue","Precise correction of previous procedures","Conversion between procedure types","Lower revision complication rates","Expert handling of complex cases"])} />
            <Route path="/robotic-bariatric-surgery/metabolic-surgery" element={subProcedure("Robotic Metabolic Surgery (DJB/SADI-S)", "Tailored surgical treatment for type 2 diabetes and metabolic conditions with robotic precision.", "Robotic Surgery > Bariatric > Metabolic Surgery", "Robotic metabolic surgery targets type 2 diabetes and metabolic syndrome through surgical intervention. Dr. Wadhawan performs tailored laparoscopic metabolic procedures including Duodeno-Jejunal Bypass (DJB) and SADI-S for remission of Type II Diabetes and Metabolic Syndrome. The procedure modifies the gastrointestinal tract to improve metabolic function, often leading to complete remission of diabetes even in patients with BMI < 35.", ["Up to 80% diabetes remission rate","Tailored DJB and SADI-S procedures","Improvement in metabolic syndrome","Reduced cardiovascular risk","Effective even at lower BMI","Long-term metabolic benefits"])} />
            
            {/* Robotic GI */}
            <Route path="/robotic-gi-surgery" element={
              <ProcedureDetailPage title="Robotic GI Surgery" subtitle="State-of-the-art robotic gastrointestinal surgeries using the Da Vinci system for complex abdominal conditions." breadcrumb="Robotic Surgery > GI Surgery" overview="Dr. Wadhawan specializes in routine and advanced gastrointestinal surgeries with a focus on Upper Gastrointestinal and Colorectal procedures. With over 35,000 laparoscopic surgeries performed and fellowship training under Prof. Yuri Novitsky at University Hospitals, Cleveland, USA for Abdominal Wall Reconstruction, he brings unparalleled expertise to robotic GI surgery." procedures={roboticGIProcedures} benefits={["3D HD visualization for complex anatomy","Precise dissection around critical structures","Less blood loss and fewer complications","Faster patient recovery","Smaller incisions","Surgeon-controlled 360° wrist articulation","Over 35,000 procedures experience"]} />
            } />
            <Route path="/robotic-gi-surgery/hernia" element={
              <ProcedureDetailPage title="Robotic Hernia Surgery" subtitle="Comprehensive robotic hernia repair for all hernia types. Centre of Excellence accredited by the Hernia Society of India." breadcrumb="Robotic Surgery > GI > Hernia" overview="Robotic hernia repair offers the most precise approach to treating all types of hernias. The 3D visualization and articulating instruments allow Dr. Wadhawan to perform exact mesh placement, ensuring stronger repairs with lower recurrence rates. Dr. Wadhawan completed fellowship in Abdominal Wall Reconstruction under Prof. Yuri Novitsky at University Hospitals, Cleveland, USA, and has extensive experience in complex hernia cases." procedures={[
                { name: "Inguinal Hernia Repair", description: "Robotic repair of groin hernias with precise mesh placement using TAPP or TEP approach." },
                { name: "Incisional Hernia Repair", description: "Repair of hernias occurring at previous surgical incision sites, often complex cases requiring robotic precision." },
                { name: "Umbilical Hernia Repair", description: "Treatment of belly button hernias with mesh reinforcement for lasting results." },
                { name: "Hiatus Hernia Repair", description: "Repair of diaphragmatic hernias causing acid reflux, often combined with fundoplication." },
                { name: "Abdominal Wall Reconstruction", description: "Complex multi-defect, large, or recurrent hernias requiring advanced robotic capabilities and abdominal wall reconstruction expertise." },
              ]} benefits={["Fellowship-trained under Prof. Novitsky (Cleveland, USA)","Hernia Centre of Excellence (HSI accredited)","Precise mesh placement","Lower recurrence rates","Less post-operative pain","Rapid return to activities","Suitable for complex and recurrent cases"]} />
            } />
            <Route path="/robotic-gi-surgery/gallbladder" element={subProcedure("Robotic Gallbladder Surgery (Cholecystectomy)", "Enhanced cholecystectomy with the Da Vinci robotic system for gallstone disease.", "Robotic Surgery > GI > Gallbladder", "Robotic cholecystectomy provides enhanced visualization of the critical biliary anatomy, reducing the risk of bile duct injury — the most feared complication of gallbladder surgery. The 3D view and precise dissection capabilities make this especially valuable for inflamed or difficult gallbladders. Gall Bladder Stones is one of the procedures which can be performed with the Da Vinci Robot.", ["Critical view of safety enhanced","Reduced bile duct injury risk","Same-day or next-day discharge","Minimal scarring","Suitable for difficult and inflamed cases","Da Vinci robotic precision"])} />
            <Route path="/robotic-gi-surgery/appendix" element={subProcedure("Robotic Appendix Surgery", "Robotic-assisted appendectomy for acute and chronic appendicitis.", "Robotic Surgery > GI > Appendix", "Robotic appendectomy offers precise removal of the appendix with excellent visualization, particularly beneficial in cases with abscess formation or unusual anatomy. Patients typically return home within 24 hours with minimal discomfort.", ["Fast recovery","Minimal scarring","Precise handling of complex cases","Same-day discharge possible","Low complication rates","Suitable for complicated appendicitis"])} />
            <Route path="/robotic-gi-surgery/colon" element={subProcedure("Robotic Colon & Rectal Surgery", "Advanced robotic-assisted colectomy and rectal procedures for complex conditions.", "Robotic Surgery > GI > Colon & Rectal", "Robotic colon and rectal surgery addresses conditions including diverticulitis, polyps, inflammatory bowel disease, colon cancer, rectal cancer, and rectal prolapse. The robotic platform provides superior access to deep pelvic anatomy and precise vascular control, leading to better oncological and functional outcomes. Colon & Rectal Cancer is one of the key procedures performed with the Da Vinci Robot.", ["Precise lymph node dissection","Better access to difficult pelvic anatomy","Lower conversion-to-open rates","Faster bowel recovery","Optimal nerve preservation","Superior oncological outcomes"])} />
            <Route path="/robotic-gi-surgery/rectal" element={subProcedure("Robotic Rectal Surgery", "Complex rectal procedures with the precision of Da Vinci robotic-assisted technology.", "Robotic Surgery > GI > Rectal", "Robotic rectal surgery is where the robotic platform truly excels. The confined space of the pelvis makes traditional surgery challenging, but the robotic arms can navigate these tight spaces with 360° movement, ensuring precise dissection around critical nerves and structures. Dr. Wadhawan performs procedures for Rectal Cancer, Rectal Prolapse, and other rectal conditions.", ["Optimal nerve preservation","Precise pelvic dissection","Better functional outcomes","Lower positive margin rates","Reduced complications","Superior access in narrow pelvis"])} />
            <Route path="/robotic-gi-surgery/cancer" element={
              <ProcedureDetailPage title="Robotic GI Cancer Surgery" subtitle="Precision oncological surgery for gastrointestinal cancers using the Da Vinci system." breadcrumb="Robotic Surgery > GI > Cancer" overview="Robotic-assisted cancer surgery provides the precision needed for complete tumor removal with clear margins, adequate lymph node dissection, and preservation of surrounding healthy tissue. This translates to better oncological outcomes and faster recovery." procedures={[
                { name: "Gastric (Stomach) Cancer", description: "Robotic gastrectomy for stomach cancer with precise tumor excision and lymph node clearance. Includes endoscopic mucosal resection and laparoscopic assisted distal gastrectomy." },
                { name: "Colon Cancer", description: "Robotic colectomy with complete mesocolic excision for optimal cancer clearance." },
                { name: "Rectal Cancer", description: "Total mesorectal excision (TME) with robotic precision for the best oncological and functional outcomes." },
                { name: "Esophageal Cancer (Oesophagectomy)", description: "Robotic esophagectomy — removing part or all of the esophagus with minimally invasive technique, then rebuilding the passage from part of the stomach. Less discomfort, shorter hospital stay, faster recovery than open surgery." },
              ]} benefits={["Precise tumor margin control","Complete lymph node dissection","Nerve and organ preservation","Faster post-cancer recovery","Lower post-operative complications","Better long-term survival outcomes"]} />
            } />

            {/* Robotic Advanced GI */}
            <Route path="/robotic-advanced-gi-surgery" element={
              <ProcedureDetailPage title="Robotic Advanced GI Surgery" subtitle="Complex hepato-pancreato-biliary and advanced GI procedures with Da Vinci robotic precision." breadcrumb="Robotic Surgery > Advanced GI" overview="Advanced GI surgery encompasses complex procedures involving the liver, pancreas, spleen, esophagus, and portal system. Dr. Wadhawan's team performs these intricate surgeries with robotic assistance for enhanced safety and precision near major blood vessels." procedures={roboticAdvancedGIProcedures} benefits={["Expert handling of complex anatomy","Precise dissection near major vessels","Enhanced 3D visualization","Reduced blood loss","Faster recovery from major procedures","Multi-disciplinary team support","State-of-the-art infrastructure"]} />
            } />
            <Route path="/robotic-advanced-gi-surgery/liver" element={subProcedure("Robotic Liver Resections", "Complex liver resections using Da Vinci robotic-assisted precision.", "Robotic Surgery > Advanced GI > Liver", "Surgically removing part or segments of the liver is called liver resection. This complex surgery is performed for liver cancer, metastatic colorectal cancers, gallbladder cancers, and certain benign tumors of the liver. Robotic assistance enables precise hepatic resections with enhanced control near major blood vessels. The 3D visualization and steady robotic movements allow safe parenchymal transection and precise control of hepatic vasculature. Dr. Wadhawan has performed many successful liver resection surgeries with his multi-disciplinary team and state-of-the-art infrastructure.", ["Precise parenchymal transection","Safe handling near major vessels","Less blood loss","Faster liver regeneration","Shorter hospital stay","Multi-disciplinary team approach"])} />
            <Route path="/robotic-advanced-gi-surgery/pancreatic" element={subProcedure("Robotic Whipple Procedure (Pancreatic Cancer)", "The Whipple procedure for pancreatic and periampullary cancer with robotic assistance for superior outcomes.", "Robotic Surgery > Advanced GI > Pancreatic", "The Whipple procedure (pancreaticoduodenectomy) is a complex surgery that may extend life and has the possibility of curing pancreatic/periampullary cancer. The surgeon removes the 'head' (wide part) of the pancreas, the duodenum, portion of the common bile duct, gallbladder, and sometimes part of the stomach. Then the remaining intestine, bile duct, and pancreas are rejoined. Dr. Wadhawan, one of the best Gastrointestinal Surgeons in India, has performed many successful Whipple Procedures. Few patients may be eligible for a minimally invasive robotic Whipple procedure, using multiple small incisions rather than the larger single incision required in open surgery.", ["Precise anastomosis creation","Lower pancreatic fistula rates","Better vessel preservation","Reduced surgical trauma","Multiple small incisions vs large open incision","Expert multi-disciplinary team"])} />
            <Route path="/robotic-advanced-gi-surgery/splenectomy" element={subProcedure("Robotic Splenectomy", "Robotic-assisted spleen removal for blood disorders and splenic conditions.", "Robotic Surgery > Advanced GI > Splenectomy", "Robotic splenectomy offers precise removal of the spleen with excellent control of the splenic hilum vasculature. This approach is ideal for conditions like ITP, hereditary spherocytosis, splenic cysts, and certain lymphomas. Splenectomy is one of the key procedures performed with the Da Vinci Robot.", ["Precise vascular control","Minimal blood loss","Short hospital stay","Rapid return to activities","Suitable for enlarged spleens","Low complication rates"])} />
            <Route path="/robotic-advanced-gi-surgery/achalasia" element={subProcedure("Robotic Achalasia Surgery (Heller Myotomy)", "Precise esophageal myotomy for Achalasia Cardia using Da Vinci robotic technology.", "Robotic Surgery > Advanced GI > Achalasia", "Robotic Heller myotomy for Achalasia Cardia (a disorder of the muscle at the end of the esophagus) provides precise division of the lower esophageal sphincter muscle fibers while preserving the underlying mucosa. The robotic system's enhanced visualization and steady movements make this delicate procedure safer and more effective, often combined with a partial fundoplication to prevent reflux.", ["Precise muscle fiber division","Mucosal preservation","Combined anti-reflux procedure","Rapid symptom relief","Quick recovery","Long-lasting results"])} />
            <Route path="/robotic-advanced-gi-surgery/portal-hypertension" element={subProcedure("Surgery for Portal Hypertension", "Surgical shunt procedures for elevated portal vein pressure when endoscopic techniques fail.", "Robotic Surgery > Advanced GI > Portal Hypertension", "When increased pressure within the portal vein (which carries blood from digestive organs to the liver) is caused by blockage in blood flow through the liver, it leads to portal hypertension. This can cause large veins (varices) to develop across the esophagus and stomach, which may bleed. When medication and endoscopic techniques (sclerotherapy, banding, balloon tamponade) fail to stop bleeding, then minimally invasive or surgical shunt procedures are done to create an alternate pathway to relieve portal hypertension and bleeding varices. The most commonly used procedure is the Distal Splenorenal Shunt (DSRS). Dr. Wadhawan has vast experience conducting GI surgeries including surgery for elevated portal vein pressure.", ["Expert management of portal hypertension","Distal Splenorenal Shunt (DSRS)","TIPS procedure for eligible patients","Relief from bleeding varices","Minimally invasive when possible","Experienced multi-disciplinary team"])} />

            {/* Laparoscopic Surgery */}
            <Route path="/laparoscopic-surgery" element={
              <ProcedureDetailPage title="Laparoscopic Surgery" subtitle="Advanced minimally invasive laparoscopic procedures — proven, effective, and widely trusted. Over 35,000 laparoscopic surgeries performed by Dr. Wadhawan." overview="Dr. Randeep Wadhawan specializes in minimally invasive robotic-assisted and laparoscopic procedures for several gastrointestinal conditions. As a leading Laparoscopic Surgeon with extensive training and practice, he brings forth strong credentials both as a practicing surgeon and as an academic." procedures={[
                { name: "Laparoscopic Bariatric Surgery", description: "Complete range of weight loss procedures through keyhole incisions including Sleeve Gastrectomy, Gastric Bypass, OAGB, and LAGB.", href: "/laparoscopic-surgery/bariatric" },
                { name: "Laparoscopic GI Surgery", description: "Hernia repair, gallbladder removal, appendectomy, colorectal procedures, and GI cancer surgery.", href: "/laparoscopic-surgery/gi" },
              ]} benefits={["Over 35,000 laparoscopic surgeries performed","Minimally invasive keyhole approach","Proven track record worldwide","Faster recovery than open surgery","Less post-operative pain","Shorter hospital stays","Cost-effective option"]} />
            } />
            <Route path="/laparoscopic-surgery/bariatric" element={
              <ProcedureDetailPage title="Laparoscopic Bariatric Surgery" subtitle="Proven weight loss procedures through minimally invasive keyhole approach. Over 2,000 bariatric procedures at a Centre of Excellence." breadcrumb="Laparoscopic Surgery > Bariatric" overview="Dr. Wadhawan was trained in bariatric surgery at the Centre of Excellence in Frankfurt, Germany. He leads a successful Obesity, Bariatric & Metabolic surgery program at a Centre of Excellence accredited by the Obesity and Metabolic Surgery Society of India (OSSI)." procedures={lapBariatricProcedures} benefits={["Centre of Excellence accredited by OSSI","Trained at Centre of Excellence, Frankfurt, Germany","Over 2,000 bariatric procedures","Comprehensive pre & post-operative support","All procedures through keyhole incisions","Shorter recovery than open surgery"]} />
            } />
            <Route path="/laparoscopic-surgery/bariatric/sleeve" element={subProcedure("Laparoscopic Sleeve Gastrectomy", "Reshaping the stomach into a tube or 'sleeve' — the most commonly performed bariatric procedure.", "Laparoscopic > Bariatric > Sleeve Gastrectomy", "Reshaping the stomach into a tube or 'sleeve', the laparoscopic sleeve gastrectomy is a bariatric surgery in which a trained bariatric surgeon removes approximately 85% of the stomach. The function of stomach is preserved by not altering the nerves of the stomach and the outlet valve. Dr. Wadhawan has performed hundreds of successful laparoscopic sleeve gastrectomy, dividing the stomach along its vertical length to create a slender space for food, removing the excess stomach. This restricts the amount of food ingested at any given time without altering the normal absorption of vitamins and minerals, and also minimizes the chance of developing ulcers.", ["Restrictive process — no intestinal rerouting","Popular alternative to LAGB & Gastric Bypass","25% stomach left (75-85% removed)","Less invasive than bypass","Ghrelin hormone (appetite hormone) removed","Mean excess weight loss at one year is 70%","Minimal complications","Hospital stay is 2-3 days","Return to normal activity in 4 days"])} />
            <Route path="/laparoscopic-surgery/bariatric/gastric-bypass" element={subProcedure("Laparoscopic Gastric Bypass (Roux-en-Y)", "Gold standard Roux-en-Y gastric bypass through minimally invasive approach for effective long-term weight loss.", "Laparoscopic > Bariatric > Gastric Bypass", "Laparoscopic gastric bypass creates a small stomach pouch and bypasses a portion of the small intestine. This dual mechanism of restriction and mild malabsorption provides excellent long-term weight loss and is particularly effective for diabetes remission.", ["Excellent diabetes remission","70-80% excess weight loss","Long-term sustained results","Proven over decades","Effective for higher BMI","Reduces cardiovascular risk"])} />
            <Route path="/laparoscopic-surgery/bariatric/mini-gastric-bypass" element={subProcedure("Laparoscopic Mini Gastric Bypass (OAGB)", "Simplified bypass with excellent outcomes through minimally invasive technique.", "Laparoscopic > Bariatric > Mini Gastric Bypass", "Laparoscopic mini gastric bypass (One Anastomosis Gastric Bypass) is a simplified single-anastomosis procedure offering comparable weight loss to traditional Roux-en-Y bypass with shorter operating time and fewer potential complications.", ["Shorter surgery duration","Comparable weight loss results","Single anastomosis","Good diabetes improvement","Potentially reversible","Lower complication rate"])} />
            <Route path="/laparoscopic-surgery/bariatric/gastric-banding" element={subProcedure("LAGB (Laparoscopic Adjustable Gastric Banding)", "A safe, reliable, and minimally invasive bariatric procedure using a silicone band.", "Laparoscopic > Bariatric > Gastric Banding", "Laparoscopic Adjustable Gastric Banding (LAGB) is one of the most safe, reliable, and minimally invasive bariatric procedures available. Dr. Wadhawan places instruments through tiny incisions, using a laparoscope with a camera to view the stomach on a monitor. A silicone band (highly biocompatible material) is tied around the top portion of the stomach, leaving a very small space available for food. This gives the patient a feeling of fullness after eating only a small quantity. The procedure can be adjusted and even reversed depending on the patient's requirements. LAGB is used to treat severe obesity with hypertension, high cholesterol, type 2 diabetes, sleep apnea, and arthritis.", ["Silicone band — highly biocompatible material","Adjustable and reversible","Restrictive procedure — no cutting of stomach","Treats obesity with comorbidities","Minimally invasive with tiny incisions","Feeling of fullness after small meals"])} />
            <Route path="/laparoscopic-surgery/bariatric/revision" element={subProcedure("Laparoscopic Revision Surgery", "Corrective bariatric procedures through minimally invasive approach.", "Laparoscopic > Bariatric > Revision", "Laparoscopic revision surgery corrects or converts previous bariatric procedures when needed — for weight regain, inadequate weight loss, or complications from prior surgery.", ["Correction of previous procedures","Conversion between surgery types","Minimally invasive approach","Expert handling of complex anatomy","Effective for weight regain","Second-chance weight loss"])} />
            <Route path="/laparoscopic-surgery/gi" element={
              <ProcedureDetailPage title="Laparoscopic GI Surgery" subtitle="Proven minimally invasive approaches for gastrointestinal conditions. Over 35,000 laparoscopic surgeries performed." breadcrumb="Laparoscopic Surgery > GI" overview="Dr. Wadhawan specializes in routine and advanced gastrointestinal surgeries with a focus on Upper Gastrointestinal and Colorectal procedures. With over 35,000 laparoscopic surgeries and certification by the European Coloproctology Society, he offers comprehensive laparoscopic GI care." procedures={lapGIProcedures} benefits={["Over 35,000 laparoscopic surgeries","Certified by European Coloproctology Society","Over 5,000 MIPH & STARR procedures","Minimally invasive keyhole approach","Faster recovery than open surgery","Comprehensive GI care"]} />
            } />
            <Route path="/laparoscopic-surgery/gi/hernia" element={subProcedure("Laparoscopic Hernia Surgery", "Effective keyhole hernia repair with mesh reinforcement. Hernia Centre of Excellence accredited by the Hernia Society of India.", "Laparoscopic > GI > Hernia", "Laparoscopic hernia repair uses small incisions and a mesh to reinforce the weakened area. This approach provides excellent results for inguinal, incisional, and ventral hernias with faster recovery than open repair. Dr. Wadhawan has extensive experience in complex hernia cases with fellowship in Abdominal Wall Reconstruction under Prof. Yuri Novitsky at University Hospitals, Cleveland, USA.", ["Hernia Centre of Excellence (HSI accredited)","Fellowship-trained in Abdominal Wall Reconstruction","Small incisions with mesh reinforcement","Low recurrence rates","Faster recovery than open repair","Less post-operative pain"])} />
            <Route path="/laparoscopic-surgery/gi/gallbladder" element={subProcedure("Laparoscopic Gallbladder Surgery", "Gold standard cholecystectomy for gallstone disease. Same-day discharge in most cases.", "Laparoscopic > GI > Gallbladder", "Laparoscopic cholecystectomy is the gold standard treatment for gallstones and gallbladder disease. Through 3-4 small incisions, the gallbladder is safely removed with most patients going home the same day. Dr. Wadhawan has performed over 35,000 laparoscopic surgeries including thousands of cholecystectomies.", ["Same-day discharge","3-4 tiny incisions","Gold standard treatment","Rapid recovery","Proven safety record","Minimal scarring"])} />
            <Route path="/laparoscopic-surgery/gi/appendix" element={subProcedure("Laparoscopic Appendix Surgery", "Minimally invasive appendectomy for rapid recovery.", "Laparoscopic > GI > Appendix", "Laparoscopic appendectomy removes the inflamed appendix through 2-3 small incisions. This is the standard approach for appendicitis, offering faster recovery and less pain compared to open surgery.", ["2-3 tiny incisions","Quick procedure","Rapid recovery","Less pain","Early discharge","Minimal scarring"])} />
            <Route path="/laparoscopic-surgery/gi/colon" element={subProcedure("Laparoscopic Colon & Rectal Surgery", "Minimally invasive colectomy and rectal malignancy surgery for various conditions.", "Laparoscopic > GI > Colon & Rectal", "Laparoscopic colon cancer surgery (laparoscopic colectomy) is a minimally invasive procedure removing cancerous colon tissue and lymph nodes through small incisions. Laparoscopic rectal malignancy surgery uses similar techniques for rectal cancer. The surgeon operates the affected part through small surgical instruments inserted via multiple tiny incisions. Both procedures offer faster bowel recovery, shorter hospital stays, and less pain than open surgery. Dr. Wadhawan is certified by the European Coloproctology Society.", ["Faster bowel recovery","Shorter hospital stay","Less post-operative pain","Certified by European Coloproctology Society","Suitable for colon and rectal conditions","Earlier return to normal routine"])} />
            <Route path="/laparoscopic-surgery/gi/rectal" element={subProcedure("Laparoscopic Rectal Surgery", "Advanced minimally invasive rectal procedures certified by European Coloproctology Society.", "Laparoscopic > GI > Rectal", "Laparoscopic rectal surgery provides a minimally invasive approach to rectal conditions including rectal cancer, rectal prolapse, and inflammatory conditions. Dr. Wadhawan has over 5,000 MIPH (Minimally Invasive Procedures for Haemorrhoids) & STARR procedures and is certified by the European Coloproctology Society.", ["Over 5,000 MIPH & STARR procedures","European Coloproctology Society certified","Minimally invasive approach","Nerve preservation","Better cosmetic outcomes","Faster recovery"])} />
            <Route path="/laparoscopic-surgery/gi/gastric-cancer" element={subProcedure("Laparoscopic Surgery for Gastric Cancer", "Minimally invasive laparoscopic gastrectomy for stomach cancer removal.", "Laparoscopic > GI > Gastric Cancer", "Laparoscopic surgery for gastric cancer (laparoscopic gastrectomy) is a minimally invasive procedure where the surgeon removes the tumor in the stomach using a laparoscope and surgical instruments. The procedure removes the cancerous part of the stomach, and if cancer cells have spread throughout, the entire stomach is removed. Nearby lymph nodes affected by cancer are also removed. Types include Endoscopic Mucosal Resection for tumors less than 2cm, and Laparoscopic Assisted Distal Gastrectomy (LADG) for advanced cancerous cells.", ["Smaller incisions than open surgery","Reduced post-operative pain","Faster recovery time","Shorter hospital stay","Endoscopic Mucosal Resection for small tumors","LADG for advanced cancer cells"])} />

            {/* Procedures */}
            <Route path="/bariatric-surgery" element={
              <ProcedureDetailPage title="Bariatric Surgery" subtitle="Comprehensive weight loss surgery solutions for lasting health transformation. Centre of Excellence accredited by OSSI." overview="Dr. Wadhawan specializes in minimally invasive robotic-assisted procedures for weight loss. With over 2,000 bariatric procedures at a Centre of Excellence accredited by OSSI, and trained at the Centre of Excellence in Frankfurt, Germany, the program combines surgical expertise with comprehensive pre- and post-operative support. The state-of-the-art robotic surgery program uses the Da Vinci surgical system with an experienced team of surgeons, nurses, and technicians." procedures={bariatricProcedures} benefits={["60-80% excess weight loss","Diabetes remission in up to 80%","Resolution of sleep apnea","Improvement in hypertension","Better quality of life","Long-term health benefits","Centre of Excellence accredited by OSSI"]} />
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
                { name: "Testimonials", description: "Hear from patients who've been through it.", href: "/media/patient-stories" },
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
            <Route path="/bmi-calculator" element={<BMICalculatorPage />} />
            <Route path="/surgery-eligibility" element={<SurgeryEligibilityPage />} />
            <Route path="/cost-estimator" element={<CostEstimatorPage />} />

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
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
