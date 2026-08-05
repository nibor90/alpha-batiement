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
      if (window.matchMedia("(max-width: 1080px)").matches) {
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

  /* Scroll reveal: quiet supporting motion for sections below the fold.
     .stagger-list uses the same observer but reveals its children on
     their own beat (see CSS) instead of moving as one block. */
  var revealEls = document.querySelectorAll(".reveal, .stagger-list");
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

  /* Live "ouvert" badge, computed from the real declared hours
     (Lun-Sam 8h-18h, dimanche fermé). Only ever announces "ouvert" :
     when the business is closed, the badge is simply hidden rather
     than displaying a discouraging "fermé" message. */
  var openBadges = document.querySelectorAll("[data-open-badge]");
  if (openBadges.length) {
    var now = new Date();
    var day = now.getDay(); /* 0 = dimanche */
    var hour = now.getHours();
    var isOpen = day !== 0 && hour >= 8 && hour < 18;

    openBadges.forEach(function (badge) {
      if (!isOpen) {
        badge.style.display = "none";
        return;
      }
      var textEl = badge.querySelector("[data-open-badge-text]");
      if (textEl) {
        textEl.textContent = "Ouvert maintenant · Lun–Sam 8h–18h";
      }
    });
  }

  /* OpenStreetMap coverage maps (Leaflet + cercle 30 km) */
  var coverageMapEls = document.querySelectorAll("[data-coverage-map]");
  if (coverageMapEls.length) {
    var BRIVE_CENTER = [45.158891, 1.533059];
    var COVERAGE_RADIUS_M = 30000;

    function refreshCoverageMap(map, circle) {
      map.invalidateSize({ animate: false });
      map.fitBounds(circle.getBounds(), { padding: [16, 16] });
    }

    function scheduleRefresh(map, circle) {
      refreshCoverageMap(map, circle);
      requestAnimationFrame(function () {
        refreshCoverageMap(map, circle);
      });
      window.setTimeout(function () {
        refreshCoverageMap(map, circle);
      }, 250);
      window.setTimeout(function () {
        refreshCoverageMap(map, circle);
      }, 900);
    }

    function createCoverageMap(el) {
      if (el.dataset.coverageMapReady === "true") return;

      if (typeof L === "undefined") {
        el.classList.add("coverage-map--error");
        el.textContent = "Carte momentanément indisponible.";
        return;
      }

      var map = L.map(el, {
        scrollWheelZoom: false,
        attributionControl: true
      });

      /* Leaflet needs a view (center + zoom) before any layer can be
         added, otherwise adding a circle/marker throws
         "Cannot read properties of undefined (reading 'layerPointToLatLng')"
         and the whole map fails to render, tiles included. */
      map.setView(BRIVE_CENTER, 9);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      var circle = L.circle(BRIVE_CENTER, {
        color: "#be1e2f",
        weight: 2.5,
        fillColor: "#be1e2f",
        fillOpacity: 0.14,
        radius: COVERAGE_RADIUS_M
      }).addTo(map);

      L.circleMarker(BRIVE_CENTER, {
        radius: 7,
        color: "#231f20",
        weight: 2,
        fillColor: "#be1e2f",
        fillOpacity: 1
      }).addTo(map).bindTooltip("Brive-la-Gaillarde", {
        direction: "top",
        offset: [0, -8]
      });

      el.dataset.coverageMapReady = "true";

      map.whenReady(function () {
        scheduleRefresh(map, circle);
      });

      if ("IntersectionObserver" in window) {
        var visibilityObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              scheduleRefresh(map, circle);
            }
          });
        }, { threshold: 0.01, rootMargin: "40px 0px" });
        visibilityObserver.observe(el);
      }

      window.addEventListener("resize", function () {
        scheduleRefresh(map, circle);
      });
    }

    function bootCoverageMaps() {
      coverageMapEls.forEach(createCoverageMap);
    }

    if (document.readyState === "complete") {
      bootCoverageMaps();
    } else {
      window.addEventListener("load", bootCoverageMaps);
    }
  }
})();
