class Inmueble {
  titulo;
  descripcion;
  ciudad;
  precioXNoche;
  fotos;
  anfitrion;
  habilitado;
  puntaje;
  cantidad;
  promCalificacion;


  constructor(_titulo, _descripcion, _ciudad, _precioXnoche, _fotos, _anfitrion, _puntaje, _cantidad) {
    this.titulo = _titulo;
    this.descripcion = _descripcion;
    this.ciudad = _ciudad;
    this.precioXNoche = _precioXnoche;
    this.fotos = _fotos;
    this.anfitrion = _anfitrion;
    this.habilitado = true;
    this.puntaje = Number(_puntaje);
    this.cantidad = Number(_cantidad);
    this.promCalificacion = Number((_puntaje / _cantidad)).toFixed(2)

  }
}

class Admin {
  correo;
  password;
  rol;

  constructor(_correo, _password, _rol) {
    this.correo = _correo;
    this.password = _password;
    this.rol = _rol;
  }
}



class Huesped {
  nombre;
  apellido;
  correo;
  celular;
  password;
  reservas;
  conectado;
  rol;

  constructor(_nombre, _apellido, _correo, _celular, _password) {
    this.nombre = _nombre;
    this.apellido = _apellido;
    this.correo = _correo;
    this.celular = _celular;
    this.password = _password;
    this.reservas = [];
    this.conectado = false;
    this.rol = "Huesped"
  }
}

class Anfitrion {
  nombre;
  apellido;
  correo;
  celular;
  password;
  inmuebles;
  conectado;
  rol;

  constructor(_nombre, _apellido, _correo, _celular, _password) {
    this.nombre = _nombre;
    this.apellido = _apellido;
    this.correo = _correo;
    this.celular = _celular;
    this.password = _password;
    this.inmuebles = [];
    this.conectado = false;
    this.rol = "Anfitrion"

  }
}

class Reserva {
  dias;
  inmueble;
  calificacion;

  constructor(_dias, _inmueble) {
    this.dias = _dias;
    this.inmueble = _inmueble;
    this.calificacion = 0;
  }
}

