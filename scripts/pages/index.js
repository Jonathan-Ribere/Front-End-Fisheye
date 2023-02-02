// getPhotographers récupère la liste des photographes disponibles à partir d'un fichier JSON.
async function getPhotographers() {
  const response = await fetch('/data/photographers.json')
  const data = await response.json()
  console.log(data)
  return data
}

// displayData affiche la liste des photographes
async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section')

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
}

async function init() {
  // Récupération de la liste des photographes à partir du fichier JSON
  const { photographers } = await getPhotographers()
  displayData(photographers)
}

init()
