<?php
/**
 * Template Name: City Landing Page
 * Used dynamically for /best-surgeon/{city-slug}
 */
get_header();

require_once get_template_directory() . '/inc/city-data.php';

$city_slug = get_query_var('city_slug', '');
$city = null;
foreach ($drw_cities as $c) {
    if ($c['slug'] === $city_slug) { $city = $c; break; }
}

if (!$city) {
    echo '<div class="container section text-center"><h1>City not found</h1><a href="' . home_url('/') . '">Go to Home</a></div>';
    get_footer();
    return;
}

$is_ncr = in_array($city['slug'], array('gurgaon', 'noida', 'ghaziabad', 'faridabad', 'greater-noida'));

$services = array(
    array('title' => 'Robotic Bariatric Surgery', 'desc' => 'Da Vinci robotic-assisted weight loss surgery — Sleeve Gastrectomy, Gastric Bypass, Mini Gastric Bypass, Revision Surgery', 'href' => '/robotic-bariatric-surgery', 'icon' => '🤖'),
    array('title' => 'Robotic GI Surgery', 'desc' => 'Gallbladder, appendix, hernia repair, and colon surgery with robotic precision', 'href' => '/robotic-gi-surgery', 'icon' => '🔬'),
    array('title' => 'Robotic Advanced GI Surgery', 'desc' => 'Complex liver, pancreatic (Whipple), splenectomy, and esophageal procedures', 'href' => '/robotic-advanced-gi-surgery', 'icon' => '⚕️'),
    array('title' => 'Laparoscopic Bariatric Surgery', 'desc' => 'Proven keyhole weight loss procedures — Sleeve, Bypass, OAGB, Gastric Banding', 'href' => '/laparoscopic-surgery/bariatric', 'icon' => '💪'),
    array('title' => 'Laparoscopic GI Surgery', 'desc' => 'Minimally invasive hernia, gallbladder, appendix, and colorectal surgery', 'href' => '/laparoscopic-surgery/gi', 'icon' => '🩺'),
    array('title' => 'Hernia Surgery', 'desc' => 'All types — inguinal, umbilical, incisional, hiatus, complex abdominal wall reconstruction', 'href' => '/hernia-surgery', 'icon' => '🛡️'),
);

$why_choose = array(
    '30+ years of surgical excellence',
    '60,000+ successful procedures',
    'Da Vinci robotic surgical system',
    'FACS(USA), FRCS(Edinburgh) certified',
    'Faster recovery — home in 24–48 hours',
    'Centre of Excellence accredited by OSSI',
);
?>

<!-- Hero -->
<section class="hero-city">
    <div class="container">
        <div class="grid-2 items-center">
            <div>
                <div class="city-label">📍 Serving patients from <?php echo esc_html($city['name']); ?>, <?php echo esc_html($city['state']); ?></div>
                <h1>Best Robotic & Laparoscopic Surgeon for <span class="text-primary"><?php echo esc_html($city['name']); ?></span> Patients</h1>
                <p>
                    <?php if ($is_ncr) : ?>
                    As a neighbouring city to Delhi, <?php echo esc_html($city['name']); ?> patients can easily access Dr. Randeep Wadhawan's world-class robotic surgery expertise at Max Super Speciality Hospital, Dwarka.
                    <?php else : ?>
                    Patients from <?php echo esc_html($city['name']); ?> trust Dr. Randeep Wadhawan for advanced robotic and laparoscopic surgery at Max Super Speciality Hospital, Dwarka, New Delhi. With 60,000+ successful procedures and 30+ years of experience.
                    <?php endif; ?>
                </p>
                <div class="cta-buttons">
                    <a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-primary btn-lg">Book Consultation →</a>
                    <a href="tel:+917042373880" class="btn btn-outline btn-lg">📞 Call +91 7042373880</a>
                </div>
            </div>
            <div class="doctor-image-wrapper">
                <img src="<?php echo get_template_directory_uri(); ?>/images/doctor-portrait.jpg" alt="Dr. Randeep Wadhawan — Best Robotic Surgeon in Delhi" class="rounded-image shadow-lg" loading="lazy">
                <div class="floating-badge">
                    <div class="badge-number">60,000+</div>
                    <div class="badge-text">Successful Surgeries</div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Why Choose -->
<section class="section">
    <div class="container">
        <h2 class="text-center">Why <?php echo esc_html($city['name']); ?> Patients Choose Dr. Wadhawan</h2>
        <div class="grid-3">
            <?php foreach ($why_choose as $item) : ?>
            <div class="card card-horizontal"><span class="text-primary">✓</span> <strong><?php echo esc_html($item); ?></strong></div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Robotic Surgery Banner -->
