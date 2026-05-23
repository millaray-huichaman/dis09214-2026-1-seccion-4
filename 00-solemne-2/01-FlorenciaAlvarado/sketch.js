//Obra seleccionada albúm hit me hard and soft Billie Eilish 
//Canción:Birds of a feather
//Elegi a Billie Eilish porque siempre me ha gustado mucho su voz y sus canciones, elegí el albúm hit me hard and soft porque cada canción pasa por otra emoción distinta y con un mensaje distinto y eso me gusta.
//Birds of a feather habla sobre como una persona se siente al estar enamorado y el deseo de estar con alguien el tiempo posible que dure la relación, sin querer que eso termine.

// let sirve para crear una variable, guardar una informacion, para luego poder reproducirla en el lienzo, siempre se pone al inicio del lienzo, porque es las primeras cosas que hay que hacer para que despues todo funcione. Por eso tengo uno para cada elemento, como las imagenes, la musica, el texto.
let billiefoto;
let puerta; 
let resultado=0; 
let textoMostrar; 
let pluma;
//Para poner musica me ayude con la ia, preguntando como pongo musica en p5js forma sencilla.
//La forma más sencilla de poner música en p5.js es cargando el archivo con loadSound() en preload(), iniciar la reproducción con musica.play() o musica.loop() dentro de setup() y tener activada la librería p5.sound, aunque debes considerar que muchos navegadores bloquean el sonido automático hasta que el usuario interactúe al menos una vez con la página.
let musica; 
const carasresultado=2;


//preload es una función que sirve para cargar archivos antes de que empiece la animación, es necesario ocuparlo para subir imagenes como en mi caso que las 3 imagenes que use las mencione con preload o musica en mi caso, ya que son archivos pesados y deben cargar antes de que empiece setup y draw.
function preload () {
  billie=loadImage ('Billie foto.png');
  //https://itsoundsalternative.com/2026/01/30/billie-eilish/  
  puerta=loadImage ('puerta.png'); //medidas originales foto 1023 por 420
  //https://www.lahiguera.net/musicalia/artistas/billie_eilish/disco/13440/  
  pluma=loadImage  ('pluma.png'); //medidas originales foto 
  //https://www.canva.com/design/DAHKV1d6Aps/gaWsrsFD5I454_5jg9HplQ/edit
  musica=loadSound ('Billie Eilish - Birds of a Feather.mp3');// canción 
  //https://audio.com/zurdoleones/audio/billie-eilish-birds-of-a-feather

}

function setup() {
  // elegi medidas del lienzo, como un cuadrado de 600.
  createCanvas(600,600);
  //con esto oculto la flecha del cursor en el lienzo.
  noCursor();
  //con text size modifique el tamaño de el texto que puse mas abajo. 
  textSize(20);
  //con fill veo el color de mi texto en la pantalla. 
  fill(164, 165, 219,100);
  //textalign sirve para alinear el texto, ya sea en el centro como en este caso o a la derecha o a la izquierda, no es lo mismo que al escribir text ponga la palabra y parametros en (), ya que eso es para ver ubicación dentro de todo el lienzo. 
  textAlign (CENTER,CENTER);
  
  // con esto hago que la musica automaticamente se ponga al iniciar el lienzo. 
  musica.play();
  
 //ocupe frame rate para modificar la velocidad de las pelotitas que puse usando for, ya que se estaban moviendo muy rapido. 
  frameRate(18);
}


