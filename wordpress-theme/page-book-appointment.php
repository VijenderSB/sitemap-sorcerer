<?php
/**
 * Template Name: Book Appointment
 */
get_header();
?>

<section class="page-hero">
    <div class="container">
        <h1>Book Your Appointment in Delhi</h1>
        <p>Schedule a consultation with Dr. Randeep Wadhawan at Max Super Speciality Hospital, Dwarka, New Delhi.</p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="grid-2">
            <!-- Quick Actions -->
            <div>
                <h2>Quick Appointment</h2>
                <p class="text-muted">Choose your preferred way to connect with us.</p>

                <div class="quick-actions">
                    <a href="tel:+917042373880" class="action-card">
                        <div class="action-icon">📞</div>
                        <div><p class="action-title">Call Now</p><p class="action-desc">+91 7042373880</p></div>
                        <span class="arrow">→</span>
                    </a>
                    <a href="https://wa.me/919810155826" target="_blank" rel="noopener noreferrer" class="action-card">
                        <div class="action-icon action-icon-green">💬</div>
                        <div><p class="action-title">WhatsApp</p><p class="action-desc">Quick response on WhatsApp</p></div>
                        <span class="arrow">→</span>
                    </a>
                    <a href="mailto:randeepwadhawan@yahoo.com" class="action-card">
                        <div class="action-icon">✉️</div>
                        <div><p class="action-title">Email</p><p class="action-desc">randeepwadhawan@yahoo.com</p></div>
                        <span class="arrow">→</span>
                    </a>
                </div>

                <div class="info-box">
                    <h3>🕐 Consultation Hours</h3>
                    <p>Monday – Saturday: 10:00 AM – 6:00 PM</p>
                    <p>📍 Max Super Speciality Hospital, Plot No. 1, Sector 10, Dwarka, New Delhi – 110075</p>
                </div>
            </div>

            <!-- Booking Form -->
            <div class="card card-form shadow-lg">
                <h3>📅 Online Booking Form</h3>
                <p class="text-muted">Fill in your details and we'll confirm your appointment.</p>
                <?php echo do_shortcode('[contact-form-7 id="booking-form" title="Booking Form"]'); ?>
                <noscript>
                <form method="post" action="<?php echo admin_url('admin-post.php'); ?>">
                    <input type="hidden" name="action" value="drw_booking_form">
                    <?php wp_nonce_field('drw_booking', 'drw_nonce'); ?>
                    <input type="text" name="fullname" placeholder="Full Name *" required>
                    <input type="email" name="email" placeholder="Email Address *" required>
                    <input type="tel" name="phone" placeholder="Phone Number *" required>
                    <input type="date" name="preferred_date" placeholder="Preferred Date">
                    <select name="procedure">
                        <option value="">Select Procedure of Interest</option>
                        <option>Robotic Bariatric Surgery</option>
                        <option>Robotic GI Surgery</option>
                        <option>Robotic Hernia Surgery</option>
                        <option>Laparoscopic Surgery</option>
                        <option>Weight Loss Surgery</option>
                        <option>Second Opinion</option>
                        <option>Other</option>
                    </select>
                    <textarea name="message" placeholder="Additional Message" rows="4"></textarea>
                    <button type="submit" class="btn btn-primary btn-full btn-lg">✉️ Request Appointment</button>
                    <p class="text-center text-xs text-muted">Your information is secure and will only be used to schedule your appointment.</p>
                </form>
                </noscript>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>
