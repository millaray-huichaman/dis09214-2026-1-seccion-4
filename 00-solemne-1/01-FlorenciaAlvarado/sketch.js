function setup() {
  createCanvas(600, 600); // crea el lienzo, los parametros hacen que use la pantalla completa. https://p5js.org/reference/p5/windowWidth/
  noCursor (); // esconde el cursor, va sin parametros, ya que solo le dice al programa que lo oculte https://p5js.org/reference/p5/noCursor/
  textSize (60); // define tamaño texto, en este caso de emoji dentro de la pantalla https://p5js.org/reference/p5/text/
}

function draw() {
  background(245, 124, 96); // Elige el color del fondo. Orden RGB, el primero sirve para el rojo, el segundo para verde y el tercero para azul. https://p5js.org/reference/p5/background/
  
  noStroke();//le elimina el borde a la figura. https://p5js.org/reference/p5/noStroke/
  fill (247, 62, 92 );// rellena la figura con color, parametros de RGB.  la referencia al enlace de la documentación de p5.js que corresponda.
  rect (20,20,150,200); //genera rectangulo, sus parametros son X,Y,windowWidth y windowHeigth. En este caso queria un recatngulo que saliera desde la esquina superior izquierda por eso 20,20 y el tamaño lo vi con 150 y 200. https://p5js.org/reference/p5/rect/
  
  
  stroke(255, 162, 170);// agrega borde a la figura, parametros de color en RGB. https://p5js.org/reference/p5/stroke/
  strokeWeight (10);// grosor del borde, parametros variables para aumentar o disminuir el grosor. https://p5js.org/reference/p5/strokeWeight/
  fill (181, 21, 42);
  rect (440,380,150,200); 
  
  stroke(12, 255, 105);
  strokeWeight(10);
  fill(224, 101, 90);
  rect (70,80,300,400);
  
  stroke(230, 67, 42);
  strokeWeight(10);
  fill(181, 21, 42,100);
  ellipse(400,200,300,300);// sirve para ovalos, sus parametros son X,Y, width y heigth, para hacer circulo width y height deben ser iguales, mientras que x e y centran el circulo en el espacio. https://p5js.org/reference/p5/ellipse/

  fill (181, 255, 181,100);
  ellipse(150,470,300,300);
   text ("💕", mouseX, mouseY); // la palabra text permite escribir algo o poner un emoji en la pantalla, en este caso cambia el cursor por un emoji, el parametro mouseX indica donde esta el mouse horizontal y mouse Y donde esta en vertical, sirve para dibujar el emoji exactamente en donde esta el mouse. Va al final de todas las figuras, para que pase por encima de estas y no por abajo. https://p5js.org/reference/p5/mouseX/ https://p5js.org/reference/p5/mouseY/
  
  
  
  ellipse(
    (frameCount * 5) % 600,
    400, 50,50) //https://p5js.org/reference/p5/frameCount/
  
}