function draw() {
  //con backgroun elijo el color del fondo.
  background(0, 4, 80);
  console.log (resultado);
  
  //usare for, para que funcione va dentro de draw, de esta forma se repite todo el tiempo como una animacion, al contrario al ponerlo en setup, se alcanza a ver una vez y deja de repetirse.
  // let i=0 significa que crea una variable y se le asigna un valor inicial, en este caso es 0. El ; divide, i<70 significa que se seguira repitiendo mientras esa condición sea cierta, por lo tanto nuestro circulo se repetira 70 veces. El i++ sirve para evitar que el bucle sea infitito, funciona al por ejemplo ir sumandole 1, entonces va en orden aumentando 0,1,2,3,4 etc.
  
  
 for (let i = 0; i < 70; i++) { 
   //con fill elijo el color de los circulos.
    fill(173, 179, 232,100)
   //con nostroke elimino el contorno de los circulos.
    noStroke(0);
   //aca le dije que hiciera circulos para el bucle, esto lo repite 70 veces en el lienzo, pero con estos parametros le pedi que fuera en un lugar aleatorio, es decir, en cualquier posición desde el 0 al 600, ya que esas son las medidas de alto y ancho de mi lienzo total.
   //los parametros 40 y 40 son mis indicadores del tamaño de cadas circulo.
    ellipse(random(0,600), random(0,600),40,40) ;
   
   //Acá pedi que insertara la imagen de la pluma y queria que fuera mi cursor por lo que puse los parametros del mouse X e Y, ademas de el tamaño de la imagen, como era 236 el tamaño original, era muy grande y lo dividi en 2 quedando 118. 
    image(pluma, mouseX, mouseY,118,118); 
 
  }
  
    
  //If sirve para que se ejecute una acción si una condición se cumple.
  //En este caso lo ocupe usando el mouse, por lo que cuando se hace click y sale un numero en especifico se cumple que en la pantalla sale un texto.
  //Empiezo diciendo que si el resultado es 1, en la pantalla aparece el texto birds of a feather.
  //Luego ocupo el else if,quer sirve para dar otra condición si el If no se cumple.
  //En este caso le pedi que si el resultado es 2, distinto al 1, aparece el texto Billie Eilish en la pantalla.
  //Luego agregue otra variable que si el numero es otro entre 1 o 2 aparece otro texto que dice clickeame. Por lo que cuando sale 0 aparece eso en la pantalla.
  if (resultado==1){
    textoMostrar= "Birds of a feather";
  } else if(resultado==2) {
    textoMostrar= "Billie Eilish";
  } else {
    textoMostrar= "clickeame" 
  }
 
  //circulo agrandandose.
  //con agregar estos 2 circulos quise representar a dos personas siguiendose y estando juntos en una relación, donde se eligen diariamente. 
//Let tamaño sirve para crear una variable llamada tamaño, en este caso hice 2 circulos, por lo que tengo tamaño y tamaño2.
  //El = 300 o 200 es para que el circulo en vez de empezar desde 0, empieza desde 300 o 200 y ese es el valor inicial. 
  //El sin sirve para crear ese movimiento suave y para que se repita infinitamente.
  //Framecount sirve para ir contando los cuadros que pasan y al mezclarlo con * o.o2 controlo la velocidad a la que se agranda y achica el circulo, si fuera 0.01 iria mas rapido y si fuera un numero mayor a 0.02 va ir más lento.
  //El * 400 es para controlar cuanto aumento o disminuye el circulo, siendo la amplitud.
  let tamaño= 300 + sin(frameCount * 0.02) * 400
  //elijo color.
  fill( 197, 194, 219,100); 
  //Elimino contorno circulo.
  noStroke();
  //Con estos parametros ubico el circulo en el centro, con 300 y 3000, luego ocupo parametros tamaño para que se mueva siguiendo variable tamaño.
 ellipse(300,300, tamaño,tamaño);
   
  //segundo circulo agrandandose.
   let tamaño2= 200 + sin(frameCount * 0.02) * 400
   //elijo color de circulo.
  fill(227, 225, 247,100);
  //elimino contorno de circulo
  noStroke(0);
  //También ubico circulo en centro con 300 y 300, y con tamaño2 funciona lo que le pedi en la variable let tamaño2.
  ellipse(300,300,tamaño2,tamaño2);  
  
  
  
  //la imagen se dibuja desde el centro y no desde la esquina.
 imageMode(CENTER); 
  //Acá veo ubicación de la imagen, la queria centrada horizontalmente por eso 300 y 460 para ver su ubicación en eje vertical Y, el otro parametro es para el tamaño de la imagen.
  image (billie,300,460,286,286)
  //Acá agrego imagen puerta y hago que se mueva suavemente usando sin y framecount.
  // los dos primeros parametros 300 y 60 son para ubicar la imagen en el lienzo, 300 para centrarla y 60 para ver el eje vertical y d ela imagen.
  //Sin me sirve para que sea un movimiento suave, framecount cuenta los cuadros y el 0.04 controla la velocidad.
  //el *15 es para controlar que tanto avanza la imagen verticalmente, si voy aumentando mas el digito esa imagen seguira bajando hasta ese valor. 
  //Los otrso parametros son para ver el tamaño de la imagen.
  image(puerta,
        300,60 + sin(frameCount * 0.04) * 15, 511.5,210); 
        
 
  
  //Text sirve para mostra el texto en la pantalla,textomostrar es la variable que contiene el texto, y 300 es para centrar el texto horizontalmente y verticalmente.
 text(textoMostrar, 300, 300); }
 
// esta función se ejecuta cuando haces clic en el mouse. 
function mousePressed() {
  //esto permite que en la consola aparezca click.
  console.log("click");
  //esto sirve para redondear el numero y que no sea decimal, ceil redondea para arriba, random y carasresultado sirve para generar un numero aleatorio entre 0 y carasresultado.
  resultado=ceil(random(carasresultado));
}


 
