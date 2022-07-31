// FUNCIONES HELPERS //


//FUNCION QUE VALIDA SI EL TEXTO INGRESADO ES UN NUMERO Y SI ES MAYOR A 0 ///////////////////////////////////////////////////////////
function esNumeroPositivo(_texto) {
  let resultado;

  //Si _texto no es vacio, es número y a la vez es mayor que 0 mi resultado es TRUE, de lo contrario es FALSE
  if (!isNaN(Number(_texto)) && Number(_texto) > 0) {
    resultado = true;
  } else {
    resultado = false;
  }

  return resultado;
}

//FUNCION QUE VALIDA SI EL TEXTO INGRESADO ES UN NUMERO ////////////////////////////////////////////////////////////////////////////
function esNumero(_texto) {
  let resultado;

  //Si _texto no es vacio y es número mi resultado es TRUE, de lo contrario es FALSE
  if (!isNaN(Number(_texto)) && _texto !== "") {
    resultado = true;
  } else {
    resultado = false;
  }

  return resultado;
}

//FUNCION QUE TOMA UN VALOR DEL HTML ////////////////////////////////////////////////////////////////////////////////////////////////////
function tomarValor(_valorATomar) {
  //Determino una variable donde se almacena el valor tomado y retorno ese valor
  let valorATomar = document.getElementById(_valorATomar).value;

  return valorATomar;
}

//FUNCION QUE MUESTRA UN VALOR EN EL HTML CON INNERTEXT/////////////////////////////////////////////////////////////////////////////////
function mostrarValorInnerText(_valorAMostrar, _dondeSeMuestra) {
  //Muestro un valor en el texto, pasando los parametros del valor y de la ubicación
  let valorAMostrar = (document.getElementById(
    _dondeSeMuestra
  ).innerText = _valorAMostrar);

  return valorAMostrar;
}

//FUNCION QUE MUESTRA UN VALOR EN EL HTML CON INNERHTML //////////////////////////////////////////////////////////////////////////////////////////
function mostrarValorInnerHTML(_valorAMostrar, _dondeSeMuestra) {
  //Muestro un valor en el HTML, pasando los parametros del valor y de la ubicación
  let valorAMostrar = (document.getElementById(
    _dondeSeMuestra
  ).innerHTML = _valorAMostrar);

  return valorAMostrar;
}

//FUNCION PARA VERIFICAR QUE DOS STRINGS SEAN EXACTAMENTE IGUALES //////////////////////////////////////////////////////////////////////
function verificarStringsExactmanteIguales(_primerString, _segundoString) {
  let exactamnteIgual = false;

  //Si los dos parametros pasados son exactamente iguales retorno TRUE de lo contrario retrono FALSE
  if (_primerString === _segundoString) {
    exactamnteIgual = true;
  }

  return exactamnteIgual;
}

//FUNCION PARA VERIFICAR SI UN STRING CONTIENE UN CARACTER //////////////////////////////////////////////////////////////////////////////
function tieneCaracter(_nombre, _caracter) {
  //Para cada caracter del string verifico si el mismo es exactamente igual al caracter buscado, si se encuentra retorno TRUE de lo
  //contrairo retorno FALSE
  for (i = 0; i < _nombre.length; i++) {
    if (_nombre[i] === _caracter) {
      return true;
    }
  }
  return false;
}

//FUNCION PARA OCULTAR MENU Y SUBMENU //////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ocultar(_loQueSeOculta) {

  //recorro el array de elementos a ocultar y los oculto todos
  for (i = 0; i < _loQueSeOculta.length; i++) {
    let item = _loQueSeOculta[i];
    item.style.display = "none";
  }
}

//FUNCION PARA MOSTRAR MENU Y SUBMENU //////////////////////////////////////////////////////////////////////////////////////////////////////////////
function mostrar(_loQueSeMuestra) {

  //recorro el array de elementos a mostrar y los muestro todos
  for (i = 0; i < _loQueSeMuestra.length; i++) {
    let item = _loQueSeMuestra[i];
    item.style.display = "block";
  }
}

