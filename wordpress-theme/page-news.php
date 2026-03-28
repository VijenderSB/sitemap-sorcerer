<?php
/**
 * Template Name: News
 */
get_header();

$news = array(
    array('title' => 'Dr. Wadhawan Performs 1000th Robotic Surgery', 'source' => 'Times of India', 'date' => 'March 2026'),
    array('title' => 'Interview: The Future of Robotic Surgery in India', 'source' => 'NDTV Health', 'date' => 'February 2026'),
    array('title' => 'Pioneer in Minimally Invasive GI Surgery Honored', 'source' => 'The Hindu', 'date' => 'January 2026'),
    array('title' => 'Robotic Bariatric Surgery: India\'s Growing Expertise', 'source' => 'India Today', 'date' => 'December 2025'),
    array('title' => 'Healthcare Leadership Award for Surgical Innovation', 'source' => 'Economic Times', 'date' => 'November 2025'),
);
?>

<section class="page-hero">
    <div class="container">
        <nav class="breadcrumb">Resources > News</nav>
        <h1>News & Media Coverage</h1>
        <p>Dr. Wadhawan in the press — latest media appearances and coverage from Delhi.</p>
    </div>
</section>

<section class="section">
    <div class="container container-narrow">
        <?php foreach ($news as $n) : ?>
        <div class="card card-horizontal">
            <div class="icon-circle">📰</div>
            <div>
                <h3><?php echo esc_html($n['title']); ?></h3>
                <p class="text-muted text-sm"><?php echo esc_html($n['source']); ?> • <?php echo esc_html($n['date']); ?></p>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</section>

<?php get_footer(); ?>
