//FUNCION PARA REGISTRAR HUESPED////////////////////////////////////////////////////////////////////////////////////////////////////
function btnRegistrarHuespedHandler() {
  //Declaro las variables obtenidas del formulario de registro con la funcion auxiliar
  let nombre = tomarValor("txtNombreHuesped");
  let apellido = tomarValor("txtApellidoHuesped");
  let correo = tomarValor("txtCorreoHuesped");
  let celular = tomarValor("txtCelularHuesped");
  let password = tomarValor("txtContraseñaHuesped");
  let password2 = tomarValor("txtContraseña2Huesped");

  //Declaro una variable nueva para un nuevo usuario, crando un nuevo objeto mediante un constructor
  let nuevoHuesped = new Huesped(nombre, apellido, correo, celular, password);

  //Utilizando las funciones auxiliares para validar los datos, si estas se cumplen agrego al array al nuevo Huesped
  if (
    validarCorreo(correo, "msgRegistro") === true &&
    validarTelefono(celular, "msgRegistro") === true &&
    validarContraseña(password, "msgRegistro") === true &&
    validarRepetirContraseña(password, password2, "msgRegistro") === true &&
    recorrerArrayRegistro(arrayHuespedes, nuevoHuesped.correo, "msgRegistro") === false &&
    recorrerArrayRegistro(arrayAnfitriones, nuevoHuesped.correo, "msgRegistro") === false
  ) {
    arrayHuespedes.push(nuevoHuesped);
    mostrarValorInnerText(
      "Usted se ha registrado correctamente",
      "msgRegistro"
    );

    //Vacio los campos con funcion auxiliar y le muestro la pantalla del LogIn
    limpiarCamposPantalla("divRegistroHuesped");
    mostrarPantalla("Login");
  }
}

//FUNCION PARA DAR DE ALTA UN ANFITRION//////////////////////////////////////////////////////////////////////////////////////////////
function btnAltaAnfitrionHandler() {
  //Declaro las variables obtenidas del formulario de registro con la funcion auxiliar
  let nombre = tomarValor("txtNombreAnfitrion");
  let apellido = tomarValor("txtApellidoAnfitrion");
  let correo = tomarValor("txtCorreoAnfitrion");
  let celular = tomarValor("txtCelularAnfitrion");
  let password = tomarValor("txtContraseñaAnfitrion");
  let password2 = tomarValor("txtContraseña2Anfitrion");

  //Declaro una variable nueva para un nuevo anfitrion, crando un nuevo objeto mediante un constructor
  let nuevoAnfitrion = new Anfitrion(
    nombre,
    apellido,
    correo,
    celular,
    password,
  );


  //Utilizando las funciones auxiliares para validar los datos, si estas se cumplen agrego al array al nuevo Anfitrion
  if (
    validarCorreo(correo, "msgAltaAnfitrion") === true &&
    validarTelefono(celular, "msgAltaAnfitrion") === true &&
    validarContraseña(password, "msgAltaAnfitrion") === true &&
    validarRepetirContraseña(password, password2, "msgAltaAnfitrion") ===
    true &&
    recorrerArrayRegistro(arrayAnfitriones, nuevoAnfitrion.correo, "msgAltaAnfitrion") === false &&
    recorrerArrayRegistro(arrayHuespedes, nuevoAnfitrion.correo, "msgAltaAnfitrion") === false
  ) {
    arrayAnfitriones.push(nuevoAnfitrion);
    mostrarValorInnerText(
      "El Anfitrión se ha registrado correctamente",
      "msgAltaAnfitrion"
    );
    //Vacio los campos con funcion auxiliar
    limpiarCamposPantalla("divAltaAnfitrion");
  }

}

