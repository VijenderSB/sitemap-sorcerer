// Expanded surgery page content with ~400 words, sections, and image references

export interface SurgeryPageData {
  title: string;
  subtitle: string;
  breadcrumb: string;
  overview: string;
  sections: { title: string; content: string }[];
  benefits: string[];
  imageSrc?: string;
  imageAlt?: string;
}

// ===================== ROBOTIC BARIATRIC =====================

export const roboticSleeveData: SurgeryPageData = {
  title: "Robotic Sleeve Gastrectomy",
  subtitle: "The most precise approach to sleeve gastrectomy using the Da Vinci robotic system.",
  breadcrumb: "Robotic Surgery > Bariatric > Sleeve Gastrectomy",
  overview: "Robotic sleeve gastrectomy is a state-of-the-art weight loss procedure where approximately 85% of the stomach is removed using the Da Vinci robotic surgical system. The remaining stomach is reshaped into a narrow tube or 'sleeve', dramatically reducing its capacity while preserving normal digestive function. Dr. Randeep Wadhawan, a pioneer in robotic bariatric surgery in India trained at the Centre of Excellence in Frankfurt, Germany, uses the robotic platform's sub-millimeter precision to ensure optimal staple line placement, reducing the risk of complications such as leaks and bleeding.",
  sections: [
    {
      title: "How the Procedure Works",
      content: "During robotic sleeve gastrectomy, Dr. Wadhawan operates from a console that provides an immersive 3D high-definition view of the surgical field magnified up to 10 times. The Da Vinci robot's articulating wrist instruments translate his hand movements into precise micro-movements inside the abdomen through 4-5 small incisions (8-12mm each). The greater curvature of the stomach is divided using an endoscopic stapler, and the excised portion — which contains most of the ghrelin-producing cells (the hunger hormone) — is removed. This dual mechanism of restriction and hormonal change leads to significant, sustained weight loss. The entire procedure typically takes 60-90 minutes."
    },
    {
      title: "Recovery & Expected Outcomes",
      content: "Most patients are discharged within 24-48 hours after robotic sleeve gastrectomy, significantly faster than open surgery. Patients can resume light activities within 3-4 days and return to work within 1-2 weeks. The mean excess weight loss at one year is approximately 70%, with continued improvement over 18-24 months. Beyond weight loss, patients experience dramatic improvement in obesity-related conditions including type 2 diabetes (remission in 60-70% of cases), hypertension, sleep apnea, joint pain, and PCOS. The robotic approach results in less post-operative pain, minimal scarring, and lower complication rates compared to traditional techniques. Dr. Wadhawan's program includes comprehensive pre-operative evaluation and lifelong post-operative nutritional support."
    },
    {
      title: "Why Choose Robotic Over Laparoscopic?",
      content: "While laparoscopic sleeve gastrectomy is an excellent procedure, the robotic approach offers distinct advantages. The 360° wrist articulation allows the surgeon to work at angles impossible with straight laparoscopic instruments. Tremor filtration ensures rock-steady instrument control during the critical stapling phase. The 3D HD visualization provides depth perception that helps identify tissue planes more accurately. For patients with very high BMI or those with prior abdominal surgeries, the robotic platform is especially beneficial as it enables safer navigation of challenging anatomy. Dr. Wadhawan has performed over 2,000 bariatric procedures and selects the most appropriate technique based on each patient's unique situation."
    }
  ],
  benefits: [
    "Sub-millimeter precision stapling with Da Vinci system",
    "Reduced risk of staple line leak",
    "Less blood loss during surgery",
    "Ghrelin (appetite hormone) significantly reduced",
    "24-48 hour hospital stay",
    "Return to normal activity in 3-4 days",
    "60-70% excess weight loss in 12-18 months",
    "Resolution of obesity-related conditions",
    "Minimal scarring — 4-5 tiny incisions",
    "Comprehensive pre & post-operative support"
  ],
  imageAlt: "Robotic Sleeve Gastrectomy Procedure"
};

export const roboticGastricBypassData: SurgeryPageData = {
  title: "Robotic Gastric Bypass (Roux-en-Y)",
  subtitle: "Gold standard weight loss surgery enhanced with robotic precision for optimal anastomosis creation.",
  breadcrumb: "Robotic Surgery > Bariatric > Gastric Bypass",
  overview: "Robotic Roux-en-Y Gastric Bypass (RYGB) is the gold standard in bariatric surgery, combining both restriction and mild malabsorption for exceptional long-term weight loss. Dr. Randeep Wadhawan performs this complex procedure using the Da Vinci robotic system, which provides unmatched precision in creating the gastrojejunal anastomosis — the critical connection between the small stomach pouch and the rerouted intestine. This precision is vital, as the quality of the anastomosis directly impacts complication rates and long-term outcomes.",
  sections: [
    {
      title: "Understanding the Procedure",
      content: "During robotic gastric bypass, a small pouch (approximately 30ml) is created from the upper part of the stomach, completely separated from the rest. The small intestine is then divided, and the lower portion (Roux limb) is brought up and connected to the new pouch, creating the gastrojejunal anastomosis. The bypassed stomach and upper intestine are then reconnected further downstream (jejunojejunostomy). Food now travels directly from the small pouch into the mid-portion of the small intestine, bypassing the larger stomach remnant and the first part of the intestine. This reduces both food intake and calorie absorption while triggering hormonal changes that improve insulin sensitivity and promote satiety."
    },
    {
      title: "Why Robotic Precision Matters",
      content: "The gastrojejunal anastomosis is the most critical step in gastric bypass surgery. Even minor imperfections can lead to leaks, strictures, or marginal ulcers. The Da Vinci robotic system provides Dr. Wadhawan with 3D HD magnified visualization and 360° wrist articulation, enabling him to create meticulous hand-sewn anastomoses with sub-millimeter accuracy. Tremor filtration eliminates any natural hand tremor, ensuring each suture is placed with absolute precision. This results in significantly lower leak rates and better long-term outcomes. The robotic platform also enables superior visualization when working in the deep, narrow spaces of the abdomen — particularly important for patients with high BMI."
    },
    {
      title: "Results & Long-Term Benefits",
      content: "Robotic gastric bypass achieves 70-80% excess weight loss within 12-18 months and has the highest rates of type 2 diabetes remission among all bariatric procedures — up to 80-85% of patients achieve complete remission. Patients also see marked improvement in hypertension, sleep apnea, hyperlipidemia, and cardiovascular risk factors. Hospital stay is typically 2-3 days with return to normal activities in 2 weeks. Dr. Wadhawan's comprehensive program includes pre-operative optimization, detailed nutritional counseling, and lifelong follow-up to ensure sustained results. With over 2,000 bariatric procedures at a Centre of Excellence accredited by OSSI, patients receive world-class care."
    }
  ],
  benefits: [
    "Superior anastomosis precision with robotic suturing",
    "Highest diabetes remission rates (80-85%)",
    "70-80% excess weight loss in 12-18 months",
    "Effective for BMI > 40 with comorbidities",
    "Long-term sustained results over 10+ years",
    "Improvement in cardiovascular risk factors",
    "Resolution of sleep apnea and hypertension",
    "Lower complication rates with robotic approach",
    "Comprehensive lifelong follow-up program"
  ],
  imageAlt: "Robotic Gastric Bypass Surgery"
};

export const roboticMiniBypassData: SurgeryPageData = {
  title: "Robotic Mini Gastric Bypass (OAGB)",
  subtitle: "Simplified bypass procedure with excellent outcomes, enhanced by robotic precision.",
  breadcrumb: "Robotic Surgery > Bariatric > Mini Gastric Bypass",
  overview: "Robotic Mini Gastric Bypass, also known as One Anastomosis Gastric Bypass (OAGB), is a simplified yet highly effective weight loss procedure that creates a single connection between the stomach and intestine. Unlike the traditional Roux-en-Y with two anastomoses, the OAGB requires only one, reducing surgical complexity and operative time while delivering comparable weight loss results. Dr. Wadhawan performs this procedure with Da Vinci robotic assistance for enhanced precision and safety.",
  sections: [
    {
      title: "The Surgical Technique",
      content: "In robotic OAGB, Dr. Wadhawan creates a long, narrow gastric tube from the stomach using the robotic stapler. The small intestine is then measured approximately 200cm from the start and connected to the bottom of this gastric tube in a single loop anastomosis. This creates a bypass of the proximal small intestine, resulting in both restriction (smaller stomach capacity) and mild malabsorption (reduced calorie and nutrient absorption). The robotic platform enables precise measurement, optimal staple line creation, and a meticulous hand-sewn or stapled anastomosis. The entire procedure typically takes 45-75 minutes, shorter than traditional gastric bypass."
    },
    {
      title: "Recovery & Metabolic Benefits",
      content: "Patients typically go home within 2 days after robotic OAGB. Return to light activities occurs within a week, and most patients resume full activities in 2-3 weeks. Weight loss results are comparable to Roux-en-Y gastric bypass, with 65-75% excess weight loss at one year. The procedure also achieves excellent metabolic outcomes — diabetes remission rates of 70-80%, significant improvement in hypertension, dyslipidemia, and PCOS. One unique advantage of OAGB is its potential reversibility; if needed, the bypass can be undone, though this is rarely required. Dr. Wadhawan tailors the bypass length to each patient's BMI and metabolic profile for optimal individualized outcomes."
    }
  ],
  benefits: [
    "Shorter surgical time than traditional bypass",
    "Single anastomosis — simpler procedure",
    "Comparable weight loss to Roux-en-Y (65-75% EWL)",
    "Excellent diabetes improvement (70-80% remission)",
    "Potentially reversible if needed",
    "Lower complication rates",
    "Robotic precision for meticulous anastomosis",
    "Tailored bypass length for individual needs"
  ],
  imageAlt: "Robotic Mini Gastric Bypass"
};

