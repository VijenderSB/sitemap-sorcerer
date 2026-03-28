<?php
/**
 * Theme Name: Dr. Randeep Wadhawan
 * Theme URI: https://www.randeepwadhawan.com
 * Description: WordPress theme for Dr. Randeep Wadhawan — Best Robotic Surgeon in Delhi
 * Version: 1.0
 * Author: Lovable
 * Text Domain: drw-theme
 */

/* ================================================================
   1. THEME SETUP
   ================================================================ */
function drw_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('custom-logo');

    register_nav_menus(array(
        'primary' => __('Primary Menu', 'drw-theme'),
        'footer'  => __('Footer Menu', 'drw-theme'),
    ));
}
add_action('after_setup_theme', 'drw_theme_setup');

/* ================================================================
   2. ENQUEUE STYLES & SCRIPTS
   ================================================================ */
function drw_enqueue_assets() {
    wp_enqueue_style('drw-style', get_stylesheet_uri(), array(), '1.0');
    wp_enqueue_style('drw-google-fonts', 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap', array(), null);
    wp_enqueue_script('drw-main', get_template_directory_uri() . '/js/main.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'drw_enqueue_assets');

/* ================================================================
   3. ACF HELPER
   ================================================================ */
function drw_field($field, $fallback = '', $post_id = false) {
    if (function_exists('get_field')) {
        $value = get_field($field, $post_id);
        return $value ? $value : $fallback;
    }
    return $fallback;
}

/* ================================================================
   4. CUSTOM REWRITE RULES FOR CITY & SEO PAGES
   ================================================================ */
function drw_custom_rewrite_rules() {
    // City landing pages: /best-surgeon/{city-slug}
    add_rewrite_rule('^best-surgeon/([^/]+)/?$', 'index.php?pagename=city-landing&city_slug=$matches[1]', 'top');

    // SEO landing pages
    $seo_slugs = array('robotic-surgeon-delhi', 'robotic-bariatric-surgeon-delhi', 'robotic-hernia-surgeon-delhi', 'robotic-gi-surgeon-delhi', 'laparoscopic-surgeon-delhi');
    foreach ($seo_slugs as $slug) {
        add_rewrite_rule('^' . $slug . '/?$', 'index.php?pagename=seo-landing&seo_slug=' . $slug, 'top');
    }
}
add_action('init', 'drw_custom_rewrite_rules');

function drw_query_vars($vars) {
    $vars[] = 'city_slug';
    $vars[] = 'seo_slug';
    return $vars;
}
add_filter('query_vars', 'drw_query_vars');

/* ================================================================
   5. CUSTOM POST TYPE: PATIENT STORIES
   ================================================================ */
function drw_register_post_types() {
    register_post_type('patient_story', array(
        'labels' => array(
            'name' => 'Patient Stories',
            'singular_name' => 'Patient Story',
            'add_new_item' => 'Add New Patient Story',
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-heart',
        'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
        'rewrite' => array('slug' => 'patient-story'),
    ));
}
add_action('init', 'drw_register_post_types');

/* ================================================================
   6. SCHEMA / JSON-LD
   ================================================================ */
function drw_physician_schema() {
    if (is_front_page()) :
    ?>
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": "Dr. Randeep Wadhawan",
        "description": "Chairman – GI, Bariatric, Laparoscopic & Robotic Surgery at Max Hospital Dwarka, Delhi. 60,000+ surgeries.",
        "url": "https://www.randeepwadhawan.com",
        "telephone": "+917042373880",
        "email": "randeepwadhawan@yahoo.com",
        "image": "<?php echo get_template_directory_uri(); ?>/images/doctor-portrait.jpg",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Plot No. 1, Sector 10, Dwarka",
            "addressLocality": "New Delhi",
            "addressRegion": "Delhi",
            "postalCode": "110075",
            "addressCountry": "IN"
        },
        "medicalSpecialty": ["Bariatric Surgery", "Gastrointestinal Surgery", "Robotic Surgery", "Hernia Surgery"],
        "memberOf": [
            {"@type": "MedicalOrganization", "name": "American College of Surgeons"},
            {"@type": "MedicalOrganization", "name": "Royal College of Surgeons of Edinburgh"}
        ]
    }
    </script>
    <?php
    endif;
}
add_action('wp_head', 'drw_physician_schema');

/* ================================================================
   7. CUSTOM WALKER FOR NAVIGATION
   ================================================================ */
class DRW_Walker_Nav extends Walker_Nav_Menu {
    function start_lvl(&$output, $depth = 0, $args = null) {
        $output .= '<ul class="sub-menu">';
    }
    function end_lvl(&$output, $depth = 0, $args = null) {
        $output .= '</ul>';
    }
    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $classes = implode(' ', $item->classes);
        $has_children = in_array('menu-item-has-children', $item->classes);
        $output .= '<li class="' . esc_attr($classes) . '">';
        $output .= '<a href="' . esc_url($item->url) . '"' . ($has_children ? ' class="has-dropdown"' : '') . '>';
        $output .= esc_html($item->title);
        $output .= '</a>';
    }
    function end_el(&$output, $item, $depth = 0, $args = null) {
        $output .= '</li>';
    }
}

/* ================================================================
   8. WIDGETS
   ================================================================ */
function drw_widgets_init() {
    register_sidebar(array(
        'name' => 'Footer Widget Area',
        'id' => 'footer-widgets',
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>',
    ));
}
add_action('widgets_init', 'drw_widgets_init');
