<?php
/**
 * Template Name: GI Surgery
 */
get_header();

$procedures = array(
    array('name' => 'Gallbladder Surgery (Cholecystectomy)', 'desc' => 'Removal of the gallbladder for gallstones or gallbladder disease. Available in robotic and laparoscopic approaches with same-day discharge in most cases.'),
    array('name' => 'Colon & Rectal Surgery', 'desc' => 'Treatment of colon cancer, rectal malignancy, rectal prolapse, and other colorectal conditions using robotic and laparoscopic approaches.'),
    array('name' => 'Gastric Cancer Surgery', 'desc' => 'Laparoscopic gastrectomy for stomach cancer including Endoscopic Mucosal Resection and LADG techniques.'),
    array('name' => 'Esophageal Surgery (Oesophagectomy)', 'desc' => 'Minimally invasive esophagectomy removing part or all of the esophagus for esophageal cancer.'),
    array('name' => 'Liver Resections', 'desc' => 'Surgical removal of cancerous liver segments for liver cancer, metastatic colorectal cancers, and gallbladder cancers.'),
    array('name' => 'Whipple Procedure (Pancreatic Cancer)', 'desc' => 'Complex surgery for pancreatic/periampullary cancer removing the head of the pancreas, duodenum, bile duct, and gallbladder.'),
    array('name' => 'Surgery for Portal Hypertension', 'desc' => 'Surgical shunt procedures for elevated portal vein pressure when endoscopic techniques fail.'),
    array('name' => 'MIPH & Proctology', 'desc' => 'Over 5,000 Minimally Invasive Procedures for Haemorrhoids (MIPH) & STARR procedures. Certified by European Coloproctology Society.'),
);

$benefits = array(
    'Over 35,000 laparoscopic surgeries performed',
    'European Coloproctology Society certified',
    'Over 5,000 MIPH & STARR procedures',
    'Da Vinci robotic and laparoscopic options',
    'Multi-disciplinary team approach',
    'State-of-the-art infrastructure',
);
?>

<section class="page-hero">
    <div class="container">
        <nav class="breadcrumb">Procedures > GI Surgery in Delhi</nav>
        <h1>GI Surgery in Delhi</h1>
        <p>Advanced gastrointestinal surgery in Delhi — over 35,000 laparoscopic surgeries performed at Max Hospital, Dwarka.</p>
    </div>
</section>

<section class="section">
    <div class="container container-wide">
        <p class="text-lg">Dr. Wadhawan is Delhi's leading GI surgeon, specializing in routine and advanced gastrointestinal surgeries at Max Super Speciality Hospital, Dwarka. With over 35,000 laparoscopic surgeries performed and certification by the European Coloproctology Society, he offers both robotic and laparoscopic approaches.</p>
    </div>
</section>

<section class="section">
    <div class="container container-wide">
        <h2 class="text-center">Why Patients Choose This Procedure</h2>
        <div class="grid-3">
            <?php foreach ($benefits as $b) : ?>
            <div class="benefit-card">✅ <?php echo esc_html($b); ?></div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="section bg-muted">
    <div class="container container-wide">
        <h2>Procedures & Services</h2>
        <div class="grid-2">
            <?php foreach ($procedures as $p) : ?>
            <div class="card">
                <h3><?php echo esc_html($p['name']); ?></h3>
                <p><?php echo esc_html($p['desc']); ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="section text-center">
    <div class="container container-narrow">
        <h2>Ready to Take the Next Step?</h2>
        <p>Book a consultation with Dr. Randeep Wadhawan to discuss your treatment options.</p>
        <a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-primary btn-lg">Book Consultation →</a>
    </div>
</section>

<?php get_footer(); ?>