export const roboticRevisionData: SurgeryPageData = {
  title: "Robotic Revision Bariatric Surgery",
  subtitle: "Expert revision procedures for patients needing correction after previous bariatric surgery.",
  breadcrumb: "Robotic Surgery > Bariatric > Revision Surgery",
  overview: "Revision bariatric surgery is among the most complex procedures in weight loss surgery, performed when a previous bariatric operation needs correction. Common reasons include weight regain, insufficient initial weight loss, complications from prior surgery, or the need to convert one procedure type to another. Dr. Wadhawan's extensive experience with over 2,000 bariatric cases and his mastery of the Da Vinci robotic system make him uniquely qualified for these challenging cases.",
  sections: [
    {
      title: "When Is Revision Surgery Needed?",
      content: "Revision surgery may be recommended when patients experience significant weight regain after initial bariatric surgery — which occurs in approximately 10-20% of cases. This can happen due to a dilated gastric pouch (after gastric bypass), a stretched sleeve (after sleeve gastrectomy), or band slippage/erosion (after gastric banding). Other indications include severe acid reflux after sleeve gastrectomy, nutritional deficiencies, or complications such as strictures or chronic marginal ulcers. Some patients may also benefit from conversion — for example, converting a sleeve gastrectomy to a gastric bypass or SADI-S for additional weight loss and metabolic improvement."
    },
    {
      title: "Why Robotic Assistance Is Critical",
      content: "Revision surgery involves operating in an abdomen that has been previously altered by surgery, with scar tissue (adhesions), changed anatomy, and potentially compromised tissue planes. The Da Vinci robotic system provides Dr. Wadhawan with 3D HD magnified visualization that is essential for safely identifying and navigating through dense adhesions. The articulating instruments can reach around scar tissue at angles impossible with straight laparoscopic tools. Tremor filtration ensures steady dissection near critical structures like blood vessels and the esophagus. These advantages result in significantly lower complication rates and better outcomes for revision cases compared to traditional approaches."
    },
    {
      title: "Types of Revision Procedures",
      content: "Dr. Wadhawan performs a wide range of revision procedures including: pouch/stoma revision for gastric bypass patients with a dilated pouch; re-sleeve gastrectomy for patients with a stretched sleeve; conversion of sleeve gastrectomy to Roux-en-Y gastric bypass or SADI-S; removal and conversion of gastric band to sleeve or bypass; repair of hiatal hernias that develop after bariatric surgery; and correction of internal hernias. Each patient undergoes thorough evaluation with endoscopy, imaging, and nutritional assessment before a tailored surgical plan is created."
    }
  ],
  benefits: [
    "Safe navigation of altered anatomy with 3D visualization",
    "Precise handling of scar tissue and adhesions",
    "Conversion between procedure types (sleeve to bypass, band to sleeve)",
    "Lower revision complication rates with robotic approach",
    "Expert handling of complex revision cases",
    "Thorough pre-operative evaluation and planning",
    "Tailored approach for each patient's unique situation",
    "Over 2,000 bariatric procedures experience"
  ],
  imageAlt: "Robotic Revision Bariatric Surgery"
};

export const roboticMetabolicData: SurgeryPageData = {
  title: "Robotic Metabolic Surgery (DJB/SADI-S)",
  subtitle: "Tailored surgical treatment for type 2 diabetes and metabolic conditions with robotic precision.",
  breadcrumb: "Robotic Surgery > Bariatric > Metabolic Surgery",
  overview: "Metabolic surgery represents a paradigm shift in treating type 2 diabetes and metabolic syndrome through surgical intervention rather than lifelong medication. Dr. Wadhawan performs specialized procedures including Duodeno-Jejunal Bypass (DJB) and Single Anastomosis Duodeno-Ileal Bypass with Sleeve gastrectomy (SADI-S) using the Da Vinci robotic system. These procedures modify the gastrointestinal tract to directly improve metabolic function — often achieving complete diabetes remission even in patients who are not morbidly obese (BMI < 35).",
  sections: [
    {
      title: "Understanding Metabolic Surgery",
      content: "Unlike traditional bariatric surgery focused primarily on weight loss, metabolic surgery targets the underlying metabolic dysfunction. When food bypasses the duodenum and proximal jejunum, it triggers powerful hormonal changes — increasing GLP-1 and GIP (incretin hormones that enhance insulin secretion), reducing glucagon, and improving insulin sensitivity at the cellular level. These changes occur within days of surgery, often before significant weight loss. The DJB procedure specifically targets the duodenal switch mechanism without major stomach modification, making it suitable for patients with lower BMI. SADI-S combines a sleeve gastrectomy with a duodeno-ileal bypass for patients who need both metabolic correction and weight loss."
    },
    {
      title: "Who Benefits from Metabolic Surgery?",
      content: "Metabolic surgery is particularly beneficial for patients with poorly controlled type 2 diabetes despite optimal medical therapy, especially those with a disease duration of less than 10 years and preserved pancreatic beta-cell function. It is also recommended for patients with metabolic syndrome — the cluster of conditions including high blood pressure, high blood sugar, excess abdominal fat, and abnormal cholesterol. Patients with BMI 30-35 who have uncontrolled diabetes may be candidates for DJB, while those with BMI > 35 may benefit from SADI-S. Dr. Wadhawan conducts thorough metabolic profiling including C-peptide levels, HbA1c trends, and beta-cell function assessment to determine the optimal procedure for each patient."
    },
    {
      title: "Outcomes & Long-Term Results",
      content: "Published data shows type 2 diabetes remission rates of 75-85% following metabolic surgery, with most patients able to discontinue insulin and oral diabetes medications within months. Patients also experience significant improvement in hypertension (resolution in 60-70%), dyslipidemia (improvement in 70-80%), and cardiovascular risk reduction. SADI-S achieves 70-80% excess weight loss in addition to metabolic benefits. Long-term follow-up studies show sustained metabolic improvements at 5-10 years. Dr. Wadhawan's program includes comprehensive endocrinological evaluation, staged follow-up with metabolic monitoring, and coordination with diabetologists for optimal outcomes."
    }
  ],
  benefits: [
    "Up to 85% type 2 diabetes remission rate",
    "Tailored DJB and SADI-S procedures",
    "Effective even at lower BMI (30-35)",
    "Rapid metabolic improvement — often within days",
    "Resolution of metabolic syndrome components",
    "Reduced cardiovascular risk long-term",
    "Decreased or eliminated diabetes medications",
    "Improvement in hypertension and cholesterol",
    "Comprehensive metabolic profiling before surgery"
  ],
  imageAlt: "Robotic Metabolic Surgery"
};

// ===================== ROBOTIC GI =====================

export const roboticHerniaData: SurgeryPageData = {
  title: "Robotic Hernia Surgery",
  subtitle: "Comprehensive robotic hernia repair for all hernia types. Centre of Excellence accredited by the Hernia Society of India.",
  breadcrumb: "Robotic Surgery > GI > Hernia",
  overview: "Robotic hernia repair represents the gold standard in hernia treatment, combining the precision of the Da Vinci surgical system with Dr. Wadhawan's fellowship training in Abdominal Wall Reconstruction under Prof. Yuri Novitsky at University Hospitals, Cleveland, USA — one of the world's foremost hernia experts. The department is accredited as a Hernia Centre of Excellence by the Hernia Society of India, reflecting its commitment to superior outcomes and comprehensive hernia care.",
  sections: [
    {
      title: "Types of Hernias Treated",
      content: "Dr. Wadhawan treats all types of hernias using the robotic platform including inguinal (groin) hernias — the most common type; incisional hernias occurring at previous surgical sites; umbilical and paraumbilical hernias; ventral hernias of the anterior abdominal wall; hiatus hernias where the stomach pushes through the diaphragm; and complex recurrent hernias that have failed previous repairs. Each hernia type requires a specific approach, and the robotic platform's versatility allows Dr. Wadhawan to select the optimal technique — whether TAPP (Trans-Abdominal Pre-Peritoneal), TEP (Totally Extra-Peritoneal), or rTAPP (robotic TAPP) — based on the hernia location, size, and patient factors."
    },
    {
      title: "The Robotic Advantage in Hernia Repair",
      content: "Hernia repair fundamentally relies on precise mesh placement and secure fixation. The Da Vinci system's 3D HD visualization allows Dr. Wadhawan to clearly identify all anatomical landmarks — the myopectineal orifice, Cooper's ligament, the triangle of doom, and the triangle of pain — ensuring mesh placement that covers the defect with adequate overlap while avoiding nerve and vessel injury. The 360° wrist articulation enables precise suturing and mesh fixation at angles impossible with straight laparoscopic instruments. For complex abdominal wall reconstruction cases, the robotic platform allows meticulous component separation — the release of the transversus abdominis or external oblique muscles to allow tension-free closure of large defects."
    },
    {
      title: "Recovery & Outcomes",
      content: "Patients undergoing robotic hernia repair typically go home the same day or the next morning. Pain is significantly less compared to open repair, with most patients requiring only over-the-counter pain medication after the first day. Return to desk work occurs within 5-7 days, and full physical activity including exercise is usually resumed in 3-4 weeks. Recurrence rates for robotic hernia repair are among the lowest reported in surgical literature — less than 1% for primary inguinal hernias and 3-5% for complex incisional hernias. Dr. Wadhawan's experience with over 35,000 laparoscopic and robotic procedures ensures each patient receives expert, individualized hernia care."
    }
  ],
  benefits: [
    "Fellowship-trained under Prof. Yuri Novitsky (Cleveland, USA)",
    "Hernia Centre of Excellence (HSI accredited)",
    "Precise mesh placement with 3D visualization",
    "All hernia types treated — inguinal, incisional, hiatus, ventral",
    "Complex abdominal wall reconstruction expertise",
    "Low recurrence rates (<1% for primary inguinal)",
    "Same-day or next-day discharge",
    "Less post-operative pain than open repair",
    "Rapid return to normal activities"
  ],
  imageAlt: "Robotic Hernia Surgery"
};

