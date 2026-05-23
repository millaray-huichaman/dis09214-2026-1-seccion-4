//  Solemne-02

// Viernes 22 de mayo

// en este trabajo busco dar respuesta a la cancion "Las Medusas No Tienen Corazón"
// es una colaboracion entre La La Love You (banda española) y Monsieur Perine (grupo colombiano)

// se estreno el 6 de marzo de 2026

// La La Love You tomo su nombre  de la cancion "homonima"de la banda de rock alternativo Pixies, en cambio Monsieur perine tomo su nombre de una forma mas relajada tomando un concepto que podría usarse como chiste en este lado del planeta y combinándolo con un toque frances para sonar mas interesante

// aunque es una cancion relativamente alegre, en lo personal, me da mucha nostalgia,por eso busco poner mis propias respuestas hacia la letra y lo que significa para mi.(sin llegar a ser tan personal)

// quiero crear un ambiente marino, en donde los peces se muevan constantemente, y en el fondo poner diferentes frases que cambian con un "click" (utilizando lo visto en la clase anterior)

// (ya con lograr poner la musica soy feliz)

// variables

// Variable que permite colocar el audio
// https://youtu.be/EFtZYfsSQqE?si=7o_19GFQtl7RIbaW
let cancion;
//Variable que permite reproducir el audio
// permite que el boton "play" exista
let botonPlay;
// Variable que permite detener el audio
// permite que el boton "stop" exista
let botonStop;

// imagenes utilizadas
// ilustradas en infinite painter
// imagenes de autoria propia (Luna Cornejo)
// Las imagenes fueron pensadas para que el proyecto final llegar a tener un mayor grado de coherencia

// imagen medusas_0
// las medusas fueron pensadas para hacer alusion al titulo de la cancion
let med_0;
// imagen medusa_1
let med_1;

// Variables que permiten que despues se puedan utilizar las imágenes de los peces
// imagen 0
let pez_0;
// imagen 01
let pez_1;
// imagen 02
let pez_2;
//imagen  03
let pez_3;
// imagen 04
let pez_4;

//Las variables de posicion permiten que los elementos puedan moverse de forma fluida por el lienzo
//al agregar variables del mismo eje se pueden utilizar en distintos elementos sin afectar el orden
// posicion eje x
let posx = 100;
// posicion eje x
// variable diferente permite ir en otra direccion
let posx_2 = 100;
// posicion eje x
// variable diferente permite ir en otra direccion
let posx_3 = 100;
// posicion eje y
let posy = 100;

// velocidad de movimiento
// eje y
let velocidadY = 3;
// velocidad de movimiento
// eje x
let velocidadX = 1;
// velocidad de movimiento
// permite usar velocidades diferentes
let velocidadX_2 = 0.5;

// fuente tipografica
// https://fonts.google.com/selection?preview.script=Latn
// https://fonts.google.com/selection
let font;

// hace la funcion de contador
// Sin este contador no se puede usar if
let click = 0;

// permite utilizar texto
let Mtexto;

// Imagen reciclada de la solemne anterior
// imagenes de autoria propia (Luna Cornejo)
// imagen cursor
let cora;

// sistema para lograr poner la cancion
// https://youtu.be/7akgTRoYoLE?si=IxpJh5KdaKvx6kzk
// https://youtu.be/MDX5VaMOzZg?si=8Z3JxWKNqIAbt8qD
function preload() {
  // archivo en mp3
  // copie el enlace de youtube y lo pase por una pagina para            obtener el archivo (yt5s)

  // definir cancion e imagenes utilizada

  // cancion
  // https://youtu.be/EFtZYfsSQqE?si=7o_19GFQtl7RIbaW
  cancion = loadSound("lalala.mp3");

  // imagenes utilizadas
  // ilustradas en infinite painter
  // imagenes de autoria propia (Luna Cornejo)

  //Estas imagenes seran utilizadas para seguir el cursor
  med_0 = loadImage("med_0.png");
  med_1 = loadImage("med_1.png");

  // Estas imagenes tienen la misión de generar un ambiente Marino
  pez_0 = loadImage("pez_0.png");
  pez_1 = loadImage("pez_1.png");
  pez_2 = loadImage("pez_2.png");
  pez_3 = loadImage("pez_3.png");
  pez_4 = loadImage("pez_4.png");

  //Este sera el cursor
  cora = loadImage("CORAZON_01.png");

  // fuente tipografica
  // https://fonts.google.com/selection?preview.script=Latn
  // https://fonts.google.com/selection
  font = loadFont("font/Pacifico-Regular.ttf");
}

