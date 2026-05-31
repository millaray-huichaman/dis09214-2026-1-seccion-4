// SOLEMNE 2 - PENSAMIENTO COMPUTACIONAL - CATALINA CAYUELA

// Para este trabajo considero que la discografía y el concepto de las "Eras" de Taylor
// Swift es una obra de arte en sí misma.

// La música y su propuesta visual requieren de una enorme dedicación, transmiten un
// sentimiento profundo y generan el efecto de un gran impacto en el público.

// Por esto, crearé un mural interactivo digital que rinde homenaje a este fenómeno
// cultural, conectando el arte conceptual y musical de Taylor con todos nosotres.

// Tomo como tema principal los álbumes "Lover" y "Reputation" que son simbólicamente contrarios

// Declaro la variable global para fijar el tamaño de las partículas de las Eras
let tamanoParticula = 15;

// Preparo lienzo
function setup() {
  // Creo un lienzo interactivo de 800 pixeles de ancho por 600 pixeles de alto
  createCanvas(800, 600);

  // Configuro asegurando que el centro de cada rectángulo calce justo en la mitad de la pantalla, haciendo que se expandan perfectamente hacia arriba y hacia abajo por igual.
  rectMode(CENTER);
}

// Preparo para dibujar infinitamente
function draw() {
  // IF: Evalúo si mi cursor se encuentra en la mitad izquierda del lienzo para activar Lover
  if (mouseX < width / 2) {
    // Pinto el fondo con el color rosa pastel que define la estética de la era Lover
    background(253, 177, 210);

    // FOR: Ejecuto un bucle que repito 15 veces para dibujar los destellos flotantes
    for (let i = 0; i < 15; i = i + 1) {
      // Quito el contorno de las figuras para lograr un acabado visual más suave
      noStroke();

      // Defino un color blanco con transparencia para simular nubes o brillos sutiles
      fill(255, 255, 255, 150);

      // CRÉDITO IA: Uso ayuda de la IA (Gemini) para armar la fórmula matemática de la animación.
      // MOVERSE (Sinusoide): Uso frameCount como motor de tiempo y sin() como freno para que el círculo flote suavemente arriba y abajo.
      // Dato para mi: Uso 50 para que visualmente se equilibre el espacio del mural sin que los círculos se salgan del lienzo
      let movimientoY = sin(frameCount * 0.02 + i) * 50;

      // Dibujo círculos alineados que se mueven de arriba a abajo de forma ondulada
      // Dato para mi : 60 espaciado / + 50 margen
      ellipse(
        i * 60 + 50,
        height / 2 + movimientoY,
        tamanoParticula,
        tamanoParticula
      );
    } // Cierra el FOR de los círculos de Lover

    // Configuro el color del texto en un tono fucsia oscuro para que contraste con el rosa
    fill(130, 20, 80);

    // Establezco el tamaño de la letra para el título principal de mi sección
    textSize(40);

    // Alineo el texto perfectamente en el centro horizontal y vertical
    textAlign(CENTER, CENTER);

    // Muestro el título en la pantalla para indicarle al usuario que está en Lover
    text("Era: Lover", width / 2, 100);
  } // Cierra la condición IF de Lover

  // IF (else): Si mi cursor NO está a la izquierda, activo la mitad derecha para Reputation
  else {
    // Pinto el fondo con un color gris oscuro casi negro para dar una atmósfera muy dramática
    background(20, 20, 20);

    // FOR: Ejecuto un bucle que repito 25 veces para crear las líneas de diseño gótico
    for (let i = 0; i < 25; i = i + 1) {
      // Asigno un borde blanco con opacidad para simular texturas 
      stroke(255, 255, 255, 100);

      // Defino un grosor de línea fino para mantener la elegancia del patrón
      strokeWeight(2);

      // Elimino el relleno para que mis figuras sean contornos transparentes
      noFill();

      // A continuación asistencia de IA (Gemini) para resolver un problema de amontonamiento.
      // Dato para mi: El frameCount * 2 es el motor que mueve las barras hacia la derecha, pero si se deja solo con eso, las 25 barras se dibujaban una encima de otra.

      // Le pedí ayuda a la IA para separarlas, y me sugirió multiplicar la i del bucle (que va de 0 a 24) por 40 píxeles.Cada barra empieza su camino 40 píxeles más adelantada que la anterior generando una fila de barras ordenadas que cruzan la pantalla de forma fluida.

      // MOVERSE (frameCount): Calculo un desplazamiento lineal continuo hacia la derecha usando el residuo
      // Dato para mi: Uso el residuo con el ancho de la pantalla (% width) para crear un bucle infinito de movimiento.
      let movimientoX = (frameCount * 2 + i * 40) % width;

      // Dibujo rectángulos altos que se desplazan simulando el movimiento de una serpiente abstracta
      rect(movimientoX, height / 2, 20, 300);
    } // Cierra el FOR de las barras de Reputation

    // Configuro el color del texto en un blanco puro y brillante
    fill(255);

    // Establezco el tamaño de la letra para el título de esta segunda sección
    textSize(40);

    // Alineo el texto en el centro absoluto para que quede ordenado
    textAlign(CENTER, CENTER);

    // Muestro el título en la pantalla para indicarle al usuario que está en Reputation
    text("Era: Reputation", width / 2, 100);
  } // Cierra la condición ELSE de Reputation
} // Cierra la función DRAW completa

// Aplico la herramienta "Tidy Code" desde el menú superior para ordenar mi trabajo
