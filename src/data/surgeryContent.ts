export interface SurgeryPageData {
  title: string;
  subtitle: string;
  breadcrumb: string;
  overview: string;
  sections: { title: string; content?: string; bullets?: string[]; icon?: "clock" | "shield" | "activity" | "heart" | "stethoscope" | "zap" }[];
  benefits: string[];
  imageSrc?: string;
  imageAlt?: string;
}

// ===================== ROBOTIC BARIATRIC =====================

export const roboticSleeveData: SurgeryPageData = {
  title: "Robotic Sleeve Gastrectomy",
  subtitle: "The most precise approach to sleeve gastrectomy using the Da Vinci robotic system.",
  breadcrumb: "Robotic Surgery > Bariatric > Sleeve Gastrectomy",
  overview: "Robotic sleeve gastrectomy removes ~85% of the stomach using the Da Vinci system, reshaping it into a narrow tube. Dr. Wadhawan's sub-millimeter precision ensures optimal staple line placement, reducing complications and maximizing weight loss outcomes.",
  sections: [
    {
      title: "How It Works",
      icon: "stethoscope",
      bullets: [
        "85% of stomach removed via 4–5 small incisions (8–12mm)",
        "3D HD magnified view with 10x zoom for precise stapling",
        "Ghrelin-producing cells removed — reduces hunger hormones",
        "Stomach function preserved (nerves & outlet valve intact)",
        "Procedure takes 60–90 minutes under general anesthesia",
      ],
    },
    {
      title: "Recovery Timeline",
      icon: "clock",
      bullets: [
        "Discharge within 24–48 hours",
        "Resume light activities in 3–4 days",
        "Return to work in 1–2 weeks",
        "70% excess weight loss at 12 months",
        "Lifelong nutritional support included",
      ],
    },
    {
      title: "Why Robotic?",
      icon: "zap",
      bullets: [
        "360° wrist articulation for angled stapling",
        "Tremor filtration for steady precision",
        "3D depth perception identifies tissue planes",
        "Ideal for high BMI or prior abdominal surgeries",
        "Over 2,000 bariatric procedures by Dr. Wadhawan",
      ],
    },
  ],
  benefits: [
    "Sub-millimeter precision stapling",
    "Reduced staple line leak risk",
    "Less blood loss during surgery",
    "24–48 hour hospital stay",
    "60–70% excess weight loss in 12–18 months",
    "Diabetes remission in 60–70% of cases",
    "Minimal scarring — tiny incisions",
    "Comprehensive pre & post-op support",
  ],
  imageAlt: "Robotic Sleeve Gastrectomy",
};

export const roboticGastricBypassData: SurgeryPageData = {
  title: "Robotic Gastric Bypass (Roux-en-Y)",
  subtitle: "Gold standard weight loss surgery enhanced with robotic precision.",
  breadcrumb: "Robotic Surgery > Bariatric > Gastric Bypass",
  overview: "Robotic Roux-en-Y Gastric Bypass combines restriction and mild malabsorption for exceptional long-term weight loss. The Da Vinci system provides unmatched precision for creating the critical gastrojejunal anastomosis.",
  sections: [
    {
      title: "The Procedure",
      icon: "stethoscope",
      bullets: [
        "Small 30ml stomach pouch created from upper stomach",
        "Small intestine divided and rerouted (Roux limb)",
        "Dual mechanism: restriction + malabsorption",
        "Triggers hormonal changes improving insulin sensitivity",
        "Procedure takes 90–120 minutes",
      ],
    },
    {
      title: "Why Precision Matters",
      icon: "shield",
      bullets: [
        "Gastrojejunal anastomosis — most critical step",
        "3D HD visualization for meticulous hand-sewn sutures",
        "Tremor filtration eliminates hand shake",
        "Significantly lower leak and stricture rates",
        "Superior access for high BMI patients",
      ],
    },
    {
      title: "Results & Recovery",
      icon: "heart",
      bullets: [
        "70–80% excess weight loss in 12–18 months",
        "80–85% type 2 diabetes remission rate",
        "Hospital stay: 2–3 days",
        "Return to normal activities in 2 weeks",
        "Sustained results over 10+ years",
      ],
    },
  ],
  benefits: [
    "Highest diabetes remission rates (80–85%)",
    "70–80% excess weight loss",
    "Superior robotic anastomosis precision",
    "Resolution of sleep apnea & hypertension",
    "Cardiovascular risk reduction",
    "Lifelong follow-up program",
  ],
  imageAlt: "Robotic Gastric Bypass",
};

export const roboticMiniBypassData: SurgeryPageData = {
  title: "Robotic Mini Gastric Bypass (OAGB)",
  subtitle: "Simplified bypass with excellent outcomes, enhanced by robotic precision.",
  breadcrumb: "Robotic Surgery > Bariatric > Mini Gastric Bypass",
  overview: "One Anastomosis Gastric Bypass (OAGB) creates a single connection between stomach and intestine — simpler, faster, with comparable weight loss results to traditional Roux-en-Y.",
  sections: [
    {
      title: "How It Works",
      icon: "stethoscope",
      bullets: [
        "Long narrow gastric tube created from stomach",
        "Single loop anastomosis ~200cm from start of intestine",
        "Both restriction and mild malabsorption",
        "Procedure takes just 45–75 minutes",
        "Bypass length customized to patient's BMI",
      ],
    },
    {
      title: "Recovery & Results",
      icon: "clock",
      bullets: [
        "Discharge in 2 days",
        "65–75% excess weight loss at 1 year",
        "70–80% diabetes remission",
        "Potentially reversible if needed",
        "Excellent revision option after failed sleeve",
      ],
    },
  ],
  benefits: [
    "Shorter surgery time than traditional bypass",
    "Single anastomosis — simpler procedure",
    "65–80% excess weight loss",
    "Lower internal hernia risk than RYGB",
    "Customized bypass length",
    "Robotic precision for meticulous anastomosis",
  ],
  imageAlt: "Robotic Mini Gastric Bypass",
};

export const roboticRevisionData: SurgeryPageData = {
  title: "Robotic Revision Bariatric Surgery",
  subtitle: "Expert revision procedures for patients needing correction after previous surgery.",
  breadcrumb: "Robotic Surgery > Bariatric > Revision Surgery",
  overview: "Revision surgery corrects previous bariatric operations — for weight regain, complications, or conversion to a different procedure. Dr. Wadhawan's 2,000+ cases and Da Vinci mastery are critical for these complex cases.",
  sections: [
    {
      title: "When Is It Needed?",
      icon: "activity",
      bullets: [
        "Significant weight regain (occurs in 10–20% of cases)",
        "Dilated gastric pouch or stretched sleeve",
        "Band slippage, erosion, or failure",
        "Severe acid reflux after sleeve gastrectomy",
        "Conversion needed (e.g., sleeve → bypass)",
      ],
    },
    {
      title: "Why Robotic Is Critical",
      icon: "shield",
      bullets: [
        "3D HD view to navigate dense scar tissue",
        "Articulating instruments reach around adhesions",
        "Tremor-free dissection near critical structures",
        "Lower complication rates vs. traditional approach",
        "Expert handling of altered anatomy",
      ],
    },
    {
      title: "Revision Options",
      icon: "stethoscope",
      bullets: [
        "Re-sleeve for stretched sleeve",
        "Sleeve → Roux-en-Y gastric bypass conversion",
        "Sleeve → SADI-S for metabolic improvement",
        "Band removal → sleeve or bypass",
        "Pouch revision for dilated bypass pouch",
      ],
    },
  ],
  benefits: [
    "Safe navigation of altered anatomy",
    "All revision types available",
    "Lower complication rates with robotics",
    "Thorough pre-operative evaluation",
    "Over 2,000 bariatric cases experience",
    "Tailored approach for each patient",
  ],
  imageAlt: "Robotic Revision Surgery",
};

