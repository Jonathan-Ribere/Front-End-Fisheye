/* Partie qui regroupe tous les functions de récupération */

//getId récupère l'ID du profil dans l'URL de la page.
function getId() {
  const _id = new URL(location.href).searchParams.get("id");
  return _id;
}

//getData récupère les données du fichier JSON photographers.json et retourne ces données sous forme d'un objet JavaScript.
async function getData() {
  const response = await fetch("/data/photographers.json");
  const data = await response.json();
  return await data;
}

//getPhotographer utilise getData pour récupérer les données du fichier JSON et retourne l'objet du profil qui correspond à l'ID fourni en argument
async function getPhotographer(id) {
  const data = await getData();
  const photographer = data.photographers.find(function (element) {
    return element.id == id;
  });
  return photographer;
}

/* getMedia utilise également getData pour récupérer les données du fichier JSON et retourne
un tableau d'objets médias qui appartiennent au profil d'ID fourni en argument.*/
async function getMedia(idProfil) {
  const data = await getData();
  const dataMedia = data.media;
  let medias = dataMedia.filter(function (id) {
    return id.photographerId == idProfil;
  });
  medias = medias.map(function (media) {
    if (media.hasOwnProperty("image")) {
      return creatMedia("image", media);
    }
    if (media.hasOwnProperty("video")) {
      return creatMedia("video", media);
    }
  });
  return medias;
}
/* Fin de la partie qui regroupe tous les functions de récupération */

/* Partie qui regroupe tous les functions d'affichage */
function displayHeader(photographer) {
  /////// Partie pour le fixed en bas de l'ecrant //////
  const pictureIcon = `/assets/icons/heart.svg`;
  const main = document.querySelector("main");
  const bar = document.createElement("div");
  bar.classList.add("bar");
  bar.setAttribute("aria-label", "Nombre total de likes et prix par jour");
  bar.setAttribute("tabindex", "6");
  main.appendChild(bar);

  const barInfo = document.createElement("div");
  barInfo.classList.add("barLikes");
  bar.appendChild(barInfo);

  const nombre = document.createElement("div");
  nombre.classList.add("nombre");
  barInfo.appendChild(nombre);

  const txtBar = document.createElement("p");
  txtBar.classList.add("txtBar");
  nombre.appendChild(txtBar);

  const coeur = document.createElement("div");
  coeur.classList.add("coeur");
  barInfo.appendChild(coeur);

  const pictureHeart = `assets/icons/heart.svg`;
  const imgHeart = document.createElement("img");
  imgHeart.setAttribute("src", pictureHeart);
  imgHeart.setAttribute("alt", "Icon représentant un coeur");
  imgHeart.classList.add("barHeart");
  coeur.appendChild(imgHeart);

  const barPrice = document.createElement("div");
  barPrice.classList.add("barPrice");
  bar.appendChild(barPrice);

  const priceDay = document.createElement("div");
  priceDay.classList.add("priceDay");
  barPrice.appendChild(priceDay);
  priceDay.innerHTML = "300 / jours";

  const photographerHeader = document.querySelector(".photograph-header");
  const photographerHeaderContainer = document.createElement("div");
  photographerHeaderContainer.classList.add("photographerHeaderContainer");
  photographerHeader.appendChild(photographerHeaderContainer);

  /* Je créer une "div" pour affichée les infos du photographe */
  const divHeader = document.createElement("div");
  divHeader.classList.add("divHeaderInfo");
  divHeader.setAttribute("aria-label", "informations sur le photographe");
  photographerHeader.appendChild(divHeader);

  /* Je créer une div pour nom, pays, ville et tagline */
  const divInfo = document.createElement("div");
  divInfo.classList.add("divInfo");
  divInfo.setAttribute("aria-label", "Lieux et métier du photographe");
  divInfo.setAttribute("role", "txt");
  divInfo.setAttribute("tabindex", "2");
  divHeader.appendChild(divInfo);

  const namePhotographe = document.createElement("div");
  namePhotographe.classList.add("namePhotographe");
  divInfo.appendChild(namePhotographe);

  /* Je créer H1 qui sera dans la div "divInfo" */
  const h1 = document.createElement("h1");
  h1.classList.add("h1");
  h1.setAttribute("aria-label", "Nom du photographe");
  h1.setAttribute("role", "heading");
  h1.innerHTML = photographer.name;
  namePhotographe.appendChild(h1);

  const info = document.createElement("div");
  info.classList.add("info");
  info.setAttribute("aria-label", "info du photographe");
  info.setAttribute("tabindex", "3");
  divInfo.appendChild(info);

  /* Je créer un paragraphe pour affichée city*/
  const city = document.createElement("p");
  city.classList.add("city");
  city.innerHTML = photographer.city + ", " + photographer.country;
  info.appendChild(city);

  /* Je créer un paragraphe pour affichée tagline*/
  const tagline = document.createElement("p");
  tagline.classList.add("tagline");
  info.appendChild(tagline);
  tagline.innerHTML = photographer.tagline;

  // Partie pour la photo //
  const sectionImg = document.createElement("section");
  photographerHeader.appendChild(sectionImg);

  const divImg = document.createElement("div");
  divInfo.classList.add("divImg");
  sectionImg.appendChild(divImg);

  const img = document.createElement("img");
  const portrait = photographer.portrait;
  const picture1 = `../../assets/photographers/${portrait}`;
  img.setAttribute("src", picture1);
  img.setAttribute("aria-label", "Photo de profil du photographe");
  img.setAttribute("role", "img");
  img.setAttribute("tabindex", "5");
  img.classList.add("img");
  divImg.appendChild(img);
}

