//VARIABLES GLOBALES//////////////////////////////////////////////////////////////////////////////////
let reservaActiva;
let inmuebleActivo;

let usuarioConectado;

let arrayInmuebles = [];
let arrayHuespedes = [];
let arrayAnfitriones = [];
let arrayAdmin = [];

let cotizacionDolar = 40;
let moneda = 'UY';

let arraySeleccionImagenes = ['inmueble30-1.jpg', 'inmueble30-2.jpg', 'inmueble30-3.jpg', 'inmueble30-4.jpg', 'inmueble30-5.jpg', 'inmueble30-6.jpg'];
let arrayImagenesSeleccionadas = [];
let posicionGaleria = 0;

// ADMINISTRADOR /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

arrayAdmin.push(
  new Admin(
    "admin",
    "1234",
    "Administrador",
  )
);

// INMUEBLES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

arrayInmuebles.push(
  new Inmueble(
    "Melinas",
    "Recientemente construida con requisitos de alto estándar, nuestra casa de diseño moderno se encuentra en el corazón de la ciudad de Mykonos, al lado de la plaza Manto.",
    "Mykonos",
    2255,
    [
      "inmueble01-1.jpg",
      "inmueble01-2.jpg",
      "inmueble01-3.jpg",
      "inmueble01-4.jpg",
    ],
    arrayAnfitriones[0],
    20,
    5,
  )
);

arrayInmuebles.push(
  new Inmueble(
    "La Casita",
    "La Casita Hua Hin es una elegante residencia en el centro de la ciudad con encantadoras instalaciones.",
    "Hua Hin",
    1450,
    [
      "inmueble02-1.jpg",
      "inmueble02-2.jpg",
      "inmueble02-3.jpg",
      "inmueble02-4.jpg",
    ],
    arrayAnfitriones[0],
    50,
    15,
  )
);

arrayInmuebles.push(
  new Inmueble(
    "Birgu Lodge Palazzino",
    "Un apartamento Palazzino con acabados de diseño situado en la calle más prolífica en el corazón de la histórica ciudad portuaria de Vittoriosa. Incluyendo una terraza en la azotea, con muebles de exterior, jacuzzi y una vista espectacular sobre el gran puerto. ¡Aire acondicionado incluido!",
    "Vittoriosa",
    1575,
    [
      "inmueble03-1.jpg",
      "inmueble03-2.jpg",
      "inmueble03-3.jpg",
      "inmueble03-4.jpg",
    ],
    arrayAnfitriones[1],
    50,
    12,
  )
);

arrayInmuebles.push(
  new Inmueble(
    "Studio Apartment",
    "Cómodo, armonioso y equipado estudio ubicado cerca del centro de Cancún.",
    "Cancun",
    1119,
    [
      "inmueble04-1.jpg",
      "inmueble04-2.jpg",
      "inmueble04-3.jpg",
      "inmueble04-4.jpg",
    ],
    arrayAnfitriones[1],
    66,
    14,
  )
);

arrayInmuebles.push(
  new Inmueble(
    "Beachfront Apartment",
    "Un lugar tranquilo para disfrutar del Sol, arena y mar. A tan solo 5 minutos caminando del ferry a Isla Mujeres",
    "Cancun",
    3423,
    [
      "inmueble05-1.jpg",
      "inmueble05-2.jpg",
      "inmueble05-3.jpg",
      "inmueble05-4.jpg",
    ],
    arrayAnfitriones[2],
    98,
    45,
  )
);

arrayInmuebles.push(
  new Inmueble(
    "Semana Santa Mayan Palace",
    "Un lugar tranquilo para disfrutar de la playa y mar. A tan solo 10 minutos caminando del ferry a Isla Mujeres",
    "Cancun",
    99999999999,
    [
      "inmueble06-1.jpg",
      "inmueble06-2.jpg",
      "inmueble06-3.jpg",
      "inmueble06-4.jpg",
    ],
    arrayAnfitriones[2],
    170,
    41,
  )
);

arrayInmuebles.push(
  new Inmueble(
    "Shun Chin Apartment",
    "Apartamento minimalista ubicado en el centro de Cantón ideal para vaijes de negocios",
    "Cantón",
    3200,
    [
      "inmueble07-1.jpg",
      "inmueble07-2.jpg",
      "inmueble07-3.jpg",
      "inmueble07-4.jpg",
    ],
    arrayAnfitriones[3],
    200,
    48,
  )
);

arrayInmuebles.push(
  new Inmueble(
    "Private Studio Ocean",
    "Apartamento ideal para pasar las vacaciones en pareja o en familia, a pocos metros de la playa",
    "Honolulu",
    1120,
    [
      "inmueble08-1.jpg",
      "inmueble08-2.jpg",
      "inmueble08-3.jpg",
      "inmueble08-4.jpg",
    ],
    arrayAnfitriones[3],
    250,
    56,
  )
);

