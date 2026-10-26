function comprobarRango10y50() {
  let numero = parseFloat(prompt("Ingrese un número:"));
  const output = document.querySelector("#resultado");

  if (numero >= 10 && numero <= 50) {
    output.innerHTML = `El ${numero} está entre 10 y 50.`;
  } else {
    output.innerHTML = `El ${numero} está fuera del rango.`;
  }
}
