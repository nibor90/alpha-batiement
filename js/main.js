(function () {
  "use strict";

  /* Mobile nav toggle */
  var navToggle = document.querySelector(".nav-toggle");
  var body = document.body;

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      var isOpen = body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* Mobile "Prestations" accordion (desktop uses hover/focus dropdown) */
  document.querySelectorAll(".nav-has-menu > .nav-link").forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (window.matchMedia("(max-width: 900px)").matches) {
        event.preventDefault();
        var parent = link.parentElement;
        var wasOpen = parent.classList.contains("is-open");
        document.querySelectorAll(".nav-has-menu").forEach(function (item) {
          item.classList.remove("is-open");
        });
        if (!wasOpen) {
          parent.classList.add("is-open");
        }
      }
    });
  });

  /* Close mobile nav when a real link is followed */
  document.querySelectorAll(".main-nav a:not(.nav-has-menu > .nav-link)").forEach(function (link) {
    link.addEventListener("click", function () {
      body.classList.remove("nav-open");
    });
  });

  /* Scroll reveal: one authored moment, not per-element scatter */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  /* Gallery lightbox */
  var galleryButtons = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox-src]"));
  var lightbox = document.querySelector(".lightbox");

  if (galleryButtons.length && lightbox) {
    var lightboxImg = lightbox.querySelector("img");
    var closeBtn = lightbox.querySelector(".lightbox__close");
    var prevBtn = lightbox.querySelector(".lightbox__prev");
    var nextBtn = lightbox.querySelector(".lightbox__next");
    var currentIndex = 0;

    function openLightbox(index) {
      currentIndex = index;
      var btn = galleryButtons[currentIndex];
      lightboxImg.src = btn.getAttribute("data-lightbox-src");
      lightboxImg.alt = btn.getAttribute("data-lightbox-alt") || "";
      lightbox.classList.add("is-open");
      body.style.overflow = "hidden";
      closeBtn.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      body.style.overflow = "";
    }

    function showRelative(offset) {
      currentIndex = (currentIndex + offset + galleryButtons.length) % galleryButtons.length;
      var btn = galleryButtons[currentIndex];
      lightboxImg.src = btn.getAttribute("data-lightbox-src");
      lightboxImg.alt = btn.getAttribute("data-lightbox-alt") || "";
    }

    galleryButtons.forEach(function (btn, index) {
      btn.addEventListener("click", function () {
        openLightbox(index);
      });
    });

    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", function () {
      showRelative(-1);
    });
    nextBtn.addEventListener("click", function () {
      showRelative(1);
    });

    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (!lightbox.classList.contains("is-open")) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showRelative(-1);
      if (event.key === "ArrowRight") showRelative(1);
    });
  }

  /* Contact form: inline feedback without leaving the page */
  var form = document.querySelector("#contact-form");
  if (form) {
    var statusEl = form.querySelector(".form-status");
    form.addEventListener("submit", function (event) {
      var requiredFields = form.querySelectorAll("[required]");
      var missing = Array.prototype.some.call(requiredFields, function (field) {
        return !field.value.trim();
      });

      if (missing) {
        event.preventDefault();
        statusEl.textContent = "Merci de remplir tous les champs obligatoires avant d'envoyer.";
        statusEl.classList.remove("is-success");
        statusEl.classList.add("is-error", "is-visible");
        return;
      }

      statusEl.textContent = "Envoi en cours…";
      statusEl.classList.remove("is-error");
      statusEl.classList.add("is-visible");
    });
  }

  /* Current year in footer */
  document.querySelectorAll("[data-current-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