arrayInmuebles.push(
  new Inmueble(
    "Penthouse Panoramic",
    "Apartamento de lujo con vistas inigualables a pocos metros de la playa",
    "Honolulu",
    4227,
    [
      "inmueble09-1.jpg",
      "inmueble09-2.jpg",
      "inmueble09-3.jpg",
      "inmueble09-4.jpg",
    ],
    arrayAnfitriones[4],
    100,
    22,
  )
);

arrayInmuebles.push(
  new Inmueble(
    "Apartamento Lujoso y Moderno",
    "Apartamento equipado, a pocos metros de los lugares mas emblematicos de la isla",
    "Honolulu",
    2345,
    [
      "inmueble10-1.jpg",
      "inmueble10-2.jpg",
      "inmueble10-3.jpg",
      "inmueble10-4.jpg",
    ],
    arrayAnfitriones[4],
    50,
    12,
  )
);

arrayInmuebles.push(
  new Inmueble(
    "Cabaña en bosque y mar",
    "Casita en el bosque situada en Ocean Park, un balneario con un entorno mágico, muy tranquilo, ideal para descansar y estar en contacto con la naturaleza",
    "Laguna del Sauce",
    2478,
    [
      "inmueble11-1.jpg",
      "inmueble11-2.jpg",
      "inmueble11-3.jpg",
      "inmueble11-4.jpg",
    ],
    arrayAnfitriones[5],
    120,
    25,
  )
);

arrayInmuebles.push(
  new Inmueble(
    "Casa familiar",
    "Casa super comoda para pasar unos días en familia, a pocos minutos del mar y de la laguna",
    "Laguna del Sauce",
    1648,
    [
      "inmueble12-1.jpg",
      "inmueble12-2.jpg",
      "inmueble12-3.jpg",
      "inmueble12-4.jpg",
    ],
    arrayAnfitriones[5],
    115,
    24,
  )
);

arrayInmuebles.push(
  new Inmueble(
    "Cabaña en el bosque",
    "Cabaña ideal para desconectase de la ciudad por un fin de semana en pareja o en familia",
    "Laguna del Sauce",
    3456,
    [
      "inmueble13-1.jpg",
      "inmueble13-2.jpg",
      "inmueble13-3.jpg",
      "inmueble13-4.jpg",
    ],
    arrayAnfitriones[6],
    90,
    18,
  )
);

arrayInmuebles.push(
  new Inmueble(
    "Monoambiente muy bien ubicado",
    "Reciclado, pequeño y cálido, cuenta como equipamiento con lcd con cable, wifi, heladera frigobar, ropa blanca y toallones",
    "Mar del Plata",
    2106,
    [
      "inmueble14-1.jpg",
      "inmueble14-2.jpg",
      "inmueble14-3.jpg",
      "inmueble14-4.jpg",
    ],
    arrayAnfitriones[6],
    75,
    18,
  )
);

arrayInmuebles.push(
  new Inmueble(
    "Loft en Uka Mana Hotel Boutique",
    "Hermosos y nuevos loft que pertenecen al Hotel Boutique Uka Mana, completamente equipados con cocina",
    "Isla de Pascuas",
    3240,
    [
      "inmueble15-1.jpg",
      "inmueble15-2.jpg",
      "inmueble15-3.jpg",
      "inmueble15-4.jpg",
    ],
    arrayAnfitriones[7],
    85,
    24,
  )
);

arrayInmuebles.push(
  new Inmueble(
    "La Guarida",
    "La Guarida, tal como su nombre lo indica, está pensada para ser un refugio en las sierras. Nuestro Domo es un combo perfecto entre un espacio confortable y la integración ideal con el entorno",
    "Villa Serrana",
    2970,
    [
      "inmueble16-1.jpg",
      "inmueble16-2.jpg",
      "inmueble16-3.jpg",
      "inmueble16-4.jpg",
    ],
    arrayAnfitriones[7],
    350,
    100,
  )
);

arrayInmuebles.push(
  new Inmueble(
    "Nónsteinn",
    "Casa para perderse en el medio de islandia y disfrutar de las auroras",
    "Grundarfjörður",
    4370,
    [
      "inmueble17-1.jpg",
      "inmueble17-2.jpg",
      "inmueble17-3.jpg",
      "inmueble17-4.jpg",
    ],
    arrayAnfitriones[8],
    80,
    17,
  )
);

arrayInmuebles.push(
  new Inmueble(
    "Casa en el árbol",
    "Hermosa casa situada en la copa de los arboles en el medio de la Rusia profunda",
    "Runeshke",
    3540,
    [
      "inmueble18-1.jpg",
      "inmueble18-2.jpg",
      "inmueble18-3.jpg",
      "inmueble18-4.jpg",
    ],
    arrayAnfitriones[8],
    150,
    32,
  )
);

