// SOLEMNE 02

// Este trabajo está inspirado en  el videojuego PIKMIN de la compañía nintendo, que mezcla naturaleza y exploración
// Este juego requiere un  trabajo hermoso de diseño por detrás, para el diseño previo de personajes, creación de fondos, detalles naturales con los que se puede interactuar y además la planificación de jugabilidad, para mí, todo eso lo convierte en una obra de arte

//Para responder a esta obra realicé un paisaje inspirado en un fanart del mismo juego, utilizando las islas flotantes, agua brillante flores y las partículas que aparecen en la obra
//y además agregué a los pikmins como personajes de la escena, como tal cual aparecen en el fanart

// Este trabajo fue hecho con ayuda de Chatgpt, quién ayudó a enseñarme respecto a las funciones que se encargan de dibujar cada detalle de la escena, algunas herramientas para un mejor acabado de el fondo, siempre pidiéndole que utilice el fanart elegido como referente, y con el código FOR, para repetir elementos como las flores o las piedras, ya que no sabía bien como hacerlo, mucho menos explicarlo
//Igualmente me ayudó con los comentarios de las líneas de código que no sabía explicar, como la 202, 214 o 270, entre otras, las cuales eran códigos que se fueron añadiendo durante el proceso para mejorar lo visual, así que fue realmente enriquecedor poder aprender a hacer ciertas cosas que jamás pudiera haber hecho sola, me ayudó a poder crear algo mucho mejor estéticamente hablando

//Ahora CRÉDITOS

// El fanart del que tomé inspiración es del artista Sergio Melero, "Pikmin 4" en formáto de lámina para la venta, igualmente tiene una versión de este dibujo en una versión para varios juegos de NINTENDO, como por ejemplo: Zelda
// Hay que apoyar a los artistas :3
// su instagram
// @sermella_art
// link del sitio donde se puede comprar su dibujo
// https://www.google.com/url?q=https://www.gtm-store.com/product/pikmin-4-de-sergio-melero/&source=gmail&ust=1779567028030000&usg=AOvVaw1XqC2tsrUNNl-djscfML-6

// ¿Qué es un pikmin?
// https://pikmin.nintendo.com/es/about/

//Imagen del pikmin 1 (PIKMIN AZUL)
//https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/Marketing/pmp_pikmin-4/characters/bundle-2/bundle-2-blue-2x
// Este personaje pertenece al juego PIKMIN de la compañía NINTENDO, y toda su información se encuentra en la página oficial de la empresa
// piklopedia pikmin azul
// https://pikmin.nintendo.com/es/piklopedia/#!/blue-pikmin

// Imagen del pikmin 2 (PIKMIN ROJO)
//https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/Marketing/pmp_pikmin-4/characters/bundle-4/bundle-4-red-2x
// Este personaje pertenece al juego PIKMIN de la compañía NINTENDO, y toda su información se encuentra en la página oficial de la empresa
// piklopedia pikmin rojo
// https://pikmin.nintendo.com/es/piklopedia/#!/red-pikmin

// esta es mi hiperfijación

// variable para guardar el pikmin azul
let pikmin1;
//variable para guarda el pikmin rojo
let pikmin2;
// Variable que guarda la posición horizontal de los pikmin
let posicionX = 700;

// preload() carga archivos antes de iniciar el programa
function preload() {
  // Carga la primera imagen
  pikmin1 = loadImage("pikmin1.png");

  // Carga la segunda imagen
  pikmin2 = loadImage("pikmin2.png");
}

// setup() se ejecuta una sola vez al inicio
function setup() {
  // Tamaño del canvas de 700 x 700
  createCanvas(700, 700);
}

// Dibuja toda la escena
// draw() se repite constantemente
function draw() {
  // Dibuja el fondo
  drawBackground();

  // Dibuja el agua
  drawWater();

  // Dibuja las islas
  drawIslands();

  // Dibuja el puente
  drawBridge();

  // Dibuja las flores
  drawFlowers();

  // Dibuja las partículas brillantes
  drawBokeh();

  // Dibuja los pikmin moviéndose
  drawPikmin();
}

// FONDO

// Función que dibuja el fondo con degradado vertical
function drawBackground() {
  //recorre todas las líneas horizontales desde arriba hasta abajo en el canvas
  for (let y = 0; y < height; y++) {
    // Calcula un valor entre 0 y 1 dependiendo de la altura
    let inter = map(y, 0, height, 0, 1);

    // Color de la parte superior del fondo
    let topColor = color(179, 249, 255);

    // Color de la parte inferior del fondo
    let bottomColor = color(0, 244, 255);

    // Mezcla ambos colores tipo degradado
    let c = lerpColor(topColor, bottomColor, inter);

    // Usa el color mezclado como color de línea
    stroke(c);

    // Dibuja una línea horizontal para formar el degradado completo
    line(0, y, width, y);
  }
}

// AGUA
//función que se encarga de generar el agua sobre el fondo
function drawWater() {
  // elimina el borde de las figuras para que el agua se vea más suave
  noStroke();
  // define el color del agua y que sea traslúcido
  fill(100, 170, 210, 180);
  //dibuja el rectángulo para que cubra toda la pantalla
  rect(0, 0, width, height);
}

// ISLAS
//función para crear y organizar todas las islas
function drawIslands() {
  //dibuja la isla principal y su tamaño y posición
  drawIsland(380, 300, 500, 240);
  // dibuja la segunda isla y su tamaño y posición
  drawIsland(590, 470, 330, 240);
  //y esta igualmente dibuja la tercera isla y su tamaño y posición
  drawIsland(100, 520, 320, 280);
}

