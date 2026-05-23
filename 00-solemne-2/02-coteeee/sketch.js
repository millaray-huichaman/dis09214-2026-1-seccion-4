// SOLEMNE 02 | PENSAMIENTO COMPUTACIONAL

////////////////////////////////////////////////
// esta obra responde a Fantastic Mr. Fox de Wes Anderson
// elegi esta obra porque siempre me ha llamado mucho la atencion
// como es que Wes Anderson construye atmosferas y personajes
// la frase “I know what it’s like to feel different”
// fue el punto de partida de esta respuesta
// a partir de eso cree una composicion interactiva
// donde ash comienza igual que el resto
// pero cambia cuando el mouse se acerca y al apretarlo dice
// su parte del dialogo de la pelicula
///////////////////////////////////////////////

// las ilustraciones son propias, las hice en procreate
// el color y fuente del texto esta inspirado en un poster
// https://cl.pinterest.com/pin/592012313541574015/

// Variable donde se guardará la imagen de los zorros repetidos.
// representa a los zorros "normales" de la composicion
// https://p5js.org/reference/p5/let/
let zorro;

// Variable donde se guardará la imagen de Ash.
// Ash es el protagonista y el unico diferente
// visualmente comienza igual al resto
// pero cambia mediante la interacción
// https://p5js.org/reference/p5/let/
let ash;

// Variable donde se guardará la imagen de la manzana.
// la uso para reemplazar el mouse normal
// y hacer referencia visual a la pelicula
// https://p5js.org/reference/p5/let/
let manzana;

// Variable donde se guardará el audio.
// este audio corresponde al dialogo original de Ash
// dentro de Fantastic Mr. Fox
// https://p5js.org/reference/p5/let/
let audioAsh;

// Variable donde se guardará la tipografía.
// use Anton porque visualmente se parece mucho
// a las tipografias de los posters de la pelicula
// https://p5js.org/reference/p5/let/
let fuenteFox;

// Array donde se guardarán todos los zorros.
// el array me permite crear muchos zorros usando for
// sin tener que dibujar uno por uno manualmente
// https://p5js.org/reference/p5/Array/
let zorros = [];

// Frase principal inspirada en Fantastic Mr. Fox.
// esta frase aparece fija en la parte superior
// de la composicion
// https://p5js.org/reference/p5/text/
let frase = "I KNOW WHAT IT'S LIKE TO FEEL DIFFERENT";

// preload se ejecuta antes de setup
// se usa para cargar archivos antes de que empiece
// el sketch
// https://p5js.org/reference/p5/preload/
function preload() {
  // Cargamos la imagen del zorro normal.
  // loadImage carga una imagen para usarla despues
  // dentro del sketch
  // https://p5js.org/reference/p5/loadImage/
  zorro = loadImage("zorro.png");

  // Cargamos la imagen de Ash.
  // esta imagen sera el personaje central
  // https://p5js.org/reference/p5/loadImage/
  ash = loadImage("ash.png");

  // Cargamos la imagen de la manzana.
  // esta imagen seguira la posicion del mouse
  // https://p5js.org/reference/p5/loadImage/
  manzana = loadImage("manzana.png");

  // loadSound carga un archivo de audio.
  // en este caso es el dialogo original de Ash
  // https://p5js.org/reference/p5/loadSound/
  audioAsh = loadSound("audioAsh.mp3");

  // loadFont carga una tipografia personalizada.
  // https://p5js.org/reference/p5/loadFont/
  fuenteFox = loadFont("Anton-Regular.ttf");
}

