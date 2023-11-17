let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idPelicula = qsObj.get("idPelicula");
let idSerie = qsObj.get("idSerie");
let nombre = qsObj.get("name");
let apiKey = "42737f60c529bfe7e9586db8cb132a1c";

let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${idPelicula}`;
let url2 = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${idSerie}`;

let tipo = qsObj.get("tipo");

let peliculaSection = document.querySelector("#peliculaSection");
let serieSection = document.querySelector("#serieSection");
let titulo = document.querySelector(".titulo");
let titulo2 = document.querySelector("#titulo2");

if (tipo === "pelicula") {
  serieSection.style.display = "none";
  titulo2.style.display = "none";
  
} else if (tipo === "serie") {
  peliculaSection.style.display = "none";
  titulo2.style.display = "none";
}


fetch(url)
  .then(function (r) {
    return r.json();
  })
  .then(function (datos) {
    let array = datos.results;

    let contenido = document.querySelector(".titulo");
    contenido.innerHTML = `<h1 class="titulo">${nombre}</h1>`;


    for (let i = 0; i < 5; i++) {
      let contenido2 = document.querySelector("#peliculaSection");
      contenido2.innerHTML += `<article class="cajaHija">  <a href="./detalle_pelicula.html?idPelicula=${array[i].id}"><img class="imagen" src="https://image.tmdb.org/t/p/w500/${array[i].poster_path}" alt=""> </a> <h2 class="texto1">${array[i].title}</h2> <div class="infoExtra"><h3 class="t">${array[i].release_date}</h3> <i class="fa-solid fa-star"></i> <h3 class="t1">${array[i].vote_average}</h3></div> </article> `
    }


    return datos;
  })
  .catch(function (error) {
    console.error(error);
    return error;
  });

  fetch(url2)
  .then(function (r) {
    return r.json();
  })
  .then(function (datos) {
    let array = datos.results;
    console.log(array);

    let contenido2 = document.querySelector("#titulo2");
    contenido2.innerHTML = `<h1 id = "titulo2" class="titulo">${nombre}</h1>`;


    for (let i = 0; i < 5; i++) {
      let contenido3 = document.querySelector("#serieSection");
      contenido3.innerHTML += `<article class="cajaHija">  <a href="./detalle_serie.html?idSerie=${array[i].id}"><img class="imagen" src="https://image.tmdb.org/t/p/w500/${array[i].poster_path}" alt=""> </a> <h2 class="texto1">${array[i].name}</h2> <div class="infoExtra"><h3 class="t">${array[i].first_air_date}</h3> <i class="fa-solid fa-star"></i> <h3 class="t1">${array[i].vote_average}</h3></div> </article> `
    }


    return datos;
  })
  .catch(function (error) {
    console.error(error);
    return error;
  });