export const roboticGallbladderData: SurgeryPageData = {
  title: "Robotic Gallbladder Surgery (Cholecystectomy)",
  subtitle: "Enhanced cholecystectomy with the Da Vinci robotic system for superior safety.",
  breadcrumb: "Robotic Surgery > GI > Gallbladder",
  overview: "Robotic cholecystectomy is the most advanced approach to gallbladder removal, utilizing the Da Vinci surgical system's 3D HD visualization and precise dissection capabilities to safely remove the gallbladder while protecting the critical biliary anatomy. Dr. Wadhawan, with over 35,000 laparoscopic and robotic procedures, brings unparalleled experience to this common yet potentially complex surgery.",
  sections: [
    {
      title: "Why Choose Robotic Cholecystectomy?",
      content: "The most feared complication of gallbladder surgery is bile duct injury, which occurs when the common bile duct is mistaken for the cystic duct and damaged or divided. The Da Vinci system's 10x magnified 3D view provides unmatched clarity of Calot's triangle — the critical anatomical area where the cystic artery and cystic duct are identified and divided. The 'critical view of safety' — the gold standard technique for preventing bile duct injury — is more reliably achieved with robotic visualization compared to standard 2D laparoscopy. This is especially important in difficult cases where inflammation has distorted the normal anatomy, such as in acute cholecystitis or Mirizzi syndrome."
    },
    {
      title: "The Procedure & Recovery",
      content: "Robotic cholecystectomy is performed through 3-4 small incisions (8-12mm). The gallbladder is carefully dissected from the liver bed using the robotic instruments, with the cystic artery and cystic duct clipped and divided after confirming the critical view of safety. If bile duct stones are suspected, intraoperative cholangiography can be performed. The gallbladder is then extracted through one of the port sites. The entire procedure typically takes 30-60 minutes. Most patients go home the same day and return to normal activities within 3-5 days. Post-operative pain is minimal, with most patients needing only mild pain medication for 1-2 days."
    },
    {
      title: "When Is Robotic Approach Especially Beneficial?",
      content: "While straightforward gallbladder cases can be safely managed laparoscopically, the robotic approach provides particular advantages in complex scenarios: acute cholecystitis with severe inflammation and adhesions; gangrenous gallbladder; Mirizzi syndrome where a gallstone compresses the bile duct; patients with unusual biliary anatomy; patients with previous upper abdominal surgery; and obese patients where tissue depth makes visualization challenging. Dr. Wadhawan assesses each case individually to recommend the optimal surgical approach, always prioritizing patient safety and the best possible outcome."
    }
  ],
  benefits: [
    "Enhanced critical view of safety with 3D HD visualization",
    "Reduced bile duct injury risk",
    "Same-day discharge in most cases",
    "Minimal scarring (3-4 tiny incisions)",
    "30-60 minute procedure",
    "Ideal for complex and inflamed gallbladders",
    "Da Vinci robotic precision and magnification",
    "Over 35,000 procedures experience"
  ],
  imageAlt: "Robotic Gallbladder Surgery"
};

export const roboticAppendixData: SurgeryPageData = {
  title: "Robotic Appendix Surgery",
  subtitle: "Robotic-assisted appendectomy for acute and chronic appendicitis with superior precision.",
  breadcrumb: "Robotic Surgery > GI > Appendix",
  overview: "Robotic appendectomy utilizes the Da Vinci surgical system to provide precise removal of the inflamed appendix with enhanced visualization. While appendectomy is considered a routine procedure, complicated cases — such as perforated appendicitis with abscess formation, retrocecal appendix (behind the cecum), or appendicitis in obese patients — significantly benefit from the robotic platform's capabilities.",
  sections: [
    {
      title: "Understanding Appendicitis",
      content: "Appendicitis occurs when the appendix — a small, finger-shaped pouch attached to the large intestine in the lower right abdomen — becomes inflamed and infected. If left untreated, the appendix can rupture, leading to peritonitis (infection of the abdominal cavity) and potentially life-threatening complications. Symptoms include sudden pain that begins around the navel and shifts to the lower right abdomen, nausea, vomiting, fever, and loss of appetite. Diagnosis is typically confirmed with CT scan or ultrasound. While most cases are straightforward, approximately 20-30% present with complications including perforation, abscess, or unusual anatomical position."
    },
    {
      title: "The Robotic Surgical Approach",
      content: "Robotic appendectomy is performed through 3 small incisions. The Da Vinci system provides Dr. Wadhawan with a magnified 3D view of the appendix and surrounding structures, enabling precise identification of the appendiceal base, mesoappendix, and any adhesions or abscess cavities. The appendiceal artery in the mesoappendix is secured, and the base of the appendix is ligated and divided. In complicated cases with perforation, the robotic instruments allow thorough washout of the abdominal cavity and drainage of abscesses with controlled precision. The specimen is extracted in a bag to prevent wound contamination."
    },
    {
      title: "Recovery & Outcomes",
      content: "For uncomplicated appendicitis, patients typically go home within 24 hours and resume normal activities in 3-5 days. Complicated cases (perforated, abscess) may require 2-3 days of hospitalization with IV antibiotics. The robotic approach results in less post-operative pain, faster recovery, and superior cosmetic outcomes compared to open surgery. Wound infection rates are significantly lower with the minimally invasive approach. Dr. Wadhawan's expertise ensures that even the most complex appendicitis cases are handled safely with optimal outcomes."
    }
  ],
  benefits: [
    "Fast recovery — 24 hours for uncomplicated cases",
    "Minimal scarring with 3 small incisions",
    "Superior visualization for complicated cases",
    "Precise handling of perforated appendicitis",
    "Low wound infection rates",
    "Same-day discharge for simple cases",
    "Robotic precision for retrocecal appendix",
    "Thorough abscess drainage capability"
  ],
  imageAlt: "Robotic Appendix Surgery"
};

export const roboticColonData: SurgeryPageData = {
  title: "Robotic Colon & Rectal Surgery",
  subtitle: "Advanced robotic-assisted colectomy and rectal procedures for complex conditions.",
  breadcrumb: "Robotic Surgery > GI > Colon & Rectal",
  overview: "Robotic colon and rectal surgery represents a significant advancement in treating conditions of the large intestine and rectum. Using the Da Vinci surgical system, Dr. Wadhawan performs precise resections for colon cancer, rectal cancer, diverticulitis, inflammatory bowel disease, rectal prolapse, and other complex colorectal conditions. The robotic platform is particularly transformative for rectal surgery, where the confined space of the pelvis makes traditional surgery challenging.",
  sections: [
    {
      title: "Conditions Treated",
      content: "Dr. Wadhawan treats a comprehensive range of colorectal conditions using the robotic platform. These include colon cancer requiring segmental or total colectomy; rectal cancer requiring low anterior resection (LAR) or abdominoperineal resection (APR) with total mesorectal excision (TME); diverticular disease with recurrent attacks or complications; Crohn's disease and ulcerative colitis requiring bowel resection; rectal prolapse requiring rectopexy; large polyps not amenable to endoscopic removal; and volvulus (twisting of the bowel). Each condition requires a tailored surgical approach, and the robotic system's versatility allows Dr. Wadhawan to handle even the most complex scenarios."
    },
    {
      title: "Why Robotic Surgery Excels for Colorectal Procedures",
      content: "The rectum sits deep in the pelvis, surrounded by critical structures including the autonomic nerves that control bladder and sexual function, the ureters, and major pelvic blood vessels. Traditional open and even laparoscopic surgery can struggle to achieve precise dissection in this confined space. The Da Vinci robot's articulating instruments can reach into the deep pelvis with 360° movement, enabling Dr. Wadhawan to perform total mesorectal excision (TME) with clear circumferential margins while preserving the delicate autonomic nerve plexus. This translates to better cancer clearance, lower positive margin rates, and superior functional outcomes for patients — including preservation of bladder and sexual function."
    },
    {
      title: "Oncological Excellence & Recovery",
      content: "For cancer cases, the robotic platform enables adequate lymph node harvesting (typically 12+ nodes for proper staging), precise vascular ligation at the root of the feeding vessels, and complete mesocolic/mesorectal excision — all of which are critical for optimal oncological outcomes. Recovery from robotic colorectal surgery is significantly faster than open surgery. Enhanced recovery protocols (ERAS) enable most patients to start drinking fluids on the day of surgery, eat solid food within 1-2 days, and go home within 3-5 days. Bowel function returns faster, and long-term functional outcomes are superior. Dr. Wadhawan is certified by the European Coloproctology Society, ensuring adherence to the highest international standards."
    }
  ],
  benefits: [
    "Precise total mesorectal excision (TME) for rectal cancer",
    "Autonomic nerve preservation — better functional outcomes",
    "Superior access to deep pelvic anatomy",
    "Lower conversion-to-open rates",
    "Faster bowel recovery with ERAS protocols",
    "Adequate lymph node harvesting for proper staging",
    "European Coloproctology Society certified",
    "Over 35,000 procedures experience"
  ],
  imageAlt: "Robotic Colon and Rectal Surgery"
};

export const roboticRectalData: SurgeryPageData = {
  title: "Robotic Rectal Surgery",
  subtitle: "Complex rectal procedures with the precision of Da Vinci robotic-assisted technology.",
  breadcrumb: "Robotic Surgery > GI > Rectal",
  overview: "Robotic rectal surgery is where the Da Vinci platform truly demonstrates its superiority over other approaches. The rectum is located deep within the bony pelvis — a confined space surrounded by critical nerves, blood vessels, and organs. The robotic system's articulating instruments can navigate these tight spaces with movements impossible for human hands or straight laparoscopic tools, enabling Dr. Wadhawan to perform precise dissection with optimal nerve and organ preservation.",
  sections: [
    {
      title: "Rectal Cancer Surgery",
      content: "For rectal cancer, the primary goal is complete tumor removal with clear margins while preserving the sphincter complex (to avoid a permanent colostomy) and the autonomic nerves. Dr. Wadhawan performs robotic total mesorectal excision (TME) — the gold standard oncological technique — achieving consistently low positive margin rates and high-quality mesorectal specimens. The 3D visualization allows precise identification of the avascular 'holy plane' between the mesorectum and the pelvic sidewall, ensuring complete cancer removal. For very low rectal cancers, intersphincteric resection (ISR) may be performed robotically to preserve sphincter function and avoid permanent colostomy."
    },
    {
      title: "Rectal Prolapse & Other Conditions",
      content: "Rectal prolapse — where the rectum protrudes through the anus — is another condition excellently treated with the robotic approach. Dr. Wadhawan performs robotic ventral mesh rectopexy, a procedure that lifts and secures the rectum in its anatomical position using a mesh placed on the anterior wall of the rectum. The robotic platform enables precise mesh placement deep in the pelvis, avoiding nerve damage and ensuring a durable repair. Other conditions treated include complex fistulas-in-ano requiring advanced repair, rectal strictures, and post-radiation rectal complications."
    },
    {
      title: "MIPH & Proctology Expertise",
      content: "Dr. Wadhawan has performed over 5,000 MIPH (Minimally Invasive Procedures for Haemorrhoids) and STARR (Stapled Transanal Rectal Resection) procedures — among the highest volumes in the country. He is certified by the European Coloproctology Society, reflecting his expertise across the full spectrum of rectal and proctological conditions. His comprehensive approach combines advanced robotic techniques for complex cases with proven transanal approaches for conditions like haemorrhoids, fissures, and fistulas. Each patient receives a thorough evaluation including digital rectal examination, colonoscopy, MRI pelvis (for cancer), and anorectal manometry (for functional conditions) before a tailored treatment plan is created."
    }
  ],
  benefits: [
    "Optimal nerve preservation for bladder and sexual function",
    "Precise pelvic dissection with 360° wrist movement",
    "Better functional outcomes — sphincter preservation",
    "Lower positive margin rates for cancer",
    "Over 5,000 MIPH & STARR procedures",
    "European Coloproctology Society certified",
    "Reduced complication rates",
    "Superior access in narrow male pelvis"
  ],
  imageAlt: "Robotic Rectal Surgery"
};

