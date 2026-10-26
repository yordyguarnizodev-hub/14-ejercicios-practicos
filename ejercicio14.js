function comprobarBeca() {
  let edad = parseInt(prompt("Ingrese la edad del aprendiz:"));
  let docAprobada = confirm("¿Tiene la documentación aprobada?");
  let cuentaActiva = confirm("¿La cuenta está activa?");
  const output = document.querySelector("#resultado");

  let cuposInput = prompt(
    "Ingrese el número de cupos disponibles (deje vacío para 1 por defecto):",
  );
  let cupos =
    cuposInput === "" || cuposInput === null ? 1 : parseInt(cuposInput);

  if (edad >= 16 && docAprobada && cuentaActiva) {
    if (cupos > 0) {
      output.innerHTML = "Matrícula autorizada.";
    } else {
      output.innerHTML = "Matrícula denegada: No hay cupos.";
    }
  } else {
    output.innerHTML = "Matrícula denegada: No cumple requisitos.";
  }
}