export const roboticMetabolicData: SurgeryPageData = {
  title: "Robotic Metabolic Surgery (DJB/SADI-S)",
  subtitle: "Surgical treatment for type 2 diabetes and metabolic conditions.",
  breadcrumb: "Robotic Surgery > Bariatric > Metabolic Surgery",
  overview: "Metabolic surgery targets type 2 diabetes through surgical intervention — achieving complete remission even in patients with BMI < 35. Dr. Wadhawan performs DJB and SADI-S procedures with Da Vinci robotic precision.",
  sections: [
    {
      title: "How It Works",
      icon: "stethoscope",
      bullets: [
        "Bypassing duodenum triggers powerful hormonal changes",
        "Increases GLP-1 & GIP (incretin hormones)",
        "Improves insulin sensitivity at cellular level",
        "Changes occur within days — before weight loss",
        "DJB for lower BMI; SADI-S for BMI > 35",
      ],
    },
    {
      title: "Who Benefits?",
      icon: "heart",
      bullets: [
        "Poorly controlled type 2 diabetes despite medication",
        "Disease duration < 10 years with preserved beta-cells",
        "Metabolic syndrome (BP, sugar, cholesterol, abdominal fat)",
        "BMI 30–35 with uncontrolled diabetes (DJB candidate)",
        "Comprehensive metabolic profiling before surgery",
      ],
    },
    {
      title: "Outcomes",
      icon: "activity",
      bullets: [
        "75–85% type 2 diabetes remission",
        "Most patients discontinue insulin within months",
        "60–70% hypertension resolution",
        "70–80% improvement in cholesterol",
        "Sustained results at 5–10 year follow-up",
      ],
    },
  ],
  benefits: [
    "Up to 85% diabetes remission rate",
    "Effective even at lower BMI (30–35)",
    "Rapid metabolic improvement",
    "Decreased or eliminated medications",
    "Cardiovascular risk reduction",
    "Comprehensive endocrinological evaluation",
  ],
  imageAlt: "Robotic Metabolic Surgery",
};

// ===================== ROBOTIC GI =====================

export const roboticHerniaData: SurgeryPageData = {
  title: "Robotic Hernia Surgery",
  subtitle: "Hernia Centre of Excellence accredited by the Hernia Society of India.",
  breadcrumb: "Robotic Surgery > GI > Hernia",
  overview: "Robotic hernia repair combines Da Vinci precision with Dr. Wadhawan's fellowship training under Prof. Yuri Novitsky (Cleveland, USA). The department is accredited as a Hernia Centre of Excellence by the Hernia Society of India.",
  sections: [
    {
      title: "Hernias We Treat",
      icon: "stethoscope",
      bullets: [
        "Inguinal (groin) — most common type",
        "Incisional — at previous surgical sites",
        "Umbilical & paraumbilical hernias",
        "Hiatus hernia — stomach through diaphragm",
        "Complex recurrent & multi-defect hernias",
        "Abdominal wall reconstruction",
      ],
    },
    {
      title: "The Robotic Advantage",
      icon: "zap",
      bullets: [
        "3D HD view of critical anatomy landmarks",
        "Precise mesh placement with optimal overlap",
        "360° wrist for suturing at impossible angles",
        "TAPP, TEP, or rTAPP — best technique selected",
        "Component separation for large defects",
      ],
    },
    {
      title: "Recovery & Results",
      icon: "clock",
      bullets: [
        "Same-day or next-morning discharge",
        "OTC pain meds after day 1",
        "Desk work in 5–7 days",
        "Full activity in 3–4 weeks",
        "Recurrence < 1% for primary inguinal",
      ],
    },
  ],
  benefits: [
    "Fellowship-trained under Prof. Novitsky (Cleveland)",
    "HSI Hernia Centre of Excellence",
    "All hernia types treated robotically",
    "Low recurrence rates (<1% inguinal)",
    "Same-day discharge",
    "Less pain than open repair",
    "Complex abdominal wall reconstruction expertise",
  ],
  imageAlt: "Robotic Hernia Surgery",
};

export const roboticGallbladderData: SurgeryPageData = {
  title: "Robotic Gallbladder Surgery",
  subtitle: "Enhanced cholecystectomy with Da Vinci precision for superior safety.",
  breadcrumb: "Robotic Surgery > GI > Gallbladder",
  overview: "Robotic cholecystectomy uses 3D HD visualization to protect the critical biliary anatomy — reducing the risk of bile duct injury, the most feared complication of gallbladder surgery.",
  sections: [
    {
      title: "Why Robotic?",
      icon: "shield",
      bullets: [
        "10x magnified 3D view of Calot's triangle",
        "Critical view of safety reliably achieved",
        "Reduced bile duct injury risk",
        "Ideal for inflamed or difficult gallbladders",
        "Safe for Mirizzi syndrome & gangrenous cases",
      ],
    },
    {
      title: "The Procedure",
      icon: "stethoscope",
      bullets: [
        "3–4 small incisions (8–12mm each)",
        "Cystic artery & duct identified, clipped, divided",
        "Gallbladder dissected from liver bed",
        "Intraoperative cholangiography if needed",
        "Procedure takes 30–60 minutes",
      ],
    },
    {
      title: "Recovery",
      icon: "clock",
      bullets: [
        "Same-day discharge in most cases",
        "Normal activities in 3–5 days",
        "Mild pain meds for 1–2 days only",
        "Temporary fatty food sensitivity (resolves quickly)",
        "35,000+ procedures experience",
      ],
    },
  ],
  benefits: [
    "Enhanced critical view of safety",
    "Reduced bile duct injury risk",
    "Same-day discharge",
    "30–60 minute procedure",
    "Minimal scarring",
    "Ideal for complex & inflamed cases",
  ],
  imageAlt: "Robotic Gallbladder Surgery",
};

export const roboticAppendixData: SurgeryPageData = {
  title: "Robotic Appendix Surgery",
  subtitle: "Robotic-assisted appendectomy for acute and chronic appendicitis.",
  breadcrumb: "Robotic Surgery > GI > Appendix",
  overview: "Robotic appendectomy provides precise removal with enhanced visualization — especially beneficial for complicated cases with perforation, abscess, or unusual anatomy.",
  sections: [
    {
      title: "When Surgery Is Needed",
      icon: "activity",
      bullets: [
        "Pain shifting from navel to lower right abdomen",
        "Nausea, vomiting, fever — confirmed by CT/ultrasound",
        "Surgery performed within 6–12 hours of diagnosis",
        "~20–30% present with complications (perforation, abscess)",
      ],
    },
    {
      title: "The Robotic Approach",
      icon: "stethoscope",
      bullets: [
        "3 small incisions for access",
        "Magnified 3D view of appendix and surrounding area",
        "Thorough washout for perforated cases",
        "Specimen removed in bag to prevent contamination",
        "Full abdominal inspection — catches alternative diagnoses",
      ],
    },
    {
      title: "Recovery",
      icon: "clock",
      bullets: [
        "Home within 24 hours (uncomplicated)",
        "Normal activities in 3–5 days",
        "Complicated cases: 2–3 days hospitalization",
        "Low wound infection rates",
        "Interval appendectomy available for abscess cases",
      ],
    },
  ],
  benefits: [
    "Fast recovery — 24 hours for simple cases",
    "Minimal scarring (3 incisions)",
    "Superior visualization for complicated cases",
    "Low wound infection rates",
    "Identifies alternative diagnoses",
    "Expert management of all presentations",
  ],
  imageAlt: "Robotic Appendix Surgery",
};

