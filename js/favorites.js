let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idPelicula = qsObj.get("idPelicula")


let acaVaLaAPIKey = "42737f60c529bfe7e9586db8cb132a1c";
let url = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${APIkey}`; 

const btn = document.querySelector(".agregar-favoritos");

// const almacenar = btn.addEventListener("click", function(e))

const data = [

]

const almacenar = btn.addEventListener("click", function(e){

    if (agregar.innerText == "Modo Oscuro") {
        body.style.backgroundColor = "black";
        this.innerText = "Quitar de Favoritos";
    } 
    else {
        body.style.backgroundColor = "white";
        this.innerText = "Agregar a Favoritos";
    }
})



















/* const almacenar = btn.addEventListener("click", function(e)){
    
    let recuperoPeliculaLocal = localStorage.getItem("idPelicula");
    
    
    for (let i = 0, recuperoPeliculaLocal.length; i+=){
        fetch (url)
        .then(function (r) {
        
        return r.json();
        })
        .then(function (datos) {
            let array = datos.results; 
            console.log(array)
         
    
             for (let i = 0; i < array.length; i++) {
                contenido.innerHTML += `<article class="cajaHija"> <a href="./detalle_pelicula.html"> <img class="imagen" src="https://image.tmdb.org/t/p/w500${array[i].poster_path}" alt=""> </a>  <h2 class="texto1">${array[i].original_title}</h2> <div class="infoExtra"><h3 class="t">${array[i].release_date}</h3> <i class="fa-solid fa-star"></i> <h3 class="t1">${array[i].vote_average}</h3><p class="oculto">${array[i].id}</p></div> </article>`;
            }
        
        return datos;
        }) 
    }
}



const seleccionado = data[almacenar];
console.log(seleccionado)

// transformar en JSON 
let peliculaJSON = JSON.stringify(seleccionado);
console.log(peliculaJSON)
// subir la info a local 
localStorage.setItem("idPelicula", peliculaJSON)
// subir la info a session 
let recuperoPeliculaLocal = localStorage.getItem("iidPelicula");
let resultadoLocal = JSON.parse(recuperoPeliculaLocal);
console.log(resultadoLocal)

 */



let arrayPelisGuardads = []