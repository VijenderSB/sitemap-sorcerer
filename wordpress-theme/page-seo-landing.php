<?php
/**
 * Template Name: SEO Landing Page
 * Generic template for keyword-targeted landing pages
 */
get_header();

$seo_pages = array(
    'robotic-surgeon-delhi' => array(
        'title' => 'Best Robotic Surgeon in Delhi',
        'subtitle' => 'Dr. Randeep Wadhawan — Delhi\'s top robotic surgeon with 60,000+ successful procedures at Max Hospital, Dwarka.',
        'overview' => 'Looking for the best robotic surgeon in Delhi? Dr. Randeep Wadhawan is a pioneer in robotic-assisted surgery with over 30 years of experience.',
    ),
    'robotic-bariatric-surgeon-delhi' => array(
        'title' => 'Best Robotic Bariatric Surgeon in Delhi',
        'subtitle' => 'Expert robotic weight loss surgery in Delhi with proven results and faster recovery.',
        'overview' => 'Dr. Randeep Wadhawan is recognized as one of Delhi\'s leading robotic bariatric surgeons.',
    ),
    'robotic-hernia-surgeon-delhi' => array(
        'title' => 'Best Robotic Hernia Surgeon in Delhi',
        'subtitle' => 'Advanced robotic hernia repair in Delhi — all hernia types treated with precision.',
        'overview' => 'For expert robotic hernia repair in Delhi, Dr. Randeep Wadhawan offers the most advanced surgical techniques.',
    ),
    'robotic-gi-surgeon-delhi' => array(
        'title' => 'Best Robotic GI Surgeon in Delhi',
        'subtitle' => 'Expert robotic gastrointestinal surgery in Delhi for complex abdominal conditions.',
        'overview' => 'Dr. Wadhawan is a leading robotic GI surgeon in Delhi.',
    ),
    'laparoscopic-surgeon-delhi' => array(
        'title' => 'Best Laparoscopic Surgeon in Delhi',
        'subtitle' => 'Expert laparoscopic surgery in Delhi for bariatric, hernia, and GI procedures.',
        'overview' => 'Dr. Randeep Wadhawan is among Delhi\'s most experienced laparoscopic surgeons.',
    ),
);

$slug = get_query_var('seo_slug', '');
$page = isset($seo_pages[$slug]) ? $seo_pages[$slug] : null;

if (!$page) {
    echo '<div class="container section text-center"><h1>Page not found</h1></div>';
    get_footer();
    return;
}

$benefits = array(
    '30+ years of surgical experience',
    '60,000+ successful procedures',
    'Da Vinci robotic surgical system at Max Hospital Dwarka',
    'Chairman — GI, Bariatric, Laparoscopic & Robotic Surgery',
    'Internationally trained — FACS(USA), FRCS(Edinburgh)',
    'Comprehensive pre and post-operative care in Delhi',
);
?>

<section class="page-hero">
    <div class="container">
        <h1><?php echo esc_html($page['title']); ?></h1>
        <p><?php echo esc_html($page['subtitle']); ?></p>
    </div>
</section>

<section class="section">
    <div class="container container-wide">
        <p class="text-lg"><?php echo esc_html($page['overview']); ?></p>
    </div>
</section>

<section class="section">
    <div class="container container-wide">
        <h2 class="text-center">Why Patients Choose Dr. Wadhawan</h2>
        <div class="grid-3">
            <?php foreach ($benefits as $b) : ?>
            <div class="benefit-card">✅ <?php echo esc_html($b); ?></div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<section class="section text-center">
    <div class="container">
        <h2>Ready to Take the Next Step?</h2>
        <p class="text-muted">Book a consultation with Dr. Randeep Wadhawan.</p>
        <a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-primary btn-lg">Book Free Consultation →</a>
    </div>
</section>

<!-- Appointment Form -->
<section class="section">
    <div class="container container-sm">
        <?php get_template_part('template-parts/appointment-form'); ?>
    </div>
</section>

<?php get_footer(); ?>