export const roboticColonData: SurgeryPageData = {
  title: "Robotic Colon & Rectal Surgery",
  subtitle: "Advanced robotic-assisted procedures for colorectal conditions.",
  breadcrumb: "Robotic Surgery > GI > Colon & Rectal",
  overview: "Robotic colorectal surgery is transformative for rectal procedures — the confined pelvic space makes traditional surgery challenging, but robotic articulating instruments navigate with 360° precision.",
  sections: [
    {
      title: "Conditions Treated",
      icon: "stethoscope",
      bullets: [
        "Colon cancer — segmental or total colectomy",
        "Rectal cancer — LAR or APR with TME",
        "Diverticular disease & IBD",
        "Rectal prolapse — robotic rectopexy",
        "Large polyps not amenable to endoscopy",
      ],
    },
    {
      title: "Why Robotic Excels Here",
      icon: "zap",
      bullets: [
        "360° movement in confined pelvic space",
        "Precise total mesorectal excision (TME)",
        "Autonomic nerve preservation — bladder & sexual function",
        "Lower conversion-to-open rates",
        "Adequate lymph node harvesting (12+ nodes)",
      ],
    },
    {
      title: "Recovery (ERAS Protocol)",
      icon: "clock",
      bullets: [
        "Fluids same evening; solid food in 1–2 days",
        "Home within 3–5 days",
        "Bowel function returns faster",
        "European Coloproctology Society certified",
        "35,000+ procedures experience",
      ],
    },
  ],
  benefits: [
    "Precise TME for rectal cancer",
    "Nerve preservation — better functional outcomes",
    "Superior deep pelvic access",
    "Faster bowel recovery (ERAS)",
    "European Coloproctology Society certified",
    "Lower positive margin rates",
  ],
  imageAlt: "Robotic Colon and Rectal Surgery",
};

export const roboticRectalData: SurgeryPageData = {
  title: "Robotic Rectal Surgery",
  subtitle: "Where Da Vinci robotic precision truly excels — deep pelvic surgery.",
  breadcrumb: "Robotic Surgery > GI > Rectal",
  overview: "The rectum sits deep in the bony pelvis surrounded by critical nerves and vessels. The Da Vinci system's articulating instruments navigate these tight spaces with movements impossible for human hands.",
  sections: [
    {
      title: "Rectal Cancer Surgery",
      icon: "shield",
      bullets: [
        "Robotic TME — gold standard oncological technique",
        "Identifies avascular 'holy plane' with 3D visualization",
        "Sphincter preservation to avoid permanent colostomy",
        "Intersphincteric resection for very low cancers",
        "Consistently low positive margin rates",
      ],
    },
    {
      title: "Prolapse & Proctology",
      icon: "stethoscope",
      bullets: [
        "Robotic ventral mesh rectopexy for prolapse",
        "5,000+ MIPH & STARR procedures performed",
        "Complex fistula-in-ano repair",
        "European Coloproctology Society certified",
        "Haemorrhoids, fissures, pilonidal sinus",
      ],
    },
    {
      title: "Functional Outcomes",
      icon: "heart",
      bullets: [
        "Autonomic nerve preservation — bladder & sexual function",
        "Superior access in narrow male pelvis",
        "Better long-term quality of life",
        "Lower complication rates",
        "Individualized treatment planning",
      ],
    },
  ],
  benefits: [
    "Optimal nerve preservation",
    "5,000+ MIPH & STARR procedures",
    "European Coloproctology Society certified",
    "Sphincter preservation for low cancers",
    "360° pelvic access",
    "Superior functional outcomes",
  ],
  imageAlt: "Robotic Rectal Surgery",
};

// ===================== ROBOTIC ADVANCED GI =====================

export const roboticLiverData: SurgeryPageData = {
  title: "Robotic Liver Resections",
  subtitle: "Complex liver surgery with Da Vinci robotic precision near major vessels.",
  breadcrumb: "Robotic Surgery > Advanced GI > Liver",
  overview: "Liver resection removes cancerous segments while preserving healthy tissue for regeneration. The Da Vinci system provides the precision needed for safe dissection near major hepatic blood vessels.",
  sections: [
    {
      title: "Conditions Treated",
      icon: "stethoscope",
      bullets: [
        "Primary liver cancer (hepatocellular carcinoma)",
        "Colorectal liver metastases",
        "Gallbladder cancer invading liver",
        "Benign liver tumors",
        "Liver has remarkable regenerative capacity (6–8 weeks)",
      ],
    },
    {
      title: "Robotic Advantages",
      icon: "zap",
      bullets: [
        "3D HD view of intrahepatic anatomy",
        "Precise parenchymal transection along anatomical planes",
        "Tremor filtration near hepatic veins & IVC",
        "Less blood loss (200–300ml vs. 500–800ml open)",
        "Range: wedge resection to extended hepatectomy",
      ],
    },
    {
      title: "Recovery",
      icon: "clock",
      bullets: [
        "Hospital stay: 4–6 days (vs. 7–10 open)",
        "Liver function returns in 2–4 weeks",
        "Full regeneration in 6–8 weeks",
        "Multi-disciplinary team care",
        "Staged resections available for metastases",
      ],
    },
  ],
  benefits: [
    "Precise dissection near major vessels",
    "3D visualization of liver anatomy",
    "Less blood loss than open surgery",
    "Faster liver regeneration",
    "Shorter hospital stay",
    "Multi-disciplinary team approach",
  ],
  imageAlt: "Robotic Liver Surgery",
};

export const roboticPancreaticData: SurgeryPageData = {
  title: "Robotic Whipple Procedure",
  subtitle: "The ultimate test of surgical skill — with Da Vinci robotic precision.",
  breadcrumb: "Robotic Surgery > Advanced GI > Pancreatic",
  overview: "The Whipple procedure (pancreaticoduodenectomy) is one of medicine's most complex surgeries — the primary curative treatment for pancreatic head cancer. Robotic assistance enables precision for three critical anastomoses.",
  sections: [
    {
      title: "What's Removed",
      icon: "stethoscope",
      bullets: [
        "Head of the pancreas",
        "Entire duodenum",
        "Portion of common bile duct",
        "Gallbladder",
        "Sometimes part of the stomach",
        "Three critical connections reconstructed",
      ],
    },
    {
      title: "Why Robotic Whipple?",
      icon: "shield",
      bullets: [
        "3D magnified view of pancreatic head anatomy",
        "Precise anastomosis — reduces pancreatic fistula risk",
        "Multiple small incisions vs. 20–30cm open incision",
        "Less pain, faster mobilization",
        "Not all patients eligible — assessed individually",
      ],
    },
    {
      title: "Recovery & Prognosis",
      icon: "heart",
      bullets: [
        "ICU monitoring: 1–2 days",
        "Hospital stay: 7–9 days (vs. 10–14 open)",
        "Oral feeding begins in 3–4 days",
        "Full recovery: 4–6 weeks",
        "5-year survival: 20–25% with chemo",
      ],
    },
  ],
  benefits: [
    "Precise anastomosis creation",
    "Lower pancreatic fistula rates",
    "Multiple small incisions",
    "Shorter hospital stay",
    "Expert multi-disciplinary cancer team",
    "Reduced surgical trauma",
  ],
  imageAlt: "Robotic Whipple Procedure",
};

