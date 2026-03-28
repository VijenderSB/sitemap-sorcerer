<?php
/**
 * Template Name: Cities We Serve
 */
get_header();

// Include city data
require_once get_template_directory() . '/inc/city-data.php';

$tiers = array(
    1 => 'Metro & NCR Cities',
    2 => 'Tier 2 Cities',
    3 => 'Tier 3 Cities',
);
?>

<section class="page-hero">
    <div class="container">
        <h1>Cities We Serve</h1>
        <p>Patients from across India trust Dr. Randeep Wadhawan for robotic & laparoscopic surgery at Max Super Speciality Hospital, Dwarka, New Delhi</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <?php foreach ($tiers as $tier => $label) :
            $tier_cities = array_filter($drw_cities, function($c) use ($tier) { return $c['tier'] === $tier; });
            // Group by state
            $by_state = array();
            foreach ($tier_cities as $c) {
                $by_state[$c['state']][] = $c;
            }
            ksort($by_state);
        ?>
        <div class="city-tier mb-lg">
            <h2>📍 <?php echo esc_html($label); ?></h2>
            <div class="grid-3">
                <?php foreach ($by_state as $state => $state_cities) : ?>
                <div class="card">
                    <h3><?php echo esc_html($state); ?></h3>
                    <div class="city-pills">
                        <?php foreach ($state_cities as $c) : ?>
                        <a href="<?php echo home_url('/best-surgeon/' . $c['slug']); ?>" class="city-pill"><?php echo esc_html($c['name']); ?></a>
                        <?php endforeach; ?>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</section>

<?php get_footer(); ?>