//FUNCION PARA RECORRER ARRAY DEL LOGIN PARA VALIDAR CREDENCIALES//////////////////////////////////////////////////////////////////////////////////////////////
function recorrerArrayLogin(_array, _correo, _password) {
  //defino la variable resultado como falsa
  let resultado = false;

  //Recorro el array ingresado para buscar los parametros correo y password
  //guardo cada posicion del array en una variable
  for (let i = 0; i < _array.length; i++) {
    let u = _array[i];

    //Si los parametros existen y son identicos a los ingresados retorno TRUE y finalizo mi busqeuda 
    //De lo contrario retorno FALSE uan vez haya recorrido todo el array
    if (u.correo === _correo && u.password === _password) {
      resultado = true;
      u.conectado = true;
      usuarioConectado = u;
      break;
    }
  }

  return resultado;
}

//FUNCION PARA BUSCAR EL CORREO EN UN ARRAY/////////////////////////////////////////////////////////////////////////////////////////////
function recorrerArrayRegistro(_array, _correo, _dondeMostrar) {
  //Defino la variable resultado como falsa
  let resultado = false;

  //Recorro el array ingresado para buscar el correo
  //guardo cada posicion del array en una variable
  for (let i = 0; i < _array.length; i++) {
    let u = _array[i];

    //Si el parametro existe y es identico al ingresado retorno TRUE y finalizo mi busqeuda 
    //De lo contrario retorno FALSE uan vez haya recorrido todo el array
    if (u.correo === _correo) {
      resultado = true;
      mostrarValorInnerText(
        "Ya existe este usuario",
        _dondeMostrar);
      break;
    }
  }

  return resultado;
}

//FUNCION PARA VALIDAR CONTRASEÑA //////////////////////////////////////////////////////////////////////////////////////////////////
function validarContraseña(_contraseña, _dondeMostrar) {
  //Inicializo una variable mayuscula y otra numero asignadas en FALSE para validar los datos
  let mayuscula = false;
  let numero = false;
  let valido = false;
  let espacio = false;

  //Si el string ingresado tiene almenos 6 caracteres
  if (_contraseña.length >= 6) {
    //Recorro el array contraseña
    for (i = 0; i < _contraseña.length; i++) {
      //Si contiene una letra MAYUSCULA utilizando codigo ASCCI, le asigno a la variable mayuscula el valor TRUE
      if (_contraseña.charCodeAt(i) > 64 && _contraseña.charCodeAt(i) < 91) {
        mayuscula = true;
        break;
      }
    }

    //recorro el array constraseña nuevamente
    for (ii = 0; ii < _contraseña.length; ii++) {
      //Si contiene un número utilizando codigo ASCCI, le asigno a la variable número el valor TRUE
      if (_contraseña.charCodeAt(ii) > 47 && _contraseña.charCodeAt(ii) < 58) {
        numero = true;
        break;
      }

    }
    //recorro el array constraseña nuevamente
    for (iii = 0; iii < _contraseña.length; iii++) {
      //Si contiene un espacio utilizando codigo ASCCI, le asigno a la variable espacio el valor TRUE
      if (_contraseña.charCodeAt(iii) === 32) {
        espacio = true;
        break;
      }
    }

    //Si ambas variables son TRUE y la variable espacio es FALSE valido la contraseña asignandole true
    if (mayuscula && numero && espacio !== true) {
      valido = true;

      //De lo contrario muestro un mensaje de error
    } else {
      mostrarValorInnerText("La contraseña debe contener al menos una letra mayúscula y un número y no tener espacios", _dondeMostrar);
    }
    //retorno la validacion
    return valido;

    //Si el string tiene menos de 6 caracteres meustro un mensaje de error
  } else {
    mostrarValorInnerText("Por favor ingrese almenos 6 cáracteres", _dondeMostrar);
  }
}

//FUNCION PARA VALIDAR QUE AMBAS CONTRASEÑA SEAN IGUALES///////////////////////////////////////////////////////////////////////////////
function validarRepetirContraseña(_contraseña, _contraseña2, _dondeMostrar) {
  //inicializo la variable valido en false
  let valido = false;

  //Utilizando la funcion auxiliar verificarStringsExactmanteIguales si ambos string son iguales es valido y le asigno true
  if (verificarStringsExactmanteIguales(_contraseña, _contraseña2)) {
    valido = true;
    //De lo contrario muestro un mensaje de error
  } else {
    mostrarValorInnerText("Las contraseñas no coinciden, revise.", _dondeMostrar);
  }
  //retorno la validacion
  return valido;
}

