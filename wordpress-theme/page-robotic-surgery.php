<?php
/**
 * Template Name: Robotic Surgery
 */
get_header();

$comparisons = array(
    array('feature' => 'Precision', 'robotic' => 'Sub-millimeter', 'laparoscopic' => 'Good', 'open' => 'Limited'),
    array('feature' => 'Incision Size', 'robotic' => '8–12mm ports', 'laparoscopic' => '5–12mm ports', 'open' => 'Large incision'),
    array('feature' => 'Blood Loss', 'robotic' => 'Minimal', 'laparoscopic' => 'Low', 'open' => 'Higher'),
    array('feature' => 'Recovery Time', 'robotic' => '1–2 weeks', 'laparoscopic' => '2–3 weeks', 'open' => '4–8 weeks'),
    array('feature' => 'Hospital Stay', 'robotic' => '1–2 days', 'laparoscopic' => '2–3 days', 'open' => '5–7 days'),
    array('feature' => 'Scarring', 'robotic' => 'Minimal', 'laparoscopic' => 'Small scars', 'open' => 'Significant'),
    array('feature' => '3D Vision', 'robotic' => 'Yes — HD', 'laparoscopic' => '2D standard', 'open' => 'Direct'),
    array('feature' => 'Wrist Movement', 'robotic' => '360° rotation', 'laparoscopic' => 'Limited', 'open' => 'Full'),
);

$benefits = array(
    'Enhanced 3D visualization with 10x magnification',
    '360° wrist-like movement of instruments',
    'Tremor filtration for steady precision',
    'Smaller incisions with faster healing',
    'Reduced risk of infection and complications',
    'Shorter hospital stays',
    'Less post-operative pain and scarring',
    'Faster return to normal activities',
);

$candidates = array(
    'Patients requiring GI surgery (hernia, gallbladder, colon, rectal, cancer)',
    'Obese patients eligible for bariatric/weight loss surgery',
    'Patients with complex abdominal conditions',
    'Patients who have had previous abdominal surgeries',
    'Patients seeking faster recovery with minimal scarring',
    'Cases requiring high-precision surgery in tight spaces',
);
?>

<section class="page-hero">
    <div class="container">
        <h1>Robotic Assisted Surgery in Delhi</h1>
        <p>Delhi's most advanced robotic surgery — precision, safety, and faster recovery at Max Hospital, Dwarka.</p>
    </div>
</section>

<!-- What is Robotic Surgery -->
<section class="section">
    <div class="container">
        <div class="grid-2 items-center">
            <div>
                <h2>What is Robotic Surgery?</h2>
                <p>Robotic surgery is a type of minimally invasive surgery where the surgeon controls a sophisticated robotic system from a console. The robot's arms hold tiny instruments and a 3D high-definition camera, translating the surgeon's hand movements into precise micro-movements inside the body.</p>
                <p>Unlike traditional surgery, the robotic system provides enhanced dexterity, tremor filtration, and 10x magnification — enabling procedures that were previously impossible through small incisions.</p>

                <h3>Benefits of Robotic Surgery</h3>
                <ul class="check-list">
                    <?php foreach ($benefits as $b) : ?>
                    <li>✓ <?php echo esc_html($b); ?></li>
                    <?php endforeach; ?>
                </ul>
                <a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-primary">Book Consultation →</a>
            </div>
            <img src="<?php echo get_template_directory_uri(); ?>/images/robotic-surgery.jpg" alt="Robotic surgery system" class="rounded-image shadow-lg" loading="lazy" width="1280" height="864">
        </div>
    </div>
</section>

<!-- Comparison Table -->
<section class="section bg-muted">
    <div class="container">
        <h2 class="text-center">Robotic vs Laparoscopic vs Open Surgery</h2>
        <p class="text-center text-muted">See how robotic surgery compares with traditional approaches across key parameters.</p>
        <div class="table-responsive">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th class="highlight">🤖 Robotic</th>
                        <th>✂️ Laparoscopic</th>
                        <th>🩺 Open</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($comparisons as $row) : ?>
                    <tr>
                        <td><strong><?php echo esc_html($row['feature']); ?></strong></td>
                        <td class="highlight"><?php echo esc_html($row['robotic']); ?></td>
                        <td><?php echo esc_html($row['laparoscopic']); ?></td>
                        <td><?php echo esc_html($row['open']); ?></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
</section>

<!-- Candidates -->
<section class="section">
    <div class="container container-narrow">
        <h2>Who is a Candidate for Robotic Surgery?</h2>
        <p>Robotic surgery is suitable for a wide range of patients and conditions. During your consultation, Dr. Wadhawan will assess your condition and recommend the most appropriate surgical approach.</p>
        <div class="grid-2">
            <?php foreach ($candidates as $c) : ?>
            <div class="check-item">✅ <?php echo esc_html($c); ?></div>
            <?php endforeach; ?>
        </div>
        <div class="text-center mt-lg">
            <a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-primary btn-lg">Check Your Eligibility →</a>
        </div>
    </div>
</section>

<!-- Appointment Form -->
<section class="section">
    <div class="container container-sm">
        <?php
        $drw_form_heading = 'Book Your Robotic Surgery Consultation';
        $drw_form_subheading = 'Discuss your treatment options with Dr. Randeep Wadhawan.';
        get_template_part('template-parts/appointment-form');
        ?>
    </div>
</section>

<?php get_footer(); ?>
