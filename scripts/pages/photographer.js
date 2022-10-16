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
  return data;
}

async function getPhotographer(id) {
  const data = await getData();
  const photographer = data.photographers.find(function (element) {
    return element.id == id;
  });
  return photographer;
}

async function displayHeader(photographer) {
  // Je séléctionne la Class photograph-header
  const photographerHeader = document.querySelector(".photograph-header");
  console.log(photographerHeader);

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
  img.classList.add("classImg");
  divImg.appendChild(img);

  /*// Je séléctionne Button pour modifier son emplacement
  const button = document.querySelector(".contact_button");
  console.log(button);

  // 2eme section ( Button )
  const sectionButton = document.createElement("section");
  sectionButton.classList.add("sectionButton");
  section.appendChild(sectionButton);

  const divButton = document.createElement("div");
  divButton.classList.add("divButton");
  button.appendChild(divButton);*/
}

// function final
async function init() {
  const photographerId = getId();
  const photographer = await getPhotographer(photographerId);
  console.log(photographer);
  displayHeader(photographer);
}
init();