export const roboticSplenectomyData: SurgeryPageData = {
  title: "Robotic Splenectomy",
  subtitle: "Precise spleen removal for blood disorders and splenic conditions.",
  breadcrumb: "Robotic Surgery > Advanced GI > Splenectomy",
  overview: "Robotic splenectomy provides precise control of the splenic hilum vasculature for safe spleen removal. Commonly performed for ITP, hereditary spherocytosis, and certain lymphomas.",
  sections: [
    {
      title: "Indications",
      icon: "stethoscope",
      bullets: [
        "ITP (immune thrombocytopenic purpura) — 75–80% cure rate",
        "Hereditary spherocytosis",
        "Splenic cysts > 5cm",
        "Splenic artery aneurysms",
        "Certain lymphomas (hairy cell, marginal zone)",
      ],
    },
    {
      title: "Surgical Technique",
      icon: "zap",
      bullets: [
        "3D magnified view of hilar vessels",
        "Precise vessel ligation minimizes blood loss",
        "Identifies accessory spleens (present in 10–30%)",
        "Specimen removed in bag through port",
        "Hand-assist available for very large spleens",
      ],
    },
    {
      title: "Recovery & Aftercare",
      icon: "clock",
      bullets: [
        "Home in 1–2 days (vs. 4–5 open)",
        "Normal activities in 1–2 weeks",
        "Vaccinations required pre-surgery",
        "Prophylactic antibiotics may be prescribed",
        "Platelet monitoring for ITP patients",
      ],
    },
  ],
  benefits: [
    "Precise vascular control",
    "75–80% ITP cure rate",
    "Minimal blood loss",
    "Short hospital stay (1–2 days)",
    "Identifies accessory spleens",
    "Coordinated hematology care",
  ],
  imageAlt: "Robotic Splenectomy",
};

export const roboticAchalasiaData: SurgeryPageData = {
  title: "Robotic Achalasia Surgery (Heller Myotomy)",
  subtitle: "Precise esophageal myotomy for Achalasia Cardia.",
  breadcrumb: "Robotic Surgery > Advanced GI > Achalasia",
  overview: "Achalasia is a rare esophageal disorder where the lower sphincter fails to relax during swallowing. Robotic Heller myotomy — precise division of the LES muscle fibers — provides lasting relief in 90%+ patients.",
  sections: [
    {
      title: "Symptoms & Diagnosis",
      icon: "activity",
      bullets: [
        "Progressive difficulty swallowing (solids & liquids)",
        "Regurgitation of undigested food",
        "Chest pain and weight loss",
        "Diagnosed via manometry, barium swallow, endoscopy",
        "Affects ~1 in 100,000 people",
      ],
    },
    {
      title: "The Procedure",
      icon: "stethoscope",
      bullets: [
        "Muscle fibers divided over 6–8cm on esophagus",
        "2–3cm extension onto gastric cardia",
        "Mucosa (inner lining) meticulously preserved",
        "Tremor-free instruments for delicate dissection",
        "Combined with partial fundoplication (prevents reflux)",
      ],
    },
    {
      title: "Results",
      icon: "heart",
      bullets: [
        "90%+ symptom relief rate",
        "Dramatic swallowing improvement within days",
        "Hospital stay: 1–2 days",
        "Normal diet in 2–3 weeks",
        "85–90% sustained relief at 10 years",
      ],
    },
  ],
  benefits: [
    "90%+ symptom relief",
    "Precise mucosal preservation",
    "Combined anti-reflux procedure",
    "Rapid symptom improvement",
    "Long-lasting results (10+ years)",
    "POEM also available for selected patients",
  ],
  imageAlt: "Robotic Achalasia Surgery",
};

export const roboticPortalHTData: SurgeryPageData = {
  title: "Surgery for Portal Hypertension",
  subtitle: "Surgical shunts when endoscopic techniques fail to control variceal bleeding.",
  breadcrumb: "Robotic Surgery > Advanced GI > Portal Hypertension",
  overview: "Portal hypertension — elevated pressure in the portal venous system — causes dangerous varices that can rupture and bleed. When medical and endoscopic management fails, surgical intervention provides definitive relief.",
  sections: [
    {
      title: "Understanding the Condition",
      icon: "activity",
      bullets: [
        "Portal vein carries blood from gut to liver",
        "Liver disease increases resistance to blood flow",
        "Varices develop in esophagus, stomach, rectum",
        "25–30% of cirrhosis patients develop variceal bleeding",
        "15–20% mortality per bleeding episode",
      ],
    },
    {
      title: "Surgical Options",
      icon: "stethoscope",
      bullets: [
        "Distal Splenorenal Shunt (DSRS) — selective decompression",
        "Proximal splenorenal shunt — total decompression",
        "Sugiura devascularization procedure",
        "Coordination with interventional radiology for TIPS",
        "Liver transplant evaluation when needed",
      ],
    },
    {
      title: "Assessment & Outcomes",
      icon: "shield",
      bullets: [
        "Child-Pugh & MELD scoring",
        "CT angiography of portal system",
        "Post-surgical rebleeding rates: 5–10%",
        "Significant quality of life improvement",
        "Multi-disciplinary hepatology team",
      ],
    },
  ],
  benefits: [
    "Expert portal hypertension management",
    "Multiple surgical shunt options",
    "Low rebleeding rates (5–10%)",
    "Thorough pre-operative assessment",
    "TIPS coordination available",
    "Liver transplant referral when needed",
  ],
  imageAlt: "Portal Hypertension Surgery",
};

// ===================== LAPAROSCOPIC BARIATRIC =====================

export const lapSleeveData: SurgeryPageData = {
  title: "Laparoscopic Sleeve Gastrectomy",
  subtitle: "The most commonly performed bariatric procedure worldwide.",
  breadcrumb: "Laparoscopic > Bariatric > Sleeve Gastrectomy",
  overview: "Laparoscopic sleeve gastrectomy removes ~85% of the stomach through keyhole incisions, creating a narrow tube that limits food intake and reduces hunger hormones. Trained at the Centre of Excellence in Frankfurt, Germany.",
  sections: [
    {
      title: "How It Works",
      icon: "stethoscope",
      bullets: [
        "85% of stomach removed along greater curvature",
        "Remaining sleeve holds 100–150ml",
        "Ghrelin-producing cells removed — hunger reduced",
        "Nerves & outlet valve preserved — normal digestion",
        "Procedure takes 45–75 minutes",
      ],
    },
    {
      title: "Recovery & Results",
      icon: "clock",
      bullets: [
        "Hospital stay: 2–3 days",
        "Normal activity in 4 days",
        "70% mean excess weight loss at 1 year",
        "55–65% diabetes remission",
        "No dumping syndrome risk",
      ],
    },
    {
      title: "Safety Profile",
      icon: "shield",
      bullets: [
        "No intestinal rerouting required",
        "Normal vitamin & mineral absorption",
        "Leak rate: 1–2%",
        "4–5 small incisions (5–12mm)",
        "Lifelong nutritional follow-up included",
      ],
    },
  ],
  benefits: [
    "Most popular bariatric procedure worldwide",
    "No intestinal rerouting",
    "70% excess weight loss at 1 year",
    "Ghrelin hormone removed",
    "Hospital stay: 2–3 days",
    "Normal activity in 4 days",
    "Preserves normal nutrient absorption",
    "Trained at Centre of Excellence, Frankfurt",
  ],
  imageAlt: "Laparoscopic Sleeve Gastrectomy",
};

