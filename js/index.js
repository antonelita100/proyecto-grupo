let acaVaLaAPIKey = "42737f60c529bfe7e9586db8cb132a1c"

let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${acaVaLaAPIKey}`
let url2 = `https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`
let url3 = `https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`

let contenido = document.querySelector(".cajaPadre");
let seccionPelicula = cajaPadre.querySelector(".pelicula");
let seccionSerie = cajaPadre.querySelector(".serie");


/* template */

fetch(url)
.then(function (r) {
    
    return r.json();
})
.then(function (datos) {
    let array = datos.results;
    console.log(array)
        
    for (let i = 0 ; i < 5; i++) {
        console.log(array[i].original_title);
        console.log(array[i].poster_path)
        console.log(array[i].release_date)
        console.log(array[i].vote_average)
        contenido.innerHTML += `<article class="cajaHija">  <a href="./detalle_pelicula.html"><img class="imagen" src="https://image.tmdb.org/t/p/w500${array[i].poster_path}" alt=""> </a> <h2 class="texto1">${array[i].original_title}</h2> <div class="infoExtra"><h3 class="t">${array[i].release_date}</h3> <i class="fa-solid fa-star"></i> <h3 class="t1">${array[i].vote_average}</h3></div> </article>`;

    }



    
    return datos;
})

fetch(url2)
.then(function (r) {
    
    return r.json();
})
.then(function (datos) {
    let array = datos.results;
    console.log(array)
        
    for (let i = 0 ; i < 5; i++) {
        console.log(array[i].original_title);
        console.log(array[i].poster_path)
        console.log(array[i].release_date)
        console.log(array[i].vote_average)
        seccionPelicula.innerHTML += `<article class="cajaHija">  <a href="./detalle_pelicula.html"><img class="imagen" src="https://image.tmdb.org/t/p/w500${array[i].poster_path}" alt=""> </a> <h2 class="texto1">${array[i].original_title}</h2> <div class="infoExtra"><h3 class="t">${array[i].release_date}</h3> <i class="fa-solid fa-star"></i> <h3 class="t1">${array[i].vote_average}</h3></div> </article>`;

    }



    
    return datos;
})

fetch(url3)
.then(function (r) {
    
    return r.json();
})
.then(function (datos) {
    let array = datos.results;
    console.log(array)
        
    for (let i = 0 ; i < 5; i++) {
        console.log(array[i].original_title);
        console.log(array[i].poster_path)
        console.log(array[i].release_date)
        console.log(array[i].vote_average)
        seccionSerie.innerHTML += 
        `<article class="cajaHija">
        <a href="./detalle_serie.html"><img class="imagen" src="./img/5c.jpg" alt=""> </a>
        <h2 class="texto1">The Walking Dead</h2>
        <div class="infoExtra"><h3 class="t">2018</h3> <i class="fa-solid fa-star"></i> <h3 class="t1">3.5</h3></div>
        </article>;
    }
    
    return datos;

})




