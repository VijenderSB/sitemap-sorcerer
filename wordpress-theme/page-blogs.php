<?php
/**
 * Template Name: Blogs
 */
get_header();
?>

<section class="page-hero">
    <div class="container">
        <nav class="breadcrumb">Resources > Blogs</nav>
        <h1>Blogs & Articles</h1>
        <p>Expert insights on robotic surgery, bariatric care, and surgical innovation from Dr. Wadhawan in Delhi.</p>
    </div>
</section>

<section class="section">
    <div class="container container-narrow">
        <?php
        $paged = get_query_var('paged') ? get_query_var('paged') : 1;
        $blog_query = new WP_Query(array(
            'post_type' => 'post',
            'posts_per_page' => 10,
            'paged' => $paged,
        ));

        if ($blog_query->have_posts()) :
            while ($blog_query->have_posts()) : $blog_query->the_post();
        ?>
            <article class="card blog-card">
                <div class="blog-meta">
                    <?php
                    $cats = get_the_category();
                    if ($cats) : ?>
                    <span class="badge badge-secondary"><?php echo esc_html($cats[0]->name); ?></span>
                    <?php endif; ?>
                    <span class="text-muted text-sm"><?php echo get_the_date(); ?></span>
                </div>
                <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                <p class="text-muted"><?php echo wp_trim_words(get_the_excerpt(), 30); ?></p>
                <a href="<?php the_permalink(); ?>" class="text-primary font-semibold">Read More →</a>
            </article>
        <?php
            endwhile;
            echo '<div class="pagination">';
            echo paginate_links(array('total' => $blog_query->max_num_pages));
            echo '</div>';
            wp_reset_postdata();
        else :
            echo '<p class="text-center text-muted">No blog posts yet. Check back soon!</p>';
        endif;
        ?>
    </div>
</section>

<?php get_footer(); ?>