// ===================== ROBOTIC ADVANCED GI =====================

export const roboticLiverData: SurgeryPageData = {
  title: "Robotic Liver Resections",
  subtitle: "Complex liver resections using Da Vinci robotic-assisted precision for liver tumors.",
  breadcrumb: "Robotic Surgery > Advanced GI > Liver",
  overview: "Liver resection — the surgical removal of part or segments of the liver — is a complex procedure performed for primary liver cancer (hepatocellular carcinoma), metastatic colorectal cancer that has spread to the liver, gallbladder cancer invading the liver, and certain benign tumors. Dr. Wadhawan and his multi-disciplinary team perform robotic liver resections using the Da Vinci system, which provides the precision needed for safe parenchymal transection near major hepatic blood vessels.",
  sections: [
    {
      title: "Understanding Liver Surgery",
      content: "The liver has a complex internal anatomy with eight segments, each supplied by its own branch of the hepatic artery, portal vein, and bile duct, and drained by hepatic veins flowing into the inferior vena cava. Liver resection requires precise understanding of this segmental anatomy to remove tumor-bearing segments while preserving enough healthy liver tissue for regeneration and normal function. The liver has remarkable regenerative capacity — even after removing 60-70% of the liver, the remaining tissue can regenerate to near-normal size within 6-8 weeks. However, the surgery demands meticulous technique due to the liver's rich blood supply and the proximity of major vessels."
    },
    {
      title: "Robotic Advantages for Liver Surgery",
      content: "The Da Vinci system provides several critical advantages for liver surgery. The 3D HD magnified view allows Dr. Wadhawan to identify the intrahepatic anatomy — bile ducts, hepatic veins, portal pedicles — with clarity impossible in open surgery. The articulating instruments enable precise parenchymal transection along anatomical planes, sealing small vessels and bile ducts as they are encountered. Tremor filtration is particularly important near major vessels like the hepatic veins and inferior vena cava, where even minor uncontrolled movements could cause catastrophic bleeding. The robotic approach also results in less blood loss (averaging 200-300ml vs. 500-800ml in open surgery), shorter hospital stays, and faster recovery."
    },
    {
      title: "Types of Resections & Outcomes",
      content: "Dr. Wadhawan performs a range of robotic liver resections including wedge resections (small tumor removal), segmentectomy (single segment), sectionectomy (multiple segments), right and left hepatectomy, and extended hepatectomy. For colorectal liver metastases, he may perform staged resections or combine liver surgery with simultaneous bowel surgery. Post-operatively, patients typically recover faster than after open surgery — hospital stay of 4-6 days vs. 7-10 days for open. Liver function returns to normal within 2-4 weeks, and full liver regeneration occurs over 6-8 weeks. The multi-disciplinary team includes hepatologists, oncologists, radiologists, and anesthesiologists for comprehensive care."
    }
  ],
  benefits: [
    "Precise parenchymal transection near major vessels",
    "3D visualization of intrahepatic anatomy",
    "Less blood loss compared to open surgery",
    "Faster liver regeneration",
    "Shorter hospital stay (4-6 days)",
    "Multi-disciplinary team approach",
    "Range of resection types available",
    "State-of-the-art surgical infrastructure"
  ],
  imageAlt: "Robotic Liver Surgery"
};

export const roboticPancreaticData: SurgeryPageData = {
  title: "Robotic Whipple Procedure (Pancreatic Cancer)",
  subtitle: "The Whipple procedure for pancreatic and periampullary cancer with robotic precision.",
  breadcrumb: "Robotic Surgery > Advanced GI > Pancreatic",
  overview: "The Whipple procedure (pancreaticoduodenectomy) is one of the most complex surgeries in all of medicine, representing the primary curative treatment for pancreatic head and periampullary cancers. This procedure involves removing the head of the pancreas, the entire duodenum, a portion of the common bile duct, the gallbladder, and sometimes part of the stomach — then meticulously reconstructing the digestive tract with three critical anastomoses. Dr. Wadhawan, one of the best gastrointestinal surgeons in India, has performed numerous successful Whipple procedures.",
  sections: [
    {
      title: "The Complexity of the Whipple Procedure",
      content: "The Whipple procedure is considered the ultimate test of a surgeon's skill and experience. After removing the pancreatic head, duodenum, distal bile duct, and gallbladder (and occasionally the distal stomach), the surgeon must create three critical connections: the pancreaticojejunostomy (pancreas to small intestine), hepaticojejunostomy (bile duct to small intestine), and gastrojejunostomy (stomach to small intestine). The quality of these anastomoses — particularly the pancreaticojejunostomy — directly determines complication rates. Pancreatic fistula (leaking from the pancreas-intestine connection) is the most common serious complication, and robotic precision significantly reduces this risk by enabling meticulous suture placement."
    },
    {
      title: "Why Robotic Whipple Is Superior",
      content: "The Da Vinci system transforms the Whipple procedure by providing the surgeon with 3D HD magnified visualization of the intricate anatomy around the pancreatic head — including the superior mesenteric artery and vein, portal vein, and hepatic artery. The articulating instruments enable precise vascular dissection, accurate tumor margin assessment, and superior anastomosis creation in the deep retroperitoneal space. For eligible patients, the robotic approach means multiple small incisions rather than the traditional large midline incision (20-30cm), resulting in dramatically less post-operative pain, faster mobilization, quicker return of bowel function, and shorter hospital stays. However, not all patients are candidates for robotic Whipple — tumor size, vascular involvement, and patient factors determine eligibility."
    },
    {
      title: "Recovery & Prognosis",
      content: "After robotic Whipple, patients typically spend 1-2 days in the ICU for monitoring, followed by 5-7 days on the ward (vs. 10-14 days for open surgery). Oral feeding usually begins within 3-4 days, and patients are discharged when tolerating a regular diet and drains have been removed. Full recovery takes 4-6 weeks. From an oncological perspective, the Whipple procedure offers the only potential cure for pancreatic head cancer, with 5-year survival rates of 20-25% when combined with adjuvant chemotherapy — a significant improvement over the near-zero survival without surgery. Dr. Wadhawan's multi-disciplinary team includes oncologists, radiation therapists, and palliative care specialists for comprehensive cancer management."
    }
  ],
  benefits: [
    "Precise anastomosis creation reducing pancreatic fistula risk",
    "3D visualization of critical vascular anatomy",
    "Multiple small incisions vs. large open incision",
    "Shorter hospital stay (7-9 days vs. 10-14 days)",
    "Faster return of bowel function",
    "Better vascular preservation",
    "Expert multi-disciplinary cancer team",
    "Reduced surgical trauma and pain"
  ],
  imageAlt: "Robotic Whipple Procedure"
};

export const roboticSplenectomyData: SurgeryPageData = {
  title: "Robotic Splenectomy",
  subtitle: "Robotic-assisted spleen removal for blood disorders and splenic conditions.",
  breadcrumb: "Robotic Surgery > Advanced GI > Splenectomy",
  overview: "Robotic splenectomy is the precise removal of the spleen using the Da Vinci surgical system. The spleen, located in the upper left abdomen behind the stomach, plays a role in filtering blood and fighting infections. However, certain conditions — including immune thrombocytopenic purpura (ITP), hereditary spherocytosis, splenic cysts, splenic artery aneurysms, and certain lymphomas — may require its surgical removal.",
  sections: [
    {
      title: "Indications for Splenectomy",
      content: "The most common indication for elective splenectomy is ITP (immune thrombocytopenic purpura) — an autoimmune condition where the body destroys its own platelets, leading to easy bruising and bleeding. When medical therapy (steroids, immunoglobulins, thrombopoietin agonists) fails, splenectomy achieves a cure in approximately 75-80% of patients. Other indications include hereditary spherocytosis (a genetic red blood cell disorder causing chronic anemia and jaundice), splenic cysts greater than 5cm, splenic artery aneurysms, hypersplenism (overactive spleen destroying normal blood cells), and certain lymphomas — particularly hairy cell leukemia and marginal zone lymphoma — where splenectomy serves both diagnostic and therapeutic purposes."
    },
    {
      title: "The Robotic Surgical Technique",
      content: "The spleen is a highly vascular organ with a complex blood supply through the splenic hilum — the area where the splenic artery and vein enter and exit. Controlling these vessels safely is the most critical part of splenectomy. The Da Vinci system's 3D magnified view allows Dr. Wadhawan to clearly identify the hilar vessels, short gastric vessels, and any accessory spleens (present in 10-30% of patients). The articulating instruments enable precise vessel ligation and division, minimizing blood loss. The spleen is placed in a specimen bag and removed through a slightly enlarged port site. For very large spleens (splenomegaly), the robotic approach may still be feasible with hand-assist techniques."
    },
    {
      title: "Recovery & Post-Splenectomy Care",
      content: "Patients typically go home 1-2 days after robotic splenectomy, compared to 4-5 days after open surgery. Pain is minimal, and most patients return to normal activities within 1-2 weeks. Importantly, because the spleen plays a role in immune defense, patients require specific vaccinations (pneumococcal, meningococcal, and Haemophilus influenzae vaccines) at least 2 weeks before elective splenectomy. After surgery, patients carry a medical alert card and may be prescribed prophylactic antibiotics. Platelet counts are monitored closely after splenectomy for ITP, with most patients seeing a significant rise within 1-2 weeks. Dr. Wadhawan coordinates with hematologists for comprehensive pre- and post-operative care."
    }
  ],
  benefits: [
    "Precise vascular control at splenic hilum",
    "75-80% cure rate for ITP",
    "Minimal blood loss with robotic approach",
    "Short hospital stay (1-2 days)",
    "Rapid return to normal activities",
    "Identification of accessory spleens",
    "Suitable for moderately enlarged spleens",
    "Coordinated care with hematology team"
  ],
  imageAlt: "Robotic Splenectomy"
};

