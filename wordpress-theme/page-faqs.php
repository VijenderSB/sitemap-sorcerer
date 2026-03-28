<?php
/**
 * Template Name: FAQs
 */
get_header();

$faq_categories = array(
    array('title' => 'Robotic Surgery', 'faqs' => array(
        array('q' => 'What is robotic surgery?', 'a' => 'Robotic surgery uses a computer-controlled robotic system operated by the surgeon from a console. The robot\'s arms hold tiny instruments and a 3D HD camera, providing enhanced precision and control.'),
        array('q' => 'Is robotic surgery safe?', 'a' => 'Yes. Robotic surgery is FDA-approved and used worldwide. Studies show it often results in fewer complications, less blood loss, and faster recovery.'),
        array('q' => 'How long does robotic surgery take?', 'a' => 'Most robotic procedures take 1–3 hours, depending on the complexity. You\'ll be under general anesthesia throughout.'),
        array('q' => 'Will there be scars?', 'a' => 'Robotic surgery uses tiny 8–12mm incisions, resulting in minimal scarring that fades significantly over time.'),
    )),
    array('title' => 'Bariatric Surgery', 'faqs' => array(
        array('q' => 'Who qualifies for bariatric surgery?', 'a' => 'Generally, patients with BMI ≥ 35 with comorbidities or BMI ≥ 40. Individual assessment determines candidacy.'),
        array('q' => 'How much weight will I lose?', 'a' => 'Most patients lose 60–80% of their excess weight within 12–18 months after surgery.'),
        array('q' => 'Is the weight loss permanent?', 'a' => 'With proper lifestyle changes and follow-up care, the majority maintain significant weight loss long-term.'),
        array('q' => 'What is the recovery time?', 'a' => 'Most patients go home within 24–48 hours and return to work within 1–2 weeks.'),
    )),
    array('title' => 'General Questions', 'faqs' => array(
        array('q' => 'Does insurance cover these surgeries?', 'a' => 'Many insurance providers now cover bariatric and robotic surgeries. Our team can help verify your coverage.'),
        array('q' => 'How do I book a consultation?', 'a' => 'Book online through our website, call +91 7042373880, or reach us on WhatsApp.'),
        array('q' => 'What should I bring to my first consultation?', 'a' => 'Bring your medical records, current medications list, previous test reports, and any insurance documents.'),
        array('q' => 'Do you offer second opinions?', 'a' => 'Yes, Dr. Wadhawan provides second opinions for patients who have been advised surgery elsewhere.'),
    )),
);
?>

<section class="page-hero">
    <div class="container">
        <nav class="breadcrumb">Resources > FAQs</nav>
        <h1>Frequently Asked Questions — Surgery in Delhi</h1>
        <p>Find answers to common questions about robotic surgery, bariatric procedures, and patient care at Max Hospital, Dwarka, Delhi.</p>
    </div>
</section>

<section class="section">
    <div class="container container-narrow">
        <?php foreach ($faq_categories as $cat) : ?>
        <div class="faq-category">
            <h2><?php echo esc_html($cat['title']); ?></h2>
            <div class="accordion">
                <?php foreach ($cat['faqs'] as $faq) : ?>
                <div class="accordion-item">
                    <button class="accordion-trigger" onclick="this.parentElement.classList.toggle('open')">
                        <?php echo esc_html($faq['q']); ?>
                        <span class="accordion-icon">+</span>
                    </button>
                    <div class="accordion-content">
                        <p><?php echo esc_html($faq['a']); ?></p>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
</section>

<!-- Appointment Form -->
<section class="section">
    <div class="container container-sm">
        <?php
        $drw_form_heading = 'Still Have Questions? Book a Consultation';
        $drw_form_subheading = 'Get answers directly from Dr. Randeep Wadhawan.';
        get_template_part('template-parts/appointment-form');
        ?>
    </div>
</section>

<?php get_footer(); ?>
