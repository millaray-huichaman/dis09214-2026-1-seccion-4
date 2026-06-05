# sesion-12

05 de Junio 2026

---

## Funciones

Aprender y escribir nuestras propias funciones.

Referencia: <https://mateoarce.cl/index.html>

## ¿Cuantas funciones ves al iniciar el editor en p5.js?
* Estan las funciones que dicen function setup y function draw
* y las funciones que no dicen function, como createCanvas y background

**¿Como sabemos** que es una función **si no lo dice textualmente**? Porque **tiene paréntesis.**
* Si tiene corchetes es un arreglo
* Si tiene paréntesis es una función.

La definición de lo que significa que es createCanvas (por ejemplo) es parte de las librerías de p5, si p5 no sabe lo que es createCanvas no puede hacerlo. Esto se puede modificar en el archivo html del editor.

* function setup es la declaración del 'setup', es como let setup;, o sea es equivalente a decirle al computador este es setup.

> p5 hace cosas por ti, en este caso, declaramos nuestras funciones pero "no las estamos usando", p5 las usa igualmente, lo hace por ti.

---

## Declaremos nuestras propias funciones

Si queremos declarar nuestras propias funciones debemos usar la regla sintáxis que te meustra p5:

```js
function draw(){
background(220);
}
```

<https://design.cmu.edu>

* Parámetros es, en palabras fancy: Variables dentro de una función
   * Las funciones no son fijas
   * si yo tengo una función, como: Enseñar pensamiento computacional
   * tiene parametros fijos, como: a las 14:30, los viernes.
   * Tiene parámetros que varían, como: El tema en cada clase.

--- 

### mi primera función

Las suma pero no lo vemos
 ```js
function sumar(a, b){
a + b;
}
```

Creamos fugazmente una variable interna que se llama resultado, esta tiene solo sentido dentro de la función 'sumar'
 ```js
function sumar(a, b){
let resultado = a + b;
}
```

Lo que queremos es que el resultado se expulse fuera de la función, hazlo y escúpelo, para eso usamos 'return', suma y devuelveme el resultado.
 ```js
function sumar(a, b){
let resultado = a + b;
return resultado;
}
```

> Tenemos la capacidad y responsabilidad de decidir donde impactan las funciones.

```js
function draw(){
sumar (78, 203);
console.log(sumar (78, 203);
}
```
Vamos a crear una nueva función que contenga los números de la suma, que se llamará x
```js
function draw(){
let x = sumar (78, 203);
console.log(x);
}
```

### También podemos hacer restas:

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let laGranSuma = sumar(78, 203);
  let laGranResta = restar(4528, 3203)
  console.log(laGranResta);
}

// declarar mis propias funciones
// function nombre(params) {}

function sumar(a, b) {
  let resultado = a + b;
  return resultado;
}

function restar(izq, der) {
  let resultado = izq - der;
  return resultado;
}

```

> Allison Parrish - Poeta computacional. <https://www.decontextualize.com>

---

### Type checking

a y b, pueden ser más que números.

Ocuparemos palabras:

Vamos a crear la función ererizar que tomará la palabra que le demos, recorrer todos los caracteres y mostrarlos.

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let laGranSuma = sumar(78, 203);
  let laGranResta = restar(4528, 3203)
  console.log(laGranResta);
  let poema = sumar("estornudo", "rana");
  console.log(poema);
  
  ererizar("paralelepipedo");
}

// declarar mis propias funciones
// function nombre(params) {}

function sumar(a, b) {
  let resultado = a + b;
  return resultado;
}

function restar(izq, der) {
  let resultado = izq - der;
  return resultado;
}

// funcion que toma una palabra
function ererizar(palabra) {
  // recorrer cada caracter
  // de la palabra
  let nuevaPalabra = "";
  for(let i = 0; i < palabra.length; i++) {
    console.log(palabra[i]);
    
  }
}
```

Ahora vamos a transformar todas las 'a' de la palabra que demos, en 'e'

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let laGranSuma = sumar(78, 203);
  let laGranResta = restar(4528, 3203)
  console.log(laGranResta);
  let poema = sumar("estornudo", "rana");
  console.log(poema);
  
  console.log(ererizar("paralelepipedo"));
}