//FUNCION PARA VALIDAR TELEFONO//////////////////////////////////////////////////////////////////////////////////////////////////
function validarTelefono(_celular, _dondeMostrar) {
  //Inicializo una variable numero y otra largo asignadas en FALSE para validar los datos
  let numero = false;
  let largo = false;
  let valido = false;

  //Utilizando la funcion auxiliar esNumeroPositivo valido que el valor ingresado sea un numero, de ser asi le asigno a la variable
  //numero el valor TRUE de lo contrario muestro un mensaje de error
  if (esNumeroPositivo(_celular)) {
    numero = true;
  } else {
    mostrarValorInnerText(
      "Por favor ingrese únicamente números.",
      _dondeMostrar
    );
  }

  //Si el largo del string ingresado es igual a 8 caracteres, de ser asi le asigno a la variable largo
  //el valor TRUE de lo contrario muestro un mensaje de error
  if (_celular.length === 8) {
    largo = true;
  } else {
    mostrarValorInnerText("Por favor ingrese 8 números.", _dondeMostrar);
  }

  //Si ambas variables son TRUE valido el numero de celular y limpio los mensajes de erores
  if (numero && largo) {
    valido = true;
    mostrarValorInnerText("", _dondeMostrar);
  }
  //retorno la validacion
  return valido;
}

//FUNCION PARA VALIDAR CORREO//////////////////////////////////////////////////////////////////////////////////////////////////
function validarCorreo(_correo, _dondeMostrar) {
  let valido = false;

  //Utilizo la funcion auxiliar para verificar que no existan espacios, si no existen espacios
  if (!tieneCaracter(_correo, " ")) {
    //Decreto variables, dividio en grupos de texto, antes del "@", entre el "@" y el "." y luego del "."
    //Decreto variables que me permitan modificarlas una vez encuentre los caracteres "@" y "."
    let stringAntesDeArroba = "";
    let encontrarArroba = false;
    let stringDespuesDeArroba = "";
    let encontrarPunto = false;
    let stringDespeusDePunto = "";

    //Recorro el correo agregando en un nuevo string todos los caracteres hasta encontrar el '@' 
    //Una vez que encuentro un '@' comienzo con el segundo 
    for (i = 0; i < _correo.length; i++) {
      if (encontrarArroba === false) {
        if (_correo[i] != "@") {
          stringAntesDeArroba += _correo[i];
        } else {
          encontrarArroba = true;
        }
        //Si no encuentro un '.' escribo esa variable en el segundo grupo
        //Una vez que encuentro un '.' comienzo con el tercer grupo
      } else if (encontrarPunto === false) {
        if (_correo[i] != ".") {
          stringDespuesDeArroba += _correo[i];
        } else {
          encontrarPunto = true;
        }
        //El resto de caracteres va a pertenecer tercer grupo
      } else {
        stringDespeusDePunto += _correo[i];
      }
    }

    //si los 3 strings cumplen con ser mayores que 1 los valido
    if (
      stringAntesDeArroba.length > 1 &&
      stringDespuesDeArroba.length > 1 &&
      stringDespeusDePunto.length > 1
    ) {
      valido = true;
      //si no son mayores a 1 caracter muestro mensaje de error
    } else {
      mostrarValorInnerText("El correo ingresado no es valido.", _dondeMostrar);
    }

    //Si tiene espacios muestro un mensaje de error
  } else {
    mostrarValorInnerText("El correo ingresado no es valido.", _dondeMostrar);
  }

  return valido;
}

