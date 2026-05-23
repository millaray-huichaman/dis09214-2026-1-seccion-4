//Solemne 2 para Pensamiento Computacional.
//Isidora Cáceres.
//Para esta solemne, elegi como obra para inspirarme, la pelicula "Whiplash" (2014) dirigida por Damien Chazelle, esta pelicula aborda la obsesion del protagonista por lograr la perfeccion, la disciplina y la presion que este vive por lograr su meta.
//Elegi esta pelicula porque pienso que refleja emociones muy potetentes.
//En mi dibujo quise representar lo que me hace sentir y lo que me transmite la pelicula, intento representar la presion, el ritmo, la ansiedad, la repeticion y la locura, por esto mi dibujo tiene un ritmo muy rapido, tambien contiene varias elipses, las cuales representan la bateria, el escenario y al protagonista.

//Let: Crea variables modificables en el tiempo
//let cancion: en esta variable es donde se carga la cancion, este sonido representa la musica de la pelicula
//let cantidad:definir con let la cantidad de ellipses que quiero que formen un circulo, estas representan los platillos de la bateria. cantidad de ellipses:12
//let radio: definir con let la distancia desde el centro del canvas hasta cada elipse del circulo. determina el tamaño del circulo que forman las elipses centrales
//let angulo: se define el 0 como angulo base de la animacion central. inicia en 0 y va aumentando en cada frame
//let separar: creo la variable que separa las ellipses centrales aleatoriamente y genera el desorden en mi sketch
let cancion;
let cantidad = 12;
let radio = 150;
let angulo = 0;
let separar = false;

//Carga del archivo del audio
//preload: funcion que se usa para cargar archivos externos
//soundFormats: Se define que tipo de archivo de audio acepta el programa, en este caso mp3
//loadSound: Se carga el archivo de audio en mi sketch, guarda el sonido dentro de la variable "cancion"
function preload() {
  soundFormats("mp3");
  cancion = loadSound("whiplash.mp3");
}

//createCanvas:se crea el canvas de mi proyecto y se define su tamaño
//600 (ancho), 600 (alto)
function setup() {
  createCanvas(600, 600);
}

//crea un pulso, que ocupo para simbolizar el metronomo
//sin: crea una onda entre -1 y 1
//frameCount: Crea el numero de frames desde que se inicia el programa
//este se multiplica por 0.05, lo que genera que el movimiento sea lento y continuo
//map: transforma un rango de valores a otro rango de valores

function draw() {
  let beat = sin(frameCount * 0.05);
  let base = map(beat, -1, 1, 5, 20);
  let rojo = map(beat, -1, 1, 5, 15);

  //elimina el relleno de las figuras, en este caso el de las lineas de mi fondo
  noFill();

  //repite 8 veces la creacion de las ellipses del centro
  //
  for (let i = 0; i < 8; i++) {
    //stroke: define el color de mis lineas del fondo
    stroke(0, 0, 0, 0);

    //ellipse: se crea una ellipse, la cual se ubica en el centro de mi canvas (300,300). //esta disminuye y se mueve, lo que representa la locura, en mi obra
    //frameCount:
    //Utilizo frameCount %10 para crear un patron que se repite cada 10 frames
    // < 3 genera un efecto visual de parpadeo
    ellipse(300, 300, 600 - i * 50);
  }
  if (frameCount % 10 < 3) {
    // se define el color del fondo, el cual es negro y representa la tension
    //se define el segundo color del fondo, el cual es rojo y representa la ansiedad
    background(8, 8, 10);
  } else {
    background(70, 18, 16);
  }
  //noStroke:elimina las lineas del contorno de las figuras que se dibujaran luego
  noStroke();

  //push: guarda el estado actual de mi canvas, antes de que cambie
  push();

  //restMatrix:elimina transformacion hechas previamente
  resetMatrix();

  //random: genera diferentes valores aleatorios cada frame
  // lo utilizo para generar un parpadeo de luces en el fondo
  //rect: crea rectangulos, ubicados orizontalmente, los cuales representan luces
  //pop: restaura el canvas a su estado anterior
  for (let i = 0; i < height; i += 50) {
    let flicker = random(3, 25);
    fill(220, 240, 20, flicker);
    rect(0, i, width, 8);
  }
  pop();

  //random: crea una vibracion constante, como un temblor
  //ellipse: se crea una ellipse, la cual representa la presion
  let temblorX = 300 + random(-50, 50);
  let temblorY = 300 + random(-50, 50);
  fill(110, 10, 10, 180 + beat * 30);
  ellipse(temblorX, temblorY, 420 + beat * 10);
  fill(12, 18, 25);
  ellipse(300, 300, 400, 400); //base

  //angulo: este valor controla la velocidad del movimiento, de mi ellipse central
  //angulo: se va aumentando el valor del angulo, esto genera un movimiento rapido y constante, que representa la obsesion
  //ellipse: se crea el circulo pequeño central en movimiento
  angulo += 0.3;
  let x = 300 + cos(angulo) * 50;
  let y = 300 + sin(angulo) * 50;
  fill(250);
  ellipse(x, y, 40, 40); //mov central

  //translate: se mueve el origen al centro del canvas
  translate(width / 2, height / 2);

  for (let i = 0; i < cantidad; i++) {
    let a = (TWO_PI / cantidad) * i;

    let x = cos(a) * radio;
    let y = sin(a) * radio;

    if (separar) {
      x += random(-100, 100);
      y += random(-100, 100);
    }
    fill(170, 140, 90); //mov
    ellipse(x, y, random(10, 90));
  }

  //Baqueta
  //
  //translate: centra mi rectangulo (baqueta) en el canvas
  //rotate: se crea una rotacion continua
  //rectMode: Ubica mi rectangulo desde el centro
  //rect: se crea un rectangulo que representa una baqueta
  let ang = frameCount * 0.8;
  fill(235, 230, 220);
  resetMatrix();
  push();
  translate(width / 2, height / 2);
  rotate(ang + PI / 2);
  rectMode(CENTER);
  rect(0, -50, 5, 150);
  pop();
  push();

  //Textura/ruido visual tipo pelicula
  //ruido con movimiento aleatorio, que representa el efecto de pelicula
  //rect: se crea el rectangulo que cubre todo el canvas y que tiene el efecto visual
  for (let i = 0; i < 600; i++) {
    fill(random(0, 40), random(10));
    rect(random(width), random(height), 100, 100);
  }
  //Efecto de flash de golpe
  //sin: genera un pulso como de metronomo
  //cuando el valor esta cerca del maximo, se simula el golpe
  //rect: crea un rectangulo que cubre toda la pantalla con el efecto de golpe
  let golpe = sin(frameCount * 0.3);
  if (golpe > 0.95) {
    fill(255, 255, 240, 60);
    rect(0, 0, width, height);
  }
}
//Control de la musica
//mousePressed: Al hacer click con el mouse, se empieza a reproducir la cancion
//loop: se reproduce la cancion en bucle continuo
//setVolume: se modera el volumen de la cancion
//pause: se pausa la musica que se esta reproduciendo al hacer click
function mousePressed() {
  if (!cancion.isPlaying()) {
    cancion.loop();
    cancion.setVolume();
  } else {
    cancion.pause();
  }
}
