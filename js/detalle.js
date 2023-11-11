let APIkey = "42737f60c529bfe7e9586db8cb132a1c"

let url = `https://api.themoviedb.org/3/movie/54052?api_key=42737f60c529bfe7e9586db8cb132a1c`

let titulo = document.querySelector(".tituloserie-peli");
let imagenPeli = document.querySelector(".imgSerie");
let descripcion = document.querySelector(".p-pelicula");
let rating = document.querySelector(".rating")

fetch(url)
.then(function(res) {
    return res.json();
})

.then(function(data) {
   console.log(data)
   titulo.innerText = data.title;
   imgSerie.src = `https://image.tmdb.org/t/p/w342/eQw4tC4onERymDQ6kESTqI9DC7t.jpg`
   descripcion.innerText = data.overview;
   rating.innerText = data.vote_average


    return data
})


.catch(function(error) {
    return error
})

