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

        } else {
            return "La pintura " + this.nombre + " del pintor " + this.autor + " tiene " + this.colores.length + " colores"
        }
    },
    obtenerInfo: function () {
        return "La obra " + this.nombre + " fue pintada por " + this.autor + " en el año " + this.anio
    }


}

var objeto01 = {
    nombre: "El grito",
    autor: "Edvard Munch",
    anio: "1999",
    url: "https://cdn3.m.admexico.mx/uploads/images/thumbs/mx/ad/1/s/2019/33/el_grito_pintura_8782_600x.jpg"
}

var objeto02 = {
    nombre: "La noche estrellada",
    autor: "Van Gogh",
    tecnica: "Oleo",
}

var objetoNombre = document.getElementById("objeto-nombre");
var objetoMensaje = document.getElementById("objeto-mensaje");
var objetoUrl = document.getElementById("objeto-url");
var objeto01Nombre = document.getElementById("objeto01-nombre");
var objeto01Mensaje = document.getElementById("objeto01-mensaje")
var objeto01Url = document.getElementById("objeto01-url");
//console.log(objetoNombre);
//console.log(objetoMensaje);

objetoNombre.innerHTML = objeto.nombre;
objetoMensaje.innerHTML = objeto.obtenerInfo();
objetoUrl.src = objeto.url;
objeto01Nombre.innerHTML = objeto01.nombre;
objeto01Mensaje = objeto01.autor;
objeto01Url.src = objeto01.url;

//console.log(objetoNombre.innerHTML);



//console.log(objeto);
//console.log(objeto.autor);

//console.log(objeto.calcularEdad());
//console.log(objeto.numeroColores());
//console.log(objeto.obtenerInfo());

//console.error("Esto es un error");
//console.warn("Puede que te equivoques");
//console.log("Un log normal");




//objetoUrl.src = objeto.url;
//objetoUrl.alt = objeto.nombre;

//function dimeMiNomre () {
    //var nombre = document.getElementById("nombre");
    //var miNombre = documeny.getElementById("mi-nombre");

    //miNombre.innerHTML = nombre.nodeValue;
//}
