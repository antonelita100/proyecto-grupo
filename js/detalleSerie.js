let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idSerie = qsObj.get("idSerie")


let APIkey = "42737f60c529bfe7e9586db8cb132a1c"

let urlS = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${APIkey}`


let titulo = document.querySelector(".tituloserie-peli");
let imagen = document.querySelector("#imgSerie");
let descripcion = document.querySelector(".p-serie");
let rating = document.querySelector(".rating")
let anio = document.querySelector(".anio")
let genero = document.querySelector(".datos")
let temporada = document.querySelector(".temporada")


fetch(urlS) 
.then(function(res){
    return res.json();
})

.then(function(data){
    console.log(data)
    rating.innerText = data.vote_average    ;
    titulo.innerText = data.name;
    descripcion.innerText = data.overview;
    anio.innerText = "Estreno: " + data.first_air_date;
    imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
    genero.innerText = "Genero: " + data.genres[1].name
    temporada.innerText = "Temporadas: " + data.number_of_seasons;
    
    /*let generosTexto = "Género: ";
    for (let i = 0; i < data.genres.length; i++) {
        generosTexto += data.genres[i].name;
        if (i < data.genres.length - 1) {
            generosTexto += ', '; }} */

})

.catch(function(error){

})