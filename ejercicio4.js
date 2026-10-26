function clasificadorNota() {
  let nota = parseFloat(prompt("Ingrese la nota (0.0 a 5.0):"));
  const output = document.querySelector("#resultado");

  let clasificacion = "";
  if (nota >= 4.5 && nota <= 5.0) {
    clasificacion = `La nota es de ${nota}, excelente`;
  } else if (nota >= 3.0 && nota < 4.5) {
    clasificacion = `La nota es de ${nota}, aceptable`;
  } else if (nota >= 0 && nota < 3.0) {
    clasificacion = `La nota es de ${nota}, insuficiente`;
  } else {
    clasificacion = "Nota inválida";
  }
  output.innerHTML = clasificacion;
}
