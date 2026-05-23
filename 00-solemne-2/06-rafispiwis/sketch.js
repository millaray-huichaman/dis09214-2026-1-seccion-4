// SOLEMNE II: Pensamiento computacional - sección 4
// Rafaela Cordova Dominguez
// tema: Alice Madness returns, juego del 2011 que replantea la historia tradicional
// de alicia en el pais de las maravillas desde una perspectiva siniestra donde
// alicia tiene problemas psiquiatricos

// Elegi el juego Alice madness returns ya que es un juego que
// descubrí a los 10 años e influyo mucho en mi estetica como
// persona que ama ilustrar.
// me gusta mucho el trabajo que hay detrás de alice madness returns,
// el arte conceptual y el diseño de personajes son dignos de apreciación.
///////////////////////////////////////////////////////////////////

// Mi idea es hacer una pantalla interactiva de menu del juego
// pero con mi propia interpretacion y una ilustracion propia de alicia
// creciendo por tomar una pocion en el escenario del asilo, pensaba en
// hacer algunas particulas random con el For como enseñaron en clases
// no se si alcance pero dejo como registro mi idea

// Crea una lista vacía
// Aquí se guardarán todas las particulas
let particulas = [];
// tamaño inicial de alicia antes de crecer
let tamaño = 50;

function preload() {
  // 2 imagenes utilizadas
  asilo = loadImage("asilum.png");
  alicia = loadImage("alicia.png");
}
function setup() {
  // tamaño del lienzo
  createCanvas(900, 600);

  // valor máximo de tasa de refresco
  // se mide en cuadros por segundo
  // velocidad en la cual alicia crece
  frameRate(30);

  // https://p5js.org/reference/p5/noStroke/
  // para que las figuras no tengan un contorno
  noStroke();

  // Bucle que se repite 70 veces
  // Sirve para crear 70 particulas
  // (valor inicial de i es 0, condicion para que ocurra, i = i + 1
  // es lo que ocurre en cada iteracion, permite que i vaya cambiando ya que le va
  // sumando 1 a i hasta llegar a las 70 particulas deseadas
  for (let i = 0; i < 70; i++) {
    // https://p5js.org/reference/p5/push/
    // "push" agrega un nuevo objeto a la lista
    // Cada objeto representa una particula
    particulas.push({
      // https://p5js.org/reference/p5/random/
      // "random(width)" da una posición aleatoria en X
      // Hace que aparezca en cualquier parte horizontal
      x: random(width),

      // "random(height)" da posición aleatoria en Y
      // Hace que aparezca en cualquier parte vertical
      y: random(height),
    });
  }
}
function draw() {
  background(0);

  // para que el programa reconozca las coordenadas
  // al centro del lienzo y no a la esquina izquierda
  imageMode(CENTER);

  // imagen del asilo de fondo
  // https://wall.alphacoders.com/big.php?i=424359
  image(asilo, windowWidth / 2, 300, 800, 500);
  // tamaño es igual a si mismo + 1
  // eso significa que va creciendo cada que se lee el codigo
  tamaño = tamaño + 1;

  // si el tamaño de alicia es menor a 300, esta crece
  // al llegar a 300 deja de crecer y queda estatica
  if (tamaño > 300) {
    tamaño = 300;
  }
  // cargo la imagen de alicia
  // https://alice.fandom.com/wiki/Straitjacket?file=Alice_straitjacket.png
  // cuando hice esto no sabía como hacer para que creciera sin despegar
  // los pies del piso asi que le pregunté a chatGPT:
  //"como hago que crezca la imagen hacia arriba y no del centro"
  // me respondió que agregara el - tamaño/2 a Y
  // asi parecia que estaba creciendo desde los pies
  image(alicia, 290, 450 - tamaño / 2, tamaño, tamaño);

  // utilice la fuente "Alice" de  Ksenya Erulevich
  // https://fonts.google.com/specimen/Alice?query=alice
  // referencia p5 https://p5js.org/es/reference/p5/textFont/
  textFont("Alice");

  // tamaño del texto
  textSize(34);

  // Agrego el texto que tienen los menus de juegos
  // quiero que cambien de color al posar el mouse sobre ellos
  // Para New game quiero que cambie la pantalla a un tono rojo

  // si el mouse se presiona el texto "new game" cambia a color rojo
  // else: cuando el mouse no está presionado queda en blanco
  // https://www.w3schools.com/js/js_if_else.asp utilize esta pagina para entender
  // hice lo mismo con los tres, pero nose como hacer que sean individuales
  // mouseIsPressed === true) {
  // fill('red');
  // text("New game", 620, 400);
  // else{
  // fill(255);
  // text("New game", 620, 400);
  // esto habia hecho pero no me salía entonces le pregunte a chatGPT
  // "necesito que cuando haga click en cada texto individualmente se
  // transforme en rojo" y me dio lo que hice abajo

  // aqui me di cuenta que el profe ya habia explicado esto
  // && significa que ambas condiciones deben ser verdad
  // y || que al menos una de las condiciones debe ser verdadera
  if (
    // entonces puse el cuadrado aprox donde se encontraba el texto
    // junto con && logre que se tornaran rojas individualmente
    mouseX > 620 &&
    mouseX < 760 &&
    mouseY > 370 &&
    mouseY < 400 &&
    mouseIsPressed
  ) {
    // aqui quise poner que al apretar New game se tornara de un tono rojo la
    // pantalla, para eso ajusté la opacidad en el 4to numero en fill()
    fill(148, 12, 18, 80);
    // rectangulo rojo que cambia color de la pantalla y que esté al centro
    rectMode(CENTER);
    rect(windowWidth / 2, 300, 800, 500);
    // cambio de color de las letras a rojo al hacer click
    fill("red");
  } else {
    // con else hice que cuando no estuviera apretado el raton, quedara la
    // letra en blanco
    fill(255);
  }

  // hice lo mismo para los otros dos textos, solo que no puse el cambio a
  // pantalla roja ya que qeria que fuera solo el primero
  text("New game", 620, 400);

  if (
    mouseX > 620 &&
    mouseX < 760 &&
    mouseY > 420 &&
    mouseY < 450 &&
    mouseIsPressed
  ) {
    fill("red");
  } else {
    fill(255);
  }
  text("Load game", 620, 450);

  if (
    mouseX > 620 &&
    mouseX < 760 &&
    mouseY > 470 &&
    mouseY < 500 &&
    mouseIsPressed
  ) {
    fill("red");
  } else {
    fill(255);
  }
  text("Exit", 620, 500);

  // LOGO
  // aqui escribí el titulo del juego
  fill(148, 12, 18);
  textSize(50);
  text("Alice Madness:", 465, 300);
  // hice el returns en mayúscula y más grande
  textSize(72);
  text("RETURNS", 465, 355);

  //////////////////////////////////////////////////////////
  // PARTICULAS BLANCAS
  for (let p of particulas) {
    // color de las partículas (blanco)
    fill(255);

    // Usa la posición guardada en cada
    // particula que seria al azar (p.x, p.y) y el tamaño de 4x4
    // cambie el tamaño a 4 ya que queria particulas sutiles
    ellipse(p.x, p.y, 4, 4);

    // pequeño movimiento flotante
    // "random(-1,1)" genera un número entre -1 y 1
    // Se suma a la posición → mueve la particula de izquierda/derecha
    p.x += random(-1, 1);

    // Igual que antes pero en vertical
    // Hace que suba o baje ligeramente
    p.y += random(-1, 1);
  }
}
