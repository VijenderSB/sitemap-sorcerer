<?php
/**
 * Template Name: Testimonials
 */
get_header();

$testimonials = array(
    array('name' => 'Rajesh Kumar', 'procedure' => 'Robotic Sleeve Gastrectomy', 'text' => 'Dr. Wadhawan\'s robotic surgery changed my life. I lost 40 kgs and the recovery was incredibly fast.'),
    array('name' => 'Priya Sharma', 'procedure' => 'Robotic Hernia Repair', 'text' => 'I was scared of surgery, but Dr. Wadhawan explained every step. The robotic precision meant minimal pain.'),
    array('name' => 'Amit Patel', 'procedure' => 'Robotic Gallbladder Surgery', 'text' => 'After years of digestive issues, the robotic cholecystectomy gave me a new lease on life.'),
    array('name' => 'Sunita Gupta', 'procedure' => 'Robotic Gastric Bypass', 'text' => 'At 120 kgs, life was difficult. I\'ve lost 55 kgs and my diabetes is in complete remission!'),
    array('name' => 'Vikram Singh', 'procedure' => 'Robotic Colon Surgery', 'text' => 'My colon surgery was done robotically. The precision was remarkable — minimal blood loss.'),
    array('name' => 'Meera Devi', 'procedure' => 'Laparoscopic Bariatric Surgery', 'text' => 'I came from a small town for Dr. Wadhawan\'s expertise. The care was exceptional. 35 kgs down!'),
);
?>

<section class="page-hero">
    <div class="container">
        <nav class="breadcrumb">Resources > Testimonials</nav>
        <h1>Patient Testimonials — Delhi</h1>
        <p>Hear from patients across Delhi NCR whose lives have been transformed by Dr. Wadhawan's surgical expertise.</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="grid-3">
            <?php foreach ($testimonials as $t) : ?>
            <div class="card testimonial-card">
                <div class="quote-icon">❝</div>
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <p class="quote">"<?php echo esc_html($t['text']); ?>"</p>
                <p class="patient-name"><?php echo esc_html($t['name']); ?></p>
                <p class="text-muted text-sm"><?php echo esc_html($t['procedure']); ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php get_footer(); ?>
