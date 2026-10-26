function comprobarEnvioGratuito() {
  let costo = parseFloat(prompt("Ingrese el costo del pedido:"));
  let premium = confirm("¿Tiene membresía premium?");
  const output = document.querySelector("#resultado");

  if (costo >= 120000 || premium) {
    output.innerHTML = "¡Tienes envío gratuito!";
  } else {
    output.innerHTML = "El envío tiene costo adicional.";
  }
}
