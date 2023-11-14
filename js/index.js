let apiKey = "42737f60c529bfe7e9586db8cb132a1c";
let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
let urlPel = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
let urlSer = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;

let contenido = document.querySelector(".cajaPadre");
let contenido2 = document.querySelector("#pelicula")
let contenido3 = document.querySelector("#serie")

fetch(url)
  .then(function (r) {
    return r.json();
  })
  .then(function (datos) {
    let array = datos.results;

    for (let i = 0; i < 5; i++) {
      contenido.innerHTML += `<article class="cajaHija"> <a href="./detalle_pelicula.html?idPelicula=${array[i].id}"> <img class="imagen" src="https://image.tmdb.org/t/p/w500${array[i].poster_path}" alt=""> </a>  <h2 class="texto1">${array[i].original_title}</h2> <div class="infoExtra"><h3 class="t">${array[i].release_date}</h3> <i class="fa-solid fa-star"></i> <h3 class="t1">${array[i].vote_average}</h3></div> </article>`;
    }

    return datos;
  })

  .catch(function (error) {
    console.log(error);
    return error;
  });

fetch(urlPel)
  .then(function (r) {
    return r.json();
  })
  .then(function (datos) {
    let array1 = datos.results;
    console.log(array1)

    for (let i = 0; i < 5; i++) {
      contenido2.innerHTML += `<article class="cajaHija">  <a href="./detalle_pelicula.html?idPelicula=${array1[i].id}"><img class="imagen" src="https://image.tmdb.org/t/p/w500${array1[i].poster_path}" alt=""> </a> <h2 class="texto1">${array1[i].original_title}</h2> <div class="infoExtra"><h3 class="t">${array1[i].release_date}</h3> <i class="fa-solid fa-star"></i> <h3 class="t1">${array1[i].vote_average}</h3></div> </article>`;
    }

    return datos;
  })

  .catch(function (error) {
    console.log(error);
    return error;
  });

fetch(urlSer)
  .then(function (r) {
    return r.json();
  })
  .then(function (datos) {
    let array2 = datos.results;
    console.log(array2)

    for (let i = 0; i < 5; i++) {
      contenido3.innerHTML += `<article class="cajaHija">  <a href="./detalle_pelicula.html?idSerie=${array2[i].id}"><img class="imagen" src="https://image.tmdb.org/t/p/w500${array2[i].poster_path}" alt=""> </a> <h2 class="texto1">${array2[i].name}</h2> <div class="infoExtra"><h3 class="t">${array2[i].first_air_date}</h3> <i class="fa-solid fa-star"></i> <h3 class="t1">${array2[i].vote_average}</h3></div> </article>`;
    }

    return datos;
  })

  .catch(function (error) {
    console.log(error);
    return error;
  });