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
const subProcedure = (data: SC.SurgeryPageData, img?: string) => (
  <ProcedureDetailPage
    title={data.title}
    subtitle={data.subtitle}
    breadcrumb={data.breadcrumb}
    overview={data.overview}
    benefits={data.benefits}
    procedures={[]}
    sections={data.sections}
    imageSrc={img}
    imageAlt={data.imageAlt}
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
            <Route path="/robotic-bariatric-surgery/sleeve-gastrectomy" element={subProcedure(SC.roboticSleeveData, surgerySleeveImg)} />
            <Route path="/robotic-bariatric-surgery/gastric-bypass" element={subProcedure(SC.roboticGastricBypassData, surgeryBypassImg)} />
            <Route path="/robotic-bariatric-surgery/mini-gastric-bypass" element={subProcedure(SC.roboticMiniBypassData, surgeryRoboticImg)} />
            <Route path="/robotic-bariatric-surgery/revision-surgery" element={subProcedure(SC.roboticRevisionData, surgeryRoboticImg)} />
            <Route path="/robotic-bariatric-surgery/metabolic-surgery" element={subProcedure(SC.roboticMetabolicData, surgeryRoboticImg)} />
            
            {/* Robotic GI */}
            <Route path="/robotic-gi-surgery" element={
              <ProcedureDetailPage title="Robotic GI Surgery" subtitle="State-of-the-art robotic gastrointestinal surgeries using the Da Vinci system for complex abdominal conditions." breadcrumb="Robotic Surgery > GI Surgery" overview="Dr. Wadhawan specializes in routine and advanced gastrointestinal surgeries with a focus on Upper Gastrointestinal and Colorectal procedures. With over 35,000 laparoscopic surgeries performed and fellowship training under Prof. Yuri Novitsky at University Hospitals, Cleveland, USA for Abdominal Wall Reconstruction, he brings unparalleled expertise to robotic GI surgery." procedures={roboticGIProcedures} benefits={["3D HD visualization for complex anatomy","Precise dissection around critical structures","Less blood loss and fewer complications","Faster patient recovery","Smaller incisions","Surgeon-controlled 360° wrist articulation","Over 35,000 procedures experience"]} />
            } />
            <Route path="/robotic-gi-surgery/hernia" element={subProcedure(SC.roboticHerniaData, surgeryHerniaImg)} />
            <Route path="/robotic-gi-surgery/gallbladder" element={subProcedure(SC.roboticGallbladderData, surgeryGIImg)} />
            <Route path="/robotic-gi-surgery/appendix" element={subProcedure(SC.roboticAppendixData, surgeryRoboticImg)} />
            <Route path="/robotic-gi-surgery/colon" element={subProcedure(SC.roboticColonData, surgeryColonImg)} />
            <Route path="/robotic-gi-surgery/rectal" element={subProcedure(SC.roboticRectalData, surgeryColonImg)} />
            <Route path="/robotic-gi-surgery/cancer" element={
              <ProcedureDetailPage title="Robotic GI Cancer Surgery" subtitle="Precision oncological surgery for gastrointestinal cancers using the Da Vinci system." breadcrumb="Robotic Surgery > GI > Cancer" overview="Robotic-assisted cancer surgery provides the precision needed for complete tumor removal with clear margins, adequate lymph node dissection, and preservation of surrounding healthy tissue. This translates to better oncological outcomes and faster recovery." imageSrc={surgeryRoboticImg} procedures={[
                { name: "Gastric (Stomach) Cancer", description: "Robotic gastrectomy for stomach cancer with precise tumor excision and lymph node clearance. Includes endoscopic mucosal resection and laparoscopic assisted distal gastrectomy." },
                { name: "Colon Cancer", description: "Robotic colectomy with complete mesocolic excision for optimal cancer clearance." },
                { name: "Rectal Cancer", description: "Total mesorectal excision (TME) with robotic precision for the best oncological and functional outcomes." },
                { name: "Esophageal Cancer (Oesophagectomy)", description: "Robotic esophagectomy — removing part or all of the esophagus with minimally invasive technique, then rebuilding the passage from part of the stomach. Less discomfort, shorter hospital stay, faster recovery than open surgery." },
              ]} benefits={["Precise tumor margin control","Complete lymph node dissection","Nerve and organ preservation","Faster post-cancer recovery","Lower post-operative complications","Better long-term survival outcomes"]} />
            } />

            {/* Robotic Advanced GI */}
            <Route path="/robotic-advanced-gi-surgery" element={
              <ProcedureDetailPage title="Robotic Advanced GI Surgery" subtitle="Complex hepato-pancreato-biliary and advanced GI procedures with Da Vinci robotic precision." breadcrumb="Robotic Surgery > Advanced GI" overview="Advanced GI surgery encompasses complex procedures involving the liver, pancreas, spleen, esophagus, and portal system. Dr. Wadhawan's team performs these intricate surgeries with robotic assistance for enhanced safety and precision near major blood vessels." imageSrc={surgeryLiverImg} procedures={roboticAdvancedGIProcedures} benefits={["Expert handling of complex anatomy","Precise dissection near major vessels","Enhanced 3D visualization","Reduced blood loss","Faster recovery from major procedures","Multi-disciplinary team support","State-of-the-art infrastructure"]} />
            } />
            <Route path="/robotic-advanced-gi-surgery/liver" element={subProcedure(SC.roboticLiverData, surgeryLiverImg)} />
            <Route path="/robotic-advanced-gi-surgery/pancreatic" element={subProcedure(SC.roboticPancreaticData, surgeryLiverImg)} />
            <Route path="/robotic-advanced-gi-surgery/splenectomy" element={subProcedure(SC.roboticSplenectomyData, surgeryGIImg)} />
            <Route path="/robotic-advanced-gi-surgery/achalasia" element={subProcedure(SC.roboticAchalasiaData, surgeryGIImg)} />
            <Route path="/robotic-advanced-gi-surgery/portal-hypertension" element={subProcedure(SC.roboticPortalHTData, surgeryGIImg)} />

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
