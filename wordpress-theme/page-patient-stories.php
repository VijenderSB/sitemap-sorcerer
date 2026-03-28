<?php
/**
 * Template Name: Patient Stories
 */
get_header();
?>

<section class="page-hero">
    <div class="container">
        <nav class="breadcrumb">Resources > Patient Stories</nav>
        <h1>Patient Stories — Delhi</h1>
        <p>100+ real stories of transformation and healing from patients across Delhi NCR.</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <?php
        // ACF Repeater or custom post type
        if (function_exists('get_field') && have_rows('patient_stories')) :
            echo '<div class="grid-3">';
            while (have_rows('patient_stories')) : the_row();
                $name = get_sub_field('patient_name');
                $procedure = get_sub_field('procedure');
                $title = get_sub_field('story_title');
                $text = get_sub_field('story_text');
        ?>
                <div class="card testimonial-card">
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <span class="badge badge-primary"><?php echo esc_html($procedure); ?></span>
                    <h3><?php echo esc_html($title); ?></h3>
                    <p class="quote">"<?php echo esc_html($text); ?>"</p>
                    <p class="patient-name"><?php echo esc_html($name); ?></p>
                </div>
        <?php
            endwhile;
            echo '</div>';
        else :
            // Fallback: Custom Post Type loop
            $stories = new WP_Query(array(
                'post_type' => 'patient_story',
                'posts_per_page' => 12,
                'paged' => get_query_var('paged') ? get_query_var('paged') : 1,
            ));
            if ($stories->have_posts()) :
                echo '<div class="grid-3">';
                while ($stories->have_posts()) : $stories->the_post();
        ?>
                <div class="card testimonial-card">
                    <div class="stars">⭐⭐⭐⭐⭐</div>
                    <?php if ($proc = get_post_meta(get_the_ID(), 'procedure', true)) : ?>
                    <span class="badge badge-primary"><?php echo esc_html($proc); ?></span>
                    <?php endif; ?>
                    <h3><?php the_title(); ?></h3>
                    <p class="quote">"<?php echo esc_html(get_the_excerpt()); ?>"</p>
                    <p class="patient-name"><?php echo esc_html(get_post_meta(get_the_ID(), 'patient_name', true)); ?></p>
                </div>
        <?php
                endwhile;
                echo '</div>';
                echo '<div class="pagination">';
                echo paginate_links(array('total' => $stories->max_num_pages));
                echo '</div>';
                wp_reset_postdata();
            else :
                echo '<p class="text-center text-muted">Patient stories coming soon.</p>';
            endif;
        endif;
        ?>

        <div class="text-center mt-lg">
            <a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-primary btn-lg">Start Your Story →</a>
        </div>
    </div>
</section>

<?php get_footer(); ?>