//estos comandos serán utilizados para las 3 islas, y al modificar alguno, se modificarán las 3 a la vez
// función que crea una isla usando posición, ancho y altura
function drawIsland(x, y, w, h) {
  //elimina los bordes de la isla
  noStroke();

  // define el color gris de la parte rocosa de la isla
  fill(143, 143, 143);
  //dibuja la parte rocosa usando una elipse grande
  ellipse(x, y, w, h);

  // elige el color verde de la parte con pasto de la isla
  fill(180, 230, 130);
  //dibuja la parte con pasto y lo simula sobre la roca
  ellipse(x, y - 20, w * 0.9, h * 0.7);

  // repite muchas veces y crea textura sobre el pastito
  for (let i = 0; i < 50; i++) {
    //define el verde trasclúcido de las manchitas
    fill(160, 210, 110, 80);
    //dibuja manchas aleatorias para la textura del pasto
    ellipse(
      x + random(-w / 3, w / 3),
      y + random(-h / 5, h / 5),
      random(10, 30)
    );
  }

  // Piedras
  // define el color gris para las piedritas
  fill(220, 220, 225);
  //repite muchas veces para crear el efecto de que hay muchas piedritas
  for (let i = 0; i < 10; i++) {
    //dibuja las piedras pequeñas en lugares aleatorios
    ellipse(
      x + random(-w / 2, w / 2),
      y + random(20, h / 3),
      random(20, 50),
      random(10, 30)
    );
  }
}

// PUENTE
//función que se encarga de dibujar el puente en la escena
function drawBridge() {
  //guarda las coordenadas actuales antes de mover el dibujo
  push();

  // se mueve el punto de origen, y uno lo puede editar para mover el puente
  translate(210, 430);
  //le quita los bordes para que el puente quede limpio
  noStroke();

  // define el color gris claro para el puente
  fill(220, 220, 225);
  //define las medidas del rectángulo y sus bordes redondeados
  rect(0, 0, 300, 90, 10);
  //restaura las coordenadas originales para no afectar otros dibujos
  pop();
}

// FLORES
//la función que se encarga de dibujar TODAS las flores
function drawFlowers() {
  // Semilla fija para que no cambien sus posiciones
  randomSeed(1);
  //repite el mismo proceso muchas veces para crear varias flores
  for (let i = 0; i < 40; i++) {
    // llama la función drawFlower() usando posiciones aleatorias
    drawFlower(random(width), random(height), random(0.5, 1.2));
  }
}

// Dibuja una flor usando posición y tamaño
function drawFlower(x, y, s) {
  //guarda las coordenadas actuales antes de modificar el dibujo
  push();
  //mueve el punto de origen hasta la posición de la flor
  translate(x, y);
  //cambia el tamaño general de toda la flor
  scale(s);

  // esta es la lista que tiene todos los diferentes colores posibles para las flores
  let colors = [
    color(255, 170, 180),
    color(255, 220, 120),
    color(255, 130, 100),
    color(255),
    color(200, 140, 255),
  ];

  //elige uno de estos colores aleatorios
  fill(random(colors));
  //elimina los bordes negros
  noStroke();

  //al final estos 3 son un ciclo para crear las formas de las flores
  // repite varias veces y crea los pétalos de la flor
  for (let i = 0; i < 5; i++) {
    //dibuja un pétalo creando una elipse vertical
    ellipse(0, 8, 10, 18);
    //rota el dibujo para posicionar el siguiente pétalo
    rotate(TWO_PI / 5);
  }

  // coloca un color amarillo fuerte para el centro de la flor
  fill(255, 220, 80);
  //crea los centros de las flores y define su tamaño
  circle(0, 0, 8);
  // restaura sus coordenadas originales y evita afectar a los otros dibujos
  pop();
}

// BOKEH
//El bokeh es un término japonés que significa "desenfoque" o "niebla", y para fotografía o vídeo, se refiere a la calidad estética del desenfoque en zonas que quedan fuera del área de enfoque.
//en otras palabras, las partículas traslúcidas del trabajo, que buscan generar densidad o cierto brillo o niebla, o algo así
function drawBokeh() {
  // genera las partículas aleatorias, pero mantiene sus posiciones
  randomSeed(5);
  //se eliminan los bordes de la operación anterior
  noStroke();

  // se crean numerosas partículas de luz y lo repite muchas veces
  for (let i = 0; i < 60; i++) {
    //se rellena con este color blanco traslúcido las "partículas"
    fill(255, 255, 255, 40);

    //Se generan elipses en el mapa en posiciones aleatorias
    ellipse(random(width), random(height), random(10, 35));
  }
}

// PIKMIN
//función encargada de generar y mover a los pikmins
function drawPikmin() {
  // Mueve los pikmin hacia la izquierda restando 3 pixeles constantemente, generando el movimiento
  posicionX = posicionX - 3;

  // este if define que cuando las imágenes de los pikmin salen de la pantalla
  if (posicionX < -200) {
    // vuelvan a aparecer en su antigua posición y se repita
    posicionX = width + 100;
  }

  // imagen del primer pikmin azul y su respectiva ubicación y tamaño
  image(pikmin1, posicionX, 400, 80, 80);
  // imagen del segundo pikmin rojo y su respectiva ubicación y tamaño
  image(pikmin2, posicionX - 100, 400, 80, 80);
}