// declarar mis propias funciones
// function nombre(params) {}

function sumar(a, b) {
  let resultado = a + b;
  return resultado;
}

function restar(izq, der) {
  let resultado = izq - der;
  return resultado;
}

// funcion que toma una palabra
// y convierte todas las a en e
function ererizar(palabra) {
  // recorrer cada caracter
  // de la palabra
  let nuevaPalabra = "";
  
    // recorrer cada caracter
  // de la palabra
  for(let i = 0; i < palabra.length; i++) {
    // si es vocal, convertirla en e
    if (palabra[i] == "a") {
      nuevaPalabra = nuevaPalabra + "e";
    }
    else {
      nuevaPalabra = nuevaPalabra + palabra[i];
    }
    
  }
  return nuevaPalabra;
}
```

Ahora para añadir el resto de vocales ocuparemos || que es 'o', asi trasnformamos todas la vocales en e

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let laGranSuma = sumar(78, 203);
  let laGranResta = restar(4528, 3203)
  console.log(laGranResta);
  let poema = sumar("estornudo", "rana");
  console.log(poema);
  
  console.log(ererizar("paralelepipedo"));
}



// declarar mis propias funciones
// function nombre(params) {}

function sumar(a, b) {
  let resultado = a + b;
  return resultado;
}

function restar(izq, der) {
  let resultado = izq - der;
  return resultado;
}


// funcion que toma una palabra
// y convierte todas sus vocales en e
function ererizar(palabra) {
  // recorrer cada caracter
  // de la palabra
  let nuevaPalabra = "";
  
    // recorrer cada caracter
  // de la palabra
  for(let i = 0; i < palabra.length; i++) {
    // si es vocal, convertirla en e
    if (palabra[i] == "a"
        || palabra[i] == "i"
       || palabra[i] == "o"
       || palabra[i] == "u") {
      nuevaPalabra = nuevaPalabra + "e";
    }
    else {
      nuevaPalabra = nuevaPalabra + palabra[i];
    }
    
  }
  return nuevaPalabra;
}

```

Otro ejemplo en clases

```js
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let laGranSuma = sumar(78, 203);
  let laGranResta = restar(4528, 3203);
  console.log(laGranResta);
  let poema = sumar("estornudo", "rana");
  console.log(poema);

  console.log(ererizar("paralelepipedo"));
  
  console.log(h4ck3r("paralelepipedo"));
}

// declarar mis propias funciones
// function nombre(params) {}

function sumar(a, b) {
  let resultado = a + b;
  return resultado;
}

function restar(izq, der) {
  let resultado = izq - der;
  return resultado;
}

// funcion que toma una palabra
// y convierte todas sus vocales en e
function ererizar(palabra) {
  // recorrer cada caracter
  // de la palabra
  let nuevaPalabra = "";

  // recorrer cada caracter
  // de la palabra
  for (let i = 0; i < palabra.length; i++) {
    // si es vocal, convertirla en e
    if (
      palabra[i] == "a" ||
      palabra[i] == "i" ||
      palabra[i] == "o" ||
      palabra[i] == "u"
    ) {
      nuevaPalabra = nuevaPalabra + "e";
    } else {
      nuevaPalabra = nuevaPalabra + palabra[i];
    }
  }
  return nuevaPalabra;
}

// convertir algunos caracteres
// de la palabra entrante
// en numeros
// a -> 4
// e -> 3
// i -> 1
// o -> 0
// s -> 5
function h4ck3r(palabra) {
  // palabra resultado
  resultado = "";

  // crea un Map vacio
  const letritas = new Map();

  // a -> 4
  // e -> 3
  // i -> 1
  // o -> 0
  // s -> 5

  // definir valores en Map
  letritas.set("a", "4");
  letritas.set("e", "3");
  letritas.set("i", "1");
  letritas.set("o", "0");
  letritas.set("s", "5");

  // procesar
  for (let i = 0; i < palabra.length; i++) {
    // si tenemos que cambiar la letra
    if (letritas.get(palabra[i]) == undefined) {
       resultado = resultado + palabra[i];
    } else {
      resultado = resultado + letritas.get(palabra[i]);
    }
   
    
    // la cambiamos
    // si no, la dejamos igual
  }

  // retornar
  return resultado;
}

```
