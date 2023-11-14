let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idPelicula = qsObj.get("idPelicula")
alert(idPelicula)

let APIkey = "42737f60c529bfe7e9586db8cb132a1c"

let url = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${APIkey}`



let titulo = document.querySelector(".tituloserie-peli");
let imagen = document.querySelector("#imgSerie");
let descripcion = document.querySelector(".p-pelicula");
let rating = document.querySelector(".rating")
let anio = document.querySelector(".anio")
let duracion  = document.querySelector(".duracion")
let genero = document.querySelector(".datos")


fetch(url)
.then(function(res) {
    return res.json();
})

.then(function(data) {

   console.log(data);
   rating.innerText = data.vote_average
   duracion.innerText = "Duracion: " + data.runtime +"mins"
   titulo.innerText = data.title;
   descripcion.innerText = data.overview;
   anio.innerText = data.release_date
   imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
   genero.innerText = "Genero: " + data.genres[1].name

})


.catch(function(error) {
    return error
})

