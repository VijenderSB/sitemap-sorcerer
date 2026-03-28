<?php
/**
 * Template Name: BMI Calculator
 */
get_header();
?>

<section class="page-hero">
    <div class="container">
        <nav class="breadcrumb">Tools > BMI Calculator</nav>
        <h1>BMI Calculator — Delhi</h1>
        <p>Calculate your Body Mass Index and understand if you may be a candidate for weight loss surgery at Max Hospital, Dwarka, Delhi.</p>
    </div>
</section>

<section class="section">
    <div class="container container-sm">
        <div class="card card-form shadow-lg" id="bmi-calculator">
            <h2>🔢 Calculate Your BMI</h2>
            <form id="bmiForm" onsubmit="return calculateBMI(event)">
                <div class="grid-2">
                    <div>
                        <label>Weight (kg)</label>
                        <input type="number" id="bmi-weight" placeholder="e.g. 85" min="20" max="300" required>
                    </div>
                    <div>
                        <label>Height (cm)</label>
                        <input type="number" id="bmi-height" placeholder="e.g. 170" min="100" max="250" required>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-full">Calculate BMI</button>
            </form>
        </div>

        <div id="bmi-result" class="card shadow-lg text-center mt-lg" style="display:none;">
            <p class="text-muted">Your BMI</p>
            <p id="bmi-value" class="text-5xl font-bold"></p>
            <p id="bmi-category" class="text-lg font-semibold"></p>
            <p id="bmi-suggestion" class="text-muted mt-sm"></p>
            <div id="bmi-cta" style="display:none;" class="mt-md">
                <a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-primary">Book Free Consultation →</a>
            </div>
        </div>

        <!-- BMI Chart -->
        <div class="card mt-lg">
            <h3>BMI Categories</h3>
            <table class="simple-table">
                <tr><td>Below 18.5</td><td>Underweight</td></tr>
                <tr><td>18.5 – 24.9</td><td>Normal Weight</td></tr>
                <tr><td>25.0 – 29.9</td><td>Overweight</td></tr>
                <tr><td>30.0 – 34.9</td><td>Obese Class I</td></tr>
                <tr><td>35.0 – 39.9</td><td>Obese Class II — Surgery Eligible</td></tr>
                <tr><td>40.0+</td><td>Obese Class III — Strong Surgery Candidate</td></tr>
            </table>
        </div>
    </div>
</section>

<script>
function calculateBMI(e) {
    e.preventDefault();
    var w = parseFloat(document.getElementById('bmi-weight').value);
    var h = parseFloat(document.getElementById('bmi-height').value) / 100;
    if (w > 0 && h > 0) {
        var bmi = Math.round((w / (h * h)) * 10) / 10;
        var cat, color, suggestion;
        if (bmi < 18.5) { cat = 'Underweight'; color = '#16a34a'; suggestion = 'You may be underweight. Consult a doctor for nutritional guidance.'; }
        else if (bmi < 25) { cat = 'Normal'; color = '#16a34a'; suggestion = 'You are at a healthy weight. Maintain your lifestyle!'; }
        else if (bmi < 30) { cat = 'Overweight'; color = '#ca8a04'; suggestion = 'You may benefit from lifestyle changes.'; }
        else if (bmi < 35) { cat = 'Obese (Class I)'; color = '#ea580c'; suggestion = 'You may be eligible for bariatric surgery.'; }
        else if (bmi < 40) { cat = 'Obese (Class II)'; color = '#dc2626'; suggestion = 'Bariatric surgery can be highly effective for you.'; }
        else { cat = 'Obese (Class III)'; color = '#dc2626'; suggestion = 'You are a strong candidate for bariatric/metabolic surgery.'; }

        document.getElementById('bmi-value').textContent = bmi;
        document.getElementById('bmi-value').style.color = color;
        document.getElementById('bmi-category').textContent = cat;
        document.getElementById('bmi-category').style.color = color;
        document.getElementById('bmi-suggestion').textContent = suggestion;
        document.getElementById('bmi-result').style.display = 'block';
        document.getElementById('bmi-cta').style.display = bmi >= 30 ? 'block' : 'none';
    }
    return false;
}
</script>

<?php get_footer(); ?>
