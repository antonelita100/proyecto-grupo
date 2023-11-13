let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idPelicula = qsObj.get("idPelicula");
let apiKey = "42737f60c529bfe7e9586db8cb132a1c";

let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
let url2 = `https://api.themoviedb.org/3/discover/tv`;

let contenido = document.querySelector(".titulo")


fetch(url)
  .then(function (r) {
    return r.json();
  })
  .then(function (datos) {
    let array = datos.genres;
    console.log(array)

    contenido.innerHTML += `<h2 class="titulo">${array[0].name}</h2>`;
    

    return datos;
  })

  .catch(function (error) {
    console.log(error);
    return error;
  });