// setup corre una sola vez al inicio de los tiempos.
// se usa para preparar el canvas y configuraciones.
// https://p5js.org/reference/p5/setup/
function setup() {
  // createCanvas crea el lienzo.
  // windowWidth y windowHeight hacen que
  // el sketch se adapte al tamaño de la pantalla
  // https://p5js.org/reference/p5/createCanvas/
  // https://p5js.org/reference/p5/windowWidth/
  // https://p5js.org/reference/p5/windowHeight/
  createCanvas(windowWidth, windowHeight);

  // imageMode(CENTER) hace que las imagenes
  // se dibujen desde el centro y no desde una esquina
  // ayuda a ordenar la composicion
  // https://p5js.org/reference/p5/imageMode/
  imageMode(CENTER);

  // centra horizontal y verticalmente el texto
  // https://p5js.org/reference/p5/textAlign/
  textAlign(CENTER, CENTER);

  // aplica la tipografia cargada anteriormente
  // esta la descargue de google fonts
  //https://fonts.google.com/specimen/Anton?utm_source=chatgpt.com&preview.script=Latn
  // https://p5js.org/reference/p5/textFont/
  textFont(fuenteFox);

  // hace que el texto se vea en negrita
  // para parecerse mas a los posters de la pelicula
  // https://p5js.org/reference/p5/textStyle/
  textStyle(BOLD);

  // oculta el cursor normal
  // para reemplazarlo con la imagen de la manzana
  // https://p5js.org/reference/p5/noCursor/
  noCursor();

  // este doble for crea muchos zorros automaticamente
  // uno recorre horizontalmente y el otro verticalmente
  // deje espacio arriba y abajo para que el texto
  // no quedara encima de los zorros moviendose
  // https://p5js.org/reference/p5/for/
  for (let x = 100; x < width; x += 140) {
    for (let y = 190; y < height - 190; y += 120) {
      // push agrega elementos dentro del array
      // aqui cada zorrito guarda posicion y tamaño
      // https://p5js.org/reference/p5.Array/push/
      zorros.push({
        x: x,
        y: y,

        ox: x,
        oy: y,

        tam: 90,
      });
    }
  }
}

// draw se ejecuta en bucle
// todo lo que se mueve ocurre aqui
// https://p5js.org/reference/p5/draw/
function draw() {
  // dibujamos el fondo
  dibujarFondo();

  // este for recorre todos los zorros guardados
  // dentro del array
  // https://p5js.org/reference/p5/for/
  for (let i = 0; i < zorros.length; i++) {
    // guardamos el zorro actual
    let z = zorros[i];

    // dist mide la distancia entre dos puntos
    // aqui mide la distancia entre el mouse y cada zorro
    // https://p5js.org/reference/p5/dist/
    let distanciaMouse = dist(mouseX, mouseY, z.x, z.y);

    // if permite crear condiciones
    // si el mouse se acerca demasiado
    // los zorros se alejan
    // https://p5js.org/reference/p5/if/
    if (distanciaMouse < 170) {
      // atan2 calcula el angulo entre dos puntos
      // lo uso para saber hacia donde se van
      // https://p5js.org/reference/p5/atan2/
      let angulo = atan2(z.y - mouseY, z.x - mouseX);

      // cos y sin permiten mover los zorros
      // segun el angulo calculado, para esto
      // fui probando varios numeros
      //hasta que me convencio como quedaba
      // https://p5js.org/reference/p5/cos/
      // https://p5js.org/reference/p5/sin/
      z.x += cos(angulo) * 2;
      z.y += sin(angulo) * 2;
    } else {
      // lerp crea una transición suave
      // hace que los zorros vuelvan lentamente
      // a su posicion original
      // https://p5js.org/reference/p5/lerp/
      z.x = lerp(z.x, z.ox, 0.03);
      z.y = lerp(z.y, z.oy, 0.03);
    }

    // frameCount cuenta cuantos frames han pasado
    // sin crea un movimiento flotante suave
    // https://p5js.org/reference/p5/frameCount/
    // https://p5js.org/reference/p5/sin/
    let movimiento = sin(frameCount * 0.04 + i) * 4;

    // image dibuja la imagen del zorro
    // https://p5js.org/reference/p5/image/
    image(zorro, z.x, z.y + movimiento, z.tam, z.tam);
  }

  // medimos distancia entre el mouse y Ash
  // https://p5js.org/reference/p5/dist/
  let distanciaCentro = dist(mouseX, mouseY, width / 2, height / 2);

  // map convierte un rango de valores en otro
  // aqui transforma distancia en cercania
  // https://p5js.org/reference/p5/map/
  let cercania = map(distanciaCentro, 300, 0, 0, 1);

  // constrain evita que cercania pase de 0 o 1
  // https://p5js.org/reference/p5/constrain/
  cercania = constrain(cercania, 0, 1);

  // dibuja la luz de Ash
  dibujarLuz(cercania);

  // movimiento respirando usando sin
  // https://p5js.org/reference/p5/sin/
  let respirar = sin(frameCount * 0.06) * 5;

  // Ash aumenta de tamaño segun cercania
  let tamAsh = 90 + cercania * 90;

  // dibujamos a Ash
  // https://p5js.org/reference/p5/image/
  image(ash, width / 2, height / 2 + respirar, tamAsh, tamAsh);

  // dibujamos los textos
  dibujarTexto(cercania);

  // dibujamos la manzana siguiendo el mouse
  // mouseX y mouseY entregan la posicion del cursor
  // https://p5js.org/reference/p5/mouseX/
  // https://p5js.org/reference/p5/mouseY/
  image(manzana, mouseX, mouseY, 60, 60);
}

