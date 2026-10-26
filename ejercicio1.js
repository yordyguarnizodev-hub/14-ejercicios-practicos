function comprobarTemperatura() {
  let temp = parseFloat(prompt("Ingrese la temperatura en °C:"));
  const output = document.querySelector("#resultado");

  if (temp > 30) {
    alert("¡Alerta! La temperatura supera los 30°C.");
    output.innerHTML = `Temperatura ingresada: ${temp}, ALERTA, supera los 30°C`;
  } else {
    output.innerHTML = `Temperatura ingresada: ${temp}, sin alerta`;
  }
}
