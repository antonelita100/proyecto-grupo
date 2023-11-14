let apiKey = "42737f60c529bfe7e9586db8cb132a1c";
let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
let url2 = `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`

let contenido = document.querySelector(".navGenero");
let contenido2 = document.querySelector("#nav");

fetch(url)
  .then(function (r) {
    return r.json();
  })
  .then(function (datos) {
    let array = datos.genres;
    console.log(array)

    for (let i = 0; i < 9; i++) {
      contenido.innerHTML += `<li class="itemGenero"><a href="./detalle-genero.html?idPelicula=${array[i].id}&name=${array[i].name}" class="text">${array[i].name}</a></li>`;
    }

    return datos;
  })

  .catch(function (error) {
    console.log(error);
    return error;
  });

  fetch(url2)
  .then(function (r) {
    return r.json();
  })
  .then(function (datos) {
    let array = datos.genres;
    console.log(array)

    for (let i = 0; i < 9; i++) {
      contenido2.innerHTML += `<li class="itemGenero"><a href="./detalle-genero.html?idSerie=${array[i].id}" class="text">${array[i].name}</a></li>`;
    }

    return datos;
  })

  .catch(function (error) {
    console.log(error);
    return error;
  });



