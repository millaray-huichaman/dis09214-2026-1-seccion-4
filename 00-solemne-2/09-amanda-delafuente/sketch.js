//SOLEMNE 2
//AMANDA DE LA FUENTE

// OBRA ELEGIDA: como respuesta digital de una obra de arte, elegí
// al artista venezolano Carlos Cruz y el “cromocinetismo” en sus obras.
// Este concepto no define a los colores como una fuente fija,
// sino como una materialidad viva y en movimiento. En sus obras, Cruz usa  las líneas y
// colores de una forma tan específica que confunden al ojo humano,
// creando ilusiones ópticas únicas. Una de esas obras, en la que más me inspiré, fue en la
// llamada "Chromointerférence spatiale Paris D" y la "Ambiente Cromointerferente".
// Esta última es una obra inmersiva donde los sentidos juegan un papel importante. Quiero
// recrear esa sensación de manera digital, con movimiento y contraste entre los colores.
// De hecho, el artista posee su página web, donde hay fotos originales de sus obras e instalaciones
// en distintos países.
// https://cruz-diez.com/es/works/chromointerference/.
// Para mi respuesta quise recrear
// el efecto de sus obras, creando múltiples líneas con variaciones de
// saturación de color y un movimiento de tipo "ola".

// Aquí declaré mis variables, para que sean recordadas y el computador
// las reconozca solo con mencionarla en el futuro.
// Esta variable empezará en cero, lo que significa que su valor comienza en
// este número dependiendo en donde la use, si aumentará o disminuirá.
// También voy a declarar la canción que quiero que suene cuando se haga
// click en la pantalla.
// Referencia: https://p5js.org/reference/p5/let/

let movimiento = 0;
let musica;

function setup() {
  // Aquí voy a definir el tamaño de mi canvas que va a delimitar
  // donde se muestre mi respuesta.
  // El primer número (750) es el ancho del canvas y
  // el segundo (550) es el alto.
  // Referencia: https://p5js.org/reference/p5/createCanvas/

  createCanvas(750, 550);

  // Aquí hago que el cursor desaparezca al pasar por el canvas
  // para luego reemplazarlo por otra cosa.
  // Referencia: https://p5js.org/reference/p5/noCursor/

  noCursor();
}
// Esta función sirve para pre-cargar la música que voy a usar,
// elijo el formato de mi canción que es mp3 y luego la mencioné
// exactamente como la cargué a mis archivos.
// Referencia: https://p5js.org/reference/p5/soundFormats/

