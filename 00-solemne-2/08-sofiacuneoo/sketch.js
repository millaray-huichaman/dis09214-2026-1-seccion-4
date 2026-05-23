//////////////////////////////////////////////////////
/////////////////////SOLEMNE 02///////////////////////
//////////////////////////////////////////////////////

// mi solemne busca imitar la pagina de un cuaderno,
// en esta estara un poema de Emlily Dickinson,
// del libro "Morí por la belleza"
// ademas esta incluira una chinita
// que estara moviendose sobre el papel

// let es para declarar, es decir,
// permite que una variable exista dentro del codigo

// "chinita" es para cargar la imagen que se movera
let chinita;

// "fuente" es para cargar la tipografia que utilizare
let fuente;

// "colorTexto" es para designar un color especifico
let colorTexto;

// "velocidad" designara la velocidad en el eje x
// del movimiento de la chinita
let velocidad = 1;
// "velocidadY" designara la velocidad en el eje y
// del movimiento de la chinita
let velocidadY = 1;

// "dirX" designara la direccion en el eje x
// del movimiento de la chinita
let dirX = 1;
// "dirY" designara la direccion en el eje y
// del movimiento de la chinita
let dirY = 1;

// "posX" designara la posicion en el eje x
// de la chinita
let posX = 0;
// "posY" designara la posicion en el eje y
// de la chinita
let posY = 0;

// function preload () se utilizara para darle el valor a fuentePoemas,
// esto se hara cargando un tipografia despues el computador.
function preload() {
  // se le asigna un valor a fuentePoema
  // este sera la fuente que cargamos a p5.js
  fuente =
    // loadFont es para cargan fuentes,
    //en formato .ttf
    loadFont("IMFellDWPica.ttf");
}

// en fuction setup() le daremos valores
// a nuestras variables faltantes
function setup() {
  // tamaño que se le da al canvas
  // levemente más largo, para intentar imitar
  // un cuaderno.
  createCanvas(600, 800);

  // se le asigna un valor en RGB
  // a "colorTexto"
  colorTexto = color(74, 60, 34);

  // se le asigna un valor a "chinita"
  // se sube una imagen a p5.js desde el computador
  chinita = loadImage("chinita.png");
}

// function draw() se ejecuta despues de
// function setup() y se repite hasta el infinito
function draw() {
  // se le asigna un color al canvas
  // este intenta imitar en color de una hoja de papel.
  background(255, 245, 222);

  // color de linea en RGB + opacidad
  // este aplicara a las todas las lineas de aqui en adelante
  stroke(219, 183, 129, 100);

  // for () es para que algo se repita muchas veces
  // en este caso las lineas que imitan la hoja
  // "y" corresponde al eje donde las lineas se dibujaran
  // partiendodo desde el inicio (0)
  // hasta el final del lienzo (800);
  // el ultimo parametro equivale al espaciado entre cada linea
  // con la que le sigue
  for (let y = 0; y < 800; y += 40) {
    // se dibuja una linea con el tamaño deseado
    // los parametros del eje y se cambian por "y"
    // para que el for aplique en estas
    // asi logramos tener todas las lineas que necesitamos
    line(600, y, 0, y);
  }

  // valores que se utilizaran para nuestros textos,
  // estos aplicaran de aqui en adelante,
  // por lo que solo es necesario una vez
  // ya que queremos que todos nuestros textos tengan las mismas propiedades
  // tamaño del texto
  textSize(30);
  // fuente que se utilizara,
  // subida anteriormente en function setup ()
  textFont(fuente);
  // color del texto
  // designado anteriormente en function setup()
  fill(colorTexto);
  // primer verso del poema
  // segundo y tercer parametro equivalen a donde se encuentra nuestro texto
  text("Una carta es un goce terrenal", 80, 190);
  // segundo verso del poema
  // segundo y tercer parametro equivalen a donde se encuentra nuestro texto
  text("que los dioses ignoran.", 80, 230);

  // se añade la imagen de la chinita
  // se le asigna la posición,
  // que son variables que ya designamos
  // ademas del tamaño, que equivalen a los ultimos dos parametros
  image(chinita, posX, posY, 50, 50);

  // regula el movimiento horizontal de la chinita
  posX = posX + velocidad * dirX;

  // regula el movimiento vertical de la chinita
  posY = posY + velocidadY * dirY;

  //controla el rebote en el eje horizontal hasta rebotar a la izquierda
  if (posX > (width * 4) / 5 - 100) {
    // cambia la dirección hacia la izquierda
    dirX = -1;

    //parametro que regula velocidad horizontal randomizada
    velocidad = random(0.5, 1);
  }

  //controla el rebote en el eje horizontal hasta rebotar a la derecha
  if (posX < (width * 1) / 5) {
    // cambia la dirección hacia la derecha
    dirX = 1;

    //regula la velocidad horizontal
    velocidad = random(1, 2);
  }

  //controla el rebote en el eje vertical hasta rebotar abajo
  if (posY > height - 100) {
    // cambia dirección vertical hacia arriba
    dirY = -1;

    // regula la velocidad vertical randomizada
    velocidadY = random(1, 2);
  }

  //controla el rebote en el eje vertical hasta rebotar arriba
  if (posY < 0) {
    // cambia dirección vertical hacia abajo
    dirY = 1;

    //regula la velocidad vertical randomizada
    velocidadY = random(0.5, 1);
  }
}

//REFERENCIAS:

// fuente sacada de GoogleFonts
// link: https://fonts.google.com/specimen/IM+Fell+DW+Pica?preview.text=las%20cartas%20son%20un%20goce%20que%20los%20dioses%20ignoran&specimen.preview.text=las+cartas+son+un+goce+que+los+dioses+ignoran&preview.script=Latn

// Poema sacado del libro "Morí por la belleza"
// de la poeta estadounidense Emily Dickinson.

// el poema utilizado sale de la pagina 67 del libro.

// la imagen de la chinita sale de pinterest
// https://cl.pinterest.com/pin/3237030976775352/

// el codigo de movimiento de la chinita me lo dio mi amiguito ale de la otra sección, gracias ale te amo
// https://editor.p5js.org/luxinocte/sketches/oUX4FmCgr