export const lapGastricBypassData: SurgeryPageData = {
  title: "Laparoscopic Gastric Bypass (Roux-en-Y)",
  subtitle: "Gold standard — 30+ years of proven results.",
  breadcrumb: "Laparoscopic > Bariatric > Gastric Bypass",
  overview: "Roux-en-Y Gastric Bypass combines restriction, mild malabsorption, and hormonal changes for the most consistent long-term weight loss results. Particularly effective for diabetes remission.",
  sections: [
    {
      title: "Triple Mechanism",
      icon: "stethoscope",
      bullets: [
        "Small 25–30ml pouch — limits food intake",
        "Bypasses duodenum & proximal jejunum (~150cm)",
        "Gut hormone changes enhance satiety & insulin",
        "5–6 small keyhole incisions",
        "Procedure takes 90–120 minutes",
      ],
    },
    {
      title: "Outcomes",
      icon: "heart",
      bullets: [
        "70–80% excess weight loss — sustained 10+ years",
        "80–85% type 2 diabetes remission",
        "Sleep apnea resolves in 80–85%",
        "Hypertension improves in 65–75%",
        "Hospital stay: 3–4 days",
      ],
    },
    {
      title: "Nutritional Needs",
      icon: "shield",
      bullets: [
        "Lifelong vitamin & mineral supplementation",
        "Multivitamins, calcium + D, iron, B12",
        "Regular blood work monitoring",
        "Dedicated bariatric dietitians",
        "Follow-up at 1, 3, 6, 12 months & annually",
      ],
    },
  ],
  benefits: [
    "30+ years of proven results",
    "70–80% excess weight loss",
    "Highest diabetes remission (80–85%)",
    "Sleep apnea resolution (80–85%)",
    "Cardiovascular risk reduction",
    "Structured lifelong follow-up",
  ],
  imageAlt: "Laparoscopic Gastric Bypass",
};

export const lapMiniBypassData: SurgeryPageData = {
  title: "Laparoscopic Mini Gastric Bypass (OAGB)",
  subtitle: "Simplified bypass with excellent outcomes.",
  breadcrumb: "Laparoscopic > Bariatric > Mini Gastric Bypass",
  overview: "OAGB creates a single connection between stomach and intestine — technically simpler, faster, with comparable weight loss. Bypass length customized to each patient's BMI and metabolic profile.",
  sections: [
    {
      title: "How It Differs",
      icon: "stethoscope",
      bullets: [
        "Single anastomosis (vs. two in Roux-en-Y)",
        "Shorter operative time: 45–75 minutes",
        "Lower internal hernia risk",
        "Same mechanism: restriction + malabsorption + hormonal",
        "Customized bypass length by BMI",
      ],
    },
    {
      title: "Results",
      icon: "heart",
      bullets: [
        "65–80% excess weight loss at 2 years",
        "70–80% diabetes remission",
        "Potentially reversible",
        "Excellent for failed sleeve conversion",
        "Hospital stay: 2–3 days",
      ],
    },
  ],
  benefits: [
    "Shorter surgery duration",
    "Single anastomosis — simpler",
    "65–80% excess weight loss",
    "Lower internal hernia risk",
    "Potentially reversible",
    "Excellent sleeve revision option",
  ],
  imageAlt: "Laparoscopic Mini Gastric Bypass",
};

export const lapGastricBandingData: SurgeryPageData = {
  title: "LAGB (Adjustable Gastric Banding)",
  subtitle: "Safest bariatric procedure — adjustable and fully reversible.",
  breadcrumb: "Laparoscopic > Bariatric > Gastric Banding",
  overview: "A silicone band is placed around the upper stomach, creating a small pouch that fills quickly. The band is adjustable through a subcutaneous port and the procedure is fully reversible.",
  sections: [
    {
      title: "How It Works",
      icon: "stethoscope",
      bullets: [
        "Medical-grade silicone band around upper stomach",
        "Small 15–30ml pouch creates early fullness",
        "Adjustable via subcutaneous access port",
        "No stomach cutting or intestinal rerouting",
        "Shortest procedure: 30–45 minutes",
      ],
    },
    {
      title: "Adjustments & Follow-Up",
      icon: "activity",
      bullets: [
        "First adjustment 4–6 weeks post-surgery",
        "4–8 adjustments in first year typical",
        "Finding the 'green zone' for optimal restriction",
        "40–50% excess weight loss over 1–3 years",
        "Convertible to sleeve or bypass if needed",
      ],
    },
    {
      title: "Safety",
      icon: "shield",
      bullets: [
        "Lowest operative risk of any bariatric procedure",
        "Fully reversible",
        "Normal nutrient absorption preserved",
        "Same-day or next-day discharge",
        "Band slippage rate: 2–5%",
      ],
    },
  ],
  benefits: [
    "Safest bariatric procedure",
    "Fully adjustable and reversible",
    "No stomach cutting",
    "Shortest operative time (30–45 min)",
    "Same-day discharge",
    "Normal nutrient absorption",
    "Convertible to other procedures",
  ],
  imageAlt: "Laparoscopic Gastric Banding",
};

export const lapRevisionData: SurgeryPageData = {
  title: "Laparoscopic Revision Surgery",
  subtitle: "Second-chance weight loss through expert revision procedures.",
  breadcrumb: "Laparoscopic > Bariatric > Revision",
  overview: "Revision surgery corrects previous bariatric procedures for weight regain, complications, or conversion needs. Dr. Wadhawan's 2,000+ cases ensure expert handling of complex altered anatomy.",
  sections: [
    {
      title: "Why Revision?",
      icon: "activity",
      bullets: [
        "Weight regain (10–20% of bariatric patients)",
        "Dilated pouch or stretched sleeve",
        "Band slippage, erosion, or failure",
        "Severe GERD after sleeve",
        "Nutritional complications",
      ],
    },
    {
      title: "Revision Options",
      icon: "stethoscope",
      bullets: [
        "Re-sleeve for stretched sleeve",
        "Sleeve → gastric bypass conversion",
        "Sleeve → SADI-S conversion",
        "Band removal → sleeve or bypass",
        "Pouch revision / TORe (endoscopic)",
      ],
    },
    {
      title: "What to Expect",
      icon: "clock",
      bullets: [
        "Thorough evaluation: endoscopy + imaging + nutrition",
        "Additional 40–60% excess weight loss",
        "Comorbidity improvement",
        "Comprehensive post-op support",
        "2,000+ bariatric cases experience",
      ],
    },
  ],
  benefits: [
    "All revision types available",
    "Expert handling of altered anatomy",
    "40–60% additional excess weight loss",
    "Thorough pre-operative evaluation",
    "Comprehensive post-op support",
    "Second-chance weight loss",
  ],
  imageAlt: "Laparoscopic Revision Surgery",
};

// ===================== LAPAROSCOPIC GI =====================