//FUNCION PARA REGISTRAR UN INMUEBLE///////////////////////////////////////////////////////////////////////////////////////////////////////
function btnRegistrarInmuebleHandler() {
  //vacio el mensaje

  //Declaro las variables obtenidas del formulario de registro con la funcion auxiliar
  let titulo = tomarValor("txtTituloInmueble");
  let descripcion = tomarValor("txtDescripcionInmpueble");
  let ciudad = tomarValor("txtCiduadInmueble");
  let precioXnoche = tomarValor("txtPrecioPorNoche");

  //Si las variables no son vacias y el precio es un numero positivo  y el array tiene mesno de 3 imagenes....
  //Declaro una variable para un nuevo inmueble, crando un nuevo objeto mediante un constructor
  //Agrego al array el nuevo Inmueble
  //Si no contrario muestro un mensaje de error
  if (
    esNumeroPositivo(precioXnoche) &&
    titulo !== "" &&
    descripcion !== "" &&
    ciudad !== "" &&
    arrayImagenesSeleccionadas.length >= 3
  ) {
    let nuevoInmueble = new Inmueble(
      titulo,
      descripcion,
      ciudad,
      precioXnoche,
      arrayImagenesSeleccionadas
    );

    nuevoInmueble.promCalificacion = 0;
    nuevoInmueble.puntaje = 0;
    nuevoInmueble.cantidad = 0;

    arrayInmuebles.push(nuevoInmueble);
    usuarioConectado.inmuebles.push(nuevoInmueble);

    arrayImagenesSeleccionadas = [];

    mostrarValorInnerText(
      "Su inmueble ha sido creado con éxito",
      "msgRegistroInmueble"
    );
    //Vacio los campos con funcion auxiliar
    mostrarValorInnerText("", "msgSlcFotos");
    limpiarCamposPantalla("divRegistroInmueble");

    armarListadoInmueblesDelAnfitrion(usuarioConectado);
  } else {
    mostrarValorInnerText(
      "Por favor verifique la infomración cargada",
      "msgRegistroInmueble"
    );
  }
}

//FUNCION LOGIN DE TODOS LOS USUARIOS///////////////////////////////////////////////////////////////////////////////////////////////////////
function btnLoginHandler() {
  //Declaro las variables obtenidas del formulario de registro con la funcion auxiliar
  let correo = tomarValor("txtCorreoLogin");
  let password = tomarValor("txtPasswordLogin");

  //Recorro los distintos array con la funcion auxiliar para verificar si existe el usuario ingresado en alguno de ellos
  //Dependiendo los permisos que tenga establezco que le muestro
  //En caso de que no encuentre ninguna coincidencia en los arrays informo al usuario
  if (recorrerArrayLogin(arrayHuespedes, correo, password)) {
    armarMenu(usuarioConectado);
    armarHistorialReservas(usuarioConectado);
    mostrarPantalla("Home");
    armarMuro(arrayInmuebles);
  } else if (recorrerArrayLogin(arrayAnfitriones, correo, password)) {
    armarMenu(usuarioConectado);
    mostrarPantalla("ListadoAnfitrion");
    armarListadoInmueblesDelAnfitrion(usuarioConectado);
  } else if (recorrerArrayLogin(arrayAdmin, correo, password)) {
    armarMenu(usuarioConectado);
    mostrarPantalla("ReporteCompleto");
    armarReporte(arrayInmuebles);
  } else {
    mostrarValorInnerText("Usuario y/o password incorrectos", "msgLogin");
    armarMenu(usuarioConectado);
  }

  //Vacio los campos con funcion auxiliar
  limpiarCamposPantalla("divLogin");
}

//FUNCION RESERVAR INMUEBLE///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Deshabilito el boton en primera instancia
document.getElementById("btnConfirmar").disabled = true;

function btnReservarHandler() {
  //Declaro la variable obtenida del formulario de registro con la funcion auxiliar y tomo su valor numerico
  let dias = Number(tomarValor("txtCantidadDías"));
  //Vacio el mensaje de Reserva
  mostrarValorInnerText("", "msgReserva");

  //Si el valor ingresado es un número positivo
  //Declaro una variable nueva para una nueva reserva, crando un nuevo objeto mediante un constructor
  //Declaro la variable para calcular y realizo calculo del costo total
  //Muestro al usuario el costo total utilizando una funcion auxiliar
  //Y habilito el boton que habia desabilitado en primera isntancia
  //De lo contrario informo al usuario sobre el error
  if (esNumeroPositivo(dias)) {
    reservaActiva = new Reserva(dias, inmuebleActivo, 0);

    let costoTotal = dias * inmuebleActivo.precioXNoche;

    mostrarValorInnerText(
      `El costo total de su estadia es de U$ ${costoTotal}. ¿Desea confirmar?`,
      "msgReserva"
    );

    document.getElementById("btnConfirmar").disabled = false;
  } else {
    mostrarValorInnerText(`Ingrese cantidad de dias válidos`, "msgReserva");
  }
}

//FUNCION CONFIRMAR INMUEBLE///////////////////////////////////////////////////////////////////////////////////////////////////////
function btnConfirmarHandler() {
  //Agrego la reserva al array y muestro mensaje de confirmacion
  usuarioConectado.reservas.push(reservaActiva),
    mostrarValorInnerText("", "msgReserva");

  mostrarValorInnerText(
    "Su reserva se ha efecutado con éxito",
    "msgConfirmacion"
  );

  //Vacio los campos con funcion auxiliar
  limpiarCamposPantalla("divReserva");
  armarHistorialReservas(usuarioConectado);
}

