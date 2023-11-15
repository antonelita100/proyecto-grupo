let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idSerie = qsObj.get("idSerie")

let APIkey = "42737f60c529bfe7e9586db8cb132a1c"

let url = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${APIkey}`

let titulo = document.querySelector(".tituloserie-peli");
let imagen = document.querySelector(".divImage");
let descripcion = document.querySelector("#p-serie");
let rating = document.querySelector(".rating")
let anio = document.querySelector(".anio")
let duracion  = document.querySelector(".duracion")
let genero = document.querySelector(".datos")
let temporada = document.querySelector(".temporada")

fetch(url)
.then(function(res) {
    return res.json();
})

.then(function(data) {

   console.log(data);
   rating.innerText = data.vote_count
   duracion.innerText = "Duracion: " + data.runtime +"mins"
   titulo.innerText = data.original_name;
   descripcion.innerText = data.overview;
   anio.innerText = data.first_air_date
   temporada.innerText = data.number_of_seasons
   imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
   genero.innerText = "Genero: " + data.genres[1].name

   
})


.catch(function(error) {
    return error
})
