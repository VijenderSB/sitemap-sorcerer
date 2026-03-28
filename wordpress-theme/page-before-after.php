<?php
/**
 * Template Name: Before After
 */
get_header();
?>

<section class="page-hero">
    <div class="container">
        <nav class="breadcrumb">Resources > Before & After</nav>
        <h1>Before & After Results — Delhi</h1>
        <p>Real transformations from our patients in Delhi NCR. Results may vary based on individual conditions.</p>
    </div>
</section>

<section class="section">
    <div class="container container-narrow">
        <div class="grid-2">
            <?php
            // ACF repeater or fallback
            if (function_exists('get_field') && have_rows('before_after_results')) :
                while (have_rows('before_after_results')) : the_row();
                    $before = get_sub_field('before_image');
                    $after = get_sub_field('after_image');
                    $name = get_sub_field('patient_label');
                    $detail = get_sub_field('detail');
            ?>
                <div class="card before-after-card">
                    <div class="ba-images">
                        <div class="ba-image"><img src="<?php echo esc_url($before); ?>" alt="Before" loading="lazy"><span>Before</span></div>
                        <div class="ba-image"><img src="<?php echo esc_url($after); ?>" alt="After" loading="lazy"><span>After</span></div>
                    </div>
                    <div class="card-body">
                        <p class="font-semibold"><?php echo esc_html($name); ?></p>
                        <p class="text-muted text-sm"><?php echo esc_html($detail); ?></p>
                    </div>
                </div>
            <?php
                endwhile;
            else :
                for ($i = 1; $i <= 4; $i++) :
            ?>
                <div class="card before-after-card">
                    <div class="ba-images">
                        <div class="ba-placeholder">Before</div>
                        <div class="ba-placeholder">After</div>
                    </div>
                    <div class="card-body">
                        <p class="font-semibold">Patient <?php echo $i; ?></p>
                        <p class="text-muted text-sm">Robotic Bariatric Surgery — Lost <?php echo 30 + $i * 10; ?> kgs</p>
                    </div>
                </div>
            <?php
                endfor;
            endif;
            ?>
        </div>
        <p class="text-center text-muted text-sm mt-md">Actual patient photos will be added with consent. Results vary based on individual conditions.</p>
    </div>
</section>

<?php get_footer(); ?>
