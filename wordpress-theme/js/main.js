/* Main JS for Dr. Randeep Wadhawan WordPress Theme */

document.addEventListener('DOMContentLoaded', function() {
    // ================================================================
    // Mobile menu toggle
    // ================================================================
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
                this.parentElement.classList.toggle('open');
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
            header.classList.add(window.scrollY > 50 ? 'scrolled' : '');
            if (window.scrollY <= 50) header.classList.remove('scrolled');
        });
    }

    // ================================================================
    // Form Validation & WhatsApp Submit Helper
    // ================================================================
    function validateForm(form) {
        var errors = {};
        var name = form.querySelector('[name="name"]');
        var phone = form.querySelector('[name="phone"]') || form.querySelector('[name="mobile"]');
        var age = form.querySelector('[name="age"]');

        if (name && (!name.value.trim() || name.value.trim().length < 2)) errors.name = 'Please enter your name';
        if (phone && (!phone.value.trim() || !/^[6-9]\d{9}$/.test(phone.value.trim()))) errors.phone = 'Enter valid 10-digit mobile';
        var ageVal = age ? parseInt(age.value) : 0;
        if (age && (!age.value || isNaN(ageVal) || ageVal < 1 || ageVal > 120)) errors.age = 'Enter valid age (1–120)';

        // Show errors
        form.querySelectorAll('.field-error').forEach(function(el) { el.textContent = ''; });
        for (var key in errors) {
            var el = form.querySelector('.field-error[data-for="' + key + '"]') ||
                     form.querySelector('.field-error[data-for="lead-' + key + '"]');
            if (el) el.textContent = errors[key];
        }

        return Object.keys(errors).length === 0;
    }

    function submitToWhatsApp(form, prefix) {
        var name = (form.querySelector('[name="name"]') || {}).value || '';
        var phone = (form.querySelector('[name="phone"]') || form.querySelector('[name="mobile"]') || {}).value || '';
        var age = (form.querySelector('[name="age"]') || {}).value || '';
        var message = (form.querySelector('[name="message"]') || {}).value || 'Not specified';

        var text = encodeURIComponent(
            (prefix || 'Appointment Request') + ':\nName: ' + name.trim() +
            '\nPhone: ' + phone.trim() + '\nAge: ' + age.trim() +
            '\nCondition: ' + message.trim()
        );
        window.open('https://wa.me/917042373880?text=' + text, '_blank');
    }

    // ================================================================
    // Inline Appointment Forms (on all pages)
    // ================================================================
    document.querySelectorAll('.drw-appointment-form').forEach(function(form) {
        // Phone input filter
        var phoneInput = form.querySelector('[name="phone"]');
        if (phoneInput) {
            phoneInput.addEventListener('input', function() {
                this.value = this.value.replace(/\D/g, '').slice(0, 10);
            });
        }

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (!validateForm(this)) return;
            submitToWhatsApp(this, 'Appointment Request');
            this.reset();
        });
    });

    // ================================================================
    // Lead Capture Popup (auto-open after 10s)
    // ================================================================
    var popupOverlay = document.getElementById('lead-popup-overlay');
    var popupClose = document.getElementById('popup-close');
    var popupForm = document.getElementById('lead-popup-form');
    var popupSuccess = document.getElementById('popup-success');
    var popupFormBody = document.getElementById('popup-form-body');
    var SESSION_KEY = 'drw_lead_submitted';

    function isLeadSubmitted() {
        return sessionStorage.getItem(SESSION_KEY) === 'true';
    }

    function openLeadPopup() {
        if (!isLeadSubmitted() && popupOverlay) {
            popupOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    function closeLeadPopup() {
        if (popupOverlay) {
            popupOverlay.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    // Auto-open after 10 seconds
    if (!isLeadSubmitted()) {
        setTimeout(openLeadPopup, 10000);
    }

    if (popupClose) popupClose.addEventListener('click', closeLeadPopup);
    if (popupOverlay) popupOverlay.addEventListener('click', function(e) {
        if (e.target === popupOverlay) closeLeadPopup();
    });

    // Lead popup form submit
    if (popupForm) {
        var mobileInput = popupForm.querySelector('[name="mobile"]');
        if (mobileInput) {
            mobileInput.addEventListener('input', function() {
                this.value = this.value.replace(/\D/g, '').slice(0, 10);
            });
        }

        popupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Manual validation for popup
            var errors = {};
            var name = document.getElementById('lead-name');
            var age = document.getElementById('lead-age');
            var mobile = document.getElementById('lead-mobile');

            if (!name.value.trim() || name.value.trim().length < 2) errors['lead-name'] = 'Please enter your name';
            var ageVal = parseInt(age.value);
            if (!age.value || isNaN(ageVal) || ageVal < 1 || ageVal > 120) errors['lead-age'] = 'Enter valid age';
            if (!mobile.value.trim() || !/^[6-9]\d{9}$/.test(mobile.value.trim())) errors['lead-mobile'] = 'Enter valid 10-digit mobile';

            popupForm.querySelectorAll('.field-error').forEach(function(el) { el.textContent = ''; });
            for (var key in errors) {
                var el = popupForm.querySelector('.field-error[data-for="' + key + '"]');
                if (el) el.textContent = errors[key];
            }
            if (Object.keys(errors).length > 0) return;

            var text = encodeURIComponent(
                'New Enquiry:\nName: ' + name.value.trim() +
                '\nAge: ' + age.value.trim() +
                '\nMobile: ' + mobile.value.trim()
            );
            window.open('https://wa.me/917042373880?text=' + text, '_blank');

            sessionStorage.setItem(SESSION_KEY, 'true');
            popupFormBody.style.display = 'none';
            popupSuccess.style.display = 'flex';

            setTimeout(closeLeadPopup, 2000);
        });
    }

    // ================================================================
    // "Book Appointment" buttons trigger popup
    // ================================================================
    document.querySelectorAll('.drw-book-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openLeadPopup();
        });
    });

    // ================================================================
    // Sticky Appointment Panel
    // ================================================================
    var stickyBtn = document.getElementById('sticky-appt-btn');
    var stickyPanel = document.getElementById('sticky-appt-panel');
    var stickyOverlay = document.getElementById('sticky-appt-overlay');
    var stickyClose = document.getElementById('sticky-panel-close');

    function openStickyPanel() {
        if (stickyPanel) { stickyPanel.style.display = 'block'; }
        if (stickyOverlay) { stickyOverlay.style.display = 'block'; }
        if (stickyBtn) { stickyBtn.style.display = 'none'; }
    }

    function closeStickyPanel() {
        if (stickyPanel) { stickyPanel.style.display = 'none'; }
        if (stickyOverlay) { stickyOverlay.style.display = 'none'; }
        if (stickyBtn) { stickyBtn.style.display = 'flex'; }
    }

    if (stickyBtn) stickyBtn.addEventListener('click', openStickyPanel);
    if (stickyClose) stickyClose.addEventListener('click', closeStickyPanel);
    if (stickyOverlay) stickyOverlay.addEventListener('click', closeStickyPanel);
});
