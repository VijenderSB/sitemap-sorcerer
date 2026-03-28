<?php
/**
 * Template Name: 404 Not Found
 */
get_header();
?>

<section class="section text-center" style="min-height: 60vh; display:flex; align-items:center; justify-content:center;">
    <div class="container">
        <h1 style="font-size: 6rem; font-weight: 800; opacity: 0.1;">404</h1>
        <h2>Page Not Found</h2>
        <p class="text-muted">The page you're looking for doesn't exist or has been moved.</p>
        <a href="<?php echo home_url('/'); ?>" class="btn btn-primary btn-lg mt-md">Return to Home</a>
    </div>
</section>

<?php get_footer(); ?>
