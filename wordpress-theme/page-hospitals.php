<?php
/**
 * Template Name: Hospital
 */
get_header();
?>

<section class="page-hero">
    <div class="container">
        <h1>Hospital & Location — Delhi</h1>
        <p>Dr. Wadhawan consults and operates at Max Super Speciality Hospital, Dwarka, New Delhi.</p>
    </div>
</section>

<section class="section">
    <div class="container container-narrow">
        <div class="card card-featured shadow-lg">
            <span class="badge badge-primary">Primary Location</span>

            <div class="hospital-info">
                <div class="hospital-icon">🏥</div>
                <div>
                    <h2>Max Super Speciality Hospital, Dwarka</h2>
                    <p>A state-of-the-art multi-super speciality hospital equipped with cutting-edge robotic surgical systems, advanced ICU care, and world-class infrastructure. The hospital is accredited as a Centre of Excellence for Bariatric & Metabolic Surgery by OSSI.</p>

                    <div class="contact-info">
                        <p>📍 Plot No. 1, Sector 10, Dwarka, New Delhi – 110075</p>
                        <p>📞 <a href="tel:+917042373880">+91 7042373880</a></p>
                        <p>✉️ <a href="mailto:randeepwadhawan@yahoo.com">randeepwadhawan@yahoo.com</a></p>
                        <p>🕐 Monday – Saturday: 10:00 AM – 6:00 PM</p>
                    </div>
                </div>
            </div>

            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5!2d77.0422!3d28.5725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b2e6f2a3b7d%3A0x2b1a3c4d5e6f7890!2sMax+Super+Speciality+Hospital%2C+Dwarka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Max Super Speciality Hospital, Dwarka - Location Map"></iframe>
            </div>
        </div>

        <div class="text-center mt-lg">
            <a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-primary btn-lg">Book Appointment →</a>
        </div>
    </div>
</section>

<?php get_footer(); ?>
