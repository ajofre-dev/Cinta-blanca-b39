var objeto = {
    nombre: "La noche estrellada",
    autor: "Van Gogh",
    tecnica: "Oleo",
    colores: ["#FFFFFF"],
    anio: 1889,
    lugar: "Amsterdam",
    mensaje: "Es una obra muy linda",
    museo: "Museo Van Gogh",
    url: "https://www.salirconarte.com/wp-content/uploads/2017/06/orig_64571-750x430.jpg",



    calcularEdad: function () { 
        return 2020 - this.anio 
    },

    numeroColores: function () {
        if (this.colores.length === 1) {
            return "La pintura " + this.nombre + " del pintor " + this.autor + " tiene " + this.colores.length + " color"
        
    }else {
        return "La pintura " + this.nombre + " del pintor " + this.autor + " tiene " + this.colores.length + " colores"
    }
},
obtenerInfo: function() {
    return "La obra " + this.nombre + " fue pintada por " + this.autor + " en el año " + this.anio
}


}

console.log(objeto);
console.log(objeto.autor);

console.log(objeto.calcularEdad());
console.log(objeto.numeroColores());
console.log(objeto.obtenerInfo());

//var objetoNombre = document.getElementById("objeto-nombre");
//console.log(objetoNombre)

//var objetoMensaje = document.getElementById("objeto-mensaje");
//console.log(objetoMensaje)

//objetoNombre.innerHTML = objeto.nombre
//objetoMensaje.innerHTML = objeto.numeroColores();
//objetoUrl.src = objeto.url;
//objetoUrl.alt = objeto.nombre;



//console.error("Esto es un error");


//function dimeMiNomre () {
    //var nombre = document.getElementById("nombre");
    //var miNombre = documeny.getElementById("mi-nombre");

    //miNombre.innerHTML = nombre.nodeValue;
//}
