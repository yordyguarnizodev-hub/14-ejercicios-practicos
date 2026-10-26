function comprobarAdministrador() {
  let registrado = confirm(
    "¿El usuario está registrado? (Aceptar=Sí, Cancelar=No)",
  );
  const output = document.querySelector("#resultado");

  if (registrado) {
    let esAdmin = confirm("¿El usuario tiene permisos de administrador?");

    if (esAdmin) {
      output.innerHTML = "Acceso concedido. Eres administrador.";
    } else {
      output.innerHTML = "Registrado, pero sin permisos de administrador.";
    }
  } else {
    output.innerHTML = "Acceso denegado. Usuario no registrado.";
  }
}