arrayInmuebles.push(
  new Inmueble(
    "Iglú super frío",
    "Oportunidad unica de pasar una noche en un Iglú autentico",
    "Desconocido",
    4540,
    [
      "inmueble19-1.jpg",
      "inmueble19-2.jpg",
      "inmueble19-3.jpg",
      "inmueble19-4.jpg",
    ],
    arrayAnfitriones[9],
    120,
    35,
  )
);

arrayInmuebles.push(
  new Inmueble(
    "Apartamento Nordico",
    "Hermosa casa siituada en los fiordos noruegos sostenida sobre arboles, con vistas increibles",
    "Sandane",
    4520,
    [
      "inmueble20-1.jpg",
      "inmueble20-2.jpg",
      "inmueble20-3.jpg",
      "inmueble20-4.jpg",
    ],
    arrayAnfitriones[9],
    210,
    51,
  )
);

// HUESPEDES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


arrayHuespedes.push(new Huesped(
  "Pablo",
  "Cabrera",
  "pablocabrera@gmail.com",
  99123456,
  "Pablo1234",
  []
));
arrayHuespedes[0].reservas.push(new Reserva(7, arrayInmuebles[4], 5))
arrayHuespedes[0].reservas.push(new Reserva(7, arrayInmuebles[5], 0))
arrayHuespedes[0].reservas.push(new Reserva(7, arrayInmuebles[10], 0))

arrayHuespedes.push(new Huesped(
  "Nicolas",
  "Fernandez",
  "nicolasfernandez@gmail.com",
  99456123,
  "Nico1234",
  []
));
arrayHuespedes[1].reservas.push(new Reserva(7, arrayInmuebles[0], 4))
arrayHuespedes[1].reservas.push(new Reserva(7, arrayInmuebles[1], 0))
arrayHuespedes[1].reservas.push(new Reserva(7, arrayInmuebles[11], 0))

arrayHuespedes.push(new Huesped(
  "Sebastian",
  "Paulos",
  "sebastianpaulos@gmail.com",
  99456789,
  "Seba1234",
  []
));
arrayHuespedes[2].reservas.push(new Reserva(7, arrayInmuebles[2], 3))
arrayHuespedes[2].reservas.push(new Reserva(7, arrayInmuebles[3], 0))
arrayHuespedes[2].reservas.push(new Reserva(7, arrayInmuebles[12], 0))

arrayHuespedes.push(new Huesped(
  "Gabriel",
  "Arce",
  "gabrielarce@gmail.com",
  99789456,
  "Gabi1234",
  []
));
arrayHuespedes[3].reservas.push(new Reserva(7, arrayInmuebles[6], 5))
arrayHuespedes[3].reservas.push(new Reserva(7, arrayInmuebles[7], 0))
arrayHuespedes[3].reservas.push(new Reserva(7, arrayInmuebles[13], 0))

arrayHuespedes.push(new Huesped(
  "Daniel",
  "Gimenez",
  "adriangimenez@gmail.com",
  99861226,
  "Dani1234",
  []
));
arrayHuespedes[4].reservas.push(new Reserva(7, arrayInmuebles[8], 4))
arrayHuespedes[4].reservas.push(new Reserva(7, arrayInmuebles[9], 0))
arrayHuespedes[4].reservas.push(new Reserva(7, arrayInmuebles[14], 0))

arrayHuespedes.push(new Huesped(
  "Fernanda",
  "Rodriguez",
  "fernandarodriguez@gmail.com",
  98943588,
  "Fer1234",
  []
));
arrayHuespedes[5].reservas.push(new Reserva(7, arrayInmuebles[0], 3))
arrayHuespedes[5].reservas.push(new Reserva(7, arrayInmuebles[9], 0))
arrayHuespedes[5].reservas.push(new Reserva(7, arrayInmuebles[15], 0))

arrayHuespedes.push(new Huesped(
  "Agustina",
  "Rodriguez",
  "agustinarodriguez@gmail.com",
  91266007,
  "Agus1234",
  []
));
arrayHuespedes[6].reservas.push(new Reserva(7, arrayInmuebles[1], 5))
arrayHuespedes[6].reservas.push(new Reserva(7, arrayInmuebles[8], 0))
arrayHuespedes[6].reservas.push(new Reserva(7, arrayInmuebles[16], 0))

arrayHuespedes.push(new Huesped(
  "Sofia",
  "Cabrera",
  "sofiacabrera@gmail.com",
  94010791,
  "Sofi1234",
  []
));
arrayHuespedes[7].reservas.push(new Reserva(7, arrayInmuebles[2], 4))
arrayHuespedes[7].reservas.push(new Reserva(7, arrayInmuebles[7], 0))
arrayHuespedes[7].reservas.push(new Reserva(7, arrayInmuebles[17], 0))

