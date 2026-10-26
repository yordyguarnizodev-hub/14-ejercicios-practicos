function comprobadorBeca() {
  let promedio = parseFloat(prompt("Ingrese su promedio académico:"));
  const output = document.querySelector("#resultado");
  const dosSalariosMinimos = 3501810;

  if (promedio >= 4.0) {
    let ingresos = parseFloat(prompt("Ingrese total de ingresos familiares:"));

    if (ingresos <= dosSalariosMinimos) {
      output.innerHTML = "Beca Aprobada.";
    } else {
      output.innerHTML = "Beca Denegada: Ingresos superiores al límite.";
    }
  } else {
    output.innerHTML = "Beca Denegada: Promedio insuficiente.";
  }
}
