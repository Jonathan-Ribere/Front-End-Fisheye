//getPhotographers récupère la liste des photographes disponibles à partir d'un fichier JSON.

//displayData affiche la liste des photographes
async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section')

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer)
    const userCardDOM = photographerModel.display()
    photographersSection.appendChild(userCardDOM)
  })
}

async function init() {
  // Récupération de la liste des photographes à partir du fichier JSON
  const { photographers } = await getData1()
  displayData(photographers)
}

init()
