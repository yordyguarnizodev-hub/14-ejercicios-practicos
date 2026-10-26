function comprobadorEdad() {
  let edad = parseInt(prompt("Ingrese su edad:"));
  const output = document.querySelector("#resultado");

  const puedeEntrar =
    edad >= 12
      ? "Puedes ingresar a la película."
      : "No puedes ingresar. Es para mayores de 12 años.";

  output.innerHTML = puedeEntrar;
}
