//alert("Funciona")

var edad = 05;

if (edad >= 18) {
    console.log("Eres mayor de edad")
} else {
    console.log("No eres mayor de edad")
}

// Operación modulo %
// Imprimir Fizz si un número es multiplo de 3
// Imprimir Buzz si un número es multiplo de 5
// Imprimir FizzBuzz si el numeor es multiplo de 3 y 5
// Imprimir número


var numero = 9;

if (numero % 3 === 0) {
    if (numero % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log("Fizz");
    }
} else if (numero % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(numero);
}

// Con operadores de And y Or

if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("FizzBuzz");
} else if (numero % 3 === 0) {
    console.log("Fizz");
} else if (numero % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(numero);
}

//For

for(var i = 0; i <= 10; i++){
    console.log("Vuelta " + 1);
}

for(var i = 10; i >= 10; i--){
    console.log(i);
}


// For 5 al 20
// For 10 al 3
// For 1 al 100

for(var i = 5; i <= 20; i++){
    console.log("Vuelta " + 1);
}

for(var i = 10; i >= 3; i--){
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// While Es una manera diferente de declarar un for
var i = 0;
while(i <=5) {
    console.log(i);
    i++;
}

// do while
var e = 3;
do {
    console.log(e);
    e++;
} while(e <= 10);

// Simulación de piedra, papel o tijeras

