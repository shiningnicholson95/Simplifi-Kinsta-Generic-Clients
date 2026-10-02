/* ================================================
   McKoy Harris Valuation — form-handler.js
   Handles the Request an Appraisal form:
   validation, submission UI, success state.
   ================================================ */

(function () {
  'use strict';

  var form        = document.getElementById('appraisal-form');
  var formWrap    = document.getElementById('form-wrap');
  var successEl   = document.getElementById('form-success');
  var submitBtn   = document.getElementById('form-submit');
  var REDIRECT_URL = 'thank-you.html';
  var REDIRECT_DELAY = 4000; // ms

  if (!form) return;

  /* ─── Validation helpers ─────────────────────── */
  var validators = {
    required: function (val) { return val.trim().length > 0; },
    email:    function (val) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()); },
    phone:    function (val) { return /^[\d\s\-\+\(\)]{7,}$/.test(val.trim()); },
    checked:  function (el)  { return el.checked; }
  };

  function getFieldError(input) {
    var val   = input.value;
    var type  = input.type;
    var rules = (input.dataset.validate || '').split(',').map(function (r) { return r.trim(); });

    if (type === 'checkbox') {
      return !validators.checked(input) ? (input.dataset.errorRequired || 'This field is required.') : null;
    }

    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i];
      if (rule === 'required' && !validators.required(val)) {
        return input.dataset.errorRequired || 'This field is required.';
      }
      if (rule === 'email' && val.trim() && !validators.email(val)) {
        return input.dataset.errorEmail || 'Please enter a valid email address.';
      }
      if (rule === 'phone' && val.trim() && !validators.phone(val)) {
        return input.dataset.errorPhone || 'Please enter a valid phone number.';
      }
    }
    return null;
  }

  function showError(input, msg) {
    input.classList.add('error');
    var errEl = document.getElementById(input.id + '-error');
    if (errEl) { errEl.textContent = msg; errEl.classList.add('visible'); }
  }

  function clearError(input) {
    input.classList.remove('error');
    var errEl = document.getElementById(input.id + '-error');
    if (errEl) { errEl.textContent = ''; errEl.classList.remove('visible'); }
  }

  /* ─── Validate all required fields ──────────── */
  function validateForm() {
    var inputs    = form.querySelectorAll('[data-validate]');
    var firstErr  = null;
    var isValid   = true;

    inputs.forEach(function (input) {
      var msg = getFieldError(input);
      if (msg) {
        showError(input, msg);
        isValid = false;
        if (!firstErr) firstErr = input;
      } else {
        clearError(input);
      }
    });

    // Validate at least one radio selected in required groups
    form.querySelectorAll('[data-radio-group-required]').forEach(function (group) {
      var name    = group.dataset.radioGroupRequired;
      var checked = form.querySelector('input[name="' + name + '"]:checked');
      var errEl   = document.getElementById(name + '-error');
      if (!checked) {
        isValid = false;
        if (errEl) { errEl.textContent = 'Please select an option.'; errEl.classList.add('visible'); }
        if (!firstErr) firstErr = group;
      } else {
        if (errEl) { errEl.textContent = ''; errEl.classList.remove('visible'); }
      }
    });

    if (firstErr) {
      // Scroll to first error with offset for fixed header
      var rect   = firstErr.getBoundingClientRect();
      var offset = window.scrollY + rect.top - 100;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }

    return isValid;
  }

  /* ─── Inline validation on blur ─────────────── */
  form.querySelectorAll('[data-validate]').forEach(function (input) {
    input.addEventListener('blur', function () {
      var msg = getFieldError(input);
      if (msg) showError(input, msg); else clearError(input);
    });
    input.addEventListener('input', function () {
      if (input.classList.contains('error')) {
        var msg = getFieldError(input);
        if (!msg) clearError(input);
      }
    });
  });

  /* ─── Phone auto-format ──────────────────────── */
  var phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function () {
      var digits = phoneInput.value.replace(/\D/g, '').slice(0, 10);
      if (digits.length >= 7) {
        phoneInput.value = '(' + digits.slice(0,3) + ') ' + digits.slice(3,6) + '-' + digits.slice(6);
      } else if (digits.length >= 4) {
        phoneInput.value = '(' + digits.slice(0,3) + ') ' + digits.slice(3);
      } else {
        phoneInput.value = digits;
      }
    });
  }

  /* ─── Character counter for message ─────────── */
  var messageInput   = document.getElementById('message');
  var messageCounter = document.getElementById('message-counter');
  if (messageInput && messageCounter) {
    messageInput.addEventListener('input', function () {
      messageCounter.textContent = messageInput.value.length + ' / 1000';
    });
  }

  /* ─── Show success state ─────────────────────── */
  function showSuccess() {
    if (formWrap)  formWrap.style.display = 'none';
    if (successEl) successEl.classList.add('visible');

    // Redirect after delay
    setTimeout(function () {
      window.location.href = REDIRECT_URL;
    }, REDIRECT_DELAY);

    // Countdown display
    var countdown = document.getElementById('redirect-countdown');
    if (countdown) {
      var secs = Math.round(REDIRECT_DELAY / 1000);
      countdown.textContent = secs;
      var interval = setInterval(function () {
        secs--;
        countdown.textContent = secs;
        if (secs <= 0) clearInterval(interval);
      }, 1000);
    }
  }

  /* ─── Form submission ────────────────────────── */
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateForm()) return;

    // Loading state
    submitBtn.classList.add('btn--loading');
    submitBtn.textContent = 'Submitting…';

    /* ── Production: replace this block with your ──
       ── actual form submission (fetch/AJAX/Formspree) ── */
    setTimeout(function () {
      showSuccess();
    }, 1200);
    /* ─────────────────────────────────────────────── */
  });

})();
