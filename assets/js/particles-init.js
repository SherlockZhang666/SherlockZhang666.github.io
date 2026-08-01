/* Triangle-mesh background. Config mirrors the particles.js defaults, recoloured
   to a deep starry blue. Clicking anywhere but a link pushes new points. */
(function () {
  "use strict";

  var ACCENT = "#3949AB"; /* deep starry blue — background only, not a site token */
  var PUSH_ON_CLICK = 4;

  particlesJS("particles-js", {
    particles: {
      number: { value: 8, density: { enable: true, value_area: 300 } },
      color: { value: ACCENT },
      shape: { type: "triangle" },
      opacity: {
        value: 0.8,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
      },
      size: {
        value: 5,
        random: true,
        anim: { enable: true, speed: 4, size_min: 0.3, sync: false }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: ACCENT,
        /* deep blue reads heavy on white, so the links stay faint — the dots
           carry the visual weight, the lines just hint at the mesh. */
        opacity: 0.15,
        width: 1
      },
      move: {
        enable: true,
        speed: 1.4,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "bounce",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push", particles_nb: PUSH_ON_CLICK },
        resize: true
      }
    },
    retina_detect: true
  });

  /* The canvas sits behind the text, so it only sees clicks that land in the
     margins. Forward the rest from the window — minus anything interactive, so
     following a link never also spawns points. */
  function instance() {
    return window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS;
  }

  function toCanvasPos(pJS, e) {
    var scale = pJS.tmp.retina ? pJS.canvas.pxratio : 1;
    return { pos_x: e.clientX * scale, pos_y: e.clientY * scale };
  }

  window.addEventListener("mousemove", function (e) {
    var pJS = instance();
    if (!pJS) return;
    var p = toCanvasPos(pJS, e);
    pJS.interactivity.mouse.pos_x = p.pos_x;
    pJS.interactivity.mouse.pos_y = p.pos_y;
    pJS.interactivity.status = "mousemove";
  });

  window.addEventListener("click", function (e) {
    var pJS = instance();
    if (!pJS) return;
    if (e.target.closest("a, button, input, textarea, select, label")) return;
    var p = toCanvasPos(pJS, e);
    /* pushParticles() reads pos_x/pos_y; set them so a click works even when no
       mousemove preceded it (touch, keyboard-triggered click). */
    pJS.interactivity.mouse.pos_x = p.pos_x;
    pJS.interactivity.mouse.pos_y = p.pos_y;
    pJS.interactivity.mouse.click_pos_x = p.pos_x;
    pJS.interactivity.mouse.click_pos_y = p.pos_y;
    pJS.fn.modes.pushParticles(PUSH_ON_CLICK, pJS.interactivity.mouse);
  });
})();
