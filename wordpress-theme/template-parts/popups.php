<?php
/**
 * Lead Capture Popup - Auto-opens after 10 seconds
 * Included in footer.php
 */
?>

<!-- Lead Capture Popup -->
<div id="lead-popup-overlay" class="popup-overlay" style="display:none;">
    <div class="popup-content">
        <div class="popup-header">
            <h3>Book Your Consultation</h3>
            <p>With Dr. Randeep Wadhawan — 30+ Years of Surgical Excellence</p>
        </div>
        <div class="popup-body" id="popup-form-body">
            <form id="lead-popup-form">
                <div class="form-field">
                    <label for="lead-name">Full Name</label>
                    <input type="text" id="lead-name" name="name" placeholder="Enter your name" maxlength="100" required />
                    <span class="field-error" data-for="lead-name"></span>
                </div>
                <div class="form-field">
                    <label for="lead-age">Age</label>
                    <input type="number" id="lead-age" name="age" placeholder="Your age" min="1" max="120" required />
                    <span class="field-error" data-for="lead-age"></span>
                </div>
                <div class="form-field">
                    <label for="lead-mobile">Mobile Number</label>
                    <input type="tel" id="lead-mobile" name="mobile" placeholder="10-digit mobile number" maxlength="10" required />
                    <span class="field-error" data-for="lead-mobile"></span>
                </div>
                <button type="submit" class="btn btn-primary btn-full">Book Free Consultation</button>
                <p class="form-note text-center">Your details are safe & confidential 🔒</p>
            </form>
        </div>
        <div class="popup-success" id="popup-success" style="display:none;">
            <div class="success-icon">✅</div>
            <p class="success-title">Thank You!</p>
            <p class="success-sub">We'll get back to you shortly.</p>
        </div>
        <button class="popup-close" id="popup-close" aria-label="Close">&times;</button>
    </div>
</div>

<!-- Sticky Appointment Float Button -->
<button id="sticky-appt-btn" class="sticky-appt-btn" aria-label="Book Appointment">📅</button>

<!-- Sticky Slide Panel -->
<div id="sticky-appt-overlay" class="sticky-overlay" style="display:none;"></div>
<div id="sticky-appt-panel" class="sticky-panel" style="display:none;">
    <div class="sticky-panel-header">
        <span>📅 <strong>Book Appointment</strong></span>
        <button id="sticky-panel-close" class="popup-close-sm">&times;</button>
    </div>
    <p class="appt-form-sub">Fill in your details and we'll get back to you within 24 hours.</p>
    <form class="drw-appointment-form" id="sticky-appt-form">
        <div class="form-field">
            <input type="text" name="name" placeholder="Full Name *" required maxlength="100" class="form-input" />
            <span class="field-error" data-for="name"></span>
        </div>
        <div class="form-field">
            <input type="tel" name="phone" placeholder="Mobile Number *" required maxlength="10" class="form-input" />
            <span class="field-error" data-for="phone"></span>
        </div>
        <div class="form-field">
            <input type="number" name="age" placeholder="Age *" required min="1" max="120" class="form-input" />
            <span class="field-error" data-for="age"></span>
        </div>
        <div class="form-field">
            <textarea name="message" placeholder="Briefly describe your condition..." rows="3" maxlength="500" class="form-input"></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-full">Request Appointment →</button>
        <p class="form-note text-center">Or call: <a href="tel:+917042373880">+91 7042373880</a> · Confidential 🔒</p>
    </form>
</div>
