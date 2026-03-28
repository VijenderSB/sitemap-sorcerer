<?php
/**
 * Template Name: Why Robotic Surgery
 */
get_header();

$reasons = array(
    array('icon' => '🎯', 'title' => 'High Precision', 'desc' => 'Sub-millimeter accuracy with 3D HD visualization and 10x magnification for unmatched surgical precision.'),
    array('icon' => '🔬', 'title' => 'Small Incisions', 'desc' => 'Tiny 8–12mm incisions mean minimal scarring, better cosmetic results, and faster wound healing.'),
    array('icon' => '❤️', 'title' => 'Less Pain', 'desc' => 'Smaller incisions and precise tissue handling lead to significantly less post-operative pain.'),
    array('icon' => '⏱️', 'title' => 'Faster Recovery', 'desc' => 'Most patients return home within 24–48 hours and resume normal activities within 1–2 weeks.'),
    array('icon' => '🛡️', 'title' => 'Fewer Complications', 'desc' => 'Reduced blood loss, lower infection rates, and fewer complications compared to open surgery.'),
    array('icon' => '⚡', 'title' => 'Superior Outcomes', 'desc' => 'Better surgical outcomes with lower recurrence rates and higher patient satisfaction.'),
);

$faqs = array(
    array('q' => 'What is robotic assisted surgery?', 'a' => 'Robotic assisted surgery is a minimally invasive technique where the surgeon operates using a robotic system that provides enhanced 3D vision, precision, and control through tiny incisions.'),
    array('q' => 'How does robotic surgery differ from laparoscopic surgery?', 'a' => 'Robotic surgery offers 360° wrist-like instrument movement, 3D HD visualization with 10x magnification, and tremor filtration — advantages not available in standard laparoscopic surgery.'),
    array('q' => 'Is robotic surgery safe?', 'a' => 'Yes. Robotic surgery is FDA-approved and used worldwide. It typically results in fewer complications, less blood loss, and faster recovery.'),
    array('q' => 'What are the benefits over open surgery?', 'a' => 'Smaller incisions, less pain, reduced blood loss, shorter hospital stays, faster recovery, and better cosmetic outcomes.'),
    array('q' => 'How long does robotic surgery take?', 'a' => 'Most robotic surgeries take 1–3 hours, similar to or slightly longer than laparoscopic surgery, but with superior precision.'),
    array('q' => 'What is the recovery time?', 'a' => 'Most patients are discharged within 24–48 hours and return to normal activities within 1–2 weeks.'),
    array('q' => 'Will there be scars?', 'a' => 'Robotic surgery uses tiny 8–12mm incisions, resulting in minimal scarring that fades over time.'),
    array('q' => 'Who is a candidate?', 'a' => 'Most patients who qualify for laparoscopic surgery are candidates. Dr. Wadhawan will assess your condition during consultation.'),
    array('q' => 'Does insurance cover it?', 'a' => 'Many insurance providers now cover robotic-assisted procedures. Our team can help verify your coverage.'),
    array('q' => 'What procedures can be done?', 'a' => 'Bariatric surgery, hernia repair, gallbladder removal, appendectomy, colon and rectal surgery, cancer surgery, and more.'),
    array('q' => 'Is it more expensive than laparoscopic?', 'a' => 'While initial cost may be slightly higher, the reduced complications and faster recovery often make it more cost-effective overall.'),
    array('q' => 'How experienced is Dr. Wadhawan?', 'a' => 'Dr. Wadhawan has 30+ years of surgical experience and has performed 60,000+ minimally invasive procedures.'),
);
?>

<section class="page-hero">
    <div class="container">
        <nav class="breadcrumb">Robotic Surgery > Why Robotic Surgery</nav>
        <h1>Why Choose Robotic Surgery in Delhi?</h1>
        <p>Discover why robotic-assisted surgery at Max Hospital, Dwarka is the gold standard in modern minimally invasive procedures.</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="grid-3">
            <?php foreach ($reasons as $r) : ?>
            <div class="card">
                <div class="card-icon"><?php echo $r['icon']; ?></div>
                <h3><?php echo esc_html($r['title']); ?></h3>
                <p class="text-muted"><?php echo esc_html($r['desc']); ?></p>
            </div>
            <?php endforeach; ?>
        </div>
        <div class="text-center mt-lg">
            <h2>Ready to Experience the Future of Surgery?</h2>
            <p class="text-muted">Schedule a consultation to discuss if robotic surgery is right for you.</p>
            <a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-primary btn-lg">Book Consultation →</a>
        </div>
    </div>
</section>

<!-- FAQs -->
<section class="section bg-muted">
    <div class="container container-narrow">
        <div class="text-center mb-lg">
            <span class="label-secondary">FAQ</span>
            <h2>Frequently Asked Questions About Robotic Surgery</h2>
        </div>
        <div class="accordion">
            <?php foreach ($faqs as $faq) : ?>
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
</section>

<?php get_footer(); ?>
