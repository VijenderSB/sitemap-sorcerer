<?php
/**
 * Template Name: About Page
 */
get_header();

$education = array(
    array('degree' => 'MBBS', 'detail' => 'Post Graduate Institute of Medical Sciences (PGIMS), Rohtak, Haryana, 1984–1990'),
    array('degree' => 'MS (General Surgery)', 'detail' => 'Post Graduate Institute of Medical Sciences (PGIMS), Rohtak, Haryana, 1991–1994'),
    array('degree' => 'FICS', 'detail' => 'Fellowship of International College of Surgeons, Chicago, USA — Recognition for work in the field of surgery, 2009'),
    array('degree' => 'FALS', 'detail' => 'Fellowship of Advanced Laparoscopic Surgery — Awarded by IAGES in Bariatric & Colorectal Surgery, 2017'),
    array('degree' => 'FMBS', 'detail' => 'Fellowship of Bariatric & Metabolic Surgery — Honorary Fellowship by OSSI, 2020'),
    array('degree' => 'FACS (USA)', 'detail' => 'Fellowship of the American College of Surgeons — For work done in the field of Surgery, 2016'),
    array('degree' => 'FRCS (Edinburgh)', 'detail' => 'Fellowship of the Royal College of Surgeons of Edinburgh — For contribution in Surgery, 2023'),
);

$expertise = array(
    array(
        'title' => 'Bariatric & Metabolic Surgery (Robotic & Laparoscopic)',
        'points' => array(
            'Trained in Bariatric surgery at the Centre of Excellence in Frankfurt, Germany',
            'Over 2,000 bariatric procedures at a Centre of Excellence accredited by OSSI',
            'Proficient in Sleeve Gastrectomy, Roux-en-Y Gastric Bypass, MGB/OAGB, DJB, SADI-S, Revision Bariatric procedures',
            'Pioneer in performing Robotic Bariatric procedures using the Da Vinci Robot',
            'Tailored Laparoscopic Metabolic procedures for remission of Type II Diabetes & Metabolic Syndrome',
        ),
    ),
    array(
        'title' => 'Robotic/Laparoscopic GI Surgery & GI Oncology',
        'points' => array(
            'Specializes in routine and advanced gastrointestinal surgeries',
            'Focus on Upper Gastrointestinal and Colorectal procedures',
            'Over 35,000 laparoscopic surgeries performed',
        ),
    ),
    array(
        'title' => 'Endohernia & Abdominal Wall Reconstruction (Robotic/Laparoscopic)',
        'points' => array(
            'Fellowship in Abdominal Wall Reconstruction under Prof. Yuri Novitsky at University Hospitals, Cleveland, USA',
            'Extensive experience in complex hernia cases',
            'Accredited as a Hernia Centre of Excellence by the Hernia Society of India',
        ),
    ),
    array(
        'title' => 'Minimally Invasive Proctology',
        'points' => array(
            'Over 5,000 MIPH (Minimally Invasive Procedures for Haemorrhoids) & STARR procedures',
            'Certified by the European Coloproctology Society',
        ),
    ),
);

$positions = array(
    array('role' => 'President', 'org' => 'Obesity & Metabolic Surgery Society of India (OSSI)'),
    array('role' => 'EC Member', 'org' => 'Indian Association of Gastrointestinal Surgeons (IAGES)'),
    array('role' => 'EC Member', 'org' => 'Hernia Society of India (HSI)'),
    array('role' => 'EC Member', 'org' => 'Association of Robotics & Innovative Surgery (ARIS)'),
    array('role' => 'Faculty & Teacher', 'org' => 'National Board of Examination in Medical Sciences (NBEMS)'),
    array('role' => 'Editorial Board Member', 'org' => 'Journal of Minimal Access Surgery (JMAS)'),
    array('role' => 'Associate Editor', 'org' => 'Journal of Bariatric Surgery (JBS)'),
);

$achievements = array(
    'Authored numerous publications in prestigious national and international indexed journals',
    'Distinguished operative faculty at national and international conferences demonstrating advanced Laparoscopic GI, Bariatric & Robotic (Da Vinci) surgeries',
    'Visiting Professor at IRCAD, Taiwan — Tele Robotic Surgery Center',
    'Delivered over 400 invited lectures at national and international conferences, CMEs & academic events',
    'Best Paper Award for video presentations on advanced Laparoscopic & Bariatric surgery at national conferences',
    'Chairman, FALS Board for IAGES (2023–2024) — organizing fellowship courses across subspecialties',
    'Honorary Secretary, OSSI (2020–2022) — organized annual conference OSSICON 2022',
    'Organized and chaired conferences including FALS UGI 2021, OSSICON 2020, and BARICON 2016',
    'Mentored approximately 500 surgeons in Minimal Access, Bariatric & Advanced Laparoscopic GI surgeries',
    'Regular health talks across print, electronic media, and television channels',
);

$memberships = array(
    'Obesity & Metabolic Surgery Society of India (OSSI)',
    'Hernia Society of India (HSI)',
    'Association of Surgeons of India (ASI)',
    'Indian Association of Gastrointestinal Endo Surgeons (IAGES)',
    'Association of Minimal Access Surgeons of India (AMASI)',
    'International Federation for Surgery of Obesity & Metabolic Disorders (IFSO)',
    'Asia-Pacific Hernia Society (APHS)',
    'Society of Endoscopic & Laparoscopic Surgeons of India (SELSI)',
    'Delhi Chapter of Association of Surgeons of India',
    'Indian Medical Association (IMA)',
    'Delhi Medical Association — South Delhi Branch (DMA)',
);
?>

