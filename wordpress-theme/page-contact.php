<?php
/**
 * Template Name: Contact Page
 */
get_header();
?>

<!-- Hero -->
<section class="hero-gradient">
    <div class="container text-center">
        <h1>Contact Us in Delhi</h1>
        <p>Book a consultation or get a second opinion from Dr. Randeep Wadhawan at Max Hospital, Dwarka, New Delhi.</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="grid-2">
            <!-- Left - Contact Info -->
            <div>
                <h2>Dr. Randeep Wadhawan</h2>
                <p class="text-primary font-semibold">MBBS, MS, FICS, FALS, FMBS, FACS(USA), FRCS(Ed)</p>
                <p class="text-muted">Chairman – Gastrointestinal, Bariatric, Laparoscopic, and Robotic Surgery<br>
                Max Super Speciality Hospital Dwarka<br>(A Unit of Muthoot Hospitals Pvt Ltd.)</p>

                <div class="contact-cards">
                    <a href="tel:+917042373880" class="contact-card">
                        <div class="contact-icon">📞</div>
                        <div><p class="label">Mobile</p><p class="value">+91 7042373880</p></div>
                    </a>
                    <a href="mailto:randeepwadhawan@yahoo.com" class="contact-card">
                        <div class="contact-icon">✉️</div>
                        <div><p class="label">Email</p><p class="value">randeepwadhawan@yahoo.com</p></div>
                    </a>
                    <div class="contact-card">
                        <div class="contact-icon">📍</div>
                        <div><p class="label">Location</p><p class="value">Plot No. 1, Sector 10, Dwarka, New Delhi – 110075</p></div>
                    </div>
                    <div class="contact-card">
                        <div class="contact-icon">🕐</div>
                        <div><p class="label">Timings</p><p class="value">10:00 AM to 6:00 PM</p></div>
                    </div>
                </div>

                <a href="https://wa.me/919810155826" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">💬 Chat on WhatsApp</a>

                <!-- Google Map -->
                <div class="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5!2d77.0367!3d28.5823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b2e6f2a3b7d%3A0x6b3b3b3b3b3b3b3b!2sMax+Super+Speciality+Hospital%2C+Dwarka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="280" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Max Super Speciality Hospital, Dwarka Location"></iframe>
                </div>
            </div>

            <!-- Right - Form -->
            <div class="card card-form shadow-lg">
                <h3>Book a Consultation</h3>
                <?php echo do_shortcode('[contact-form-7 id="contact-form" title="Contact Form"]'); ?>
                <?php /* Fallback form if CF7 not installed */ ?>
                <noscript>
                <form method="post" action="<?php echo admin_url('admin-post.php'); ?>">
                    <input type="hidden" name="action" value="drw_contact_form">
                    <?php wp_nonce_field('drw_contact', 'drw_nonce'); ?>
                    <input type="text" name="fullname" placeholder="Full Name" required maxlength="100">
                    <input type="tel" name="phone" placeholder="Phone Number" required maxlength="20">
                    <input type="text" name="procedure" placeholder="Procedure of Interest" maxlength="200">
                    <input type="text" name="country" placeholder="Country" maxlength="100">
                    <textarea name="message" placeholder="Your Message" rows="4" maxlength="1000"></textarea>
                    <button type="submit" class="btn btn-primary btn-full">✉️ Send Message</button>
                </form>
                </noscript>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
