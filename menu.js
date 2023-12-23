const aside = document.getElementById("menuAside");
const hamburguesa = document.querySelector(".hamburguesa");

hamburguesa.addEventListener("click", function() {
  aside.classList.toggle("abierto");
});