<!-- Page Hero -->
<section class="page-hero">
    <div class="container">
        <h1>About Dr. Randeep Wadhawan</h1>
        <p>Chairman — Gastrointestinal, Bariatric, Laparoscopic & Robotic Surgery | Max Super Speciality Hospital, Dwarka, New Delhi</p>
    </div>
</section>

<!-- Intro Section -->
<section class="section">
    <div class="container">
        <div class="grid-2">
            <div class="doctor-image-wrapper">
                <img src="<?php echo get_template_directory_uri(); ?>/images/doctor-portrait.jpg" alt="Dr. Randeep Wadhawan" class="rounded-image shadow-lg" loading="lazy" width="800" height="1024">
                <div class="floating-badge">
                    <div class="badge-number">30+</div>
                    <div class="badge-text">Years of Excellence</div>
                </div>
            </div>
            <div>
                <h2 id="about">A Pioneer in Robotic & Laparoscopic Surgery</h2>
                <p><strong>Dr. Randeep Wadhawan</strong> is currently the Chairman — Gastrointestinal, Bariatric, Laparoscopic, and Robotic Surgery at Max Super Speciality Hospital, Dwarka, New Delhi. He is a distinguished surgeon with extensive expertise in gastrointestinal, bariatric, and metabolic surgeries.</p>
                <p>With <strong>over 35,000 laparoscopic surgeries</strong> and <strong>2,000+ bariatric procedures</strong> to his credit, he has established himself as a leader in both clinical practice and academia. He is a pioneer in performing Robotic Bariatric procedures using the Da Vinci Robot.</p>
                <p>He leads a successful Obesity, Bariatric & Metabolic surgery program at a Centre of Excellence accredited by the Obesity and Metabolic Surgery Society of India (OSSI).</p>

                <div class="contact-info">
                    <p>📍 Max Super Speciality Hospital, Plot No. 1, Sector 10, Dwarka, New Delhi – 110075</p>
                    <p>📞 <a href="tel:+917042373880">+91 7042373880</a> / <a href="tel:+919810155826">+91 9810155826</a></p>
                    <p>✉️ <a href="mailto:randeepwadhawan@yahoo.com">randeepwadhawan@yahoo.com</a></p>
                </div>
                <a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-primary">Book Appointment</a>
            </div>
        </div>
    </div>
</section>

<!-- Education & Fellowships -->
<section id="qualifications" class="section bg-muted">
    <div class="container container-narrow">
        <h2>🎓 Education & Fellowships</h2>
        <div class="education-list">
            <?php foreach ($education as $e) : ?>
            <div class="card card-horizontal">
                <div class="icon-circle">🎓</div>
                <div>
                    <h3><?php echo esc_html($e['degree']); ?></h3>
                    <p><?php echo esc_html($e['detail']); ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Areas of Expertise -->
<section class="section">
    <div class="container container-narrow">
        <h2>🩺 Areas of Expertise</h2>
        <div class="grid-2">
            <?php foreach ($expertise as $area) : ?>
            <div class="card">
                <h3><?php echo esc_html($area['title']); ?></h3>
                <ul class="check-list">
                    <?php foreach ($area['points'] as $point) : ?>
                    <li>✓ <?php echo esc_html($point); ?></li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Positions Held -->
<section class="section bg-muted">
    <div class="container container-narrow">
        <h2>💼 Positions in National Associations & Journals</h2>
        <div class="grid-2">
            <?php foreach ($positions as $p) : ?>
            <div class="card">
                <span class="badge badge-secondary"><?php echo esc_html($p['role']); ?></span>
                <p><?php echo esc_html($p['org']); ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Academic Achievements -->
<section id="awards" class="section">
    <div class="container container-narrow">
        <h2>🏆 Academic Achievements & Teaching</h2>
        <div class="grid-2">
            <?php foreach ($achievements as $a) : ?>
            <div class="card card-horizontal">
                <span class="icon-accent">🏆</span>
                <span><?php echo esc_html($a); ?></span>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Life Memberships -->
<section id="memberships" class="section bg-muted">
    <div class="container container-narrow">
        <h2>👥 Life Memberships</h2>
        <div class="grid-3">
            <?php foreach ($memberships as $m) : ?>
            <div class="card card-small">
                <span>⭐</span> <?php echo esc_html($m); ?>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- CTA -->
<section class="section text-center">
    <div class="container container-narrow">
        <h2>Consult Dr. Randeep Wadhawan</h2>
        <p>30+ years of surgical excellence. Book your consultation today.</p>
        <div class="cta-buttons">
            <a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-primary btn-lg">Book Appointment</a>
            <a href="tel:+917042373880" class="btn btn-outline btn-lg">Call +91 7042373880</a>
        </div>
    </div>
</section>

<!-- Appointment Form -->
<section class="section">
    <div class="container container-sm">
        <?php
        $drw_form_heading = 'Consult Dr. Randeep Wadhawan';
        $drw_form_subheading = '30+ years of surgical excellence. Book your consultation today.';
        get_template_part('template-parts/appointment-form');
        ?>
    </div>
</section>

<?php get_footer(); ?>
