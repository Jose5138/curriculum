//Datos acceso API TMDB
const API_KEY = "api_key=1cf50e6248dc270629e802686245c2c8";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY + "&language=es-ES";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + "/search/movie?" + API_KEY + "&language=es-ES";
let genero_seleccionado = 0;

const url = new URL("http://localhost:3000");

fetch(url)
  .then((res) => res.json())
  .then((generos) => {
    let fragmento = document.createDocumentFragment();
    //Cargamos la  lista de generos en pantalla
    generos.forEach((genero) => {
      //Genero los tags con la lista de generos que me interesan
      const t = document.createElement("li");
      t.setAttribute("class", "tipo");
      // t.setAttribute("class","tag rounded-pill  bg-success  text-white text-center")
      // t.setAttribute("style","max-width: 10rem;min-width: 10rem;")
      t.id = genero.id;
      t.innerText = genero.name;
      t.addEventListener("click", () => {
        document.getElementById("submenu")
        .querySelectorAll("*").forEach((n) => n.classList.remove("active"));
        document.getElementById(genero.id).classList.add("active");
        genero_seleccionado = genero.id;
        leePeliculas(
          API_URL + "&with_genres=" + encodeURI(genero_seleccionado) + "&page=1"
        );
        document.getElementById("pagina").innerText = 1;
      });
      fragmento.appendChild(t);
    });
    const lista = document.getElementById("submenu");
    lista.appendChild(fragmento);
  });
// FUNCTION QUE LEE LAS PELICULAS
function leePeliculas(url) {
  fetch(url)
    .then((res) => res.json())
    .then((respuesta) => {
      let fragmento = document.createDocumentFragment();
      respuesta.results.forEach((peli) => {
        // const {title,poster_path,overview,id,genre_ids} = peli;
        const { title, poster_path, overview } = peli;

        const listado = document.createElement("ul");
        listado.setAttribute("class", "state clearfix");
        const li = document.createElement("li");
        li.setAttribute("class", "scene");
        listado.appendChild(li);

        const movie = document.createElement("div");
        movie.setAttribute("class", "movie");
        li.appendChild(movie);

        const img_movie = document.createElement("div");
        img_movie.setAttribute("class", "poster");
        img_movie.style.backgroundImage = `url(${
          poster_path
            ? IMG_URL + poster_path
            : "http://via.placeholder.com/1080*1580"
        })`;

        const info = document.createElement("div");
        info.setAttribute("class", "info");

        movie.appendChild(img_movie);
        movie.appendChild(info);

        const h = document.createElement("header");
        h.style.backgroundImage = `url(${
          poster_path
            ? IMG_URL + poster_path
            : "http://via.placeholder.com/1080*1580"
        })`;
        h.style.backgroundSize = "cover";

        const titulo1 = document.createElement("h1");
        titulo1.setAttribute("class", "title_movi");

        const span1 = document.createElement("span");
        span1.setAttribute("class", "year");
        span1.innerHTML = title;

        const pp = document.createElement("p");
        pp.setAttribute("class", "description");
        pp.setAttribute("id", "description");
        pp.innerHTML = overview;

        h.appendChild(titulo1);
        h.appendChild(span1);

        info.appendChild(h);
        info.appendChild(pp);

        fragmento.appendChild(listado);
      });
      const listas_de_peliculas = document.getElementById("wrapper2");
      listas_de_peliculas.innerHTML = "";
      listas_de_peliculas.appendChild(fragmento);
    });
}

// PAGINACIONES
document.getElementById("anterior").addEventListener("click", () => {
  if (document.getElementById("pagina").innerText > 1) {
    paginaActual = parseInt(document.getElementById("pagina").innerText) - 1;
  }
  document.getElementById("pagina").innerText = paginaActual;
  if (genero_seleccionado != 0) {
    leePeliculas(
      API_URL +
        "&with_genres=" +
        encodeURI(genero_seleccionado) +
        "&page=" +
        paginaActual
    );
  } else {
    leePeliculas(API_URL + "&page=" + paginaActual);
  }
});

document.getElementById("siguiente").addEventListener("click", () => {
  paginaActual = parseInt(document.getElementById("pagina").innerText) + 1;
  fetch(API_URL + "&page=" + paginaActual)
    .then((res) => res.json())
    .then((respuesta) => {
      if (respuesta.length == 0) {
        document.getElementById("pagina").innerText = paginaActual - 1;
      } else {
        document.getElementById("pagina").innerText = paginaActual;
      }
    });
  if (genero_seleccionado != 0) {
    leePeliculas(
      API_URL +
        "&with_genres=" +
        encodeURI(genero_seleccionado) +
        "&page=" +
        paginaActual
    );
  } else {
    leePeliculas(API_URL + "&page=" + paginaActual);
  }
});

// scrips para controlar el menú movil
function controllerMenu() {
  const btn_opennav = document.getElementById("opennav");
  btn_opennav.addEventListener("click", () => {
    const opennav = document.querySelector(".opennav");
    const nav = document.getElementById("nav");
    const wrapper = document.querySelector(".wrapper");
    nav.classList.toggle("open");
    wrapper.classList.toggle("open");
    opennav.classList.toggle("open");
  });
}
// AL CARGAR LA PÁGINA
window.onload = () => {
  controllerMenu();
  leePeliculas(API_URL + "&page=1");
};
