<?php
/**
 * Template Name: Videos
 */
get_header();

$videos = array(
    array('id' => 'LOa9oeapp3c', 'title' => 'Robotic Surgery Insights'),
    array('id' => 'L6JqkKPTQrg', 'title' => 'Advanced Bariatric Procedures'),
    array('id' => 'wPzV4yzGfx8', 'title' => 'Patient Success Stories'),
    array('id' => 'BXHfdb9k1P0', 'title' => 'Minimally Invasive Techniques'),
    array('id' => 'AXH6wSzJ_2Y', 'title' => 'GI Surgery Excellence'),
);
?>

<section class="page-hero">
    <div class="container">
        <nav class="breadcrumb">Resources > Videos</nav>
        <h1>Video Library</h1>
        <p>Educational videos on robotic surgery, patient experiences, and surgical techniques by Dr. Wadhawan at Max Hospital, Delhi.</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="grid-3">
            <?php foreach ($videos as $v) : ?>
            <div class="card video-card">
                <div class="video-wrapper">
                    <iframe src="https://www.youtube.com/embed/<?php echo esc_attr($v['id']); ?>" title="<?php echo esc_attr($v['title']); ?>" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
                </div>
                <div class="card-body">
                    <h3><?php echo esc_html($v['title']); ?></h3>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
        <div class="text-center mt-lg">
            <a href="https://www.youtube.com/@randeepwadhawan7610/videos" target="_blank" rel="noopener noreferrer" class="text-primary font-semibold">View All Videos on YouTube →</a>
        </div>
    </div>
</section>

<?php get_footer(); ?>
