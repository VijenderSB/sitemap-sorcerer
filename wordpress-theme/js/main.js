/* Main JS for Dr. Randeep Wadhawan WordPress Theme */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    var toggle = document.getElementById('mobile-menu-toggle');
    var nav = document.getElementById('main-nav');
    if (toggle && nav) {
        toggle.addEventListener('click', function() {
            nav.classList.toggle('open');
            toggle.classList.toggle('active');
        });
    }

    // Dropdown handling
    var dropdowns = document.querySelectorAll('.has-dropdown');
    dropdowns.forEach(function(link) {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024) {
                e.preventDefault();
                var parent = this.parentElement;
                parent.classList.toggle('open');
            }
        });
    });

    // Accordion
    var triggers = document.querySelectorAll('.accordion-trigger');
    triggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            this.parentElement.classList.toggle('open');
        });
    });

    // Sticky header
    var header = document.getElementById('site-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});
