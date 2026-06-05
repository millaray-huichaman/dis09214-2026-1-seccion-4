# sesion-12
## 05/06/2026
### Aprender a escribir nuestras propias funciones
Apuntes en p5.js adjunto codigo
```js
// Si tiene parentesis en una funcion
// en html se puede quitar la funcion
// de createCanvas
// 
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let sumita = sumar(78, 203);
  let restita = restar(967, 849);
  console.log(restita, sumita);
  console.log (ererizar("paralelepipedo"));
  console.log (h4ck3r("murcielagos"));
}


// declarar mis propias funciones
// function nombre(parametros de
// de la funcion) {}

//function nombre(parametros) {}

function sumar(a, b){
  let resultado = a + b;
  // toma el resultado y devuelvemelo
  return resultado;
}

function restar(a, b) {
  let resultado = a - b;
  // toma el resultado y devuelvemelo
  return resultado;
}

// funcion que toma una palabra yb convierte
// todas sus vocales en e
function ererizar(palabra) {
  // recorrer cada caracter de la palabra
  let nuevaPalabra = "";
  
  for(let i = 0; i < palabra.length; i++) {
    //si es vocal convertirla en e
    if (palabra[i] == "a" ||
        palabra[i] == "i" ||
        palabra[i] == "o" ||
        palabra[i] == "u"
       ) {
      nuevaPalabra = nuevaPalabra + "e";
    }
    else {
      nuevaPalabra = nuevaPalabra + palabra[i];
    }
    
  }
  return nuevaPalabra;
}

//convertir algunos caracteres de la
// palabra entrante en numeros

function h4ck3r(palabra) {
  // palabra resultado
  resultado = "";
  
  // crea un Map vacio
  const letritas = new Map();
  // definir valores en Map
  // a -> 4
  // e -> 3
  // i -> 1
  // o -> 0
  // s -> 5
  letritas.set("a", "4");
  letritas.set("e", "3");
  letritas.set("i", "1");
  letritas.set("o", "0");
  letritas.set("s", "5");
  
  //procesar
  for (let i = 0; i < palabra. length; i++) {
    // si tenemos que cambiar la letra
    if (letritas.get(palabra[i]) == undefined) {
      resultado = resultado + palabra [i];
    }
    else {
      resultado = resultado +
      letritas.get(palabra[i]);
    }

  }
  //retornar
  return resultado;
}
```
