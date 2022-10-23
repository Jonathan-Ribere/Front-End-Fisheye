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
  /////// Partie pour le fixed en bas de l'ecrant //////

  /* Je séléctionne la partie 'main' */
  const main = document.querySelector("main");
  /* Je créer une div */
  const bar = document.createElement("div");
  /* Je lui ajoute une classe "bar" */
  bar.classList.add("bar");
  /* J'indique que "bar" et l'enfant de "main" */
  main.appendChild(bar);

  /* Je créer un élément paragraphe */
  const barInfo = document.createElement("p");
  /* Je lui ajoute une classe "barInfo" */
  barInfo.classList.add("barInfo");
  /* J'indique que "barInfo" et l'enfant de "bar" */
  bar.appendChild(barInfo);
  /* Je lui inject du texte avec innerHTML*/
  barInfo.innerHTML = "bar";

  /////// Fin de partie pour le fixed en bas de l'ecrant //////

  ////// Partie PHOTOGRAPHE-HEADER ///////

  /* Je séléctionne la Class photograph-header */
  const photographerHeader = document.querySelector(".photograph-header");
  /* Je créer une "div" pour affichée les infos du photographe */
  const divHeader = document.createElement("div");
  /* Je lui ajoute une classe "divHeaderInfo" */
  divHeader.classList.add("divHeaderInfo");
  /* J'indique que "divHeader" et l'enfant de "photographerHeader" */
  photographerHeader.appendChild(divHeader);

  /* Je créer une div pour nom, pays, ville et tagline */
  const divInfo = document.createElement("div");
  /* Je lui ajoute une classe "divInfo" */
  divInfo.classList.add("divInfo");
  /* J'indique que "divHeader" et l'enfant de "photographerHeader" */
  divHeader.appendChild(divInfo);

  /* Je créer H1 qui sera dans la div "divInfo" */
  const h1 = document.createElement("h1");
  /* Je lui ajoute une classe "h1" */
  h1.classList.add("h1");
  /* J'indique que "h1" et l'enfant de "divInfo" */
  divInfo.appendChild(h1);
  /* Je lui inject du texte avec innerHTML*/
  h1.innerHTML = photographer.name;
  ////// Fin de partie PHOTOGRAPHE-HEADER ///////

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
