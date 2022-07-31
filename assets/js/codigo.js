
//ordeno el array de inmuebles por la calificacion como orden por defecto
arrayInmuebles.sort(ordenarPorCalificacion);

//Inicializo la App
iniciarApp();

let arraySeleccionado = arrayInmuebles;

//función que se ejecuta al inicio del programa.
function iniciarApp() {

  armarMenu();

  mostrarPantalla("Home");

  armarMuro(arrayInmuebles);

  armarSeleccionImagenesInmuebles();

  //preparo botones disponibles en el home para el visitante
  document
    .getElementById("btnLogin")
    .addEventListener("click", btnLoginHandler);
  document
    .getElementById("btnRegistrarHuesped")
    .addEventListener("click", btnRegistrarHuespedHandler);
  document
    .getElementById("btnAltaAnfitrion")
    .addEventListener("click", btnAltaAnfitrionHandler);
  document
    .querySelector(".label-moneda")
    .addEventListener("click", labelMonedaHandler);
  document
    .getElementById("itemHome")
    .addEventListener("click", itemHomeHandler);
  document
    .getElementById("btnRegistrarInmueble")
    .addEventListener("click", btnRegistrarInmuebleHandler);
  document
    .getElementById("btnReserva")
    .addEventListener("click", btnReservarHandler);
  document
    .getElementById("btnConfirmar")
    .addEventListener("click", btnConfirmarHandler);
  document
    .getElementById("btnTipoDeCambio")
    .addEventListener("click", btnCargarCotizacionHandler);
  document
    .getElementById("btnDesdeHasta")
    .addEventListener("click", btnFiltrarDesdeHastaHandler);
  document
    .getElementById("btnOrdenar")
    .addEventListener("click", btnOrdenarHandler);
  document
    .getElementById("btnBuscar")
    .addEventListener("click", btnBuscarHandler);
  document
    .getElementById("btnAnteriorGaleria")
    .addEventListener("click", btnGaleriaAnteriorHandler);
  document
    .getElementById("btnSiguienteGaleria")
    .addEventListener("click", btnGaleriaSiguienteHandler);
  document
    .getElementById("itemLogout")
    .addEventListener("click", itemLogOutHandler);
  document
    .getElementById("btnAgregarFoto")
    .addEventListener("click", btnGuardarImagenesSlcHandler);


}














