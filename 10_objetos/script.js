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
    nombre: "La joven de la perla",
    autor: "Johannes Vermeer",
    url: "https://i.pinimg.com/originals/c8/b6/d6/c8b6d622594c8ed3b239a895cdb995b3.jpg",
}



var objetoNombre = document.getElementById("objeto-nombre");
var objetoMensaje = document.getElementById("objeto-mensaje");
var objetoUrl = document.getElementById("objeto-url");
var objeto01Nombre = document.getElementById("objeto01-nombre");
var objeto01Autor = document.getElementById("objeto01-autor")
var objeto01Url = document.getElementById("objeto01-url");
var objeto02Nombre = document.getElementById("objeto02-nombre");
var objeto02Mensaje = document.getElementById("objeto02-mensaje")
var objeto02Url = document.getElementById("objeto02-url");
//console.log(objetoNombre);//
//console.log(objetoMensaje);//

objetoNombre.innerHTML = objeto.nombre;
objetoMensaje.innerHTML = objeto.obtenerInfo();
objetoUrl.src = objeto.url;
objeto01Nombre.innerHTML = objeto01.nombre;
objeto01Autor.innerHTML = objeto01.autor;
objeto01Url.src = objeto01.url;
objeto02Nombre.innerHTML = objeto02.nombre;
objeto02Mensaje.innerHTML = objeto02.autor
objeto02Url.src = objeto02.url;

//console.log(objetoNombre.innerHTML);

//console.log(objeto);
//console.log(objeto.autor);

//console.log(objeto.calcularEdad());
//console.log(objeto.numeroColores());
//console.log(objeto.obtenerInfo());

//console.error("Esto es un error");
//console.warn("Puede que te equivoques");
//console.log("Un log normal");


function dimeMiNombre() {
var nombre = document.getElementById("nombre");
var miNombre = document.getElementById("mi-nombre");

nombre.value = miNombre.innerHTML;
//alert ("Tu nombre es " + nombre.value);
}