//FUNCION PARA ARMAR MURO //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function armarMuro(_array) {
  //defino el html a mostrar vacio
  let htmlMuro = "";

  //defino el html a mostrar con el nombre de usuario vacio
  let htmlNombreUsuario = "";

  //si existe un usuario conectado creo en el html del nombre una frase de bienvenida con el nombre
  if (usuarioConectado !== undefined && usuarioConectado !== null) {
    htmlNombreUsuario += `<div>
    <h3 style="text-align:right; color:#1EA9D9";>Bienvenido, ${usuarioConectado.nombre}</h3>
    </div>`;
  }

  //recorro los inmuebles
  for (let i = 0; i < _array.length; i++) {
    //guardo el inmueble que estoy recorriendo en una variable
    let inmueble = _array[i];

    // //si está habilitado para estar en el muro lo creo en el html del muro a cada uno
    if (inmueble.habilitado) {
      htmlMuro += `<div>
          <hr>
          <hr>
          <div>
            <h2>${inmueble.titulo}</h2>
            <h4><strong>${moneda} ${obtenerPrecio(inmueble.precioXNoche)}</strong> por noche</h4>
            <img src="./imgs/inmuebles/${inmueble.fotos[0]}" alt="${inmueble.nombre}">
            <div>
                <label><strong>${inmueble.ciudad}</strong></label><label class="calificacion">Calificación: <strong>${inmueble.promCalificacion}</strong></label>
            </div>
            <p>
            ${inmueble.descripcion}
            </p>
            <p class="ver-mas" id="verMas${i}">
                Ver más...
            <hr>
            </div>`;
    }

    //muestro los dos html en los mensajes correspondientesd
    mostrarValorInnerHTML(htmlNombreUsuario, "msgNombreUsuario");
    mostrarValorInnerHTML(htmlMuro, "msgMuro");
  }

  //selecciono todos los botones ver mas
  let botones = document.querySelectorAll(".ver-mas");
  //recorro esa colección de botones y para cada uno le asigno el evento Ver Mas
  for (let i = 0; i < botones.length; i++) {
    let boton = botones[i];
    boton.addEventListener("click", btnVerMasHandler);
  }
}

//FUNCION PARA ARMAR HISTORIAL DE RESERVAS ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function armarHistorialReservas(_usuarioConectado) {

  //defino el html a mostrar vacio
  let htmlHistorial = "";

  //recorro las reservas del usuario conectado
  for (let r = 0; r < _usuarioConectado.reservas.length; r++) {

    //asigno cada reserva a una variable
    let reserva = _usuarioConectado.reservas[r];

    //si el array de reservas es distinto de vacio muestro la info de cada reserva
    if (reserva != []) {
      htmlHistorial += `   
        <tr> 
          <td>
            <img src="./imgs/inmuebles/${reserva.inmueble.fotos[0]}" alt="${reserva.inmueble.nombre}">
          </td>
          <td>
            ${reserva.inmueble.titulo}
          </td>
          <td>
            <p id="msgCalificacion${r}">${reserva.calificacion}</p>
            <input type="text" id="txtCalificacion${r}" placeholder="Ingrese una número entre 1 y 5">
          </td>
          <td>
            <input type="button" class="btnCalificar" id="btnCalificar${r}" value="Calificar">
          </td>
        </tr> 
      `;
      //selecciono la seccion del body de la tabla y le imprimo el html
      document.querySelector("#tablaHistorial tbody").innerHTML = htmlHistorial;
      //sino le muestro que no tiene reservas
    } else {
      mostrarValorInnerText("Usted no tiene reservas", "msgHistorial");
    }
  }

  //selecciono todos los botones calificar creados dinamicamente con el html
  let botonesCalificar = document.querySelectorAll(".btnCalificar");

  //recorro los botones y les agrego la funcionalidad 
  for (i = 0; i < botonesCalificar.length; i++) {
    let boton = botonesCalificar[i];
    boton.addEventListener('click', btnCalificarHandler);
  }

  //recorro las reservas el usuario conectado
  for (i = 0; i < usuarioConectado.reservas.length; i++) {

    //si la calificacion s igual a 0 muestro el texto para ingresar calificacion y el boton y oculto el mensaje
    if (usuarioConectado.reservas[i].calificacion === 0) {

      document.getElementById(`txtCalificacion${i}`).style.display = "block";
      document.getElementById(`btnCalificar${i}`).style.display = "block";
      document.getElementById(`msgCalificacion${i}`).style.display = "none";

      //si la calificacion no es igual a 0 ya esta calificado y oculto el boton y el campo de texto y muestro la calificacion
    } else {

      document.getElementById(`txtCalificacion${i}`).style.display = "none";
      document.getElementById(`btnCalificar${i}`).style.display = "none";
      document.getElementById(`msgCalificacion${i}`).style.display = "block";
    }
  }

}