//FUNCION PARA BUSCAR LOS INMUEBLES////////////////////////////////////////////////////////////////////////////////////////////////////
function btnBuscarHandler() {
  //Creo un nuevo array donde se guardaran los inmuebles que cumplan con el filtro
  let inmueblesFiltrados = [];

  //Declaro la variable obtenida del buscador con la funcion auxiliar y lo convierto en minuscula
  let valorBuscador = tomarValor("txtBuscador").toLowerCase();

  //Declaro una variable nueva donde modifico el texto obtenido eliminandole los tíldes
  let valorBuscadorFinal = eliminarTildes(valorBuscador);

  //Vacio el campo del buscador para poder inicializar otra busqueda
  mostrarValorInnerHTML("", "msgBuscador");

  //Si no se ingresa ningun caracter se le informa al usuario y muestro el muro
  //Sino busco en primera instancia por el titulo (pasando el titulo a minuscula y sin tildes), de encontrarse se comienza a armar
  //array con dichos inmuebles
  //Si no se encuentra ninguno por el titulo se hace lo mismo pero con la ciudad y de lo contrario se prosigue con la descripcion
  //Una vez se finaliza todo el recorrdio se muestra el array filtrado, de quedar vacio el array se muestra el muro original y se da
  //al usuario
  if (valorBuscadorFinal.trim() === "") {
    mostrarValorInnerHTML(
      "No ha ingresado ningún valor en filtro.",
      "msgBuscador"
    );
    armarMuro(arrayInmuebles);
  } else {
    for (let i = 0; i < arrayInmuebles.length; i++) {
      let inmueble = arrayInmuebles[i];

      if (inmueble.habilitado) {
        if (
          eliminarTildes(inmueble.titulo)
            .toLowerCase()
            .indexOf(valorBuscadorFinal) !== -1
        ) {
          inmueblesFiltrados.push(inmueble);
        }
      }

      if ((inmueblesFiltrados = [])) {
        for (let i = 0; i < arrayInmuebles.length; i++) {
          let inmueble = arrayInmuebles[i];

          if (
            eliminarTildes(inmueble.ciudad)
              .toLowerCase()
              .indexOf(valorBuscadorFinal) !== -1
          ) {
            inmueblesFiltrados.push(inmueble);
          } else if (
            eliminarTildes(inmueble.descripcion)
              .toLowerCase()
              .indexOf(valorBuscadorFinal) !== -1
          ) {
            inmueblesFiltrados.push(inmueble);
          }
        }
        arraySeleccionado = inmueblesFiltrados;
        armarMuro(arraySeleccionado);

        if (inmueblesFiltrados.length === 0) {
          mostrarValorInnerHTML(
            "La búsqueda no dio resultados.",
            "msgBuscador"
          );
          armarMuro(arrayInmuebles);
        }
      }
    }
  }

  //Vacio los campos con funcion auxiliar
  limpiarCamposPantalla("divBuscador");
}

//BOTON VER MAS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function btnVerMasHandler() {
  //Si el usuario esta conectado y tiene acceso a esta pantalla
  //Le muestro la pantalla de ver mas cuando haga clik
  //Armando la misma en base a la informacion del inmueble al cual pertenecia el boton
  if (usuarioConectado !== null && usuarioConectado !== undefined) {
    mostrarPantalla("PantallaVerMas");

    let numero = Number(this.id.substr(6));

    inmuebleActivo = arrayInmuebles[numero];

    armarVerMasInmueble(inmuebleActivo);
  }
}

//BOTON ANTERIOR DE LA GALERIA////////////////////////////////////////////////////////////////////////////////////
function btnGaleriaAnteriorHandler() {
  //Si la pisicion de la foto es distinta de 0
  //Selecciono la imagen mostrada y disminuyo el valor de la posicion
  //Muestro la imagen de la nueva posicion
  if (posicionGaleria !== 0) {
    let imgElement = document.querySelector(".img-container img");

    posicionGaleria--;

    imgElement.src = `./imgs/inmuebles/${inmuebleActivo.fotos[posicionGaleria]}`;
  }
}

//BOTON SIGUIENTE DE LA GALERIA////////////////////////////////////////////////////////////////////////////////////
function btnGaleriaSiguienteHandler() {
  //Si la pisicion de la foto es distinta de la ultima
  //Selecciono la imagen mostrada y aumento el valor de la posicion
  //Muestro la imagen de la nueva posicion
  if (posicionGaleria !== inmuebleActivo.fotos.length - 1) {
    let imgElement = document.querySelector(".img-container img");

    posicionGaleria++;

    imgElement.src = `./imgs/inmuebles/${inmuebleActivo.fotos[posicionGaleria]}`;
  }
}