//displayMedia affiche la liste de médias sur la page web.
const displayMedia = (medias) => {
  document.querySelector(".containerBody").innerHTML = "";
  medias.forEach((element) => {
    const media = element.display();
  });
};

/* Partie pour le tri */
// filter crée et ajoute à la page web un formulaire de tri des médias.
function filter(medias) {
  const divContainer = document.createElement("div");
  divContainer.classList.add("container");
  main.appendChild(divContainer);

  const divContainerHeader = document.createElement("div");
  divContainerHeader.classList.add("container-header");
  divContainer.appendChild(divContainerHeader);

  const divTitreH2 = document.createElement("div");
  divTitreH2.classList.add("divTitreH2");
  divTitreH2.setAttribute("tabindex", "7");
  divContainerHeader.appendChild(divTitreH2);

  const titreH2 = document.createElement("h2");
  titreH2.classList.add("titreH2");
  titreH2.innerHTML = "Trier par ";
  titreH2.setAttribute("aria-label", "Trier par");
  titreH2.setAttribute("role", "heading");
  divTitreH2.appendChild(titreH2);

  const divSelect = document.createElement("div");
  divSelect.classList.add("divSelect");
  divSelect.setAttribute("tabindex", "8");
  divContainerHeader.appendChild(divSelect);

  const select = document.createElement("select");
  select.setAttribute("id", "mySelect");
  select.setAttribute("aria-label", "Sélecteur de tri");
  let popularite = new Option("Popularité");
  popularite.setAttribute("value", "popularite");
  let date = new Option("Date");
  date.setAttribute("value", "date");
  let titre = new Option("Titre");
  titre.setAttribute("value", "titre");
  divSelect.appendChild(select);

  const selectOption = document.querySelector("select");
  selectOption.add(popularite);
  selectOption.add(date);
  selectOption.add(titre);

  const containerBody = document.createElement("div");
  containerBody.classList.add("containerBody");
  divContainer.appendChild(containerBody);
}

