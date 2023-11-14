let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idPelicula = qsObj.get("idPelicula")


let acaVaLaAPIKey = "42737f60c529bfe7e9586db8cb132a1c";
let url = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${APIkey}`; 


const data = [ ]

const almacenar = prompt("ingrese el numero de personaje");


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


const btn = document.querySelector(".agregar-favoritos");


btn.addEventListener("click", function(e){
    /* va la accion que realizara si se ejecuta el evento */
   // this.style.backgroundColor = "white";
   // this.style.color = "black";
   // this.innerText = "Seguido"
})


fetch(url1)
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