function setup() {
  createCanvas(800, 900);

  // cursor
  // modifica el aspecto
  // para que las medusas sigan al corazon
  cursor("CORAZON_01.png");

  // crear el boton para que comience la cancion
  // funciona dandole un "click" al boton "play"
  // ubicado en la parte inferior del lienzo
  botonPlay = createButton("Play");
  botonPlay.mousePressed(Play);

  // definir el boton para detener la cancion
  // la cancion se pausa cuando se da click en el boton "stop"
  // ubicado en la parte inferior del lienzo
  // (para no tener al profe chato con mi pesimo gusto musical :D)
  botonStop = createButton("Stop");
  botonStop.mousePressed(Stop);

  // tamaño del texto
  textSize(28);
  // ubicacion del texto
  // para que entre todo el texto
  // Se modifico para que el texto quedara en un punto donde los peces no transitan
  textAlign(LEFT, CENTER);
}

function draw() {
  // color de fondo
  // el digito extra le da transparencia
  // Se le da transparencia al fondo para que no se interponga con el degradado posterior
  background(39, 8, 76, 40);

  //grosor linea
  strokeWeight(30);

  // for permite poner gran cantidad de lineas sin tanto codigo
  // indica donde inician (let y = 0;), donde termina (< height;)
  // esto se refiere a la ubicacion de las lineas en el lienzo
  // utilizado para el degradado del fondo
  // https://editor.p5js.org/FlorenciaAlvarado/sketches/8D-dlBGIl
  // el ultimo parametro es 11 porque permite que el fondo se vea fluido
  // Las lineas estan levemente sobrepuestas para que el degradado se vea pulcro , en caso de aumentar el ultimo digito se crean vacíos entre las lineas impidiendo que el degradado logre su cometido como un fondo que va de un color mas suave a uno mas saturado (de arriba hacia abajo)
  for (let y = 0; y < height; y += 15) {
    // degradado de color con lineas
    // map permite el degradado continuo
    // esta basado en el codigo de la solemne anterior pero quitando la variable de tiempo
    // https://editor.p5js.org/lunacornejo-arch/sketches/tnpKB8T5r
    // https://p5js.org/es/examples/repetition-color-interpolation/
    // los ultimos digitos influyen en el orden de colores del degradado
    let r = map(y, 0, height, 120, 80);
    let g = map(y, 0, height, 200, 20);
    let b = map(y, 0, height, 250, 255);

    // permite usar los colores anteriores en la linea
    stroke(r, g, b);
    // ubicacion de las lineas en el lienzo
    line(0, y, 900, y);
  }
  // https://p5js.org/examples/calculating-values-interpolate/
  // las medusas siguen el mouse
  // se agrega la posx_3 para que no se confundan con otros elementos
  // fue creada porque si se usaba otra variable de  x  el movimiento  de las medusas chocaba  con el de los peces
  // controla la velocidad de movimiento
  posx_3 = lerp(posx_3, mouseX, 0.01);
  posy = lerp(posy, mouseY, 0.01);

  // se mantiene fija una de las posiciones para que no se junten tanto las medusas
  // se mueve solo en eje x
  // permite que no se amontonen las medusas
  // las mantiene en su carril
  image(med_0, 600, posx_3, 250, 250);
  image(med_1, 50, posx_3, 330, 330);

  // estas medusas siguen el mouse tanto en eje x como en eje y
  // Esto le da variedad (permite que el movimiento de las medusas no se vea igual en todos los casos)
  image(med_0, posx_3, posy, 300, 300);
  image(med_0, posx_3, posy, 100, 100);

  // peces de izquierda a derecha
  // los peces se mueven simulando nadar
  image(pez_0, posx, 0, 300, 300);
  image(pez_3, posx, 450, 300, 300);
  image(pez_4, posx, 580, 370, 350);

  // movimiento
  // actualiza el movimiento
  // eje x
  posx += velocidadX;

  //  movimiento en horizontal
  if (posx > width) {
    // el pez vuelve al punto de origen para un movimiento mas fluido
    // quitamos el rebote anterior
    // Esto permite que el pez desaparezca en un punto de lienzo y aparezca en el otro
    posx = -300;
  }
  // el signo cambia
  // cambia la direccion de movimiento del pez
  // Esto le da coherencia al movimiento del pez (debido a la orientacion en la que fue dibujado)
  posx_2 -= velocidadX;

  // peces
  // movimiento derecha - izquierda
  // se puede modificar tamaño de la imagen con los ultimos digitos
  // esto para distorsionar levemente la imagen del pez (para que no se vean todos tan iguales)
  image(pez_2, posx_2, 100, 310, 300);
  image(pez_1, posx_2, 550, 300, 340);

  // se cambia la direccion
  // para otorgarle el movimiento al pez
  if (posx_2 < -300) {
    // vuelve al punto de origen para un movimiento mas fluido
    // Esto permite que el pez desaparezca en un punto de lienzo y aparezca en el otro
    posx_2 = width;
  }
  // imagenes fijas
  // permite que la obra luzca mas completa
  // cuando los peces en movimiento pasan y las imagenes fijas permanecen encima
  // da la sensacion de movimiento
  image(pez_0, 600, 150, 100, 100);
  image(pez_1, 400, 550, 100, 100);
  image(pez_2, 100, 1, 150, 100);
  image(pez_3, 50, 550, 200, 200);
  image(pez_4, 500, 450, 150, 150);

  // sin linea externa
  // en la tipografia
  noStroke();
  //textSize(28);

  // texto
  // permite cambiar el texto con "click derecho"
  // porque el click izquierdo ya reproduce la musica
  // no se puede usar un boton para dos variables

  // con la tipofrafia cargada anteriormente
  // realizado segun lo visto en clases
  // https://youtu.be/eZHclqx2eJY?si=PJGLZ7zThlygBmU5
  textFont(font);

  // if es un condicional
  // en este caso lo uso para que al hacer click derecho cambie la frase
  // funciona con un contador
  if (click == 1) {
    Mtexto = "Te dejaron vagando en aquel mar.";
  } else if (click == 2) {
    Mtexto = "Me soltaste cuando aún te necesitaba.";
  } else if (click == 3) {
    // tamaño de texto
    textSize(24);
    Mtexto = "Fuimos a pescar y solo pescamos un resfriado.";
  } else if (click == 4) {
    Mtexto = "Se quedó atascado en el anzuelo.";
    // instruccion para comenzar la interaccion
    // es anterior al primer "click"
  } else {
    Mtexto = "Haz click derecho";
  }
  // color del texto
  fill(228, 228, 247);
  // ubicacion del texto
  text(Mtexto, 100, height / 2);
}

// permite el funcionamiento del cambio de frase
// si presionan el boton correcto cambia

function mousePressed() {
  if (mouseButton == RIGHT) {
    click++;

    // click de interaccion de texto
    // el numero depende de la cantidad de frases
    // si el numero aumenta no funciona porque no cumple con la cantidad de variables
    if (click > 4) {
      click = 1;
    }
  }
}

//permite que el boton play funcione
// reproduce la cancion
function Play() {
  cancion.play();
}

//permite que el boton stop funcione
// pausa la cancion
function Stop() {
  cancion.stop();
}