// Esta función dibuja el fondo.
// use un color liso verde/cafe para que la composicion
// no se sintiera demasiado cargada visualmente
function dibujarFondo() {
  // background pinta el fondo del canvas
  // usando valores rgb
  // https://p5js.org/reference/p5/background/
  background(52, 58, 42);

  // noStroke elimina bordes de las figuras
  // https://p5js.org/reference/p5/noStroke/
  noStroke();

  // este for crea partículas flotando
  // https://p5js.org/reference/p5/for/
  for (let i = 0; i < 45; i++) {
    // posicion horizontal animada usando sin
    // https://p5js.org/reference/p5/sin/
    let x = (i * 97 + sin(frameCount * 0.02 + i) * 30) % width;

    // posicion vertical animada
    let y = (i * 53 + frameCount * 0.25) % height;

    // fill define color de relleno
    // el ultimo valor es la transparencia
    // https://p5js.org/reference/p5/fill/
    fill(240, 190, 80, 120);

    // ellipse dibuja las particulas
    // https://p5js.org/reference/p5/ellipse/
    ellipse(x, y, 5, 5);
  }
}

// Esta función dibuja la luz detrás de Ash.
// la luz aparece cuando el mouse se acerca
// haciendo que Ash destaque del resto
function dibujarLuz(cercania) {
  // quitamos bordes
  // https://p5js.org/reference/p5/noStroke/
  noStroke();

  // fill define color y transparencia
  // la transparencia cambia segun cercania
  // https://p5js.org/reference/p5/fill/
  fill(255, 180, 80, 80 * cercania);

  // ellipse crea la primera aureola
  // https://p5js.org/reference/p5/ellipse/
  ellipse(width / 2, height / 2, 180 + cercania * 260);

  // segunda luz mas suave
  fill(255, 210, 120, 30 * cercania);

  // segunda aureola
  ellipse(width / 2, height / 2, 300 + cercania * 340);
}

// Esta función dibuja todos los textos.
// la frase superior funciona como punto de partida
// mientras que “WE ALL ARE” aparece como respuesta
function dibujarTexto(cercania) {
  // fill define el color del texto
  // https://p5js.org/reference/p5/fill/
  fill(255, 210, 70);

  // textSize cambia el tamaño del texto
  // https://p5js.org/reference/p5/textSize/
  textSize(38);

  // text dibuja texto en pantalla
  // https://p5js.org/reference/p5/text/
  text(frase, width / 2, 90);

  // el texto inferior aparece dependiendo
  // de la cercania del mouse
  fill(255, 220, 120, 255 * cercania);

  // tamaño del texto final
  textSize(70);

  // dibujamos respuesta final
  text("WE ALL ARE", width / 2, height - 120);
}

// Esta función detecta clicks del mouse.
// cuando se hace click sobre Ash
// se reproduce el audio original de la pelicula
// saque el fragmento del audio de un video de tiktok
// y lo converti en mp3 con una pagina
// online-convert.com
// https://p5js.org/reference/p5/mousePressed/
function mousePressed() {
  // medimos distancia entre click y Ash
  // https://p5js.org/reference/p5/dist/
  let distanciaClick = dist(mouseX, mouseY, width / 2, height / 2);

  // if crea la condicion del click
  // https://p5js.org/reference/p5/if/
  if (distanciaClick < 90) {
    // revisa si el audio no esta sonando
    // https://p5js.org/reference/p5.SoundFile/isPlaying/
    if (!audioAsh.isPlaying()) {
      // reproduce el audio
      // https://p5js.org/reference/p5.SoundFile/play/
      audioAsh.play();
    }
  }
}
