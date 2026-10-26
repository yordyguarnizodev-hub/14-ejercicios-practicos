function seTieneStock() {
  let stock = parseInt(prompt("Ingrese la cantidad de stock:"));
  const output = document.querySelector("#resultado");
  let estado = stock >= 10 ? "Stock Suficiente" : "Reabastecer";

  output.innerHTML = `
  Stock: ${stock}<br>
    Estado: ${estado}`;
}
