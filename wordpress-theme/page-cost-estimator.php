<?php
/**
 * Template Name: Cost Estimator
 */
get_header();

$procedures = array(
    array('name' => 'Robotic Sleeve Gastrectomy', 'min' => 350000, 'max' => 500000),
    array('name' => 'Robotic Gastric Bypass', 'min' => 400000, 'max' => 600000),
    array('name' => 'Robotic Mini Gastric Bypass', 'min' => 380000, 'max' => 550000),
    array('name' => 'Robotic Hernia Repair', 'min' => 200000, 'max' => 350000),
    array('name' => 'Robotic Gallbladder Surgery', 'min' => 180000, 'max' => 280000),
    array('name' => 'Laparoscopic Sleeve Gastrectomy', 'min' => 250000, 'max' => 400000),
    array('name' => 'Laparoscopic Hernia Repair', 'min' => 120000, 'max' => 200000),
    array('name' => 'Laparoscopic Gallbladder Surgery', 'min' => 100000, 'max' => 180000),
);
?>

<section class="page-hero">
    <div class="container">
        <nav class="breadcrumb">Tools > Cost Estimator</nav>
        <h1>Surgery Cost Estimator — Delhi</h1>
        <p>Get an approximate cost range for your procedure at Max Hospital, Dwarka, New Delhi.</p>
    </div>
</section>

<section class="section">
    <div class="container container-sm">
        <div class="card shadow-lg">
            <h2>💰 Select Procedure</h2>
            <select id="procedure-select" class="form-select" onchange="showCost()">
                <option value="">Choose a procedure...</option>
                <?php foreach ($procedures as $i => $p) : ?>
                <option value="<?php echo $i; ?>" data-min="<?php echo $p['min']; ?>" data-max="<?php echo $p['max']; ?>"><?php echo esc_html($p['name']); ?></option>
                <?php endforeach; ?>
            </select>
            <div id="cost-result" style="display:none;" class="info-box text-center mt-md">
                <p class="text-muted">Estimated Cost Range</p>
                <p id="cost-range" class="text-3xl font-bold text-primary"></p>
                <p class="text-muted text-sm mt-sm">*Costs include surgeon fees, hospital charges, and basic investigations. Actual costs may vary.</p>
                <a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-primary mt-sm">Get Exact Quote →</a>
            </div>
        </div>

        <div class="card mt-md">
            <h3>Insurance Coverage</h3>
            <p class="text-muted">Many insurance providers now cover bariatric and robotic surgeries. Our team can help you verify your insurance coverage. Contact us for details.</p>
        </div>
    </div>
</section>

<script>
function showCost() {
    var sel = document.getElementById('procedure-select');
    var opt = sel.options[sel.selectedIndex];
    if (opt.value) {
        var min = parseInt(opt.getAttribute('data-min')) / 1000;
        var max = parseInt(opt.getAttribute('data-max')) / 1000;
        document.getElementById('cost-range').textContent = '₹' + min + 'K – ₹' + max + 'K';
        document.getElementById('cost-result').style.display = 'block';
    } else {
        document.getElementById('cost-result').style.display = 'none';
    }
}
</script>

<?php get_footer(); ?>
