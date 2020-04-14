var menu = {
    hamv: "Hamburguesa vegetariana",
    ham: "Hamburguesa de res",
    ref: "Refresco",
    cer: "Cerveza",
    cpap: "Con papas",
    spap: "Sin papas",
}

var menuHamv = document.getElementById("menu-hamv");
var menuHam = document.getElementById("menu-ham");

menuHam.innerHTML = menu.hamv;
objetoMensaje.innerHTML = objeto.obtenerInfo();

order: function() {
    if (menuHam.value = true) {
        objetoNombre.innerHTML = objeto.nombre;

    } else {
        return "La pintura " + this.nombre + " del pintor " + this.autor + " tiene " + this.colores.length + " colores"
    }
}
