let APIkey = "42737f60c529bfe7e9586db8cb132a1c"

let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIkey}`

let contenido = document.querySelector('.sectionD')
let seleccionPelicula = section.querySelector()

fetch(url)
.then(function (r) {
    
    return r.json();
})
.then(function (datos) {
    console.log(datos);
    let array = datos.results;
    console.log(array);

    for ( let i = 0 ; i < 1 ; i++) {
        console.log(array[i])
        
    
    return datos;
})

.catch(function (errores) {
    console.log(errores)
    return errores;
});