//BOTON CALIFICAR INMUEBLE /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Decreto dos variables globales para almacenar nuevos valores
let puntaje;
let cantidad;

function btnCalificarHandler() {
  //Declaro la variable donde almaceno la posicion del boton presionado
  //Tomo el valor ingresado en el campo de texto particular de la reserva que corresponde el boton
  //Le asigno un nuevo valor a las variables globales

  let pos = Number(this.id.substr(12));

  let nuevaCalificacion = Number(tomarValor(`txtCalificacion${pos}`));
  puntaje = usuarioConectado.reservas[pos].inmueble.puntaje;
  cantidad = usuarioConectado.reservas[pos].inmueble.cantidad;

  //Si el numero ingresado se enceuntra entre 1 y 5
  //Modifico las propiedades de la reserva
  //Preparo los elementos a mostrar y a ocultar
  //Rearmo el Muro con el array modificado y el historial de las reservas
  //De lo contrario envio una alerta al usuario
  if (esNumeroPositivo(nuevaCalificacion) && nuevaCalificacion <= 5) {
    usuarioConectado.reservas[pos].calificacion = nuevaCalificacion;
    puntaje += nuevaCalificacion;
    cantidad++;

    usuarioConectado.reservas[pos].inmueble.puntaje = puntaje;
    usuarioConectado.reservas[pos].inmueble.cantidad = cantidad;
    usuarioConectado.reservas[pos].inmueble.promCalificacion = (
      puntaje / cantidad
    ).toFixed(2);

    document.getElementById(`txtCalificacion${pos}`).style.display = "none";
    document.getElementById(`btnCalificar${pos}`).style.display = "none";
    document.getElementById(`msgCalificacion${pos}`).style.display = "block";
  } else {
    alert("Ingrese un valor entre 1 y 5");
  }

  armarHistorialReservas(usuarioConectado);
  armarMuro(arrayInmuebles);
}

//"BOTON" FILTRAR DESDE HASTA ADMINISTRADOR /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Selecciono el boton desde y le agrego su funcionalidad
document
  .getElementById("btnDesdeHasta")
  .addEventListener("click", btnFiltrarDesdeHastaHandler);

function btnFiltrarDesdeHastaHandler() {
  //Defino un array vacio
  let arrayFiltrado = [];
  //Tomo los valores de los campos desde y hasta y los asigno a una variable
  let desde = tomarValor("txtDesde");
  let hasta = tomarValor("txtHasta");

  for (i = 0; i < arrayInmuebles.length; i++) {
    let inmueble = arrayInmuebles[i];
    let precio = inmueble.precioXNoche;

    document.getElementById("msgReporte").innerText = "";

    if (desde === "" && esNumeroPositivo(hasta)) {
      desde = 1;
    }

    if (hasta === "" && esNumeroPositivo(desde)) {
      hasta = Infinity;
    }

    if (desde === "" && hasta === "") {
      document.getElementById("msgReporte").innerText =
        "Ingrese al menos uno de los dos valores";
    }

    //Si ahsta es menor a desde muestro un error y armo el reporte con todo los inmuebles
    if (esNumeroPositivo(hasta) && esNumeroPositivo(desde)) {
      if (precio > desde && precio < hasta) {
        arrayFiltrado.push(inmueble);
      }
    }

    if (hasta < desde) {
      alert("El desde debe ser menor al hasta");

      armarReporte();
      break;
      //Sino recorro el array de inmuebles y asigno el inmueblo y el precio a variabeles para luego comparar
    }

    //Si el precio esta contenido entre desde y hasta lo agrego al array vacio
  }
  //Ordeno el array filtrado por precio
  arrayFiltrado.sort(ordenarPorPrecio);

  //Armo el reporte con el array ordenado
  armarReporte(arrayFiltrado);
}

//"BOTON" CAMBIAR DIVISA /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function labelMonedaHandler() {
  //me guardo la moneda anterior (string)
  let monedaAnterior = moneda;

  //si la actual es dólares
  if (moneda === "USD") {
    //cambio a pesos
    moneda = "UY";
  } else {
    //cambio a dólares
    moneda = "USD";
  }

  //armo inmuebles nuevamente
  armarMuro(arraySeleccionado);

  //modifico la etiqueta para volver a la moneda anterior
  document.querySelector(".label-moneda").innerText =
    "Cambiar a " + monedaAnterior;
}

