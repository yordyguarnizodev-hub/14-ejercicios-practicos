function clasificadorPedidos() {
  let cantidad = parseInt(prompt("Ingrese la cantidad de artículos:"));
  const output = document.querySelector("#resultado");
  let tamano = "";
  if (cantidad > 10) {
    tamano = "Grande";
  } else if (cantidad >= 5 && cantidad <= 10) {
    tamano = "Mediano";
  } else if (cantidad > 0 && cantidad < 5) {
    tamano = "Pequeño";
  } else {
    tamano = "Pedido invalido";
  }

  output.innerHTML = `El pedido tiene ${cantidad} cantidad, es un pedido: ${tamano}`;
}