// sortMedias trie les médias selon le critère sélectionné dans le formulaire de tri.
// Elle prend en paramètre un tableau de médias.
// Elle récupère la valeur sélectionnée dans le menu déroulant du formulaire de tri, puis appelle la fonction
function sortMedias(medias) {
  let x = document.getElementById("mySelect").value;
  if (x === "popularite") {
    displayMedia(medias.sort(customSortLikes));
  } else if (x === "date") {
    displayMedia(medias.sort(customSortDate));
  } else if (x === "titre") {
    displayMedia(medias.sort(customSortTitre));
  }
  return;
}

/*customSortDate est une fonction de comparaison qui peut être utilisée avec la méthode
sort de JavaScript pour trier un tableau d'objets en fonction de la propriété _date
de chaque objet.*/
customSortDate = (a, b) => {
  const dateA = new Date(a._date);
  const dateB = new Date(b._date);
  if (dateA > dateB) return 1;
  else if (dateA < dateB) return -1;
  return 0;
};

customSortLikes = (a, b) => {
  const likesA = a._likes;
  const likesB = b._likes;
  if (likesA > likesB) return 1;
  else if (likesA < likesB) return -1;
  return 0;
};

customSortTitre = (a, b) => {
  const titreA = a._title;
  const titreB = b._title;
  if (titreA > titreB) return 1;
  else if (titreA < titreB) return -1;
  return 0;
};

/* idLike a pour but de gérer le comportement de "like" sur les photos du profil. */
function idLike(medias) {
  const selectCoeurs = document.getElementsByClassName("imgLikes");
  const array = medias;
  for (const selectCoeur of selectCoeurs) {
    selectCoeur.addEventListener("click", (e) => {
      let id = e.currentTarget.dataset.id;
      const media = array.find((media) => {
        id = Number(id);
        return media._id === id;
      });
      if (media) {
        media._likes += 1;
        e.currentTarget.parentNode.firstChild.textContent = media._likes;
      }
    });
  }
}

// numberLikeTotal a pour but de calculer et afficher le nombre total de likes
function numberLikeTotal() {
  const elements = document.querySelectorAll(".numberLikes");
  let total = 0;
  for (let i = 0; i < elements.length; i++) {
    const str = elements[i].innerHTML;
    const num = parseInt(str);
    total += num;
  }
  const element = document.querySelector(".txtBar");
  element.innerHTML = total;
}

// init initialise l'affichage des informations du photographe et des médias sur la page web.
// Elle récupère l'identifiant du photographe, puis utilise cet identifiant pour récupérer les informations du photographe et des médias associés à ce photographe.
// Elle affiche ces informations sur la page web en utilisant les fonctions displayHeader, filter et sortMedias
// Elle initialise également la fonctionnalité de "lightbox" pour afficher les médias en plein écran et la gestion des likes.
async function init() {
  // Récupération de l'identifiant du photographe à partir de l'URL de la page
  const photographerId = getId();
  // Récupération des informations du photographe à partir de son identifiant
  const photographer = await getPhotographer(photographerId);
  // Affichage des informations du photographe sur la page web
  displayHeader(photographer);
  // Mise à jour du prix affiché sur la page web
  const prix = document.querySelector(".priceDay");
  prix.innerHTML = photographer.price + "€ /jour";
  // Mise à jour du nom du photographe affiché dans le formulaire de contact
  const namePhotographeForm = document.querySelector("#nomPhotographer");
  namePhotographeForm.innerHTML = photographer.name;
  // Récupération des médias associés au photographe à partir de son identifiant
  const medias = await getMedia(photographerId);
  // Affichage du formulaire de tri des médias sur la page web
  filter(medias);
  // Ajout d'un écouteur d'événement sur le menu déroulant du formulaire de tri pour trier
  // les médias à chaque changement de sélection
  document.getElementById("mySelect").addEventListener("change", () => {
    sortMedias(medias);
  });
  // Tri des médias selon le critère par défaut (popularité)
  sortMedias(medias);
  // Initialisation de la fonctionnalité de "lightbox"
  Lightbox.init();
  // Gestion des likes des médias
  idLike(medias);
  // Mise à jour du nombre total de likes affiché sur la page web
  numberLikeTotal();
}

init();
