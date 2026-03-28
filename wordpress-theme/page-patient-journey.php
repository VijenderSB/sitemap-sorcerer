<?php
/**
 * Template Name: Patient Journey
 */
get_header();

$steps = array(
    array('icon' => '👤', 'title' => 'First Consultation', 'desc' => 'Meet Dr. Wadhawan for a thorough evaluation. Discuss your condition, medical history, and treatment options.'),
    array('icon' => '📋', 'title' => 'Pre-Surgery Preparation', 'desc' => 'Complete pre-operative tests and assessments. Receive personalized dietary and lifestyle guidance.'),
    array('icon' => '🩺', 'title' => 'Surgery Day', 'desc' => 'Arrive at the hospital as scheduled. The surgical team will guide you through the process. Most robotic procedures take 1–3 hours.'),
    array('icon' => '❤️', 'title' => 'Recovery & Follow-up', 'desc' => 'Most patients go home within 24–48 hours. Follow-up visits ensure optimal recovery. Long-term support provided.'),
);
?>

<section class="page-hero">
    <div class="container">
        <nav class="breadcrumb">Resources > Patient Journey</nav>
        <h1>Your Patient Journey — Delhi</h1>
        <p>What to expect from your first consultation through surgery to full recovery at Max Hospital, Dwarka.</p>
    </div>
</section>

<section class="section">
    <div class="container container-narrow">
        <div class="timeline">
            <?php foreach ($steps as $i => $step) : ?>
            <div class="timeline-item">
                <div class="timeline-icon"><?php echo $step['icon']; ?></div>
                <div class="timeline-content">
                    <span class="label-secondary">Step <?php echo $i + 1; ?></span>
                    <h3><?php echo esc_html($step['title']); ?></h3>
                    <p><?php echo esc_html($step['desc']); ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
        <div class="text-center mt-lg">
            <a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-primary btn-lg">Start Your Journey →</a>
        </div>
    </div>
</section>

<?php get_footer(); ?>