//FUNCION PARA ARMAR VER MAS DE INMUEBLE SIN CARRUSEL DE FOTOS /////////////////////////////////////////////////////////////////////////////////////////////
function armarVerMasInmueble(_inmuebleActivo) {

  //defino el html a mostrar vacio
  let htmlVerMas = "";

  //selecciono todas las imagenes
  let imgElement = document.querySelector(".img-container img");

  //les asigno la fuente al array de fotos del inmueble activo
  imgElement.src = `./imgs/inmuebles/${_inmuebleActivo.fotos[posicionGaleria]}`;

  //muestro la informacion del inmueble activo
  htmlVerMas += `<div>           
    <div>
    <h2>${_inmuebleActivo.titulo}</h2>
    <h4><strong>${moneda} ${obtenerPrecio(_inmuebleActivo.precioXNoche)}</strong> por noche</h4>
    <div>
        <label><strong>${_inmuebleActivo.ciudad}</strong></label><label class="duracion">
        <br></label>
        <br>
        <label>Calificación: <strong>${_inmuebleActivo.promCalificacion}</strong></label>
    </div>
    <p>
    ${_inmuebleActivo.descripcion}
    </p>
    </div>`;

  mostrarValorInnerHTML(htmlVerMas, "msgVerMas");
}


//FUNCION PARA ARMAR LISTADO DE INMUEBLES DEL ANFITRION /////////////////////////////////////////////////////////////////////////////////////////////
function armarListadoInmueblesDelAnfitrion() {

  //defino el html a mostrar vacio
  let htmlListadoAnfitrion = "";

  //recorro los inmuebles del usuario conectado 
  for (i = 0; i < usuarioConectado.inmuebles.length; i++) {

    //asigno cada posicion a la variable inmueble
    let inmueble = usuarioConectado.inmuebles[i];

    //agrego la info de cada inmueble en el html
    htmlListadoAnfitrion += `<div>
    <hr>
    <hr>
    <div>
      <h2>${inmueble.titulo}</h2>
      <h4><strong>UY ${inmueble.precioXNoche}</strong> por noche</h4>
      <img src="./imgs/inmuebles/${inmueble.fotos[0]}" alt="${inmueble.nombre}">
      <div>
        <label><strong>${inmueble.ciudad}</strong></label><label class="calificacion">Calificación: <strong>${inmueble.promCalificacion}</strong></label>
      </div>
      <p>
      ${inmueble.descripcion}
      </p>
      <br>
      <input type="button" value="Habilitar" class="btnHabilitarInmueble" id="btnHabilitarInmueble${i}">
      <input type="button" value="Deshabilitar" class="btnDeshabilitarInmueble" id="btnDeshabilitarInmueble${i}">
      <hr>
    </div>`;
  }

  mostrarValorInnerHTML(htmlListadoAnfitrion, "msgListadoAnfitrion");

  //selecciono los botones habilitar y deshabilitar
  let botonesHabilitar = document.querySelectorAll(".btnHabilitarInmueble");
  let botonesDeshabilitar = document.querySelectorAll(".btnDeshabilitarInmueble");

  //recorro los inmuebles del usuario conectado
  for (i = 0; i < usuarioConectado.inmuebles.length; i++) {

    //si el inmueble esta habilitado muestro el deshabilitar y oculto el habilitar
    if (usuarioConectado.inmuebles[i].habilitado) {

      document.getElementById(`btnDeshabilitarInmueble${i}`).style.display = "block";
      document.getElementById(`btnHabilitarInmueble${i}`).style.display = "none";

      //sino oculto el deshabilitar y muestro el habilitar
    } else {

      document.getElementById(`btnDeshabilitarInmueble${i}`).style.display = "none";
      document.getElementById(`btnHabilitarInmueble${i}`).style.display = "block";
    }
  }

  //recorro los botones de habilitar y les asigno la funcionalidad
  for (i = 0; i < botonesHabilitar.length; i++) {
    let boton = botonesHabilitar[i];
    boton.addEventListener('click', btnHabilitarInmuebleHandler);
  }

  //recorro los botones de deshabilitar y les asigno la funcionalidad
  for (i = 0; i < botonesDeshabilitar.length; i++) {
    let boton = botonesDeshabilitar[i];
    boton.addEventListener('click', btnDeshabilitarInmuebleHandler);
  }
}