export const lapHerniaData: SurgeryPageData = {
  title: "Laparoscopic Hernia Surgery",
  subtitle: "HSI Hernia Centre of Excellence — keyhole repair with mesh reinforcement.",
  breadcrumb: "Laparoscopic > GI > Hernia",
  overview: "Laparoscopic hernia repair addresses defects from inside the abdomen, placing mesh behind the muscles for a stronger repair. Fellowship-trained under Prof. Novitsky (Cleveland, USA).",
  sections: [
    {
      title: "How It Works",
      icon: "stethoscope",
      bullets: [
        "Mesh placed behind abdominal wall muscles",
        "Immediate structural support + tissue ingrowth (6–12 weeks)",
        "TAPP, TEP, IPOM techniques available",
        "Lightweight composite mesh — minimizes inflammation",
        "Treats inguinal, incisional, umbilical, ventral hernias",
      ],
    },
    {
      title: "Recovery",
      icon: "clock",
      bullets: [
        "Same-day or next-morning discharge",
        "Desk work in 3–5 days",
        "Full activity in 2–3 weeks",
        "Recurrence: 1–2% (inguinal), 5–10% (incisional)",
        "Less chronic pain than open repair",
      ],
    },
  ],
  benefits: [
    "HSI Hernia Centre of Excellence",
    "Fellowship-trained (Cleveland, USA)",
    "All hernia types treated",
    "Low recurrence rates",
    "Same-day discharge",
    "Less chronic pain than open repair",
  ],
  imageAlt: "Laparoscopic Hernia Surgery",
};

export const lapGallbladderData: SurgeryPageData = {
  title: "Laparoscopic Gallbladder Surgery",
  subtitle: "Gold standard for gallstones — same-day discharge in most cases.",
  breadcrumb: "Laparoscopic > GI > Gallbladder",
  overview: "Laparoscopic cholecystectomy is one of the most commonly performed surgeries. Through 3–4 tiny incisions, the gallbladder is removed with most patients going home the same day.",
  sections: [
    {
      title: "About Gallstones",
      icon: "activity",
      bullets: [
        "10–15% of adults have gallstones",
        "Symptoms: severe upper abdominal pain after meals",
        "Can cause cholecystitis, bile duct stones, pancreatitis",
        "Risk factors: age 40+, female, obesity, rapid weight loss",
        "Surgery recommended when symptomatic",
      ],
    },
    {
      title: "The Procedure",
      icon: "stethoscope",
      bullets: [
        "3–4 small incisions (5–12mm)",
        "'Critical view of safety' protocol followed",
        "Cystic artery & duct identified and divided",
        "Gallbladder removed in specimen bag",
        "30–60 minute procedure",
      ],
    },
    {
      title: "Recovery",
      icon: "clock",
      bullets: [
        "Same-day discharge (4–6 hours post-surgery)",
        "Shower next day; driving in 3–5 days",
        "Full activity in 1–2 weeks",
        "Mild fatty food sensitivity resolves quickly",
        "35,000+ laparoscopic procedures experience",
      ],
    },
  ],
  benefits: [
    "Gold standard treatment",
    "Same-day discharge",
    "3–4 tiny incisions",
    "30–60 minute procedure",
    "Rapid recovery (3–5 days)",
    "Proven safety record",
    "35,000+ procedures experience",
  ],
  imageAlt: "Laparoscopic Gallbladder Surgery",
};

export const lapAppendixData: SurgeryPageData = {
  title: "Laparoscopic Appendix Surgery",
  subtitle: "Standard surgical approach for appendicitis — rapid recovery.",
  breadcrumb: "Laparoscopic > GI > Appendix",
  overview: "Laparoscopic appendectomy removes the inflamed appendix through 2–3 small incisions. The most common surgical emergency, affecting ~7% of people in their lifetime.",
  sections: [
    {
      title: "The Procedure",
      icon: "stethoscope",
      bullets: [
        "2–3 incisions (5–12mm each)",
        "Full abdominal inspection — catches alternative diagnoses in 15–20%",
        "Mesoappendix secured; appendix base ligated",
        "Specimen removed in bag",
        "Interval appendectomy for abscess cases",
      ],
    },
    {
      title: "Recovery",
      icon: "clock",
      bullets: [
        "Same-day discharge for simple cases",
        "Normal activities in 3–5 days",
        "Complicated cases: 3–5 days hospitalization",
        "Low wound infection rates",
        "Less pain than open surgery",
      ],
    },
  ],
  benefits: [
    "2–3 tiny incisions",
    "Same-day discharge (uncomplicated)",
    "Full abdominal inspection",
    "Rapid recovery (3–5 days)",
    "Lower wound infection rates",
    "Expert management of complicated cases",
  ],
  imageAlt: "Laparoscopic Appendix Surgery",
};

export const lapColonData: SurgeryPageData = {
  title: "Laparoscopic Colon & Rectal Surgery",
  subtitle: "Minimally invasive colorectal procedures with ERAS protocols.",
  breadcrumb: "Laparoscopic > GI > Colon & Rectal",
  overview: "Laparoscopic colorectal surgery achieves equivalent oncological outcomes to open surgery with the benefits of minimally invasive recovery. Dr. Wadhawan is certified by the European Coloproctology Society.",
  sections: [
    {
      title: "Procedures Available",
      icon: "stethoscope",
      bullets: [
        "Right/left hemicolectomy for colon cancer",
        "Sigmoid colectomy for cancer & diverticulitis",
        "Low anterior resection for rectal cancer",
        "Total colectomy with IPAA for UC/FAP",
        "Oncological principles: CME & TME",
      ],
    },
    {
      title: "Recovery (ERAS)",
      icon: "clock",
      bullets: [
        "Fluids same evening of surgery",
        "Solid food in 1–2 days",
        "Home within 3–5 days (vs. 7–10 open)",
        "Faster bowel function return",
        "5,000+ MIPH & STARR procedures",
      ],
    },
    {
      title: "Cancer Outcomes",
      icon: "shield",
      bullets: [
        "Adequate lymph node harvesting (12+)",
        "5-year survival: 60–70% (stage III colon)",
        "Equivalent to open surgery outcomes",
        "European Coloproctology Society certified",
        "Neoadjuvant/adjuvant chemo coordinated",
      ],
    },
  ],
  benefits: [
    "Equivalent oncological outcomes to open",
    "Faster bowel recovery (ERAS)",
    "Home in 3–5 days",
    "European Coloproctology Society certified",
    "5,000+ MIPH & STARR procedures",
    "Earlier return to normal routine",
  ],
  imageAlt: "Laparoscopic Colon Surgery",
};

export const lapRectalData: SurgeryPageData = {
  title: "Laparoscopic Rectal Surgery",
  subtitle: "5,000+ MIPH & STARR procedures — European Coloproctology Society certified.",
  breadcrumb: "Laparoscopic > GI > Rectal",
  overview: "Dr. Wadhawan is among India's most experienced proctologists with 5,000+ MIPH and STARR procedures. Comprehensive care for all rectal and anorectal conditions.",
  sections: [
    {
      title: "MIPH & Haemorrhoids",
      icon: "stethoscope",
      bullets: [
        "Stapled hemorrhoidopexy for grade III–IV",
        "Lifts prolapsed tissue to normal position",
        "Significantly less pain than conventional surgery",
        "Return to work in 2–3 days",
        "5,000+ procedures performed",
      ],
    },
    {
      title: "Rectal Cancer & Prolapse",
      icon: "shield",
      bullets: [
        "Laparoscopic TME for rectal cancer",
        "Ventral mesh rectopexy for prolapse",
        "Nerve-sparing techniques",
        "Complex fistula repair (LIFT, VAAFT, FiLaC)",
        "Pilonidal sinus management",
      ],
    },
    {
      title: "Thorough Evaluation",
      icon: "activity",
      bullets: [
        "Digital rectal examination",
        "Colonoscopy & proctoscopy",
        "MRI pelvis for cancer staging",
        "Anorectal manometry for functional conditions",
        "Individualized treatment plans",
      ],
    },
  ],
  benefits: [
    "5,000+ MIPH & STARR procedures",
    "European Coloproctology Society certified",
    "Less painful than conventional surgery",
    "Return to work in 2–3 days (MIPH)",
    "Comprehensive fistula management",
    "Individualized treatment approach",
  ],
  imageAlt: "Laparoscopic Rectal Surgery",
};