function preload() {
  soundFormats("mp3");
  cancion = loadSound("aero.mp3");
}
function draw() {
  // Aquí voy a definir el color del fondo de mi canvas.
  // Elegí un color gris tirado más a negro para que los colores vibrantes
  // de las líneas destaquen más por si solas.
  // En la escala de RGB cada uno significa: R: red, G: green, B: blue.
  // Referencia: https://p5js.org/reference/p5/background/

  background(28, 25, 24);

  // Aquí voy a ubicar el nuevo cursor que en este caso quiero que sea
  // un kaomoji, primero voy a definir el tamaño de este y luego
  // la ubicación que va a tener en el canvas.
  // Referencia: https://p5js.org/reference/p5/cursor/

  textSize(25);
  text("(ﾉ◕ヮ◕)ﾉ:･ﾟ✧", mouseX, mouseY);

  // Aquí declaro la velocidad que tendrá el movimiento de las líneas:
  // mientras más alto sea el número, más rapido sera el movimiento
  // y mientras más pequeño menor será este.
  // En este caso lo dejé en 0.05 para qué movimiento sea
  // lento y fluido. Si lo dejaba en 0.1 el movimiento era demasiado
  // rápido y agotador para la vista.

  movimiento += 0.05;

  // El código for nos sirve para definir que algo pase
  // y cuántas veces queremos que suceda para evitar repetir el mismo comando varias veces.
  // Este código va a hacer lineas que pasan de derecha a izquierda
  // hasta llegar al final del lienzo, encargándose de la posición
  // inicial y la cantidad. Luego de esto, se va a repetir constantemente.
  // Primero declaro x como el valor de movimiento 0 (lo que declaré ya al
  // inicio) para que comience en esa posición.
  // Luego viene la condición, este bucle se seguirá repitiendo mientras x
  // sea menor al ancho (width) del canvas, o sea que cuando llegue
  // al extremo del lienzo se volverá a repetir. La última condición
  // determina la separación de cada línea, en este caso va avanzando
  // de 15 en 15. Si el número fuera menor, habría demasiada separación entre las líneas
  // lo que afectaría luego al movimiento de estas. Si hubiese usado i++, se estaría sumando
  // 1 al valor actual, lo cual crea un caos visual y no el efecto deseado.
  // Referencia: https://p5js.org/reference/p5/for/

  for (let x = 0; x < width; x += 15) {
    // Ahora quiero generar el movimiento de cada línea como una tipo ola,
    // en esta tomo la posición que dio el for al inicio, para hacer
    // un movimiento hacia los lados, como si las líneas se estuvieran
    // empujando entre sí. El comando sin va a funcionar para que
    // el movimiento que quiero lograr sea natural y fluido.
    // Dentro de los paréntesis nombro el movimiento (que ya fue declarado
    // en un inicio), luego pongo la posición x y la multiplico por
    // 0.02 para dar ese movimiento tipo de atraso y no se muevan
    // todas las líneas al mismo tiempo, mientras que el 15 final define
    // el tamaño, o sea qué tanto se van a alejar unos de otros, en este
    // caso serán 15 pixeles solamente.
    // Referencia: https://p5js.org/reference/p5/sin/

    let marea = sin(movimiento + x * 0.02) * 15;

    // Ahora quiero que cuando el cursor esté a una mitad de la pantalla
    // cambie la gama de color, para eso usare el if y así dar la orden
    // de cuando el cursor esté en cierta posición cambie el color,
    // para eso voy a decirle al cursor que cuando esté a la mitad del ancho de la pantalla
    // cambie a los colores cálidos (el primer stroke) y si no es así
    // usaré el else para que cambie a los colores fríos.
    // Referencia: https://p5js.org/reference/p5/if/

    if (mouseX < width / 2) {
      // Ahora con stroke quiero definir el color de las líneas.
      // Primero voy a definir los cálidos, para que tengan una transición
      // de colores. El "G" lo voy a dividir, para que mientras avance
      // vaya cambiando de saturación.
      // Referencia: https://p5js.org/reference/p5/stroke/

      stroke(255, x / 2, 0);

      // Else funciona como la otra opción de if, es un "si pasa esto que
      // pase lo otro, de lo contrario (else) que pase esto otro".
      // En este caso la computadora se preguntará ¿está el cursor
      // a la izquierda de la pantalla? en caso de que sea sí, mostrará
      // los colores cálidos, si la respuesta es no, el else funciona para
      // que se muestren los colores fríos.
      // Referencia: https://p5js.org/reference/p5/if/
    } else {
      // Ahora, de lo contrario a if, se mostrarán los colores fríos,
      // aquí ocupo la misma lógica de los colores que usé antes
      // para que sea vea la variación de los colores cálidos.
      // Referencia: https://p5js.org/reference/p5/stroke/

      stroke(0, x / 2, 255);
    }

    // Con strokeWeight voy a definir el grosor de todas las líneas.
    // Lo dejaré en 6 para que sean lo suficientemente gruesas
    // para que se puedan apreciar bien los colores y a su vez
    // el fondo gris contrastante. Mientras más alto es el número
    // más gruesas serán las líneas.
    // Referencia: https://p5js.org/reference/p5/strokeWeight/

    strokeWeight(6);

    // Ahora toca definir las líneas que se verán con los colores
    // correspondientes y el movimiento de estas (y, x), por eso
    // las líneas se dibujan de las últimas, para que se vean ya con
    // estas intervenciones, ya que están dentro de los murciélagos del sin y for.
    // Aquí hay que definir las posiciones
    // x e y de las líneas, en la primera parte define la coordenada
    // inicial que es x, que ya mencionamos para
    // el movimiento, esto hará que desde el inicio de la línea ya esté
    // en movimiento. Luego la posición inicial que está en 0, para que
    // todas las líneas empiezan desde arriba del lienzo, en el siguiente
    // 0 es la posición x, repito la misma fórmula para que la parte de
    // abajo de las líneas se muevan de la misma forma que arriba, la
    // coordenada final y definir height como la altura de las líneas
    // para que automáticamente el programa sepa que me refiero a la
    // altura del lienzo.
    // En caso de que quisiera que el movimiento fuera en el eje x, o sea
    // de manera horizontal, debería cambiar el parámetro "marea"
    // a la posición x.
    // funciona basicamente asi:
    // line( x-inicial, y-inicial, x-final, y-final ).
    // Referencia: https://p5js.org/reference/p5/line/

    line(marea + x, 0, marea + x, height);
  }
}

// Esta función sirve para cargar la música que ya declaré en un inicio
// así puedo hacer que la canción empiece o se detenga cuando lo indique
// con ayuda del comando if y else.
// Aquí declaro que cuando se presione el mouse, la canción va a empezar.
// También declaro el volumen, lo dejé en 10 en este caso.
// Referencia: https://p5js.org/reference/p5/mousePressed/

function mousePressed() {
  if (cancion.isPlaying());
  {
    cancion.play();
    cancion.setVolume(10);
  }
}
//PD: Debo admitir que la elección del artista fue elegido
// únicamente para hacer este efecto de las líneas jeje.
// Lo habíamos probado en una clase pasada y
// los ejemplos del arte digital que dio el profe me recordó a esto.
// Reciclé varias cosas que ya hice en clases y la solemne anterior, ya que
// quise enfocarme en comprender bien los comandos y qué hacen antes de
// experimentar algo extremo.
// También tuve unos problemas con el comando de frameCount, pues con este
// no lograba el resultado que quería, por lo que mejor usé el
// sin(), dejé una versión de como se ve usando el frameCount en "PRUEBAS".
