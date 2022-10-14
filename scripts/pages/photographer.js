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

// function final
async function init() {
  const photographerId = getId();
  const photographer = await getPhotographer(photographerId);
  console.log(photographer.tagline);
}
init();
