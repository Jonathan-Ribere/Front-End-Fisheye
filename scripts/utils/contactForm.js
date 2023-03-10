const button = document.getElementById('open-modal-btn')

button.addEventListener('click', function () {
  // Sélectionner l'élément racine dont vous voulez masquer tous les descendants
  const rootElement = document.getElementById('main')
  // Appeler la fonction hideDescendants pour masquer tous les descendants de l'élément racine
  hideDescendants(rootElement)

  displayModal()
})

function hideDescendants(element) {
  // Ajouter l'attribut aria-hidden à l'élément actuel
  element.setAttribute('aria-hidden', 'true')

  // Parcourir tous les enfants de l'élément
  const children = element.children
  for (let i = 0; i < children.length; i++) {
    const child = children[i]
    // Récursivement masquer tous les descendants de l'enfant
    hideDescendants(child)
  }
}

function displayModal() {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
}

const imgElement = document.getElementById('closeForm')
imgElement.addEventListener('click', function () {
  // Sélectionnez l'élément que vous souhaitez afficher
  const elementToShow = document.querySelector('#main')
  console.log(elementToShow)

  // Enlever l'attribut aria-hidden
  elementToShow.removeAttribute('aria-hidden')
  closeModal()
})

function closeModal() {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
}

document.addEventListener('keyup', function (e) {
  if (e.key === 'Escape') {
    closeModal()
  }
})
