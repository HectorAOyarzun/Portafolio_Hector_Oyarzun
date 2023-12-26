function validarFormulario() {
  // Validar el nombre
  var nombre = document.getElementById("nombre").value;
  if (nombre === "") {
    alert("Debes introducir tu nombre.");
    return false;
  }

  // Validar el correo electrónico
  var correo = document.getElementById("correo").value;
  var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(correo)) {
    alert("El correo electrónico no es válido.");
    return false;
  }

  // Validar el mensaje
  var mensaje = document.getElementById("mensaje").value;
  if (mensaje === "") {
    alert("Debes introducir un mensaje.");
    return false;
  }

  return true;
}

// Asociar el evento de clic al botón de envío
document.getElementById("enviar").addEventListener("click", validarFormulario);
