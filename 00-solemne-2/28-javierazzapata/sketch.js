//======================
//======SOLEMNE 2=======
//======================

// Mi solemne se inspira en la cancion
// Como una ola de Cecilia, la incomparable.
// cancion favorita de mi mejor amiga,
// en la cual encuentro mucha inspiracion siempre.
// Aqui quise representar algunos elementos que menciona la cancion
// Las olas que Cecilia menciona son balanceo vertical e ingreso de una ilustracion que grafica el vaiven del mar, tambien el como las emociones a veces llegan y se quedan contigo por un tiempo.

// La repeticion constante y ondulada de la palabra "sola" refuerza visualmente la carga emocional de la letra, asemejando el movimiento de estas al mar.
// Esta palabra la seleccione ya que cada vez que escucho la cancion, siempre se queda conmigo ese verso
// se hacen varias repeticiones de esta palabra ya que es como un pensamiento que te ronda todo el tiempo,y si engachas con este no veras otra cosa pero si lo miras de lejos veras que nada mas es movimiento

//El cigarro en el cursor se integro debido a que siento que tiene una gran carga melancolica de perder el tiempo o del paso de este, al estar esperando a una persona.

// Declaracion para nombrar el fragmento de la cancion que se cargara
let cecilia;
// Declaracion para nombrar la ilustracion de las olas que se cargara
let img;
// Declaracion para nombrar la ilustracion de el cigarro que se cargara y se utilizara como cursor
let cig;
// Declaracion del tamaño predeterminado de la tipografia para las olas de texto
let sizetypo = 10;
// Declaracion para nombrar la tipografia personalizada que se cargara
let tipografia;

// Declaracion de la palabra que se repetira consecutivamente en el fondo del canvas
let sola = "sola ";
// Define el tamaño de la fuente para el texto del fondo
// Se selecciona este tamaño ya que sin alejarse mucho esta palabra desaparece y solo se ve el movimiento
let tamanoText = 10;

// Define la posicion horizontal inicial (fuera de pantalla) para la animacion de entrada de las olas
let desplazamientoX = -600;
// Define cuantos píxeles se mueve el grupo de olas hacia la derecha en cada fotograma
// esto no muy rapido ya que se siente pesado y melancolico
let velocidad = 1;

// Funcion para cargar archivos subidos a la carpeta del programa
function preload() {
  // Carga el archivo de audio desde la carpeta assets y lo asigna al nombre declarado anteriormente 'cecilia'
  cecilia = loadSound("assets/ComoUnaOla.mp3");
  // Carga la imagen de la ola desde la carpeta assets y la asigna al nombre declarado anteriormente  'img'
  // imagen ilustrada por mi
  img = loadImage("assets/ola.PNG");
  // Carga la imagen del cigarro desde la carpeta assets y la asigna al nombre declarado anteriormente 'cig'.
  // imagen ilustrada por mi
  cig = loadImage("assets/cig.PNG");
  // Carga la tipografia RedHatMono desde la carpeta assets y la asigna al nombre declarado anteriormente  'tipografia'
  //Se selecciona esta tipografia ya que tiene una relacion con lo melancolico y lo antiguo.
  //tipografia cargada de googlefonts https://fonts.google.com/selection?categoryFilters=Appearance:%2FMonospace%2FMonospace&preview.script=Latn
  tipografia = loadFont("assets/RedHatMono.ttf");
}

// Funcion que ejecuta configuraciones iniciales una sola vez al arrancar el programa
function setup() {
  // Crea una ventana de dibujo interactiva con dimensiones de 500 pixeles de ancho por 500 de alto
  createCanvas(500, 500);
  // Inicia la reproduccion del archivo de audio almacenado en la variable cecilia
  cecilia.play();

  // Oculta la flecha del cursor nativo del sistema dentro del lienzo de dibujo
  // esto ya que se quiere reemplazar por una illustracion
  noCursor();
}