export const lapGastricCancerData: SurgeryPageData = {
  title: "Laparoscopic Gastric Cancer Surgery",
  subtitle: "Minimally invasive gastrectomy with precision tumor removal.",
  breadcrumb: "Laparoscopic > GI > Gastric Cancer",
  overview: "Laparoscopic gastrectomy removes the cancerous stomach portion with adequate lymph node clearance — oncological outcomes equivalent to open surgery with faster recovery.",
  sections: [
    {
      title: "Types of Gastrectomy",
      icon: "stethoscope",
      bullets: [
        "Distal gastrectomy (LADG) — lower stomach cancers",
        "Total gastrectomy — proximal or diffuse cancers",
        "Proximal gastrectomy — early cardia cancers",
        "EMR/ESD — very early T1a cancers (no gastrectomy needed)",
        "Roux-en-Y reconstruction after total gastrectomy",
      ],
    },
    {
      title: "Lymph Node Dissection",
      icon: "shield",
      bullets: [
        "D2 lymphadenectomy — standard for advanced cancer",
        "Minimum 15 lymph nodes harvested for staging",
        "Magnified view for precise vascular dissection",
        "Preserves pancreas, spleen, major vessels",
        "Less blood loss than open approach",
      ],
    },
    {
      title: "Recovery & Follow-Up",
      icon: "clock",
      bullets: [
        "Oral intake begins day 2–3",
        "Hospital stay: 5–7 days (vs. 10–14 open)",
        "Vitamin B12 injections if total gastrectomy",
        "Iron & calcium supplementation",
        "Regular endoscopy & CT follow-up",
      ],
    },
  ],
  benefits: [
    "Equivalent oncological outcomes to open",
    "D2 lymphadenectomy for complete staging",
    "Faster recovery (5–7 day stay)",
    "EMR/ESD for very early cancers",
    "Multi-disciplinary cancer care",
    "Comprehensive nutritional follow-up",
  ],
  imageAlt: "Laparoscopic Gastric Cancer Surgery",
};

// ===================== ADVANCED LAPAROSCOPIC SURGERY =====================

export const lapBileDuctStonesData: SurgeryPageData = {
  title: "Common Bile Duct Stones (Laparoscopic & Endoscopic)",
  subtitle: "Minimally invasive treatment for choledocholithiasis — bile duct stones removed without open surgery.",
  breadcrumb: "Advanced Laparoscopic > Bile Duct Stones",
  overview: "Bile duct stones (choledocholithiasis) are gallstones present in the common bile duct. They can form in the bile duct or migrate from the gallbladder. Once a stone gets stuck causing blockage, medical intervention is required — otherwise inflammation, bacterial infection, and severe organ damage to the pancreas and liver can occur. Dr. Randeep Wadhawan and his multidisciplinary team provide the latest minimally invasive treatments for bile duct stones with expertise from over 35,000 minimal access surgeries.",
  sections: [
    {
      title: "Symptoms",
      icon: "heart",
      bullets: [
        "Irregular severe abdominal pain lasting hours",
        "Nausea and vomiting",
        "Fever",
        "Jaundice (yellowing of skin and eyes)",
        "Dark urine and pale stools",
      ],
    },
    {
      title: "Treatment Approach",
      icon: "stethoscope",
      bullets: [
        "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
        "Laparoscopic common bile duct exploration",
        "Combined laparoscopic cholecystectomy + CBD exploration",
        "Intraoperative cholangiography for stone detection",
        "Same-session gallbladder removal when indicated",
      ],
    },
    {
      title: "Why Minimally Invasive",
      icon: "zap",
      bullets: [
        "No large abdominal incision",
        "Shorter hospital stay (1–3 days)",
        "Faster return to normal activities",
        "Lower risk of wound complications",
        "Combined approach avoids multiple procedures",
      ],
    },
  ],
  benefits: [
    "Expert in 35,000+ minimally invasive surgeries",
    "Combined laparoscopic + endoscopic approach",
    "Same-session gallbladder and bile duct treatment",
    "Shorter hospital stay",
    "Faster recovery than open surgery",
    "Multidisciplinary team approach",
  ],
  imageAlt: "Common Bile Duct Stones Treatment",
};

export const lapPseudopancreaticCystsData: SurgeryPageData = {
  title: "Laparoscopy for Pseudopancreatic Cysts",
  subtitle: "Minimally invasive drainage and treatment for pancreatic pseudocysts.",
  breadcrumb: "Advanced Laparoscopic > Pseudopancreatic Cysts",
  overview: "Pancreatic pseudocysts are fluid-filled sacs that develop on or around the pancreas, typically after pancreatitis. While small pseudocysts without symptoms can be treated conservatively, most cases require intervention. Dr. Wadhawan offers laparoscopic cystogastrostomy and cystojejunostomy — advanced minimally invasive techniques for definitive internal drainage of pseudocysts.",
  sections: [
    {
      title: "Symptoms",
      icon: "heart",
      bullets: [
        "Abdominal pain and bloating",
        "Nausea and vomiting",
        "Appetite loss and weight loss",
        "Diarrhea",
        "Fever",
        "Tender abdominal mass",
        "Jaundice (yellowing of skin and eyes)",
      ],
    },
    {
      title: "Treatment Options",
      icon: "stethoscope",
      bullets: [
        "Endoscopic trans-gastric drainage",
        "Imaging-guided percutaneous drainage",
        "Laparoscopic cystogastrostomy",
        "Laparoscopic cystojejunostomy",
        "Open surgery for complex cases",
      ],
    },
    {
      title: "Laparoscopic Advantages",
      icon: "zap",
      bullets: [
        "Internal drainage for permanent resolution",
        "Keyhole approach — minimal scarring",
        "Shorter hospital stay than open surgery",
        "Lower recurrence rates with internal drainage",
        "Combined with other procedures if needed",
      ],
    },
  ],
  benefits: [
    "Expert in complex pancreatic surgery",
    "Laparoscopic internal drainage techniques",
    "Lower recurrence than external drainage",
    "Minimally invasive approach",
    "Comprehensive post-operative care",
    "Multidisciplinary team at Max Hospital",
  ],
  imageAlt: "Laparoscopy for Pseudopancreatic Cysts",
};

