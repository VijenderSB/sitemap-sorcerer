<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#1a5276">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header" id="site-header">
    <div class="container header-inner">
        <!-- Logo -->
        <a href="<?php echo home_url('/'); ?>" class="site-logo">
            <div class="logo-text">
                <span class="logo-name">Dr. Randeep Wadhawan</span>
                <span class="logo-degrees">MBBS, MS, FICS, FALS, FMBS, FACS(USA), FRCS(Ed)</span>
                <span class="logo-title">Chairman – GI, Bariatric, Laparoscopic & Robotic Surgery<br>Max Super Speciality Hospital Dwarka</span>
            </div>
        </a>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle Menu">
            <span></span><span></span><span></span>
        </button>

        <!-- Navigation -->
        <nav class="main-nav" id="main-nav">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container' => false,
                'menu_class' => 'nav-list',
                'walker' => new DRW_Walker_Nav(),
                'fallback_cb' => 'drw_fallback_menu',
            ));
            ?>
        </nav>

        <a href="<?php echo home_url('/book-appointment'); ?>" class="btn btn-primary btn-header">Book Appointment</a>
    </div>
</header>

<main>
<?php

// Fallback menu
function drw_fallback_menu() {
    ?>
    <ul class="nav-list">
        <li><a href="<?php echo home_url('/'); ?>">Home</a></li>
        <li class="menu-item-has-children">
            <a href="<?php echo home_url('/about'); ?>" class="has-dropdown">About</a>
            <ul class="sub-menu">
                <li><a href="<?php echo home_url('/about'); ?>">About Dr. Wadhawan</a></li>
                <li><a href="<?php echo home_url('/about/gallery'); ?>">Gallery</a></li>
            </ul>
        </li>
        <li class="menu-item-has-children">
            <a href="#" class="has-dropdown">Procedures</a>
            <ul class="sub-menu">
                <li><a href="<?php echo home_url('/robotic-surgery'); ?>">Robotic Surgery</a></li>
                <li><a href="<?php echo home_url('/gi-surgery'); ?>">GI Surgery</a></li>
                <li><a href="<?php echo home_url('/hernia-surgery'); ?>">Hernia Surgery</a></li>
                <li><a href="<?php echo home_url('/obesity-management'); ?>">Obesity Management</a></li>
                <li><a href="<?php echo home_url('/metabolic-surgery'); ?>">Metabolic Surgery</a></li>
            </ul>
        </li>
        <li class="menu-item-has-children">
            <a href="#" class="has-dropdown">Resources</a>
            <ul class="sub-menu">
                <li><a href="<?php echo home_url('/patient-resources/faqs'); ?>">FAQs</a></li>
                <li><a href="<?php echo home_url('/patient-resources/journey'); ?>">Patient Journey</a></li>
                <li><a href="<?php echo home_url('/patient-resources/insurance'); ?>">Insurance & Cost</a></li>
                <li><a href="<?php echo home_url('/patient-resources/before-after'); ?>">Before & After</a></li>
                <li><a href="<?php echo home_url('/media'); ?>">Media</a></li>
                <li><a href="<?php echo home_url('/media/blogs'); ?>">Blogs</a></li>
                <li><a href="<?php echo home_url('/media/videos'); ?>">Videos</a></li>
                <li><a href="<?php echo home_url('/media/patient-stories'); ?>">Patient Stories</a></li>
                <li><a href="<?php echo home_url('/media/news'); ?>">News</a></li>
            </ul>
        </li>
        <li class="menu-item-has-children">
            <a href="<?php echo home_url('/contact'); ?>" class="has-dropdown">Contact</a>
            <ul class="sub-menu">
                <li><a href="<?php echo home_url('/contact'); ?>">Contact Us</a></li>
                <li><a href="<?php echo home_url('/hospitals'); ?>">Hospital & Location</a></li>
            </ul>
        </li>
    </ul>
    <?php
}
?>