//"BOTON" CERRAR SESION /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function itemLogOutHandler() {
  //Cambio el valor de propiedad usuario conectado
  //Rearmo el menu en base al usuario que se encuentre conectado
  //Y muestro el Home
  usuarioConectado = null;
  armarMenu(usuarioConectado);
  mostrarPantalla("Home");
  armarMuro(arrayInmuebles);
}

//"BOTON" HOME /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function itemHomeHandler() {
  //Muestro el Home
  //Rearmo el menu en base al usuario que se encuentre conectado
  //Rearmo el muro
  mostrarPantalla("Home");
  armarMenu(usuarioConectado);
  armarMuro(arrayInmuebles);
}

//BOTON CARGAR COTIZACION /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function btnCargarCotizacionHandler() {
  //Declaro la variable obtenida del formulario con la funcion auxiliar y tomo el valor numerico
  let tipoCambio = Number(tomarValor("txtTipoDeCambio"));

  //Si la variable es un numero positivo, almaceno dicho dato en la propiedad del tipo de cambio
  //Si no le advierto al usuario de un error
  if (esNumeroPositivo(tipoCambio)) {
    cotizacionDolar = tipoCambio;
    mostrarValorInnerText(
      "El tipo de cambio se actualizo correctamente",
      "msgCotizacion"
    );
  } else {
    alert("Tipo de cambio invalido.");
  }
}

//BOTON PARA GUARDAR LAS IMAGENES ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function btnGuardarImagenesSlcHandler() {
  //Declaro la variable obtenida del formulario de registro con la funcion auxiliar
  let seleccion = tomarValor("slcFotos");

  //Si la imagen seleccionada no fue elegida aun la agrego al array y muestro al usuario cuales fueron las imagenes seleciconadas
  //De lo contrario le aviso al usuario que ya selecciono esa imagen
  if (arrayImagenesSeleccionadas.indexOf(seleccion) === -1) {
    arrayImagenesSeleccionadas.push(seleccion);
  } else {
    alert("La imagen ya está seleccionada");
  }

  document.getElementById(
    "msgSlcFotos"
  ).innerText = `Fotos seleccionadas: ${arrayImagenesSeleccionadas.join(
    " --"
  )}`;
}

//BOTON PARA ORDENAR POR POPULARIDAD O PRECIO ///////////////////////////////////////////////////////////////////////////////////////////////////////////
function btnOrdenarHandler() {
  //Realizo una copia del array para no perder el original
  let arrayFiltrado = [...arraySeleccionado];

  //Declaro la variablea tomando el valor del select seleccionado
  let seleccion = tomarValor("slcOdenarListado");

  //Si el mismo es igual a precio, rearmo el muro ordenandolo con la funcion auziliar de ordenar por precio
  //Si no muestro el muro original que ya se encuentra ordenado por popularidad
  if (seleccion === "Calificaciones") {

    arrayFiltrado.sort(ordenarPorCalificacion);

  } else if (seleccion === "Precio") {

    arrayFiltrado.sort(ordenarPorPrecio);
  }

  arraySeleccionado = arrayFiltrado;

  armarMuro(arraySeleccionado);

}

//BOTONE HABILITAR INMUEBLE/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function btnHabilitarInmuebleHandler() {
  //Declaro la variable donde almaceno la posicion del boton presionado
  //Modifico la propiedades del inmueble para dejarla habilitada
  //Preparo los elementos a mostrar y a ocultar
  //Rearmo el Muro con el array modificado
  let pos = Number(this.id.substring(20));

  usuarioConectado.inmuebles[pos].habilitado = true;

  document.getElementById(`btnHabilitarInmueble${pos}`).style.display = "none";
  document.getElementById(`btnDeshabilitarInmueble${pos}`).style.display =
    "block";

  armarMuro(arrayInmuebles);
}

//BOTONE DESAHABILITAR INMUEBLE/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function btnDeshabilitarInmuebleHandler() {
  //Declaro la variable donde almaceno la posicion del boton presionado
  //Modifico la propiedad del inmueble para dejarla deshabilitada
  //Preparo los elementos a mostrar y a ocultar
  //Rearmo el Muro con el array modificado
  let pos = Number(this.id.substring(23));

  usuarioConectado.inmuebles[pos].habilitado = false;

  document.getElementById(`btnHabilitarInmueble${pos}`).style.display = "block";
  document.getElementById(`btnDeshabilitarInmueble${pos}`).style.display =
    "none";

  armarMuro(arrayInmuebles);
}
