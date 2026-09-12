/* ============================================================
   Canal único de conversión — todos los CTA del sitio abren
   WhatsApp. Se carga como script global en cada página.
   ============================================================ */
(function () {
  var PHONE = "59897085862";
  var DEFAULT_MSG = "Hola, quiero saber más sobre TodoPymes.";

  window.WA_PHONE = PHONE;

  window.waUrl = function (msg) {
    return "https://wa.me/" + PHONE + "?text=" + encodeURIComponent(msg || DEFAULT_MSG);
  };

  window.openWA = function (msg) {
    window.open(window.waUrl(msg), "_blank", "noopener");
  };
})();
