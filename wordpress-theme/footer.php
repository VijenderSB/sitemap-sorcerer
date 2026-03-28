</main>

<!-- WhatsApp Floating Button -->
<a href="https://wa.me/917042373880" target="_blank" rel="noopener noreferrer" class="whatsapp-float" aria-label="Chat on WhatsApp">
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>

<?php get_template_part('template-parts/popups'); ?>

<footer class="site-footer">
    <div class="container">
        <div class="footer-grid">
            <!-- Column 1: About -->
            <div class="footer-col">
                <h4>Dr. Randeep Wadhawan</h4>
                <p class="footer-degrees">MBBS, MS, FICS, FALS, FMBS, FACS(USA), FRCS(Ed)</p>
                <p class="footer-title">Chairman – GI, Bariatric, Laparoscopic & Robotic Surgery</p>
                <p>Max Super Speciality Hospital Dwarka</p>
                <p>Plot No. 1, Sector 10, Dwarka, New Delhi – 110075</p>
                <div class="social-icons">
                    <a href="https://www.facebook.com/DrRandeepWadhawan" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
                    <a href="https://www.instagram.com/drrandeepwadhawan" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
                    <a href="https://www.youtube.com/@randeepwadhawan7610" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶️</a>
                    <a href="https://twitter.com/DrRWadhawan" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
                    <a href="https://www.linkedin.com/in/dr-randeep-wadhawan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
                </div>
            </div>

            <!-- Column 2: Quick Links -->
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="<?php echo home_url('/about'); ?>">About</a></li>
                    <li><a href="<?php echo home_url('/robotic-surgery'); ?>">Robotic Surgery</a></li>
                    <li><a href="<?php echo home_url('/hernia-surgery'); ?>">Hernia Surgery</a></li>
                    <li><a href="<?php echo home_url('/gi-surgery'); ?>">GI Surgery</a></li>
                    <li><a href="<?php echo home_url('/obesity-management'); ?>">Obesity Management</a></li>
                    <li><a href="<?php echo home_url('/media/patient-stories'); ?>">Patient Stories</a></li>
                    <li><a href="<?php echo home_url('/cities-we-serve'); ?>">Cities We Serve</a></li>
                </ul>
            </div>

            <!-- Column 3: Tools -->
            <div class="footer-col">
                <h4>Tools & Resources</h4>
                <ul>
                    <li><a href="<?php echo home_url('/tools/bmi-calculator'); ?>">BMI Calculator</a></li>
                    <li><a href="<?php echo home_url('/tools/cost-estimator'); ?>">Cost Estimator</a></li>
                    <li><a href="<?php echo home_url('/tools/eligibility'); ?>">Surgery Eligibility</a></li>
                    <li><a href="<?php echo home_url('/patient-resources/faqs'); ?>">FAQs</a></li>
                    <li><a href="<?php echo home_url('/patient-resources/insurance'); ?>">Insurance</a></li>
                    <li><a href="<?php echo home_url('/media/blogs'); ?>">Blogs</a></li>
                </ul>
            </div>

            <!-- Column 4: Contact -->
            <div class="footer-col">
                <h4>Contact</h4>
                <p>📞 <a href="tel:+917042373880">+91 7042373880</a></p>
                <p>📞 <a href="tel:+919810155826">+91 9810155826</a></p>
                <p>✉️ <a href="mailto:randeepwadhawan@yahoo.com">randeepwadhawan@yahoo.com</a></p>
                <p>💬 <a href="https://wa.me/917042373880" target="_blank">WhatsApp</a></p>
                <button class="btn btn-primary btn-sm mt-sm drw-book-btn">Book Appointment</button>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> Dr. Randeep Wadhawan. All rights reserved.</p>
            <p class="footer-disclaimer">Disclaimer: Results may vary. Consult a qualified surgeon for medical advice.</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
