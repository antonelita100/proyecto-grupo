let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idSerie = qsObj.get("idSerie")
alert(idSerie)

let APIkey = "42737f60c529bfe7e9586db8cb132a1c"

let url = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${APIkey}`

let titulo = document.querySelector(".tituloserie-peli");
let imagen = document.querySelector("#imgSerie");
let descripcion = document.querySelector(".p-serie");
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
   
})


.catch(function(error) {
    return error
})
