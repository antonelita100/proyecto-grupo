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
    
    let generosTexto = "Género: ";
    for (let i = 0; i < data.genres.length; i++) {
        generosTexto += data.genres[i].name;
        if (i < data.genres.length - 1) {
            generosTexto += ', '; }} 

})

.catch(function(error){

})

document.addEventListener("DOMContentLoaded", function() {

    let recomendaciones = document.querySelector(".recomendaciones");

    if (recomendaciones) {
        recomendaciones.addEventListener("click", function() {  
            fetch(`https://api.themoviedb.org/3/tv/${idSerie}/recommendations?api_key=${APIkey}`)
            .then(function(res) {
                return res.json();
            })
            .then(function(dataR) {
                const contenedor = document.querySelector('#contenedor-recomendaciones');
                contenedor.innerHTML = ''; // Limpiar contenido anterior

                for (let i = 0; i < dataR.results.length && i < 5; i++) {
                    const serie = dataR.results[i];
                    contenedor.innerHTML += `
                        <div class="recomendacion-item">
                            <h2>${serie.name}</h2>
                            <img src="https://image.tmdb.org/t/p/w500${serie.poster_path}" alt="${serie.name}">
                        </div>
                    `;
                }
            })
            .catch(function(error) {
                console.log("Error:", error);
            });
        });
    } else {
        console.log("Error: .recomendaciones no encontrado en el DOM");
    }
});