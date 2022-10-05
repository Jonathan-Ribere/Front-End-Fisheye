(async function () {
  const profilId = await getPhotographersId();
  const profil = getPhotographersProfil(profilId);
  console.log(profil);
});

function getPhotographersId() {
  //Permet de recup l'id dans l'url
  return new URL(location.href).searchParams.get("id");
}

async function getPhotographersProfil() {
  const response = await fetch("/data/photographers.json");
  const data = await response.json();
  return data;
}
