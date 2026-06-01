export function getWeekNumber(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1)/7);
}

export function getAstronomicalEvents(date: Date) {
  const year = date.getFullYear();
  const events = [
    { name: 'Equinoccio de Primavera', date: new Date(year, 2, 20) },
    { name: 'Solsticio de Verano', date: new Date(year, 5, 21) },
    { name: 'Equinoccio de Otoño', date: new Date(year, 8, 22) },
    { name: 'Solsticio de Invierno', date: new Date(year, 11, 21) }
  ];
  
  let nextEvent = events.find(e => e.date > date);
  if (!nextEvent) {
    nextEvent = { name: 'Equinoccio de Primavera', date: new Date(year + 1, 2, 20) };
  }
  
  const diffTime = Math.abs(nextEvent.date.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return {
    nextEvent: nextEvent.name,
    daysUntil: diffDays
  };
}

const seaTales = [
  "LA BITÁCORA DEL BUCANERO: Cuentan que bajo el Mediterráneo yace el mecanismo de Anticitera original, forjado por mentes que navegaban guiadas por estrellas muertas. Nosotros, piratas del siglo XXI, buscamos sus engranajes en el código.",
  "EL CANTO DE LA ATLÁNTIDA: No se hundió en el océano físico, sino en los pliegues del espacio-tiempo. Sus coordenadas solo pueden ser leídas cuando Júpiter se alinea con Sirio en el solsticio de invierno.",
  "LA BRÚJULA ROTA: Un corsario del Mar Egeo afirmaba tener una brújula que no apuntaba al Norte, sino al centro de gravedad de la materia oscura. Su aguja sigue vibrando en el fondo del mar.",
  "EL TESORO DE ORIÓN: Las verdaderas joyas de los corsarios modernos no son oro ni plata, sino las llaves del cosmos, soterradas en los cinturones de asteroides y en el pensamiento profundo de las mentes nómadas.",
  "MARES DE LEVANTE: Desde Alejandría hasta Cartago, los navegantes sabían que el viento no era soplado por dioses, sino por la respiración térmica del cosmos. El viento estelar empuja nuestras velas hoy."
];

const cosmicTales = [
  "EL FARO DE LOS PÚLSARES: Como un faro solitario para los navegantes perdidos, las estrellas de neutrones emiten pulsos exactos. El universo mismo nos dicta el tiempo métrico absoluto de nuestra travesía.",
  "LA NUBE DE OORT: En los márgenes inexplorados de nuestro sistema, billones de rocas heladas guardan el silencio de la creación. Es la niebla densa que todo bucanero estelar debe atravesar para encontrar la verdad.",
  "LA FURIA DE POSEIDÓN: Las ondas gravitacionales son los tsunamis del espacio. Una danza mortal entre dos agujeros negros que hace temblar la bóveda del cosmos millones de años luz después.",
  "ECOS DEL BIG BANG: La radiación de fondo de microondas es la vieja canción de taberna que el universo sigue tarareando desde su origen. Escucharla es sintonizar con la edad de oro del vacío.",
  "POLVO DE ESTRELLAS: Los corsarios buscan oro, pero el hierro de nuestra sangre y el calcio de nuestros huesos fue forjado en el corazón moribundo de supernovas antiguas. Somos, literalmente, el cosmos consciente."
];

export function getWeeklyData() {
  const now = new Date();
  const week = getWeekNumber(now);
  
  const seaTaleIndex = week % seaTales.length;
  const cosmicTaleIndex = week % cosmicTales.length;
  
  return {
    seaTale: seaTales[seaTaleIndex],
    cosmicTale: cosmicTales[cosmicTaleIndex]
  };
}
