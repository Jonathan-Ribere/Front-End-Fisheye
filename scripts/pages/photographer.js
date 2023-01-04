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
  return await data;
}
// Permet de récupéré l'object du profil qui corespond a l'id
async function getPhotographer(id) {
  const data = await getData();
  const photographer = data.photographers.find(function (element) {
    return element.id == id;
  });
  return photographer;
}

// Function qui retourne les media grace a l'id
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

////////////// TRIE ///////

////////////// FIN TRIE ///////

///////// FIN DE LA PARTIE JE DÉFINIE TOUTES LES FONCTION /////////////////

///////// PARTIE AFFICHAGE (Display) /////////////////

function displayHeader(photographer) {
  /////// Partie pour le fixed en bas de l'ecrant //////
  const pictureIcon = `/assets/icons/heart.svg`;
  /* Je séléctionne la partie 'main' */
  const main = document.querySelector("main");
  /* Je créer une div */
  const bar = document.createElement("div");
  /* Je lui ajoute une classe "bar" */
  bar.classList.add("bar");
  bar.setAttribute("aria-label", "Nombre total de likes et prix par jour");
  /* J'indique que "bar" et l'enfant de "main" */
  main.appendChild(bar);

  /* Je créer un élément paragraphe */
  const barInfo = document.createElement("div");
  /* Je lui ajoute une classe "barInfo" */
  barInfo.classList.add("barLikes");
  /* J'indique que "barInfo" et l'enfant de "bar" */
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
  /* Je lui ajoute une classe "barPrice" */
  barPrice.classList.add("barPrice");
  /* J'indique que "barPrice" et l'enfant de "bar" */
  bar.appendChild(barPrice);

  const priceDay = document.createElement("div");
  priceDay.classList.add("priceDay");
  barPrice.appendChild(priceDay);
  priceDay.innerHTML = "300 / jours";

  /////// Fin de partie pour le fixed en bas de l'ecrant //////

  ////// Partie PHOTOGRAPHE-HEADER ///////

  /* Je séléctionne la Class photograph-header */
  const photographerHeader = document.querySelector(".photograph-header");

  const photographerHeaderContainer = document.createElement("div");
  photographerHeaderContainer.classList.add("photographerHeaderContainer");
  photographerHeader.appendChild(photographerHeaderContainer);

  /* Je créer une "div" pour affichée les infos du photographe */
  const divHeader = document.createElement("div");
  /* Je lui ajoute une classe "divHeaderInfo" */
  divHeader.classList.add("divHeaderInfo");
  divHeader.setAttribute("aria-label", "informations sur le photographe");

  /* J'indique que "divHeader" et l'enfant de "photographerHeader" */
  photographerHeader.appendChild(divHeader);

  /* Je créer une div pour nom, pays, ville et tagline */
  const divInfo = document.createElement("div");
  /* Je lui ajoute une classe "divInfo" */
  divInfo.classList.add("divInfo");
  divInfo.setAttribute("aria-label", "Lieux et métier du photographe");
  divInfo.setAttribute("role", "Text");
  /* J'indique que "divHeader" et l'enfant de "photographerHeader" */
  divHeader.appendChild(divInfo);

  /* Je créer H1 qui sera dans la div "divInfo" */
  const h1 = document.createElement("h1");
  /* Je lui ajoute une classe "h1" */
  h1.classList.add("h1");
  h1.setAttribute("aria-label", "Nom du photographe");
  h1.setAttribute("role", "Header(h1)");
  /* J'indique que "h1" et l'enfant de "divInfo" */
  divInfo.appendChild(h1);

  /* Je lui inject du texte avec innerHTML*/
  h1.innerHTML = photographer.name;

  /* Je créer un paragraphe pour affichée city*/
  const city = document.createElement("p");
  city.classList.add("city");
  divInfo.appendChild(city);
  /* Je créer un paragraphe pour affichée country*/
  const country = document.createElement("p");
  /* Je lui ajoute une classe "country" */
  country.classList.add("country");
  /* J'indique que "country" et l'enfant de "divInfo" */
  divInfo.appendChild(country);
  /* Je lui inject du texte avec innerHTML*/
  city.innerHTML = photographer.city + ", " + photographer.country;

  /* Je créer un paragraphe pour affichée tagline*/
  const tagline = document.createElement("p");
  /* Je lui ajoute une classe "tagline" */
  tagline.classList.add("tagline");
  /* J'indique que "tagline" et l'enfant de "divInfo" */
  divInfo.appendChild(tagline);
  /* Je lui inject du texte avec innerHTML*/
  tagline.innerHTML = photographer.tagline;

  // Partie pour la photo //
  /* Je créer une section sectionImg" */
  const sectionImg = document.createElement("section");
  /* J'indique que "sectionImg" et l'enfant de "photographerHeader" */
  photographerHeader.appendChild(sectionImg);
  /* Je créer une div */
  const divImg = document.createElement("div");
  /* Je lui ajoute une classe "divImg" */
  divInfo.classList.add("divImg");
  /* J'indique que "divImg" et l'enfant de "sectionImg" */
  sectionImg.appendChild(divImg);
  /* Je créer l'élément "img" */
  const img = document.createElement("img");
  /* Je récupére le data dans l'objet photographer que je mets dans la variable portrait */
  const portrait = photographer.portrait;
  /* Je créer la variable picture1 qui indique le chemin d'ou se trouve la photo */
  const picture1 = `../../assets/photographers/${portrait}`;
  /* Je lui indique la source avec setAttribute */
  img.setAttribute("src", picture1);
  img.setAttribute("aria-label", "Photo de profil du photographe");
  img.setAttribute("role", "Image");
  /* Je lui ajoute une classe "img" */
  img.classList.add("img");
  /* J'indique que "img" et l'enfant de "divImg" */
  divImg.appendChild(img);

  ////// Fin de partie PHOTOGRAPHE-HEADER ///////
}
///////// FIN PARTIE AFFICHAGE (Display) /////////////////
///////// DEBUT DE LA PARTIE DISPLAY DES MEDIAS //////////
function filter(medias) {
  /* Je créer une div qui va englobée tous la 2eme partie */
  const divContainer = document.createElement("div");
  /* Je lui ajoute une classe "container" */
  divContainer.classList.add("container");
  /* J'indique que "divContainer" et l'enfant de "main" */
  main.appendChild(divContainer);

  /* Je créer une div pour la partie "Trier par : "  */
  const divContainerHeader = document.createElement("div");
  /* Je lui ajoute une classe "container-header" */
  divContainerHeader.classList.add("container-header");
  /* J'indique que "divContainerHeader" et l'enfant de "divContainer" */
  divContainer.appendChild(divContainerHeader);
  /* Je créer un h2  */
  const titreH2 = document.createElement("h2");
  /* Je lui ajoute une classe "titreH2" */
  titreH2.classList.add("titreH2");
  /* Je lui inject du texte avec innerHTML*/
  titreH2.innerHTML = "Trier par ";
  titreH2.setAttribute("arial-label", "Trier par");
  titreH2.setAttribute("role", "Input label");
  /* J'indique que "titreH2" et l'enfant de "divContainerHeader" */
  divContainerHeader.appendChild(titreH2);
  /* Je créer le Select */
  const select = document.createElement("select");
  select.setAttribute("id", "mySelect");
  select.setAttribute("arial-label", "Sélecteur de tri");
  /* Je créer les variable des option du Select */
  let popularite = new Option("Popularité");
  popularite.setAttribute("value", "popularite");
  let date = new Option("Date");
  date.setAttribute("value", "date");
  let titre = new Option("Titre");
  titre.setAttribute("value", "titre");
  /* J'indique que "select" et l'enfant de "divContainerHeader" */
  divContainerHeader.appendChild(select);
  /* J'ajoute les option au Select */
  const selectOption = document.querySelector("select");
  selectOption.add(popularite);
  selectOption.add(date);
  selectOption.add(titre);

  /* Je créer une div pour la partie qui affiche les medias */
  const containerBody = document.createElement("div");
  /* Je lui ajoute une classe "containerBody" */
  containerBody.classList.add("containerBody");
  /* J'indique que "containerBody" et l'enfant de "divContainer" */
  divContainer.appendChild(containerBody);
}
function myFunction(medias) {
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

const displayMedia = (medias) => {
  document.querySelector(".containerBody").innerHTML = "";
  medias.forEach((element) => {
    const media = element.display();
  });
};

///////// FIN DE LA PARTIE DISPLAY DES MEDIAS ////////////

//////// Custom des value du select //////////
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

//////// Fin custom des value du select //////////

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

function numberLikeTotal() {
  // Récupère tous les éléments qui contiennent un nombre
  const elements = document.querySelectorAll(".numberLikes");

  // Définit la variable qui stockera la somme totale
  let total = 0;
  // Parcours chaque élément avec une boucle for
  for (let i = 0; i < elements.length; i++) {
    // Récupère le contenu de l'élément sous forme de chaîne de caractères
    const str = elements[i].innerHTML;

    // Convertit la chaîne de caractères en nombre avec parseInt
    const num = parseInt(str);

    // Ajoute le nombre à la somme totale
    total += num;
  }
  const element = document.querySelector(".txtBar");
  element.innerHTML = total;
  //txtBar.innerHTML = somme;
  //return somme;
  // Affiche la somme totale des nombres
}
// function final
async function init() {
  const photographerId = getId();
  const photographer = await getPhotographer(photographerId);
  displayHeader(photographer);
  const prix = document.querySelector(".priceDay");
  prix.innerHTML = photographer.price + "€ /jour";
  const namePhotographeForm = document.querySelector("#nomPhotographer");
  namePhotographeForm.innerHTML = photographer.name;
  const medias = await getMedia(photographerId);
  filter(medias);
  document.getElementById("mySelect").addEventListener("change", () => {
    myFunction(medias);
  });
  myFunction(medias);
  Lightbox.init();
  //displayName(photographer); // Affiche le nom du photographe au formulaire

  idLike(medias);
  numberLikeTotal();
}

init();