export const roboticAchalasiaData: SurgeryPageData = {
  title: "Robotic Achalasia Surgery (Heller Myotomy)",
  subtitle: "Precise esophageal myotomy for Achalasia Cardia using Da Vinci robotic technology.",
  breadcrumb: "Robotic Surgery > Advanced GI > Achalasia",
  overview: "Achalasia Cardia is a rare but debilitating esophageal motility disorder where the lower esophageal sphincter (LES) fails to relax properly during swallowing, and the esophageal body loses its normal peristaltic contractions. This causes progressive difficulty swallowing (dysphagia), regurgitation of undigested food, chest pain, and weight loss. Robotic Heller myotomy — the precise surgical division of the LES muscle fibers — is the definitive treatment, providing long-lasting relief in over 90% of patients.",
  sections: [
    {
      title: "Understanding Achalasia",
      content: "Achalasia results from the degeneration of the nerve cells (Auerbach's plexus) in the wall of the esophagus, leading to failure of LES relaxation and absence of esophageal peristalsis. Patients typically experience gradual onset of difficulty swallowing both solids and liquids, regurgitation of food (sometimes hours after eating), chest pain, and unintentional weight loss. Diagnosis is confirmed with high-resolution esophageal manometry (which shows absent peristalsis and failure of LES relaxation), barium swallow (showing the classic 'bird's beak' appearance), and endoscopy (to rule out pseudoachalasia caused by tumors). The condition affects approximately 1 in 100,000 people and is equally common in men and women."
    },
    {
      title: "The Robotic Heller Myotomy Procedure",
      content: "During robotic Heller myotomy, Dr. Wadhawan precisely divides the circular and longitudinal muscle fibers of the lower esophageal sphincter over a length of 6-8cm on the esophagus and 2-3cm on the gastric cardia — while meticulously preserving the underlying mucosa (inner lining). This is the most critical aspect of the procedure: the muscle must be completely divided for effective symptom relief, but the mucosa must remain intact to prevent perforation and leak. The Da Vinci system's 3D magnified view and tremor-free instruments make this delicate dissection safer and more precise than any other approach. The myotomy is combined with a partial fundoplication (Dor or Toupet) — wrapping part of the stomach around the esophagus to prevent post-operative acid reflux."
    },
    {
      title: "Outcomes & Long-Term Results",
      content: "Robotic Heller myotomy achieves excellent symptom relief in over 90% of patients, with most experiencing dramatic improvement in swallowing within days of surgery. Patients are typically started on liquids the day after surgery, progressing to soft foods within a week, and resuming a normal diet within 2-3 weeks. Hospital stay is 1-2 days. Long-term studies show sustained symptom relief in 85-90% of patients at 10 years. The combined anti-reflux procedure prevents the development of gastroesophageal reflux disease (GERD) — a known complication of myotomy alone. Dr. Wadhawan also offers POEM (Peroral Endoscopic Myotomy) as an alternative for selected patients, providing a comprehensive approach to achalasia management."
    }
  ],
  benefits: [
    "Precise muscle fiber division with mucosal preservation",
    "Over 90% symptom relief rate",
    "Combined anti-reflux procedure prevents GERD",
    "Rapid symptom improvement within days",
    "Short hospital stay (1-2 days)",
    "Long-lasting results (85-90% at 10 years)",
    "Tremor-free precision for delicate dissection",
    "Comprehensive achalasia management approach"
  ],
  imageAlt: "Robotic Achalasia Surgery"
};

export const roboticPortalHTData: SurgeryPageData = {
  title: "Surgery for Portal Hypertension",
  subtitle: "Surgical shunt procedures for elevated portal vein pressure when endoscopic techniques fail.",
  breadcrumb: "Robotic Surgery > Advanced GI > Portal Hypertension",
  overview: "Portal hypertension — elevated pressure within the portal venous system — is a serious complication of liver cirrhosis and other hepatic conditions. When the portal pressure exceeds 12mmHg, blood is diverted through collateral pathways creating varices (enlarged veins) in the esophagus, stomach, and rectum, which can rupture and cause life-threatening bleeding. When medical therapy and endoscopic interventions fail to control bleeding, surgical intervention becomes necessary.",
  sections: [
    {
      title: "Understanding Portal Hypertension",
      content: "The portal vein carries blood from the digestive organs (stomach, intestines, spleen, pancreas) to the liver for processing. When the liver is diseased (cirrhosis, schistosomiasis, portal vein thrombosis), resistance to blood flow through the liver increases, raising portal venous pressure. This portal hypertension causes blood to find alternative routes back to the heart — through veins in the esophagus (esophageal varices), stomach (gastric varices), rectum (rectal varices), and abdominal wall (caput medusae). Esophageal varices are the most dangerous, rupturing in approximately 25-30% of patients with cirrhosis and carrying a mortality rate of 15-20% per bleeding episode."
    },
    {
      title: "Surgical Management Options",
      content: "Dr. Wadhawan offers several surgical approaches for portal hypertension depending on the specific clinical scenario. The Distal Splenorenal Shunt (DSRS) or Warren shunt selectively decompresses gastric and esophageal varices while maintaining portal blood flow to the liver — making it ideal for patients with well-preserved liver function. Proximal splenorenal shunt (PSRS) provides total portal decompression. In some cases, splenectomy with devascularization (Sugiura procedure) may be performed to reduce portal inflow and disconnect variceal connections. For patients not suitable for surgery, coordination with interventional radiology for TIPS (Transjugular Intrahepatic Portosystemic Shunt) is arranged."
    },
    {
      title: "Pre-operative Assessment & Outcomes",
      content: "Before portal hypertension surgery, patients undergo thorough assessment including liver function tests, Child-Pugh scoring, MELD score calculation, CT angiography of the portal venous system, upper GI endoscopy, and echocardiography. These assessments help determine the optimal procedure and predict outcomes. The goal is to prevent future variceal bleeding while preserving as much hepatic function as possible. Post-surgical rebleeding rates are low (5-10%), and most patients experience significant improvement in quality of life. For patients with advanced liver disease, Dr. Wadhawan coordinates with hepatologists to evaluate candidacy for liver transplantation. His vast experience in GI surgery ensures comprehensive management of this complex condition."
    }
  ],
  benefits: [
    "Expert management of portal hypertension",
    "Distal Splenorenal Shunt (DSRS) for selective decompression",
    "Sugiura devascularization procedure",
    "Low rebleeding rates (5-10%)",
    "Thorough pre-operative assessment",
    "Coordination with TIPS interventional radiology",
    "Liver transplant evaluation when needed",
    "Experienced multi-disciplinary team"
  ],
  imageAlt: "Portal Hypertension Surgery"
};

// ===================== LAPAROSCOPIC BARIATRIC =====================

export const lapSleeveData: SurgeryPageData = {
  title: "Laparoscopic Sleeve Gastrectomy",
  subtitle: "Reshaping the stomach into a tube or 'sleeve' — the most commonly performed bariatric procedure.",
  breadcrumb: "Laparoscopic > Bariatric > Sleeve Gastrectomy",
  overview: "Laparoscopic sleeve gastrectomy is the most widely performed bariatric procedure worldwide, offering an excellent balance of effectiveness, safety, and simplicity. Dr. Randeep Wadhawan, trained at the Centre of Excellence in Frankfurt, Germany, has performed hundreds of successful laparoscopic sleeve gastrectomies. The procedure removes approximately 85% of the stomach along its greater curvature, reshaping it into a narrow tube or 'sleeve' that holds only 100-150ml of food.",
  sections: [
    {
      title: "How Sleeve Gastrectomy Works",
      content: "The laparoscopic sleeve gastrectomy works through two powerful mechanisms. First, the restrictive mechanism — by reducing stomach capacity from approximately 1.5 liters to 100-150ml, the procedure dramatically limits food intake. Patients feel full after eating very small portions. Second, the hormonal mechanism — the removed portion of the stomach contains the majority of ghrelin-producing cells. Ghrelin, known as the 'hunger hormone,' drives appetite and food-seeking behavior. By removing these cells, the procedure significantly reduces hunger, making dietary compliance much easier. The function of the stomach is preserved by not altering the nerves of the stomach or the outlet valve (pylorus), maintaining normal stomach emptying and nutrient absorption."
    },
    {
      title: "The Surgical Procedure",
      content: "The procedure is performed through 4-5 small incisions (5-12mm each) in the abdomen. Using a laparoscope (a thin telescope with a camera) and specialized instruments, Dr. Wadhawan divides the stomach along its vertical length using an endoscopic linear stapler with buttressing material. A calibration tube (bougie) is placed inside the stomach to ensure the sleeve is uniformly narrow — typically 36-40 French. The excised stomach portion is removed through one of the port sites. The staple line may be reinforced with oversewing to reduce leak risk. The entire procedure takes approximately 45-75 minutes under general anesthesia."
    },
    {
      title: "Results & Follow-Up",
      content: "Patients can expect 60-70% excess weight loss within 12-18 months following sleeve gastrectomy. Mean excess weight loss at one year is 70%. Hospital stay is typically 2-3 days, with return to normal activities in about 4 days and full activities in 2-3 weeks. Beyond weight loss, patients experience improvement or resolution of type 2 diabetes (55-65% remission), hypertension (50-60% improvement), sleep apnea (75-80% resolution), joint pain, PCOS, and fatty liver disease. Minimal complications include a leak rate of 1-2% and bleeding rate of 1-3%. Dr. Wadhawan's program includes detailed pre-operative evaluation, nutritional counseling, psychological assessment, and lifelong follow-up with dietary guidance."
    }
  ],
  benefits: [
    "Restrictive procedure — no intestinal rerouting",
    "Most popular bariatric procedure worldwide",
    "85% of stomach removed, 15% sleeve remaining",
    "Ghrelin (appetite hormone) significantly reduced",
    "Mean excess weight loss at one year: 70%",
    "Hospital stay: 2-3 days",
    "Return to normal activity in 4 days",
    "Preserves normal nutrient absorption",
    "No dumping syndrome risk",
    "Trained at Centre of Excellence, Frankfurt, Germany"
  ],
  imageAlt: "Laparoscopic Sleeve Gastrectomy"
};

