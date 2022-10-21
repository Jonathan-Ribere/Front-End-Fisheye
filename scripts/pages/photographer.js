///////// JE DÉFINIE TOUTES LES FONCTION /////////////////

// Permet de récup l'id dans l'url
function getId() {
  const _id = new URL(location.href).searchParams.get("id");
  return _id;
}

// Permet de récupérés les données
async function getData() {
  const response = await fetch("/data/photographers.json");
  const data = await response.json();
  console.log(data);
  return data;
}

async function getPhotographer(id) {
  const data = await getData();
  const photographer = data.photographers.find(function (element) {
    return element.id == id;
  });
  console.log(photographer);
  return photographer;
}

// function qui retourne les media grace a l'id
async function getMedia(id) {
  const data = await getData();
  const media = data.media.find(function (element) {
    return element.photographerId == id;
  });
  console.log(media);
  return media;
}

// La partie photgraphe-header //
function displayHeader(photographer) {
  // Je séléctionne la Class photograph-header
  const photographerHeader = document.querySelector(".photograph-header");

  // Je crée une section pour affichée les info du photographe
  const section = document.createElement("section");
  photographerHeader.appendChild(section);

  // Je créer une div pour nom, pays, ville et tagline
  const divInfo = document.createElement("div");
  divInfo.classList.add("divInfo");
  section.appendChild(divInfo);

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
// Fin de la partie photgraphe-header //

// Début de la partie Container sous photographe-header //

// Je créer une div qui va englobée tous la 2eme partie de la page
const divContainer = document.createElement("div");
divContainer.classList.add("container");
main.appendChild(divContainer);

// Je créer une div qui va me servir pour flexbox pour l'entete de la div
const divContainerHeader = document.createElement("div");
divContainerHeader.classList.add("container-header");
divContainer.appendChild(divContainerHeader);

// je créer un h2 ds le header du container
const titreH2 = document.createElement("h2");
titreH2.classList.add("titreH2");
titreH2.innerHTML = "Trier par ";
divContainerHeader.appendChild(titreH2);

// je créer le select
const select = document.createElement("select");
let popularite = new Option("Popularité");
let date = new Option("Date");
let titre = new Option("Titre");
divContainerHeader.appendChild(select);
const selectOption = document.querySelector("select");
selectOption.add(popularite);
selectOption.add(date);
selectOption.add(titre);

const containerBody = document.createElement("div");
containerBody.classList.add("containerBody");
divContainer.appendChild(containerBody);

async function displayMedia(media) {
  const data = await getData();
  console.log(data);
  const dataMedia = data.media;
  console.log(dataMedia);
  dataMedia.forEach((element) => {
    console.log(element);
    const picture = `assets/medias/${
      element.photographerId + "/" + element.image
    }`;
    const mediaSection = document.querySelector(".containerBody");
    const section = document.createElement("section");
    section.classList.add("mediaSection");
    mediaSection.appendChild(section);

    const containerBodyCard = document.createElement("div");
    containerBodyCard.classList.add("containerBodyCard");
    section.appendChild(containerBodyCard);

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.classList.add("classImgCard");
    containerBodyCard.appendChild(img);

    const titre = document.createElement("h3");
    containerBodyCard.appendChild(titre);
    titre.innerHTML = element.title;

    const p = document.createElement("p");
    containerBodyCard.appendChild(p);
    //head.appendChild(h2);
    p.innerHTML = "Likes, " + element.likes;
  });
}

// function final
async function init() {
  const photographerId = getId();
  const mediaId = getMedia;
  const photographer = await getPhotographer(photographerId);
  const media = await getMedia(photographerId);
  displayHeader(photographer);
  displayMedia(media);
}
init();
