///////// JE DÉFINIE TOUTES LES FONCTION /////////////////

// Permet de récup l'id dans l'url
function getId() {
  const _id = new URL(location.href).searchParams.get("id");
  return _id;
}
// Permet de récupérés les données du json
async function getData() {
  const response = await fetch("/data/photographers.json");
  const data = await response.json();
  console.log(data);
  return data;
}
// Permet de récupéré l'object du profil qui corespond a l'id
async function getPhotographer(id) {
  const data = await getData();
  const photographer = data.photographers.find(function (element) {
    return element.id == id;
  });
  console.log(photographer.id);
  return photographer;
}
// function qui retourne les media grace a l'id
async function getMedia() {
  const data = await getData();
  const dataMedia = data.media;
  const idProfil = getId();

  const mediaId = dataMedia.filter(function (id) {
    return id.photographerId == idProfil;
  });

  console.log(mediaId);
}
///////// FIN DE LA PARTIE JE DÉFINIE TOUTES LES FONCTION /////////////////

///////// PARTIE AFFICHAGE (Display) /////////////////
function displayHeader(photographer) {
  /* Je séléctionne la partie 'main' */
  const main = document.querySelector("main");
  /* Je créer une div */
  const bar = document.createElement("div");
  /* Je lui ajoute une classe "bar" */
  bar.classList.add("bar");
  /* J'indique que "bar" et l'enfant de "main" */
  main.appendChild(bar);

  const barInfo = document.createElement("p");
  barInfo.classList.add("barInfo");
  bar.appendChild(barInfo);
  barInfo.innerHTML = "bar";

  // Je séléctionne la Class photograph-header
  const photographerHeader = document.querySelector(".photograph-header");

  // Je crée une section pour affichée les info du photographe
  const divHeader = document.createElement("div");
  divHeader.classList.add("divHeaderInfo");
  photographerHeader.appendChild(divHeader);

  // Je créer une div pour nom, pays, ville et tagline
  const divInfo = document.createElement("div");
  divInfo.classList.add("divInfo");
  divHeader.appendChild(divInfo);

  // Je créer un H1, city, country & tagline
  const h1 = document.createElement("h1");
  h1.classList.add("h1");
  divInfo.appendChild(h1);
  h1.innerHTML = photographer.name;

  const city = document.createElement("p");
  city.classList.add("city");
  divInfo.appendChild(city);

  const contry = document.createElement("p");
  contry.classList.add("contry");
  divInfo.appendChild(contry);

  city.innerHTML = photographer.city + ", " + photographer.country;

  const tagline = document.createElement("p");
  tagline.classList.add("tagline");
  divInfo.appendChild(tagline);
  tagline.innerHTML = photographer.tagline;

  //////////////////

  const sectionImg = document.createElement("section");
  photographerHeader.appendChild(sectionImg);

  const divImg = document.createElement("div");
  divInfo.classList.add("divImg");
  sectionImg.appendChild(divImg);

  const img = document.createElement("img");
  const portrait = photographer.portrait;
  console.log(portrait);
  const picture1 = `../../assets/photographers/${portrait}`;
  img.setAttribute("src", picture1);
  img.classList.add("img");
  divImg.appendChild(img);
}

///////// FIN PARTIE AFFICHAGE (Display) /////////////////
// function final
async function init() {
  const photographerId = getId();
  console.log(photographerId);
  const photographer = await getPhotographer(photographerId);
  console.log(photographer);
  const media = await getMedia();
  console.log(media);
  displayHeader(photographer);
}
init();
