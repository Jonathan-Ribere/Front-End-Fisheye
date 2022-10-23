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

// function final
async function init() {
  const photographerId = getId();
  console.log(photographerId);
  const photographer = await getPhotographer(photographerId);
  console.log(photographer);
  const media = await getMedia();
  console.log(media);
}
init();