arrayHuespedes.push(new Huesped(
  "Ana",
  "Dominguez",
  "anadominguez@gmail.com",
  99269944,
  "Ana1234",
  []
));
arrayHuespedes[8].reservas.push(new Reserva(7, arrayInmuebles[3], 3))
arrayHuespedes[8].reservas.push(new Reserva(7, arrayInmuebles[6], 0))
arrayHuespedes[8].reservas.push(new Reserva(7, arrayInmuebles[18], 0))

arrayHuespedes.push(new Huesped(
  "andrea",
  "Scarone",
  "Andreascarone@gmail.com",
  94239482,
  "Andre1234",
  []
));
arrayHuespedes[9].reservas.push(new Reserva(7, arrayInmuebles[4], 4))
arrayHuespedes[9].reservas.push(new Reserva(7, arrayInmuebles[5], 0))
arrayHuespedes[9].reservas.push(new Reserva(7, arrayInmuebles[19], 0))


// ANFITRIONES ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

arrayAnfitriones.push(new Anfitrion(
  "Luis",
  "Mora",
  "luismora@gmail.com",
  97093808,
  "Luis1234",
  [],
));
arrayAnfitriones[0].inmuebles.push(arrayInmuebles[0]);
arrayAnfitriones[0].inmuebles.push(arrayInmuebles[1]);


arrayAnfitriones.push(new Anfitrion(
  "Adrian",
  "Cabrera",
  "adriancabrera@gmail.com",
  99729308,
  "Adrian1234",
  [],
));
arrayAnfitriones[1].inmuebles.push(arrayInmuebles[2]);
arrayAnfitriones[1].inmuebles.push(arrayInmuebles[3]);

arrayAnfitriones.push(new Anfitrion(
  "Bautista",
  "Cabrera",
  "bautistacabrera@gmail.com",
  99123456,
  "Bauti1234",
  [],
));
arrayAnfitriones[2].inmuebles.push(arrayInmuebles[4]);
arrayAnfitriones[2].inmuebles.push(arrayInmuebles[5]);

arrayAnfitriones.push(new Anfitrion(
  "Macarena",
  "Cataldo",
  "macarenacataldo@gmail.com",
  95308992,
  "Maca1234",
  [],
));
arrayAnfitriones[3].inmuebles.push(arrayInmuebles[6]);
arrayAnfitriones[3].inmuebles.push(arrayInmuebles[7]);

arrayAnfitriones.push(new Anfitrion(
  "Marcos",
  "Piana",
  "marcospiana@gmail.com",
  98044474,
  "Marcos1234",
  [],
));
arrayAnfitriones[4].inmuebles.push(arrayInmuebles[8]);
arrayAnfitriones[4].inmuebles.push(arrayInmuebles[9]);

arrayAnfitriones.push(new Anfitrion(
  "Martin",
  "Bula",
  "martinbula@gmail.com",
  92199394,
  "Martin1234",
  [],
));
arrayAnfitriones[5].inmuebles.push(arrayInmuebles[10]);
arrayAnfitriones[5].inmuebles.push(arrayInmuebles[11]);

arrayAnfitriones.push(new Anfitrion(
  "Matias",
  "Aleman",
  "matiasaleman@gmail.com",
  98537018,
  "Matias1234",
  [],
));
arrayAnfitriones[6].inmuebles.push(arrayInmuebles[12]);
arrayAnfitriones[6].inmuebles.push(arrayInmuebles[13]);

arrayAnfitriones.push(new Anfitrion(
  "Mercedes",
  "Badaro",
  "mercedesbadaro@gmail.com",
  98245803,
  "Meche1234",
  [],
));
arrayAnfitriones[7].inmuebles.push(arrayInmuebles[14]);
arrayAnfitriones[7].inmuebles.push(arrayInmuebles[15]);

arrayAnfitriones.push(new Anfitrion(
  "Nicolas",
  "Nunez",
  "nicolasnunez@gmail.com",
  95848719,
  "Nico1234",
  [],
));
arrayAnfitriones[8].inmuebles.push(arrayInmuebles[16]);
arrayAnfitriones[8].inmuebles.push(arrayInmuebles[17]);

arrayAnfitriones.push(new Anfitrion(
  "Raquel",
  "Araujo",
  "raquelaraujo@gmail.com",
  99382457,
  "Raquel1234",
  [],
));
arrayAnfitriones[9].inmuebles.push(arrayInmuebles[18]);
arrayAnfitriones[9].inmuebles.push(arrayInmuebles[19]);