export const lapLiverCystsData: SurgeryPageData = {
  title: "Laparoscopy in Various Liver Cysts",
  subtitle: "Minimally invasive excision and treatment for symptomatic liver cysts.",
  breadcrumb: "Advanced Laparoscopic > Liver Cysts",
  overview: "Symptomatic simple liver cysts require treatment. Laparoscopic liver cyst excision is a straightforward, well-tolerated procedure. The exposed portion of the cyst wall is excised and omentum is secured into the remaining cavity to prevent recurrence. This approach is effective for single simple cysts, multiple simple cysts, and selected cases of polycystic liver disease — even in patients with previous abdominal operations or failed needle aspirations.",
  sections: [
    {
      title: "Types of Liver Cysts",
      icon: "stethoscope",
      bullets: [
        "Single simple liver cysts",
        "Multiple simple liver cysts",
        "Polycystic liver disease",
        "Parasitic cysts (hydatid cysts)",
        "Cysts causing compression symptoms",
      ],
    },
    {
      title: "Laparoscopic Technique",
      icon: "activity",
      bullets: [
        "Cyst wall excision (fenestration/deroofing)",
        "Omental packing to prevent recurrence",
        "Suitable even after previous abdominal surgery",
        "Effective after failed needle aspirations",
        "Simultaneous treatment of multiple cysts",
      ],
    },
    {
      title: "Recovery",
      icon: "clock",
      bullets: [
        "Hospital stay: 1–3 days",
        "Minimal post-operative pain",
        "Faster return to normal activities",
        "Low recurrence rate with omental packing",
        "Regular ultrasound follow-up",
      ],
    },
  ],
  benefits: [
    "Proven laparoscopic technique",
    "Effective even after failed aspirations",
    "Omental packing prevents recurrence",
    "Suitable for multiple cyst types",
    "Minimal scarring and faster recovery",
    "Expert hepatobiliary care",
  ],
  imageAlt: "Laparoscopy for Liver Cysts",
};

export const lapSplenectomyData: SurgeryPageData = {
  title: "Laparoscopic Splenectomy",
  subtitle: "Keyhole surgery for safe spleen removal — treating blood disorders and splenic conditions.",
  breadcrumb: "Advanced Laparoscopic > Splenectomy",
  overview: "Laparoscopic splenectomy is a keyhole surgery to remove all or part of the spleen. The spleen removes old and damaged blood cells and produces lymphocytes for immunity. When damaged by blood diseases, infections, cysts, tumors, or injury, the spleen swells and blocks blood flow, affecting multiple organs especially the liver. Dr. Wadhawan has extensive expertise in laparoscopic splenectomy with state-of-the-art infrastructure.",
  sections: [
    {
      title: "When Splenectomy Is Advised",
      icon: "heart",
      bullets: [
        "Spleen damaged by blood diseases (ITP, spherocytosis)",
        "Splenic cysts and tumors",
        "Traumatic splenic injury",
        "Certain lymphomas and leukemias",
        "Hypersplenism with cytopenias",
      ],
    },
    {
      title: "Laparoscopic Approach",
      icon: "stethoscope",
      bullets: [
        "3–4 small keyhole incisions",
        "Controlled vascular ligation of splenic hilum",
        "Specimen retrieval in endobag",
        "Minimal blood loss",
        "Conversion to open if spleen too large",
      ],
    },
    {
      title: "Recovery & Precautions",
      icon: "clock",
      bullets: [
        "Hospital stay: 2–3 days",
        "Pre-operative vaccination (pneumococcal, meningococcal)",
        "Lifelong infection awareness post-splenectomy",
        "Faster recovery than open surgery",
        "Coordinated hematology follow-up",
      ],
    },
  ],
  benefits: [
    "Expert in laparoscopic splenic surgery",
    "Minimal blood loss with controlled dissection",
    "Shorter hospital stay than open approach",
    "Less post-operative pain",
    "Faster return to normal activities",
    "Coordinated hematology care",
  ],
  imageAlt: "Laparoscopic Splenectomy",
};

export const lapSTARRData: SurgeryPageData = {
  title: "STARR (Stapled Trans-Anal Rectal Resection)",
  subtitle: "Advanced minimally invasive treatment for Obstructed Defecation Syndrome — 5,000+ procedures performed.",
  breadcrumb: "Advanced Laparoscopic > STARR",
  overview: "Stapled Transanal Rectal Resection (STARR) is a minimally invasive surgery for chronic constipation caused by Obstructed Defecation Syndrome (ODS). The surgeon removes excess rectal tissue through the anus without external incisions, leaving no visible scars. Dr. Wadhawan is one of very few surgeons trained in STARR, having completed a certified course in coloproctology with Dr. Antonio Longo (inventor and pioneer of Stapled Haemorrhoidectomy and STARR procedures) at Saint Elizabeth Hospital, Vienna, Austria.",
  sections: [
    {
      title: "Symptoms of ODS",
      icon: "heart",
      bullets: [
        "Feeling of stool getting stuck",
        "Using fingers to assist bowel movement",
        "Frequent need to go to the toilet",
        "Excessive straining during defecation",
        "Incomplete evacuation sensation",
      ],
    },
    {
      title: "The STARR Procedure",
      icon: "stethoscope",
      bullets: [
        "Trans-anal approach — no external incisions",
        "Removes excess rectal tissue causing obstruction",
        "Restores normal rectal anatomy",
        "No visible scars",
        "One-day discharge in most cases",
      ],
    },
    {
      title: "Expert Credentials",
      icon: "shield",
      bullets: [
        "Trained by Dr. Antonio Longo (inventor of STARR)",
        "Certified course at Saint Elizabeth Hospital, Vienna",
        "5,000+ MIPH & STARR procedures performed",
        "European Coloproctology Society certified",
        "One of very few trained STARR surgeons in India",
      ],
    },
  ],
  benefits: [
    "Trained by the inventor of STARR — Dr. Antonio Longo",
    "5,000+ MIPH & STARR procedures",
    "No external incisions or visible scars",
    "Same-day or next-day discharge",
    "European Coloproctology Society certified",
    "Restores normal defecation function",
  ],
  imageAlt: "STARR Procedure",
};

export const lapRectalProlapseData: SurgeryPageData = {
  title: "Laparoscopic Surgery for Rectal Prolapse",
  subtitle: "Keyhole rectopexy for rectal prolapse — expert repair with faster recovery.",
  breadcrumb: "Advanced Laparoscopic > Rectal Prolapse",
  overview: "In rectal prolapse, the rectum (lower end of the colon above the anus) stretches and protrudes out of the anus. This weakness of the anal sphincter muscle often leads to stool leakage or mucus discharge. The condition is more common in women. Dr. Wadhawan has vast experience managing complex rectal prolapse cases using laparoscopic ventral mesh rectopexy and other minimally invasive techniques.",
  sections: [
    {
      title: "Types of Rectal Prolapse",
      icon: "stethoscope",
      bullets: [
        "Full-thickness (complete) rectal prolapse",
        "Mucosal prolapse",
        "Internal prolapse (intussusception)",
        "Associated pelvic floor weakness",
        "Recurrent prolapse after previous repair",
      ],
    },
    {
      title: "Laparoscopic Repair",
      icon: "activity",
      bullets: [
        "Laparoscopic ventral mesh rectopexy",
        "Keyhole approach — 3–4 small incisions",
        "Mesh reinforcement to prevent recurrence",
        "Nerve-sparing technique preserving function",
        "Suitable for complex and recurrent cases",
      ],
    },
    {
      title: "Benefits of Laparoscopic Approach",
      icon: "zap",
      bullets: [
        "Less blood loss than open surgery",
        "Faster return to bowel function",
        "Faster return to normal diet",
        "Shorter hospital stay (3–5 days)",
        "Lower recurrence rates with mesh rectopexy",
      ],
    },
  ],
  benefits: [
    "Expert in complex rectal prolapse repair",
    "Laparoscopic ventral mesh rectopexy",
    "Less blood loss and faster recovery",
    "Shorter hospital stay",
    "Lower recurrence rates",
    "European Coloproctology Society certified",
  ],
  imageAlt: "Laparoscopic Rectal Prolapse Surgery",
};