// Funcion que se ejecuta continuamente en bucle para renderizar las animaciones
function draw() {
  // le asigna un color solido en formato RGB a el canvas este es un tono crema ya que se relaciona con los conceptos ya mencionados atiguo y melancolico
  background(229, 215, 196);
  // Aplica la tipografia previamente cargada a todos los elementos de texto que se dibujen
  textFont(tipografia);

  // Define el color de relleno del texto en valores RGB
  // El color elegido es un tono rojo vino, ya que se relaciona con los conceptos ya mencionado anterioirmente.
  fill(115, 18, 17);
  // Establece el tamaño de fuente que usará el texto del fondo
  textSize(tamanoText);
  // Alinea el texto de manera que sus coordenadas X e Y correspondan exactamente a su centro.
  textAlign(CENTER, CENTER);

  // Calcula el ancho de la palabra mas un espacio extra para estructurar la separacion entre columnas
  let anchoTexto = textWidth(sola) * 1.5;
  // Calcula la cantidad total de columnas necesarias para cubrir el ancho de la pantalla mas un margen de seguridad
  let numCols = ceil(width / anchoTexto) + 2;
  // Calcula la cantidad total de filas necesarias para cubrir el alto de la pantalla mas un margen de seguridad
  let numRows = ceil(height / tamanoText) + 2;

  // Inicia el bucle que controla las filas de la cuadricula de texto, empezando una fila antes del borde superior
  for (let r = -1; r < numRows; r++) {
    // Inicia el bucle que controla las columnas, dibujando las palabras de izquierda a derecha
    for (let c = -1; c < numCols; c++) {
      // Determina la coordenada X base, desplazando las filas impares a la mitad para simular un patron de panal
      let x = c * anchoTexto + (r % 2 === 0 ? 0 : anchoTexto * 0.5);
      // Determina la coordenada Y base multiplicando el indice de la fila por la altura del texto y su espacio
      let y = r * tamanoText * 1.5;

      // Modifica la posicion X de la palabra creando un desfase ondulatorio horizontal con la funcion seno
      let waveX = x + sin(frameCount * 0.04 + y * 0.02) * 15;
      // Modifica la posición Y de la palabra creando un desfase ondulatorio vertical con la función coseno
      let waveY = y + cos(frameCount * 0.04 + x * 0.02) * 15;

      // Asigna la palabra "sola" en las coordenadas en movimiento de la onda
      text(sola, waveX, waveY);
    }
  }

  // Incrementa el desplazamiento sumandole la velocidad para avanzar la animacion de entrada de las olas
  desplazamientoX = desplazamientoX + velocidad;

  // Evalua si el grupo de olas llego al límite establecido de su animación de entrada
  if (desplazamientoX > -150) {
    // Para el desplazamiento en -150 para congelar el movimiento de entrada.
    desplazamientoX = -150;
  }

  // Bucle invertido para repetir 4 veces la imagen de la ola y superponer estas de izquierda a derecha
  for (let i = 3; i >= 0; i--) {
    // Calcula la posicion estatica en X para cada una de las olas, espaciandolas a 170 pixeles entre si, entonces estas de unifican en un pequeño traslape.
    let posXFinal = i * 170;

    // Suma la posición estatica y el desplazamiento de entrada para obtener la coordenada X real de la ola
    let xOlasDes = posXFinal + desplazamientoX;

    // Calcula una oscilacion matematica vertical que cambia con el tiempo y varia según el indice de la ola
    let movimientoY = sin(frameCount * 0.05 + i * 20) * 15;

    // Establece la altura de las olas y le añade la oscilacion vertical
    // Estas se ubican en la parte inferior de el canvas
    // ya que se sienten pesadas y lentas.
    let yOlas = 250 + movimientoY;

    // Dibuja la imagen de la ola en las coordenadas calculadas, escalandola a 370 pixeles de ancho por 300 de alto
    image(img, xOlasDes, yOlas, 370, 300);
  }

  // Aplica la ilustracion del cigarro en las coordenadas del cursor y la centra a este
  // se aplica esta illustracion al cursor ya que el cigarro es algo que manejamos nosotros en nuestras vidas, las emociones y pensamientos intrusivos como este se sienten mas dificiles de manejar
  image(cig, mouseX - 50, mouseY - 220, 250, 250);
}
