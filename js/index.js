
/* https://api.themoviedb.org/3/movie/76341?api_key=a42737f60c529bfe7e9586db8cb132a1c */

let url = https://api.themoviedb.org/3/movie/76341?api_key=42737f60c529bfe7e9586db8cb132a1c


let 



/* template */

fetch(url)
.then(function (r) {
    
    return r.json();
})
.then(function (datos) {
    console.log(datos.url);
    let array = datos.provincias;

   /* for ( let i = 0 ; i < array.length; i++) {
        console.log(array[i].nombre);
        listaProvincias.innerHTML += `<li><a href="./detalleProvincia.html?id_provincia=${array[i].id}">${array[i].nombre}</a></li>`
    }
*/
    
    return datos;
})
.catch(function (errores) {
    console.log(errores)
    return errores;
});