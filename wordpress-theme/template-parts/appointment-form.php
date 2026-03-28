<?php
/**
 * Inline Appointment Form - Reusable Template Part
 * Usage: <?php get_template_part('template-parts/appointment-form'); ?>
 * 
 * Variables (set before including):
 *   $drw_form_heading    - Form heading text
 *   $drw_form_subheading - Subheading text
 *   $drw_form_variant    - 'default' or 'dark'
 */

$heading    = isset($drw_form_heading) ? $drw_form_heading : 'Book Your Appointment';
$subheading = isset($drw_form_subheading) ? $drw_form_subheading : 'Fill in your details and we\'ll get back to you within 24 hours.';
$variant    = isset($drw_form_variant) ? $drw_form_variant : 'default';
$is_dark    = ($variant === 'dark');
?>

<div class="inline-appt-form <?php echo $is_dark ? 'variant-dark' : ''; ?>">
    <div class="appt-form-header">
        <span class="appt-icon">📅</span>
        <h3><?php echo esc_html($heading); ?></h3>
    </div>
    <p class="appt-form-sub"><?php echo esc_html($subheading); ?></p>

    <form class="drw-appointment-form" data-variant="<?php echo esc_attr($variant); ?>">
        <div class="form-row-2">
            <div class="form-field">
                <input type="text" name="name" placeholder="Full Name *" required maxlength="100" class="form-input" />
                <span class="field-error" data-for="name"></span>
            </div>
            <div class="form-field">
                <input type="tel" name="phone" placeholder="Mobile Number *" required maxlength="10" class="form-input" />
                <span class="field-error" data-for="phone"></span>
            </div>
        </div>
        <div class="form-row-2">
            <div class="form-field">
                <input type="number" name="age" placeholder="Age *" required min="1" max="120" class="form-input" />
                <span class="field-error" data-for="age"></span>
            </div>
            <div class="form-field">
                <textarea name="message" placeholder="Briefly describe your condition..." rows="1" maxlength="500" class="form-input"></textarea>
            </div>
        </div>
        <div class="form-actions">
            <button type="submit" class="btn btn-primary">Request Appointment →</button>
            <p class="form-note">Or call: <a href="tel:+917042373880">+91 7042373880</a> · Your details are confidential 🔒</p>
        </div>
    </form>
</div>