//FUNCION PARA ARMAR REPORTE DEL ADMINISTRADOR/////////////////////////////////////////////////////////////////////////////////////////////
function armarReporte(_array) {

  //defino el html a mostrar vacio
  let htmlReporte = `<table border="1" id="tablaReporte">
  <tbody>`;


  //recorro el parametro array y si la propiedad habilitada es true lo muestro en el html creado dinamicamente
  for (i = 0; i < _array.length; i++) {
    if ((_array[i].habilitado = true)) {
      htmlReporte += `
            <tr>
            <td>${_array[i].titulo}</td>
            <td>UY ${_array[i].precioXNoche}</td>
            </tr>
         `;
    }
  }

  htmlReporte += `</tbody>
  </table>`;

  document.querySelector("#divReportes").innerHTML = htmlReporte;
}


//FUNCION PARA SUSTITUIR CARACTERES CON TILDE /////////////////////////////////////////////////////////////////////////////////////////////
function eliminarTildes(_texto) {
  //defino el nuevo texto vacio
  let nuevoTexto = "";

  //recorro el parametro ingresado y si encuentra caracteres comn tilde los sustituye por su caracter sin tilde
  for (let i = 0; i < _texto.length; i++) {
    switch (_texto[i]) {
      case "á":
        nuevoTexto += "a";
        break;
      case "é":
        nuevoTexto += "e";
        break;
      case "í":
        nuevoTexto += "i";
        break;
      case "ó":
        nuevoTexto += "o";
        break;
      case "ú":
        nuevoTexto += "u";
        break;
      case "ü":
        nuevoTexto += "u";
        break;
      default:
        nuevoTexto += _texto[i];
    }
  }

  //retorno el nuevo texto
  return nuevoTexto;
}

//FUNCION PARA ORDENAR POR CALIFICACION ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ordenarPorCalificacion(_a, _b) {

  //defino la ponderacion
  let ponderacion;

  //comparo los 2 parametros y si el primero es mayor que el primero le asigno -1 para que lo tome primero
  if (_a.promCalificacion < _b.promCalificacion) {
    ponderacion = 1;
    //si no es mayor le asigno 1 para que no lo pondere
  } else {
    ponderacion = -1;
  }

  //retorno la ponderacion
  return ponderacion;
}

//FUNCION PARA ORDENAR POR PRECIO ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ordenarPorPrecio(_a, _b) {

  //defino la ponderacion
  let ponderacion;

  //comparo los 2 parametros y si el primero es mayor que el primero le asigno -1 para que lo tome primero
  if (_a.precioXNoche > _b.precioXNoche) {
    ponderacion = 1;
    //si no es mayor le asigno 1 para que no lo pondere
  } else {
    ponderacion = -1;
  }

  //retorno la ponderacion
  return ponderacion;
}


//FUNCION PARA MOSTRAR PANTALLA ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function mostrarPantalla(_pantalla) {

  //defino la variable pantallas con todas las pantallas seleccionadas
  let pantallas = document.querySelectorAll(".pantalla");

  //para cada una de las pantallas, modifico su display para ocultarlas
  for (let i = 0; i < pantallas.length; i++) {
    let p = pantallas[i];
    p.style.display = "none";
  }
  //utilizo el valor del parametero _pantalla para concatenarlo al prefijo div, para seleccionar el div correspondiente y mostrarlo
  document.getElementById(`div${_pantalla}`).style.display = "block";
}


//FUNCIONES PARA MENU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//selecciono todos los items del menu
let itemsMenu = document.querySelectorAll(".menu-item");
//los recorro y cargo la funcionalidad para todos
for (let i = 0; i < itemsMenu.length; i++) {
  itemsMenu[i].addEventListener("click", menuItemHandler);
}

