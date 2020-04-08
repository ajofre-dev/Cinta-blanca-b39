
var j1 = prompt("Introduce opción J1");
var j2 = prompt("Introduce opción J2");

j1 = j1.toLowerCase();
j2 = j2.toLowerCase();

if (j1 == "piedra" && j2 == "papel") {
    alert("Gana jugador 2");
} else if (j1 == "papel" && j2 == "papel") {
    alert("Es un empate");
} else if (j1 == "tijeras" && j2 == "papel") {
    alert("Gana jugador 1");

} else if (j1 == "piedra" && j2 == "piedra") {
    alert("Es un empate");
} else if (j1 == "papel" && j2 == "piedra") {
    alert("Gana jugador 1");
} else if (j1 == "tijeras" && j2 == "piedra") {
    alert("Gana jugador 2");

} else if (j1 == "piedra" && j2 == "tijeras") {
    alert("Gana jugador 1");
} else if (j1 == "papel" && j2 == "tijeras") {
    alert("Gana jugador 2");
} else if (j1 == "tijeras" && j2 == "tijeras") {
    alert("Es un empate");
} else {
     alert("Alguna opción es invallida")
}

//Manejo de errores
// else {
//   alert("Alguna opción es invallida")
//}


