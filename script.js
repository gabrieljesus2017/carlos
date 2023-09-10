document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contacto-form");
  const nombreInput = document.getElementById("nombre");
  const emailInput = document.getElementById("email");
  const mensajeInput = document.getElementById("mensaje");

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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
