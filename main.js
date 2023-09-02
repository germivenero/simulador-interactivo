//Simulador compras de entradas para festivales
alert(`BIENVENIDO A TICKETWEB, COMPRA TU ENTRADA PARA TU FESITVAL FAVORITO.`);

let eleccionMenu = prompt (`Que accion deseas realizar?: 1-Registrarme 2-Seleccionar un festival 3-Solo mirar la pagina`);

switch (eleccionMenu) {
  case `1`:
      registrarUsuario()
    break;
  case `2`:
    comprarEntrada()
   break;
  case `3`:
    alert(`Bienvenido :)`)
    break;
  default:
    alert(`La opcion que has elegido no es valida`)
}

function registrarUsuario () {
  let nombre = prompt (`Introduce tu nombre:`);
  let email = prompt (`Introduce tu correo electronico:`);
  let constrasenia = prompt (`Introduce tu contraseña:`)

  if (nombre === `` || email === `` || constrasenia === ``) {
    alert(`Debe rellenar los campos para registrarse`);
  } else {
    alert("Usuario Registrado con exito");
  }
}

function comprarEntrada () {
  alert (`ATENCION! USTED ESTA POR COMPRAR ENTRADAS SIN REGISTRARSE`);

  let entrada = prompt(`Estas son las entradas que tenemos disponibles: 1-Lollapalooza Argentina 2-Primavera Sound 3-Ultra Argentina`)

  if (entrada == 1) {
    alert(`Usted compro entrada para el Lollapalooza Argentina`);
  } else if (entrada == 2) {
    alert(`Usted compro entradas para el primavera Sound`);
  } else if (entrada == 3) {
    alert(`Usted compro para el ultra Argentina`);
  } else {
    alert(`Usted no eligio ninguna entrada`);
  }
}


