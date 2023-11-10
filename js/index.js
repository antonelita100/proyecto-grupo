
/* https://api.themoviedb.org/3/movie/76341?api_key=a42737f60c529bfe7e9586db8cb132a1c  ...*/





/* template */

fetch(url)
.then(function (r) {
    
    return r.json();
})
.then(function (datos) {
    console.log(datos.results);
    let peliculas = datos.results;
    let seccion = document.querySelector(".cajaPadre");

    let todas_pelis = ""

    for ( let i = 0 ; i < 5 ; i++) {
        todas_pelis += ` <article class="cajaHija">  <a href="./detalle_pelicula.html"><img class="imagen" src="./img/3b.jpg" alt=""> </a>
        <h2 class="texto1">El Legajo del Diablo</h2>
        <div class="infoExtra"><h3 class="t">2018</h3> <i class="fa-solid fa-star"></i> <h3 class="t1">3.5</h3></div>
</article>`

    
    return datos;
})
.catch(function (errores) {
    console.log(errores)
    return errores;
});