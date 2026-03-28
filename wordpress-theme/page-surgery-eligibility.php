<?php
/**
 * Template Name: Surgery Eligibility
 */
get_header();

$conditions = array('Type 2 Diabetes', 'Hypertension', 'Sleep Apnea', 'Joint Problems', 'PCOS', 'High Cholesterol', 'Heart Disease', 'None of the above');
?>

<section class="page-hero">
    <div class="container">
        <nav class="breadcrumb">Tools > Surgery Eligibility</nav>
        <h1>Surgery Eligibility Check — Delhi</h1>
        <p>Find out if you may be a candidate for bariatric or metabolic surgery at Max Hospital, Dwarka, Delhi.</p>
    </div>
</section>

<section class="section">
    <div class="container container-sm">
        <div id="eligibility-form-wrapper" class="card card-form shadow-lg">
            <h2>Quick Eligibility Assessment</h2>
            <form id="eligibilityForm" onsubmit="return checkEligibility(event)">
                <div class="grid-2">
                    <div>
                        <label>Your BMI</label>
                        <input type="number" id="elig-bmi" step="0.1" placeholder="e.g. 38" min="15" max="80" required>
                        <a href="<?php echo home_url('/tools/bmi-calculator'); ?>" class="text-primary text-sm">Calculate your BMI →</a>
                    </div>
                    <div>
                        <label>Your Age</label>
                        <input type="number" id="elig-age" placeholder="e.g. 42" min="10" max="100" required>
                    </div>
                </div>
                <div class="mt-md">
                    <label>Do you have any of these conditions?</label>
                    <div class="checkbox-grid">
                        <?php foreach ($conditions as $c) : ?>
                        <label class="checkbox-label">
                            <input type="checkbox" name="conditions[]" value="<?php echo esc_attr($c); ?>">
                            <?php echo esc_html($c); ?>
                        </label>
                        <?php endforeach; ?>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-full btn-lg mt-md">Check Eligibility</button>
            </form>
        </div>

        <div id="eligibility-result" class="card shadow-lg text-center" style="display:none;">
            <div id="result-eligible" style="display:none;">
                <div class="result-icon">✅</div>
                <h2>You May Be Eligible!</h2>
                <p class="text-muted">Based on your responses, you may be a suitable candidate for bariatric surgery. We recommend scheduling a consultation.</p>
                <div class="cta-buttons">
                    <a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-primary btn-lg">Book Free Consultation →</a>
                    <button onclick="resetForm()" class="btn btn-outline">Re-check</button>
                </div>
            </div>
            <div id="result-not-eligible" style="display:none;">
                <div class="result-icon">ℹ️</div>
                <h2>May Not Be Eligible</h2>
                <p class="text-muted">Based on standard criteria, surgery may not be the first recommendation. However, every case is unique — consult Dr. Wadhawan for a personalized assessment.</p>
                <div class="cta-buttons">
                    <a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-primary">Get Second Opinion</a>
                    <button onclick="resetForm()" class="btn btn-outline">Re-check</button>
                </div>
            </div>
        </div>
    </div>
</section>

<script>
function checkEligibility(e) {
    e.preventDefault();
    var bmi = parseFloat(document.getElementById('elig-bmi').value);
    var age = parseInt(document.getElementById('elig-age').value);
    var checks = document.querySelectorAll('input[name="conditions[]"]:checked');
    var hasComorbidities = false;
    checks.forEach(function(c) { if (c.value !== 'None of the above') hasComorbidities = true; });
    var eligible = age >= 18 && age <= 65 && (bmi >= 35 || (bmi >= 30 && hasComorbidities));

    document.getElementById('eligibility-form-wrapper').style.display = 'none';
    document.getElementById('eligibility-result').style.display = 'block';
    document.getElementById('result-eligible').style.display = eligible ? 'block' : 'none';
    document.getElementById('result-not-eligible').style.display = eligible ? 'none' : 'block';
    return false;
}
function resetForm() {
    document.getElementById('eligibility-form-wrapper').style.display = 'block';
    document.getElementById('eligibility-result').style.display = 'none';
    document.getElementById('eligibilityForm').reset();
}
</script>

<?php get_footer(); ?>