export const lapGastricBypassData: SurgeryPageData = {
  title: "Laparoscopic Gastric Bypass (Roux-en-Y)",
  subtitle: "Gold standard Roux-en-Y gastric bypass through minimally invasive approach for effective long-term weight loss.",
  breadcrumb: "Laparoscopic > Bariatric > Gastric Bypass",
  overview: "Laparoscopic Roux-en-Y Gastric Bypass (RYGB) has been the gold standard in weight loss surgery for over three decades. This procedure combines restriction (small stomach pouch) with mild malabsorption (intestinal bypass) to achieve the most consistent long-term weight loss results. Dr. Wadhawan performs this complex procedure through keyhole incisions, allowing patients to benefit from the procedure's proven effectiveness with faster recovery than traditional open surgery.",
  sections: [
    {
      title: "The Dual Mechanism of Action",
      content: "Gastric bypass works through three simultaneous mechanisms. First, restriction — a small pouch (25-30ml) is created from the upper stomach, limiting food intake to a few tablespoons at a time. Second, mild malabsorption — by bypassing the duodenum and proximal jejunum (approximately 150cm), the procedure reduces calorie and fat absorption. Third, hormonal changes — the altered gut anatomy triggers significant changes in gut hormones (increased GLP-1, PYY, and decreased ghrelin) that improve insulin sensitivity, enhance satiety, and reduce hunger. This triple mechanism makes gastric bypass particularly effective for patients with type 2 diabetes, achieving remission rates of 80-85%."
    },
    {
      title: "Surgical Technique & Safety",
      content: "Laparoscopic gastric bypass is performed through 5-6 small incisions. Dr. Wadhawan creates the gastric pouch using endoscopic staplers, then divides the jejunum approximately 50cm from the ligament of Treitz. The distal end (Roux limb) is brought up and connected to the pouch (gastrojejunostomy), and the biliopancreatic limb is reconnected to the Roux limb approximately 150cm downstream (jejunojejunostomy). Meticulous attention is paid to testing the anastomoses for leaks using methylene blue dye and ensuring proper closure of all mesenteric defects to prevent internal hernias. The procedure takes approximately 90-120 minutes."
    },
    {
      title: "Long-Term Outcomes & Nutrition",
      content: "Laparoscopic gastric bypass achieves 70-80% excess weight loss, sustained over 10-15 years in most patients. Type 2 diabetes remission occurs in 80-85%, hypertension improves in 65-75%, and sleep apnea resolves in 80-85%. Hospital stay is 3-4 days. Because the procedure bypasses the duodenum (where iron, calcium, and B12 are primarily absorbed), lifelong vitamin and mineral supplementation is essential — including multivitamins, calcium with vitamin D, iron, and B12. Regular blood work monitoring ensures nutritional adequacy. Dr. Wadhawan's comprehensive program includes dedicated bariatric dietitians, support groups, and structured follow-up at 1, 3, 6, 12 months and annually thereafter."
    }
  ],
  benefits: [
    "Gold standard — 30+ years of proven results",
    "70-80% excess weight loss sustained long-term",
    "Highest diabetes remission rates (80-85%)",
    "Triple mechanism: restriction + malabsorption + hormonal",
    "Effective for BMI > 40 with comorbidities",
    "Resolution of sleep apnea in 80-85%",
    "Cardiovascular risk reduction",
    "Structured lifelong follow-up program"
  ],
  imageAlt: "Laparoscopic Gastric Bypass"
};

export const lapMiniBypassData: SurgeryPageData = {
  title: "Laparoscopic Mini Gastric Bypass (OAGB)",
  subtitle: "Simplified bypass with excellent outcomes through minimally invasive technique.",
  breadcrumb: "Laparoscopic > Bariatric > Mini Gastric Bypass",
  overview: "Laparoscopic Mini Gastric Bypass (MGB), also known as One Anastomosis Gastric Bypass (OAGB), is a simplified yet effective alternative to the traditional Roux-en-Y gastric bypass. With only a single anastomosis instead of two, the procedure is technically simpler, faster, and associated with fewer complications — while delivering comparable or even superior weight loss results. Dr. Wadhawan has extensive experience with OAGB, tailoring the bypass length to each patient's specific needs.",
  sections: [
    {
      title: "How OAGB Differs from Traditional Bypass",
      content: "In traditional Roux-en-Y gastric bypass, the small intestine is divided and two connections (anastomoses) are created. OAGB simplifies this by creating a long gastric tube (similar to a sleeve but not detached) and connecting it to a single loop of small intestine approximately 200cm from the start. This single-anastomosis design reduces surgical complexity, shortens operative time (typically 45-75 minutes vs. 90-120 minutes for RYGB), and reduces the risk of internal hernias — a known complication of RYGB. The mechanism of action is the same: restriction plus malabsorption plus hormonal changes."
    },
    {
      title: "Patient Selection & Customization",
      content: "OAGB is particularly suitable for patients with BMI 35-50, those with type 2 diabetes seeking metabolic improvement, and patients who prefer a simpler procedure with shorter operative time. Dr. Wadhawan customizes the bypass length based on the patient's BMI — a longer bypass (250-300cm) for higher BMI patients and a shorter bypass (150-200cm) for lower BMI patients. This individualized approach optimizes weight loss while minimizing nutritional side effects. The procedure is also an excellent option for revision of failed sleeve gastrectomy, where the existing sleeve can be converted to an OAGB with minimal additional dissection."
    },
    {
      title: "Results & Considerations",
      content: "OAGB achieves 65-80% excess weight loss at 2 years, with diabetes remission rates of 70-80%. A unique advantage is its potential reversibility — if needed, the anastomosis can be disconnected and the stomach tube restored, though this is rarely required. Potential concerns include bile reflux into the gastric tube, though this is uncommon with proper technique. Like all malabsorptive procedures, lifelong vitamin and mineral supplementation is required. Hospital stay is typically 2-3 days. Dr. Wadhawan's comprehensive pre-operative evaluation includes endoscopy, metabolic profiling, and psychological assessment to ensure OAGB is the optimal procedure for each patient."
    }
  ],
  benefits: [
    "Shorter surgery duration (45-75 minutes)",
    "Single anastomosis — technically simpler",
    "65-80% excess weight loss at 2 years",
    "70-80% diabetes remission",
    "Lower internal hernia risk than RYGB",
    "Potentially reversible",
    "Excellent revision option after failed sleeve",
    "Customized bypass length for individual needs"
  ],
  imageAlt: "Laparoscopic Mini Gastric Bypass"
};

export const lapGastricBandingData: SurgeryPageData = {
  title: "LAGB (Laparoscopic Adjustable Gastric Banding)",
  subtitle: "A safe, reliable, and minimally invasive bariatric procedure using an adjustable silicone band.",
  breadcrumb: "Laparoscopic > Bariatric > Gastric Banding",
  overview: "Laparoscopic Adjustable Gastric Banding (LAGB) is one of the safest and most minimally invasive bariatric procedures available. Dr. Wadhawan places a silicone band around the upper part of the stomach, creating a small pouch that limits food intake and produces early satiety. The band is adjustable through a port placed under the skin, and the procedure is fully reversible — making it an attractive option for patients seeking a less permanent intervention.",
  sections: [
    {
      title: "How Gastric Banding Works",
      content: "The LAGB procedure involves placing a silicone band — made of highly biocompatible medical-grade silicone — around the upper portion of the stomach, just below the gastroesophageal junction. This creates a small pouch above the band (approximately 15-30ml) that fills quickly with food, producing a feeling of fullness after eating only a small quantity. The band is connected via thin tubing to an access port placed under the skin of the abdomen. By injecting or removing saline through this port, Dr. Wadhawan can tighten or loosen the band, adjusting the degree of restriction to optimize weight loss while ensuring the patient can eat comfortably. This adjustability is a unique advantage — no other bariatric procedure offers this level of post-operative customization."
    },
    {
      title: "The Surgical Procedure",
      content: "LAGB is performed through 3-4 small incisions (5-12mm) under general anesthesia. Using laparoscopic instruments, Dr. Wadhawan creates a pathway behind the stomach near the gastroesophageal junction using the pars flaccida technique — a safer approach that reduces the risk of gastric perforation. The band is positioned and locked around the upper stomach, and the stomach below the band is sutured over the band (anterior gastric fixation) to prevent slippage. The access port is secured to the abdominal fascia through one of the incision sites. The entire procedure takes approximately 30-45 minutes — the shortest of any bariatric procedure."
    },
    {
      title: "Adjustments, Results & Considerations",
      content: "Band adjustments begin 4-6 weeks after surgery. Patients typically need 4-8 adjustments during the first year to find the optimal fill level — the 'green zone' where patients eat appropriate portions, lose weight steadily, and have no reflux or vomiting. Expected weight loss is 40-50% excess weight loss over 1-3 years — slower and less dramatic than sleeve or bypass, but achieved with the lowest operative risk. LAGB is particularly effective when combined with strong behavioral modification and dietary compliance. Potential complications include band slippage (2-5%), port problems (3-5%), and band erosion (1-2%). If complications occur or weight loss is insufficient, the band can be removed and converted to sleeve gastrectomy or gastric bypass."
    }
  ],
  benefits: [
    "Safest bariatric procedure available",
    "Fully adjustable and reversible",
    "No stomach cutting or intestinal rerouting",
    "Shortest operative time (30-45 minutes)",
    "Highly biocompatible silicone material",
    "Same-day or next-day discharge",
    "Customizable restriction through port adjustments",
    "Preserves normal nutrient absorption",
    "Convertible to other procedures if needed"
  ],
  imageAlt: "Laparoscopic Adjustable Gastric Banding"
};

export const lapRevisionData: SurgeryPageData = {
  title: "Laparoscopic Revision Surgery",
  subtitle: "Corrective bariatric procedures through minimally invasive approach.",
  breadcrumb: "Laparoscopic > Bariatric > Revision",
  overview: "Laparoscopic revision bariatric surgery addresses situations where a previous weight loss procedure has not achieved the desired results or has led to complications. With approximately 10-20% of bariatric patients experiencing some degree of weight regain or complications over time, revision surgery is an important component of comprehensive bariatric care. Dr. Wadhawan's expertise in handling complex anatomy and his experience with over 2,000 bariatric procedures make him a sought-after surgeon for revision cases.",
  sections: [
    {
      title: "Common Reasons for Revision",
      content: "The most frequent indication is weight regain — which can occur due to a dilated gastric pouch (after gastric bypass), stretched sleeve (after sleeve gastrectomy), band slippage or failure (after LAGB), or inadequate initial procedure. Other indications include severe gastroesophageal reflux after sleeve gastrectomy (which may require conversion to gastric bypass), nutritional complications requiring procedure reversal, chronic marginal ulcers after gastric bypass, band erosion or migration, internal hernias, and gastric outlet obstruction. Each situation requires careful evaluation to determine the optimal revision strategy."
    },
    {
      title: "Types of Revision Procedures",
      content: "Dr. Wadhawan performs a comprehensive range of laparoscopic revision procedures: Re-sleeve gastrectomy — for patients with a dilated sleeve, the stomach is re-stapled to restore restriction. Sleeve to Roux-en-Y gastric bypass — the most common conversion for patients with reflux or insufficient weight loss after sleeve. Sleeve to SADI-S — adding a duodeno-ileal bypass for enhanced metabolic effect. Band removal with conversion to sleeve or bypass — addressing band failure. Pouch revision — reducing a dilated gastric bypass pouch. TORe (Transoral Outlet Reduction) — endoscopic narrowing of a dilated gastrojejunal anastomosis. Each revision is planned based on detailed evaluation including endoscopy, contrast study, and nutritional assessment."
    },
    {
      title: "Challenges & Outcomes",
      content: "Revision surgery is inherently more complex than primary procedures due to altered anatomy, scar tissue formation, and potentially compromised tissue integrity. The laparoscopic approach requires advanced surgical skills to safely navigate adhesions and identify altered landmarks. Dr. Wadhawan's extensive experience and meticulous technique result in complication rates comparable to primary procedures, though patients must understand that revision surgery carries inherently higher risks. Expected outcomes include additional 40-60% excess weight loss (from the revised weight) and improvement in comorbidities. Comprehensive post-operative care including dietary counseling, behavioral support, and regular follow-up is essential for sustained success after revision."
    }
  ],
  benefits: [
    "Expert handling of complex altered anatomy",
    "All revision types available (re-sleeve, conversion, band removal)",
    "Laparoscopic minimally invasive approach",
    "Thorough pre-operative evaluation",
    "Over 2,000 bariatric procedures experience",
    "40-60% additional excess weight loss",
    "Comprehensive post-operative support",
    "Second-chance weight loss opportunity"
  ],
  imageAlt: "Laparoscopic Revision Surgery"
};

