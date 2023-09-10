"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contacto-form");
  var nombreInput = document.getElementById("nombre");
  var emailInput = document.getElementById("email");
  var mensajeInput = document.getElementById("mensaje");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validarFormulario()) {
      alert("Formulario enviado con éxito");
      form.reset();
    }
  });

  function validarFormulario() {
    if (nombreInput.value.trim() === "") {
      alert("Por favor ingresa tu nombre.");
      return false;
    }

    if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value)) {
      alert("Por favor ingresa un email válido.");
      return false;
    }

    if (mensajeInput.value.trim() === "") {
      alert("Por favor ingresa un mensaje.");
      return false;
    }

    return true;
  }

  function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
//# sourceMappingURL=script.dev.js.map