<section class="section">
    <div class="container">
        <div class="image-banner">
            <img src="<?php echo get_template_directory_uri(); ?>/images/surgery-robotic-bariatric.jpg" alt="Robotic Surgery for <?php echo esc_html($city['name']); ?> patients" class="banner-image" loading="lazy">
            <div class="banner-overlay">
                <h2>Robotic Surgery — The Future of Precision Care</h2>
                <p>Da Vinci robotic system offers 3D HD visualization, 360° wrist articulation, and sub-millimeter precision.</p>
                <a href="<?php echo home_url('/robotic-surgery'); ?>" class="btn btn-secondary btn-lg">Explore Robotic Surgery</a>
            </div>
        </div>
    </div>
</section>

<!-- Services -->
<section class="section bg-muted">
    <div class="container">
        <h2 class="text-center">Surgical Services Available for <?php echo esc_html($city['name']); ?> Patients</h2>
        <p class="text-center text-muted">All procedures performed at Max Super Speciality Hospital, Dwarka, New Delhi.</p>
        <div class="grid-3">
            <?php foreach ($services as $s) : ?>
            <a href="<?php echo home_url($s['href']); ?>" class="card card-link">
                <div class="card-icon-lg"><?php echo $s['icon']; ?></div>
                <h3><?php echo esc_html($s['title']); ?></h3>
                <p class="text-muted"><?php echo esc_html($s['desc']); ?></p>
                <span class="text-primary font-semibold">Learn More →</span>
            </a>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php if (!$is_ncr) : ?>
<!-- Travel Info -->
<section class="section">
    <div class="container container-narrow">
        <h2 class="text-center">Traveling from <?php echo esc_html($city['name']); ?> to Delhi for Surgery?</h2>
        <div class="grid-2">
            <div class="card"><h3>📞 Tele-Consultation First</h3><p>Get an initial online consultation from <?php echo esc_html($city['name']); ?> before traveling.</p></div>
            <div class="card"><h3>🏥 World-Class Facility</h3><p>Max Hospital equipped with latest Da Vinci robotic system, advanced ICU, and dedicated bariatric suites.</p></div>
            <div class="card"><h3>🏨 Stay Assistance</h3><p>We help arrange nearby accommodation for patients and attendants traveling from outside Delhi.</p></div>
            <div class="card"><h3>🚗 Pick-Up Service</h3><p>Airport and railway station pick-up can be arranged. Well connected via Delhi Metro.</p></div>
        </div>
    </div>
</section>
<?php endif; ?>

<!-- FAQs -->
<section class="section bg-muted">
    <div class="container container-narrow">
        <h2 class="text-center">FAQs for <?php echo esc_html($city['name']); ?> Patients</h2>
        <div class="accordion">
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('open')">Who is the best robotic surgeon near <?php echo esc_html($city['name']); ?>?<span class="accordion-icon">+</span></button>
                <div class="accordion-content"><p>Dr. Randeep Wadhawan at Max Super Speciality Hospital, Dwarka, New Delhi is widely considered the best robotic surgeon accessible from <?php echo esc_html($city['name']); ?>. With 60,000+ procedures and 30+ years of experience.</p></div>
            </div>
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('open')">How can patients from <?php echo esc_html($city['name']); ?> book an appointment?<span class="accordion-icon">+</span></button>
                <div class="accordion-content"><p>Patients from <?php echo esc_html($city['name']); ?> can book a consultation by calling +91 7042373880 or via the online booking form. Tele-consultations are also available.</p></div>
            </div>
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('open')">What is the cost of robotic surgery for patients from <?php echo esc_html($city['name']); ?>?<span class="accordion-icon">+</span></button>
                <div class="accordion-content"><p>The cost varies by procedure. Robotic bariatric surgery typically ranges ₹3–6 lakhs, while robotic hernia repair ranges ₹1.5–3 lakhs. Insurance and cashless options available.</p></div>
            </div>
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('open')">Is there accommodation support for patients traveling from <?php echo esc_html($city['name']); ?>?<span class="accordion-icon">+</span></button>
                <div class="accordion-content"><p>Yes, Max Hospital Dwarka assists out-of-city patients with nearby accommodation options, airport/railway station pick-up, and a dedicated patient coordinator.</p></div>
            </div>
        </div>
    </div>
</section>

<!-- CTA -->
<section class="section hero-gradient text-center">
    <div class="container">
        <h2 class="text-white">Ready to Consult from <?php echo esc_html($city['name']); ?>?</h2>
        <p class="text-white-70">Call us or book online. Tele-consultation available for initial assessment.</p>
        <div class="cta-buttons">
            <a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-secondary btn-lg">Book Appointment</a>
            <a href="tel:+917042373880" class="btn btn-outline-white btn-lg">Call +91 7042373880</a>
        </div>
    </div>
</section>

<?php get_footer(); ?>
