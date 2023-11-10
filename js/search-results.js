
let url = 


fetch(url)
.then(function (r) {
    
    return r.json();
})
.then(function (datos) {
    console.log(datos.url);
    let array = datos.provincias;

   // for ( let i = 0 ; i < array.length; i++) {
       // console.log(array[i].nombre);
       // listaProvincias.innerHTML += `<li><a href="./detalleProvincia.html?id_provincia=${array[i].id}">${array[i].nombre}</a></li>`
   // }


    return datos;
})
.catch(function (errores) {
    console.log(errores)
    return errores;
});



const busqueda = document.querySelector("#buscador");
const form = document.querySelector(".form")

busqueda.addEventListener("keydown", function(e) {
    console.log(e.value); 
}) 

form.addEventListener("submit", function(e){
    e.preventDefault();

    if (busqueda.value == "") {
        alert("Ingrese lo que desea buscar");
    }

    
    else {
        this.submit ();
    }
})




/*console.log(e.key);  --> imprime letra por letra en la consola*/ /*recupera todos los elementos*/  