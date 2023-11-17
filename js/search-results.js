let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let nombre = queryStringObj.get("nombre"); 


function redirigirConDato() {

    let valorInput = document.getElementById('buscador').value;

    let nuevaURL = window.location.href + '?dato=' + encodeURIComponent(valorInput);

    window.location.href = nuevaURL;
}

let acaVaLaAPIKey = "42737f60c529bfe7e9586db8cb132a1c";
let url1 = `https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${nombre}`; 
let url2 = `https://api.themoviedb.org/3/search/tv?api_key=${acaVaLaAPIKey}&query=${nombre}`; 
let contenido = document.querySelector(".cajaPadre");




fetch(url1)
.then(function (r) {
    
    return r.json();
})
.then(function (datos) {
    let array = datos.results; 
    console.log(array)
     

    for (let i = 0; i < array.length; i++) {
        contenido.innerHTML += `<article class="cajaHija"> <a href="./detalle_pelicula.html?idPelicula=${array[i].id}"> <img class="imagen" src="https://image.tmdb.org/t/p/w500${array[i].poster_path}" alt=""> </a>  <h2 class="texto1">${array[i].original_title}</h2> <div class="infoExtra"><h3 class="t">${array[i].release_date}</h3> <i class="fa-solid fa-star"></i> <h3 class="t1">${array[i].vote_average}</h3><p class="oculto">${array[i].id}</p></div> </article>`;
      }
    
    return datos;
})
.catch(function (error) {
    alert("No se encontraron resultados");
    contenido.innerHTML += '<h1 class="titulo">No se encontraron resultados</h1>';
    return error;
  });



  fetch(url2)
.then(function (r) {
    
    return r.json();
})
.then(function (datos) {
    let array2 = datos.results;
    console.log(array)
        
    for (let i = 0; i < array.length; i++) {
        contenido.innerHTML += `<article class="cajaHija"> <a href="./detalle_serie.html?idSerie=${array2[i].id}"> <img class="imagen" src="https://image.tmdb.org/t/p/w500${array2[i].poster_path}" alt=""> </a>  <h2 class="texto1">${array2[i].original_title}</h2> <div class="infoExtra"><h3 class="t">${array2[i].release_date}</h3> <i class="fa-solid fa-star"></i> <h3 class="t1">${array2[i].vote_average}</h3><p class="oculto">${array2[i].id}</p></div> </article>`;
      }
    

    return datos;
})
.catch(function (error) {
    alert("No se encontraron resultados");
    contenido.innerHTML += '<h1 class="titulo">No se encontraron resultados</h1>';
    return error;
  });





