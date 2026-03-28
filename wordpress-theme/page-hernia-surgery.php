<?php
/**
 * Template Name: Hernia Surgery
 */
get_header();
?>

<section class="page-hero">
    <div class="container">
        <nav class="breadcrumb">Procedures > Hernia Surgery in Delhi</nav>
        <h1>Hernia Surgery in Delhi</h1>
        <p>Delhi's best hernia treatment — robotic, laparoscopic, and open approaches at Max Hospital, Dwarka. Hernia Centre of Excellence accredited by the Hernia Society of India.</p>
    </div>
</section>

<section class="section">
    <div class="container container-wide">
        <p class="text-lg">Looking for the best hernia surgery in Delhi? Dr. Wadhawan offers all approaches to hernia repair at Max Super Speciality Hospital, Dwarka, with robotic surgery as the preferred option for its superior precision and faster recovery. He completed fellowship in Abdominal Wall Reconstruction under Prof. Yuri Novitsky at University Hospitals, Cleveland, USA. The department is accredited as a Hernia Centre of Excellence by the Hernia Society of India.</p>
    </div>
</section>

<!-- Benefits -->
<section class="section">
    <div class="container container-wide">
        <h2 class="text-center">Why Patients Choose This Procedure</h2>
        <div class="grid-3">
            <?php
            $benefits = array(
                'Fellowship-trained under Prof. Novitsky (Cleveland, USA)',
                'Hernia Centre of Excellence (HSI accredited)',
                'Robotic precision for complex and recurrent hernias',
                'Mesh reinforcement for long-term strength',
                'Low recurrence rates',
                'Same-day or next-day discharge',
                'Rapid return to normal activities',
            );
            foreach ($benefits as $b) : ?>
            <div class="benefit-card">✅ <?php echo esc_html($b); ?></div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Procedures -->
<section class="section bg-muted">
    <div class="container container-wide">
        <h2>Procedures & Services</h2>
        <div class="grid-2">
            <div class="card">
                <h3>Robotic Hernia Surgery</h3>
                <p>The gold standard for hernia repair — Da Vinci robotic assistance provides 3D visualization and precise mesh placement for inguinal, incisional, umbilical, hiatus, and complex hernias including abdominal wall reconstruction.</p>
            </div>
            <div class="card">
                <h3>Laparoscopic Hernia Surgery</h3>
                <p>A proven minimally invasive approach for hernia repair through small incisions, offering faster recovery than open surgery. Suitable for most hernia types.</p>
            </div>
            <div class="card">
                <h3>Abdominal Wall Reconstruction</h3>
                <p>Complex multi-defect, large, or recurrent hernias requiring advanced surgical expertise. Fellowship-trained approach using component separation and mesh reinforcement.</p>
            </div>
            <div class="card">
                <h3>Hiatus Hernia Repair</h3>
                <p>Repair of diaphragmatic hernias associated with esophageal reflux, often combined with fundoplication for acid reflux prevention.</p>
            </div>
        </div>
    </div>
</section>

<!-- CTA -->
<section class="section text-center">
    <div class="container container-narrow">
        <h2>Ready to Take the Next Step?</h2>
        <p>Book a consultation with Dr. Randeep Wadhawan to discuss your treatment options.</p>
        <a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-primary btn-lg">Book Consultation →</a>
    </div>
</section>

<!-- Appointment Form -->
<section class="section">
    <div class="container container-sm">
        <?php
        $drw_form_heading = 'Book Hernia Surgery Consultation';
        $drw_form_subheading = 'Discuss your hernia treatment options with Dr. Randeep Wadhawan.';
        get_template_part('template-parts/appointment-form');
        ?>
    </div>
</section>

<?php get_footer(); ?>
