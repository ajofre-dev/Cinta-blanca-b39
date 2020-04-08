// alert("Funciona");

// Variables
// Espacio dedicado para almacenar un dato
// Nombre = valor;
var numero = 5;
// Numero

var checkbox = false;
// Booleana

var nombre = "Gerardo";
// String

//mostrar variables
console.log(numero);
console.log(checkbox);
console.log(nombre);

var x = 9;
var y = 4;
var z = 3;

// suma
var suma = x + z;

// concatenar
console.log("La suma es " + suma);

// resta
var resta = x - z;

console.log("La resta es " + resta);

// multiplicacion
var multiplicacion = x * z;

console.log("La multiplicación es " + multiplicacion);

// division
var division = 9 / 3;

console.log("La división es " + division);

// Modulo obtiene residuos
var modulo = 3 % 2; 
console.log(modulo);


//Enumerar
console.log(suma, resta, multiplicacion, division);

//operadores lógicos

//mayor que
console.log(9>3);

//menor que
console.log(3<1);

//igual que
console.log(5==5);

//diferente
console.log(3 !=3);

console.log("Gerardo" == "Sensei");

// comparacion sencilla
console.log("*");
console.log("5" == 5);

//comparación estricta siempre
console.log("5" === 5);


//otras operaciones
console.log(5>=5);

//funciones
function sumaNumero(a,b){   //parámetros
    var resultado = a + b;  // Algoritmo
    return resultado;       // resultado
}

console.log(sumaNumero(5,9)); 

//prompt

var edad = prompt("Ingresa tu edad");
edad = parseInt(edad);
console.log(edad);