// ===================== LAPAROSCOPIC GI =====================

export const lapHerniaData: SurgeryPageData = {
  title: "Laparoscopic Hernia Surgery",
  subtitle: "Effective keyhole hernia repair with mesh reinforcement. Hernia Centre of Excellence accredited by the Hernia Society of India.",
  breadcrumb: "Laparoscopic > GI > Hernia",
  overview: "Laparoscopic hernia repair is a proven, effective approach to treating all types of hernias through small keyhole incisions. Dr. Wadhawan, with fellowship training in Abdominal Wall Reconstruction under Prof. Yuri Novitsky at University Hospitals, Cleveland, USA, brings world-class expertise to hernia management. The department's accreditation as a Hernia Centre of Excellence by the Hernia Society of India reflects its commitment to evidence-based, high-quality hernia care.",
  sections: [
    {
      title: "Understanding Hernia Repair",
      content: "A hernia occurs when an organ or tissue pushes through a weakness in the surrounding muscle or connective tissue. The most common types include inguinal (groin), incisional (at surgical sites), umbilical (belly button), and ventral (anterior abdominal wall). Laparoscopic repair addresses the defect from inside the abdomen, allowing placement of a large mesh behind the abdominal wall muscles — creating a stronger repair than traditional open approaches. The mesh acts as a scaffold, providing immediate structural support while the body's own tissue grows into and around it over 6-12 weeks, creating a permanent, durable repair."
    },
    {
      title: "Laparoscopic Techniques",
      content: "For inguinal hernias, Dr. Wadhawan performs both TAPP (Trans-Abdominal Pre-Peritoneal) and TEP (Totally Extra-Peritoneal) repairs. TAPP enters the abdominal cavity, creates a peritoneal flap, places mesh over the myopectineal orifice covering all potential hernia sites, and closes the peritoneal flap. TEP works entirely in the pre-peritoneal space without entering the abdomen. For incisional and ventral hernias, laparoscopic IPOM (Intra-Peritoneal Onlay Mesh) or IPOM-plus (with defect closure) are performed. Complex cases requiring component separation or TAR (Transversus Abdominis Release) may be performed laparoscopically or with robotic assistance."
    },
    {
      title: "Recovery & Long-Term Outcomes",
      content: "Laparoscopic hernia repair offers significantly faster recovery than open surgery. Most patients go home the same day or the next morning. Pain is controlled with oral medications, and most patients return to desk work within 3-5 days and full physical activity within 2-3 weeks. Recurrence rates for laparoscopic inguinal hernia repair are 1-2% — comparable to open mesh repair but with less chronic pain. For incisional hernias, recurrence rates of 5-10% are achieved (compared to 20-30% for open suture repair). Dr. Wadhawan uses lightweight, large-pore composite meshes that maximize tissue integration while minimizing chronic inflammation and mesh-related complications."
    }
  ],
  benefits: [
    "Hernia Centre of Excellence (HSI accredited)",
    "Fellowship-trained in Abdominal Wall Reconstruction",
    "All hernia types treated laparoscopically",
    "TAPP, TEP, IPOM, and IPOM-plus techniques",
    "Same-day or next-day discharge",
    "Low recurrence rates (1-2% for inguinal)",
    "Less chronic pain than open repair",
    "Advanced composite mesh technology"
  ],
  imageAlt: "Laparoscopic Hernia Surgery"
};

export const lapGallbladderData: SurgeryPageData = {
  title: "Laparoscopic Gallbladder Surgery",
  subtitle: "Gold standard cholecystectomy for gallstone disease. Same-day discharge in most cases.",
  breadcrumb: "Laparoscopic > GI > Gallbladder",
  overview: "Laparoscopic cholecystectomy — the gold standard treatment for gallstones — is one of the most commonly performed surgical procedures worldwide. Dr. Wadhawan has performed thousands of these procedures as part of his 35,000+ laparoscopic surgery experience. The procedure removes the diseased gallbladder through 3-4 small incisions, with most patients going home the same day and returning to normal activities within a week.",
  sections: [
    {
      title: "Understanding Gallstone Disease",
      content: "Gallstones form when substances in bile — primarily cholesterol or bilirubin — crystallize inside the gallbladder. Approximately 10-15% of adults have gallstones, though many remain asymptomatic. When gallstones cause symptoms — biliary colic (severe upper abdominal pain after meals), cholecystitis (gallbladder inflammation), choledocholithiasis (stones in the bile duct), or pancreatitis — surgical removal of the gallbladder is recommended. Risk factors include age over 40, female gender, obesity, rapid weight loss, and family history. Interestingly, bariatric patients who lose weight rapidly have a higher incidence of gallstone formation, which is why Dr. Wadhawan monitors patients closely after weight loss surgery."
    },
    {
      title: "The Surgical Procedure",
      content: "Laparoscopic cholecystectomy is performed through 3-4 small incisions (5-12mm) under general anesthesia. Carbon dioxide is insufflated to create working space, and a laparoscope provides a magnified view on the monitor. Dr. Wadhawan dissects Calot's triangle — the area bounded by the cystic duct, common hepatic duct, and inferior border of the liver — to identify and divide the cystic artery and cystic duct. The 'critical view of safety' protocol is rigorously followed: two structures (cystic artery and cystic duct) must be clearly seen entering the gallbladder before any structure is clipped or cut. The gallbladder is then dissected from the liver bed and extracted through the umbilical port in a specimen bag."
    },
    {
      title: "Recovery & Special Considerations",
      content: "Most patients go home the same day — some within 4-6 hours of surgery. Post-operative pain is mild, managed with oral medications. Patients can shower the next day and resume driving within 3-5 days. Return to full activities including exercise occurs in 1-2 weeks. Dietary modification is minimal — patients may notice temporary intolerance to very fatty foods for a few weeks, but this resolves as the bile duct adapts. For difficult cases (acute cholecystitis, gangrenous gallbladder, or previous upper abdominal surgery), Dr. Wadhawan employs subtotal cholecystectomy or conversion to an open or robotic approach as safety dictates — prioritizing patient safety above all."
    }
  ],
  benefits: [
    "Gold standard treatment for gallstones",
    "Same-day discharge in most cases",
    "3-4 tiny incisions (5-12mm each)",
    "Critical view of safety protocol",
    "Over 35,000 laparoscopic surgeries performed",
    "Rapid return to normal activities (3-5 days)",
    "Minimal post-operative pain",
    "Proven safety record across thousands of cases"
  ],
  imageAlt: "Laparoscopic Gallbladder Surgery"
};

export const lapAppendixData: SurgeryPageData = {
  title: "Laparoscopic Appendix Surgery",
  subtitle: "Minimally invasive appendectomy for rapid recovery and minimal discomfort.",
  breadcrumb: "Laparoscopic > GI > Appendix",
  overview: "Laparoscopic appendectomy is the standard surgical approach for appendicitis — inflammation of the appendix. Through 2-3 small incisions, the appendix is safely removed with rapid recovery and minimal scarring. Dr. Wadhawan performs both emergency appendectomies for acute cases and interval appendectomies after initial conservative management of complicated appendicitis with abscess.",
  sections: [
    {
      title: "When Is Appendectomy Needed?",
      content: "Appendicitis is one of the most common surgical emergencies, affecting approximately 7% of people during their lifetime. It occurs when the appendix becomes blocked — usually by a fecalith (hardened stool), lymphoid hyperplasia, or rarely a tumor — leading to bacterial overgrowth, inflammation, and eventually perforation if untreated. Classic symptoms include periumbilical pain migrating to the right lower quadrant (McBurney's point), nausea, vomiting, fever, and elevated white blood cell count. Diagnosis is confirmed with CT scan (sensitivity >95%) or ultrasound (preferred in children and pregnant women). Once diagnosed, surgery is typically performed within 6-12 hours."
    },
    {
      title: "The Laparoscopic Approach",
      content: "Laparoscopic appendectomy is performed through 2-3 incisions (5-12mm each) — typically at the umbilicus, left lower quadrant, and suprapubic area. The laparoscope provides excellent visualization of the entire abdominal cavity, allowing Dr. Wadhawan to confirm the diagnosis, assess the extent of inflammation, and identify any other pathology. The mesoappendix containing the appendiceal artery is secured with energy devices or clips, and the base of the appendix is ligated with endoloops or stapled. The appendix is removed in a specimen bag to prevent wound contamination. The ability to examine the entire abdomen is a significant advantage — in 15-20% of cases, an alternative diagnosis is found (Meckel's diverticulitis, ovarian pathology, mesenteric adenitis)."
    },
    {
      title: "Recovery & Complicated Cases",
      content: "For uncomplicated appendicitis, patients are discharged within 24 hours (many the same day) and return to normal activities in 3-5 days. Post-operative antibiotics are typically not needed. For complicated cases (perforated appendicitis with peritonitis or abscess), post-operative IV antibiotics are continued for 3-5 days, and hospital stay may extend to 3-5 days. Dr. Wadhawan also manages the 'interval appendectomy' approach for patients presenting with an appendiceal phlegmon or large abscess — where initial treatment involves IV antibiotics and percutaneous drainage, followed by elective laparoscopic appendectomy 6-8 weeks later when inflammation has resolved. This staged approach results in safer surgery with lower complication rates in complicated presentations."
    }
  ],
  benefits: [
    "2-3 tiny incisions for minimal scarring",
    "Same-day discharge for uncomplicated cases",
    "Full abdominal inspection — identifies alternative diagnoses",
    "Rapid recovery (3-5 days to normal activities)",
    "Less post-operative pain than open surgery",
    "Lower wound infection rates",
    "Expert management of complicated cases",
    "Interval appendectomy for abscess cases"
  ],
  imageAlt: "Laparoscopic Appendix Surgery"
};

