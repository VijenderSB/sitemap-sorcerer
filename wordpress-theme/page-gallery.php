<?php
/**
 * Template Name: Gallery
 */
get_header();
?>

<section class="page-hero">
    <div class="container">
        <nav class="breadcrumb">About > Gallery</nav>
        <h1>Gallery</h1>
        <p>A visual journey through Dr. Wadhawan's surgical career and achievements in Delhi.</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <?php
        if (function_exists('get_field') && $gallery = get_field('gallery_images')) :
            echo '<div class="gallery-grid">';
            foreach ($gallery as $img) :
                echo '<div class="gallery-item">';
                echo '<img src="' . esc_url($img['url']) . '" alt="' . esc_attr($img['alt']) . '" loading="lazy">';
                echo '</div>';
            endforeach;
            echo '</div>';
        else :
        ?>
            <p class="text-center text-muted">Gallery images coming soon.</p>
        <?php endif; ?>
    </div>
</section>

<?php get_footer(); ?>
