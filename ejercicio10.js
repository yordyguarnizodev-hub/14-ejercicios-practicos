function comprobadorPromocion() {
  let tieneTarjeta = confirm("¿Tiene tarjeta de cliente?");
  let tieneCupon = confirm("¿Tiene un cupón válido?");
  const output = document.querySelector("#resultado");

  if (tieneTarjeta || tieneCupon) {
    output.innerHTML = "Tienes acceso a la promoción.";
  } else {
    output.innerHTML = "No cumples los requisitos para la promoción.";
  }
}
