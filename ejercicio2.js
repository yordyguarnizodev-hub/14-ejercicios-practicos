function esPositivoONegativo() {
  let num = parseFloat(prompt("Ingrese un número:"));
  const output = document.querySelector("#resultado");
  let esPositivo = num > 0 ? "positivo" : "negativo";

  output.innerHTML = `El número ${num} es ${esPositivo}.`;
}
