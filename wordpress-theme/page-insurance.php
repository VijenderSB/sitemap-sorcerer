<?php
/**
 * Template Name: Insurance
 */
get_header();

$insurers = array('Star Health', 'HDFC Ergo', 'ICICI Lombard', 'New India Assurance', 'Max Bupa', 'Bajaj Allianz', 'United India', 'National Insurance', 'Niva Bupa');
?>

<section class="page-hero">
    <div class="container">
        <nav class="breadcrumb">Resources > Insurance & Cost</nav>
        <h1>Insurance & Cost — Surgery in Delhi</h1>
        <p>Transparent pricing and insurance support for your surgical journey at Max Hospital, Dwarka, Delhi.</p>
    </div>
</section>

<section class="section">
    <div class="container container-narrow">
        <div class="grid-3 mb-lg">
            <div class="card">
                <div class="card-icon">🛡️</div>
                <h3>Insurance Coverage</h3>
                <p>We work with all major insurance providers including HDFC Ergo, Star Health, ICICI Lombard, New India Assurance, and more.</p>
            </div>
            <div class="card">
                <div class="card-icon">📋</div>
                <h3>Claims Assistance</h3>
                <p>Our dedicated team handles insurance pre-authorization and claims processing to minimize your hassle.</p>
            </div>
            <div class="card">
                <div class="card-icon">💳</div>
                <h3>Payment Options</h3>
                <p>Multiple payment options including cash, cards, bank transfers, and EMI options through select partners.</p>
            </div>
        </div>

        <div class="card">
            <h2>Insurance Partners</h2>
            <div class="grid-3 mb-md">
                <?php foreach ($insurers as $ins) : ?>
                <div class="insurer-badge"><?php echo esc_html($ins); ?></div>
                <?php endforeach; ?>
            </div>
            <p class="text-muted text-sm">This is not an exhaustive list. Contact us to verify your specific insurance coverage.</p>
        </div>

        <div class="cta-buttons text-center mt-md">
            <a href="<?php echo home_url('/tools/cost-estimator'); ?>" class="btn btn-primary btn-lg">View Cost Estimates →</a>
            <a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-outline btn-lg">Verify Your Insurance</a>
        </div>
    </div>
</section>

<?php get_footer(); ?>
