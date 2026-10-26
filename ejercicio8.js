function comprobarAprobado() {
  let teoria = parseFloat(
    prompt("Ingrese la nota de teoría (mínimo 3.0 para aprobar):"),
  );
  const output = document.querySelector("#resultado");
  const notaMinima = 3;

  if (teoria >= notaMinima) {
    let practica = parseFloat(
      prompt("Teoría aprobada. Ingrese la nota de práctica:"),
    );
    if (practica >= notaMinima) {
      output.innerHTML = "¡Aprobaste el taller completo!";
    } else {
      output.innerHTML = "Reprobaste la práctica.";
    }
  } else {
    output.innerHTML = "Reprobaste la teoría. No se evalúa la práctica.";
  }
}
