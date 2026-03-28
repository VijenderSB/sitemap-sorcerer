<?php
/**
 * Template Name: Metabolic Surgery
 */
get_header();
?>

<section class="page-hero">
    <div class="container">
        <nav class="breadcrumb">Procedures > Metabolic Surgery in Delhi</nav>
        <h1>Metabolic Surgery in Delhi</h1>
        <p>Tailored surgical solutions for type 2 diabetes and metabolic syndrome at Max Hospital, Dwarka, Delhi.</p>
    </div>
</section>

<section class="section">
    <div class="container container-wide">
        <p class="text-lg">Looking for metabolic surgery for diabetes in Delhi? Dr. Wadhawan performs tailored robotic and laparoscopic metabolic procedures including DJB and SADI-S at Max Super Speciality Hospital, Dwarka. These procedures promote weight loss and directly improve metabolic function, often leading to complete remission of type 2 diabetes even in patients with BMI < 35.</p>
    </div>
</section>

<section class="section">
    <div class="container container-wide">
        <h2 class="text-center">Why Patients Choose This Procedure</h2>
        <div class="grid-3">
            <?php
            $benefits = array(
                'Type 2 diabetes remission in up to 80% of patients',
                'Tailored DJB and SADI-S procedures',
                'Improvement in hypertension and cholesterol levels',
                'Resolution of metabolic syndrome',
                'Hormonal balance improvement (PCOS, thyroid)',
                'Long-term cardiovascular risk reduction',
                'Effective even at lower BMI',
                'Improved quality of life and life expectancy',
            );
            foreach ($benefits as $b) : ?>
            <div class="benefit-card">✅ <?php echo esc_html($b); ?></div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="section bg-muted">
    <div class="container container-wide">
        <h2>Procedures & Services</h2>
        <div class="grid-2">
            <div class="card"><h3>Duodeno-Jejunal Bypass (DJB)</h3><p>A specialized metabolic procedure designed to improve blood sugar control in type 2 diabetic patients by bypassing a portion of the duodenum and jejunum.</p></div>
            <div class="card"><h3>SADI-S</h3><p>A powerful metabolic procedure combining sleeve gastrectomy with a single-anastomosis duodeno-ileal bypass for excellent diabetes remission and weight loss.</p></div>
            <div class="card"><h3>Metabolic Gastric Bypass</h3><p>Modified Roux-en-Y gastric bypass tailored for metabolic correction, often leading to complete remission of type 2 diabetes.</p></div>
            <div class="card"><h3>Metabolic Syndrome Surgery</h3><p>Targets the cluster of conditions — high blood pressure, high blood sugar, excess abdominal fat, and abnormal cholesterol.</p></div>
        </div>
    </div>
</section>

<section class="section text-center">
    <div class="container"><h2>Ready to Take the Next Step?</h2><p>Book a consultation with Dr. Randeep Wadhawan.</p><a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-primary btn-lg">Book Consultation →</a></div>
</section>

<!-- Appointment Form -->
<section class="section">
    <div class="container container-sm">
        <?php
        $drw_form_heading = 'Book Metabolic Surgery Consultation';
        $drw_form_subheading = 'Discuss metabolic surgery options for diabetes remission.';
        get_template_part('template-parts/appointment-form');
        ?>
    </div>
</section>

<?php get_footer(); ?>
