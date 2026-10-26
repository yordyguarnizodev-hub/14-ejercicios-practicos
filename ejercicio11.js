function comprobadorCuenta() {
  let esAdmin = confirm("¿Eres administrador?");
  let cuentaActiva = confirm("¿Tu cuenta está activa?");
  const output = document.querySelector("#resultado");

  if (esAdmin && cuentaActiva) {
    output.innerHTML = "Permiso concedido para modificar la información.";
  } else {
    output.innerHTML = "Acceso denegado.";
  }
}