export const lapColonData: SurgeryPageData = {
  title: "Laparoscopic Colon & Rectal Surgery",
  subtitle: "Minimally invasive colectomy and rectal surgery for various colorectal conditions.",
  breadcrumb: "Laparoscopic > GI > Colon & Rectal",
  overview: "Laparoscopic colon and rectal surgery provides minimally invasive treatment for a wide range of colorectal conditions including colon cancer, rectal cancer, diverticulitis, inflammatory bowel disease, and more. Dr. Wadhawan, certified by the European Coloproctology Society, has vast experience in minimally invasive colorectal procedures with outcomes comparable to major international centers.",
  sections: [
    {
      title: "Conditions & Surgical Options",
      content: "Laparoscopic colorectal surgery encompasses a range of procedures tailored to specific conditions and tumor locations. Right hemicolectomy is performed for tumors of the cecum, ascending colon, or hepatic flexure. Left hemicolectomy addresses tumors of the descending colon and splenic flexure. Sigmoid colectomy is the procedure of choice for sigmoid cancer and complicated diverticulitis. Low anterior resection (LAR) treats upper and mid-rectal cancers while preserving the sphincter. Abdominoperineal resection (APR) is reserved for very low rectal cancers where sphincter preservation is not possible. Total colectomy with ileal pouch-anal anastomosis (IPAA) is performed for familial polyposis and ulcerative colitis."
    },
    {
      title: "Oncological Principles",
      content: "For cancer cases, Dr. Wadhawan adheres to strict oncological principles — adequate proximal and distal margins (at least 5cm for colon cancer), high vascular ligation at the root of the feeding vessels, complete mesocolic excision (CME) for colon cancer, and total mesorectal excision (TME) for rectal cancer. Multiple studies have confirmed that laparoscopic colorectal cancer surgery achieves equivalent oncological outcomes to open surgery in terms of lymph node harvest, margin clearance, recurrence rates, and 5-year survival — while offering the benefits of minimally invasive recovery. Dr. Wadhawan has performed over 5,000 MIPH and STARR procedures and is certified by the European Coloproctology Society."
    },
    {
      title: "Enhanced Recovery & Outcomes",
      content: "Dr. Wadhawan employs Enhanced Recovery After Surgery (ERAS) protocols to optimize outcomes. These include pre-operative carbohydrate loading, minimizing bowel preparation, early mobilization after surgery, early oral feeding, and multimodal pain management. With these protocols, patients typically begin drinking fluids the evening of surgery, eat solid food within 1-2 days, and go home within 3-5 days — compared to 7-10 days for open colorectal surgery. Bowel function returns faster, pulmonary complications are reduced, and overall satisfaction is higher. Long-term outcomes show 5-year survival rates of 60-70% for stage III colon cancer with adjuvant chemotherapy, and 50-60% for stage III rectal cancer with neoadjuvant chemoradiation."
    }
  ],
  benefits: [
    "Complete mesocolic/mesorectal excision for cancer",
    "Faster bowel recovery with ERAS protocols",
    "Shorter hospital stay (3-5 days)",
    "Less post-operative pain",
    "European Coloproctology Society certified",
    "Over 5,000 MIPH & STARR procedures",
    "Equivalent oncological outcomes to open surgery",
    "Earlier return to normal routine"
  ],
  imageAlt: "Laparoscopic Colon and Rectal Surgery"
};

export const lapRectalData: SurgeryPageData = {
  title: "Laparoscopic Rectal Surgery",
  subtitle: "Advanced minimally invasive rectal procedures. Certified by European Coloproctology Society.",
  breadcrumb: "Laparoscopic > GI > Rectal",
  overview: "Laparoscopic rectal surgery provides a minimally invasive approach to rectal conditions including rectal cancer, rectal prolapse, haemorrhoids, fissures, and fistulas. Dr. Wadhawan, with over 5,000 MIPH (Minimally Invasive Procedures for Haemorrhoids) and STARR (Stapled Transanal Rectal Resection) procedures, is among the most experienced proctologists in India and is certified by the European Coloproctology Society.",
  sections: [
    {
      title: "MIPH & STARR Procedures",
      content: "Dr. Wadhawan has pioneered minimally invasive proctological procedures in India with over 5,000 MIPH and STARR procedures performed — among the highest volumes nationally. MIPH (Minimally Invasive Procedure for Haemorrhoids), also known as stapled hemorrhoidopexy, treats grade III-IV haemorrhoids by removing a circular ring of mucosa above the dentate line using a specialized circular stapler. This lifts the prolapsed haemorrhoidal tissue back into its normal anatomical position, cuts off blood supply, and restores normal anatomy — all without excising the haemorrhoidal tissue itself. This results in significantly less pain than conventional haemorrhoidectomy, with most patients returning to work within 2-3 days."
    },
    {
      title: "Rectal Cancer & Prolapse Surgery",
      content: "For rectal cancer, laparoscopic total mesorectal excision (TME) is performed following oncological principles. The magnified laparoscopic view enables precise identification of the avascular plane between the mesorectal fascia and the pelvic sidewall. For rectal prolapse, Dr. Wadhawan performs laparoscopic ventral mesh rectopexy — a procedure that lifts and secures the rectum using a mesh placed on its anterior surface. This approach preserves the nerve supply to the rectum and avoids posterior dissection, resulting in better functional outcomes and lower constipation rates compared to traditional rectopexy techniques."
    },
    {
      title: "Comprehensive Proctology Services",
      content: "Beyond surgical procedures, Dr. Wadhawan offers comprehensive proctological care for all anorectal conditions. This includes management of anal fissures (both acute and chronic), complex fistulas-in-ano (including LIFT, VAAFT, and FiLaC techniques), pilonidal sinus (endoscopic pit picking and excision), and rectal mucosal prolapse. Each patient undergoes thorough evaluation including digital rectal examination, proctoscopy, colonoscopy, anorectal manometry, and MRI pelvis when indicated. Treatment plans are individualized based on the specific condition, severity, and patient preferences. The goal is always to achieve the best functional outcome with the least invasive approach."
    }
  ],
  benefits: [
    "Over 5,000 MIPH & STARR procedures performed",
    "European Coloproctology Society certified",
    "MIPH — less painful than conventional surgery",
    "Return to work in 2-3 days after MIPH",
    "Laparoscopic ventral mesh rectopexy for prolapse",
    "Comprehensive fistula management (LIFT, VAAFT, FiLaC)",
    "Nerve-sparing techniques",
    "Individualized treatment approach"
  ],
  imageAlt: "Laparoscopic Rectal Surgery"
};

export const lapGastricCancerData: SurgeryPageData = {
  title: "Laparoscopic Surgery for Gastric Cancer",
  subtitle: "Minimally invasive laparoscopic gastrectomy for stomach cancer with precision tumor removal.",
  breadcrumb: "Laparoscopic > GI > Gastric Cancer",
  overview: "Laparoscopic surgery for gastric (stomach) cancer represents a significant advancement in the surgical management of this disease. Dr. Wadhawan performs minimally invasive gastrectomy — removing the cancerous portion of the stomach along with surrounding lymph nodes — through small keyhole incisions. This approach provides oncological outcomes equivalent to open surgery while offering faster recovery, less pain, and better quality of life during the post-operative period.",
  sections: [
    {
      title: "Types of Laparoscopic Gastrectomy",
      content: "The type of gastrectomy depends on the tumor location, size, and stage. Laparoscopic Assisted Distal Gastrectomy (LADG) removes the lower portion of the stomach and is performed for cancers of the antrum and body of the stomach. Laparoscopic total gastrectomy removes the entire stomach and is performed for proximal or diffuse-type cancers. Laparoscopic proximal gastrectomy removes the upper stomach for early cancers of the gastric cardia. For very early-stage cancers (T1a), Endoscopic Mucosal Resection (EMR) or Endoscopic Submucosal Dissection (ESD) may be curative without the need for gastrectomy. After subtotal or total gastrectomy, the digestive tract is reconstructed — typically with Roux-en-Y reconstruction for total gastrectomy."
    },
    {
      title: "Lymph Node Dissection",
      content: "Adequate lymph node dissection is critical for proper cancer staging and optimal oncological outcomes. Dr. Wadhawan performs D2 lymphadenectomy as the standard for advanced gastric cancer — removing lymph nodes along the greater and lesser curvature, left gastric artery, common hepatic artery, celiac trunk, and splenic hilum. The laparoscopic approach provides excellent visualization of the vascular anatomy, enabling meticulous lymph node dissection with reduced blood loss. A minimum of 15 lymph nodes should be harvested for adequate staging. The magnified laparoscopic view allows precise identification and preservation of important structures including the pancreas, spleen, and major blood vessels."
    },
    {
      title: "Recovery & Follow-Up",
      content: "After laparoscopic gastrectomy, patients typically begin oral intake with clear liquids on post-operative day 2-3, progressing to soft foods within a week. Hospital stay is 5-7 days (compared to 10-14 days for open gastrectomy). Full recovery takes 4-6 weeks. Long-term nutritional management is essential — patients need to eat smaller, more frequent meals, take vitamin B12 injections (after total gastrectomy), and supplement iron and calcium. Follow-up includes endoscopy, CT scans, and tumor markers at regular intervals. For advanced-stage cancers, Dr. Wadhawan coordinates with the oncology team for neoadjuvant or adjuvant chemotherapy to maximize survival outcomes."
    }
  ],
  benefits: [
    "Minimally invasive — smaller incisions than open surgery",
    "Equivalent oncological outcomes to open gastrectomy",
    "D2 lymphadenectomy for complete staging",
    "Faster recovery (hospital stay 5-7 days)",
    "Less post-operative pain",
    "EMR/ESD for very early cancers",
    "Multi-disciplinary cancer care approach",
    "Comprehensive nutritional follow-up"
  ],
  imageAlt: "Laparoscopic Gastric Cancer Surgery"
};
