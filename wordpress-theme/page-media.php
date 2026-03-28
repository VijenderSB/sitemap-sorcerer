<?php
/**
 * Template Name: Media Hub
 */
get_header();

$sections = array(
    array('icon' => '📖', 'title' => 'Blogs', 'desc' => 'Expert articles on robotic surgery, bariatric procedures, hernia treatment, and GI health.', 'href' => '/media/blogs', 'count' => '50+ Articles'),
    array('icon' => '🎬', 'title' => 'Videos', 'desc' => 'Watch procedure explanations, surgical demonstrations, and educational content.', 'href' => '/media/videos', 'count' => '30+ Videos'),
    array('icon' => '👥', 'title' => 'Patient Stories', 'desc' => 'Inspiring stories from patients who transformed their lives through surgery.', 'href' => '/media/patient-stories', 'count' => '100+ Stories'),
    array('icon' => '📰', 'title' => 'News & Media', 'desc' => 'Dr. Wadhawan in the news — media appearances, interviews, and press coverage.', 'href' => '/media/news', 'count' => 'Latest Coverage'),
);
?>

<section class="page-hero">
    <div class="container">
        <h1>Media & Education</h1>
        <p>Stay informed with the latest insights on robotic surgery, patient health, and medical advances from Delhi.</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="grid-2">
            <?php foreach ($sections as $s) : ?>
            <a href="<?php echo home_url($s['href']); ?>" class="card card-link">
                <div class="card-header-row">
                    <span class="card-icon-lg"><?php echo $s['icon']; ?></span>
                    <span class="badge badge-secondary"><?php echo esc_html($s['count']); ?></span>
                </div>
                <h3><?php echo esc_html($s['title']); ?></h3>
                <p class="text-muted"><?php echo esc_html($s['desc']); ?></p>
                <span class="text-primary font-semibold">Explore →</span>
            </a>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php get_footer(); ?>
