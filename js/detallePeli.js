let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idPelicula = qsObj.get("idPelicula")


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
   anio.innerText = "Estreno: " + data.release_date
   imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
   genero.innerText = "Genero: " + data.genres[0].name

})


.catch(function(error) {
    return error
})

let recomendaciones = document.querySelector(".recomendaciones");
recomendaciones.addEventListener("click", function() {
    let idPelicula = '278'; // Asegúrate de reemplazar esto con el ID de la película
    let APIkey = '42737f60c529bfe7e9586db8cb132a1c'; // Reemplaza esto con tu clave API real

    fetch(`https://api.themoviedb.org/3/movie/${idPelicula}/recommendations?api_key=${APIkey}`)
    .then(function(res) {
        return res.json();
    })
    .then(function(dataR) {
        let recomendaciones = document.querySelector(".recomendaciones");
        recomendaciones.addEventListener("click", function() {
            let idPelicula = '278'; // ID de la película
            let APIkey = '42737f60c529bfe7e9586db8cb132a1c'; // Tu clave API
        
            fetch(`https://api.themoviedb.org/3/movie/${idPelicula}/recommendations?api_key=${APIkey}`)
            .then(function(res) {
                return res.json();
            })
            .then(function(dataR) {
                console.log(dataR);
                const contenedor = document.querySelector('#contenedor-recomendaciones');
                contenedor.innerHTML = ''; // Limpiar contenido anterior
        
                for (let i = 1; i < 5; i++) {
                    const pelicula = dataR.results[i];
                    contenedor.innerHTML += `
                        <h4>${pelicula.title}</h4>
                        <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
                    `;
                }
            })
            .catch(function(error) {
                console.log("Error:", error);
            });
        });
    })})