//selecciono todos los items del submenu
let itemsSubMenu = document.querySelectorAll(".menu-sub-item");
//los recorro y cargo la funcionalidad para todos
for (let i = 0; i < itemsSubMenu.length; i++) {
  itemsSubMenu[i].addEventListener("click", menuSubItemHandler);
}


//VIDA A "BOTONES" MENU /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//función de handler del item del menú
function menuItemHandler() {
  //utilizo el id del menu apretado para tomar el substring con el nombre
  //de la pantalla que dejé preparado en el 'li' del html
  let nombrePantalla = this.id.substr(4);

  //muestro esa pantalla
  mostrarPantalla(nombrePantalla);

  mostrarValorInnerText("", "msgRegistroInmueble");
  mostrarValorInnerText("", "msgAltaAnfitrion");
  mostrarValorInnerText("", "msgConfirmacion");

}


function menuSubItemHandler() {
  //utilizo el id del menu apretado para tomar el substring con el nombre
  //de la pantalla que dejé preparado en el 'li' del html
  let nombrePantalla = this.id.substr(4);

  //muestro esa pantalla
  mostrarPantalla(nombrePantalla);

  mostrarValorInnerText("", "msgLogin");
  mostrarValorInnerText("", "msgRegistro");
}


//ARMAR MENU /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//función encargada de armar el menú
function armarMenu() {

  //selecciono todos los elementos con clase menu-item
  //que previamente dispuse en el html (ver index.html)
  let itemsMenu = document.querySelectorAll('.menu-item');

  //variable local de items a mostrar
  let itemsMenuAMostrar;

  //oculto todos los items con mi función auxiliar
  ocultar(itemsMenu);

  //selecciono todos los items del menú alternativo
  let itemsMenuSub = document.querySelectorAll('.menu-sub-item')

  //los oculto
  ocultar(itemsMenuSub);

  //si la variable usuarioConectado tiene no es indeterminada ni null
  if (usuarioConectado !== undefined && usuarioConectado !== null) {
    //selecciono los items con el atributo class correspondiente al rol del usuario conectado
    itemsMenuAMostrar = document.querySelectorAll(`.${usuarioConectado.rol}`);
  } else {
    //sino selecciono solo los items del invitado
    itemsMenuAMostrar = document.querySelectorAll('.Visitante');
  }
  //muestro con mi función auxiliar los items seleccionados
  mostrar(itemsMenuAMostrar)
}

//FUNCION PARA MODIFICAR PRECIO///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function obtenerPrecio(_precioXnoche) {

  //defino la variable
  let precioAMostrar;

  //si la moneda es pesos
  if (moneda === "UY") {
    //es el mismo precio
    precioAMostrar = _precioXnoche;
  } else {
    //sino la moneda es dólares y el precio es importe * corización
    precioAMostrar = (_precioXnoche / cotizacionDolar).toFixed(2);
  }
  //retorno precio
  return precioAMostrar;
}

//FUNCION PARA ARMAR SELECTOR DE IMAGENES///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function armarSeleccionImagenesInmuebles() {

  //Declaro una variable vacia para almacenar luego las imagens disponibles
  let htmlOpciones = "";

  //Recorro el array que contiene las imagenes disponibels para un inmueble nuevo y creo el html de cada una como 
  //opcion para el selector
  for (let i = 0; i < arraySeleccionImagenes.length; i++) {
    htmlOpciones += `<option value='${arraySeleccionImagenes[i]}'>${arraySeleccionImagenes[i]}</option>`;
  }
  //selecciono el selector y le cargo las opciones de imagenes
  document.getElementById("slcFotos").innerHTML = htmlOpciones;
}

//FUNCION LIMPIAR CAMPOS///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function limpiarCamposPantalla(_pantalla) {
  //selecciono todos los campos de tipo texto, tipo password y tipo textarea 
  let camposABorrar = document.querySelectorAll(`#${_pantalla} input[type=text], #${_pantalla} input[type=password], #${_pantalla} input[type=textarea]`)

  //recorro todos los campos seleccionados y los vacío
  for (let i = 0; i < camposABorrar.length; i++) {
    camposABorrar[i].value = '';
  }
}

