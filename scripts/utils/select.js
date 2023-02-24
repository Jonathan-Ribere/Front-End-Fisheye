// filter crée et ajoute à la page web un formulaire de tri des médias.
function filter(medias) {
  const divContainer = document.createElement('div')
  divContainer.classList.add('container')
  main.appendChild(divContainer)

  const divContainerHeader = document.createElement('div')
  divContainerHeader.classList.add('container-header')
  divContainer.appendChild(divContainerHeader)

  const divTitreH2 = document.createElement('div')
  divTitreH2.classList.add('divTitreH2')
  divTitreH2.setAttribute('tabindex', '7')
  divContainerHeader.appendChild(divTitreH2)

  const titreH2 = document.createElement('h2')
  titreH2.classList.add('titreH2')
  titreH2.innerHTML = 'Trier par '
  titreH2.setAttribute('aria-label', 'Trier par')
  titreH2.setAttribute('role', 'heading')
  divTitreH2.appendChild(titreH2)
  /*

  const divSelect = document.createElement('div')
  divSelect.classList.add('custom-select')
  divContainerHeader.appendChild(divSelect)
  const select = document.createElement('select')
  select.setAttribute('id', 'mySelect')
  select.classList.add('select')
  select.setAttribute('tabindex', '8')
  select.setAttribute('aria-label', 'Sélecteur de tri')
  let popularite = new Option('Popularité')
  popularite.setAttribute('value', 'popularite')
  let date = new Option('Date')
  date.setAttribute('value', 'date')
  let titre = new Option('Titre')
  titre.setAttribute('value', 'titre')
  divSelect.appendChild(select)

  const selectOption = document.querySelector('select-option')
  selectOption.add(popularite)
  selectOption.add(date)
  selectOption.add(titre)
  */

  const containerBody = document.createElement('div')
  containerBody.classList.add('containerBody')
  divContainer.appendChild(containerBody)
}

// sortMedias trie les médias selon le critère sélectionné dans le formulaire de tri.
// Elle prend en paramètre un tableau de médias.
// Elle récupère la valeur sélectionnée dans le menu déroulant du formulaire de tri, puis appelle la fonction
function sortMedias(medias) {
  let x = document.getElementById('select-first-option-text').textContent
  console.log(x)
  if (x === 'Popularité') {
    displayMedia(medias.sort(customSortLikes))
    gestionnaireClicLikes(medias)
  } else if (x === 'Date') {
    displayMedia(medias.sort(customSortDate))
    gestionnaireClicLikes(medias)
  } else if (x === 'Titre') {
    displayMedia(medias.sort(customSortTitre))
    gestionnaireClicLikes(medias)
  }
  return
}

customSortDate = (a, b) => {
  const dateA = new Date(a._date)
  const dateB = new Date(b._date)
  if (dateA > dateB) return 1
  else if (dateA < dateB) return -1
  return 0
}

customSortLikes = (a, b) => {
  const likesA = a._likes
  const likesB = b._likes
  if (likesA > likesB) return 1
  else if (likesA < likesB) return -1
  return 0
}

customSortTitre = (a, b) => {
  const titreA = a._title
  const titreB = b._title
  if (titreA > titreB) return 1
  else if (titreA < titreB) return -1
  return 0
}

function gestionSelect() {
  let isOpen = false
  const selectOptions = document.querySelector('#select-block-options')
  const firstButtonText = document.querySelector('#select-first-option-text')
  const optionsButtons = selectOptions.querySelectorAll('button')
  document
    .querySelector('#select-first-option')
    .addEventListener('click', () => {
      if (isOpen === false) {
        // On ouvre le faux select
        selectOptions.style.display = 'block'
        isOpen = true
        return handleButtonsOptions()
      }
      if (isOpen === true) {
        return closeSelect()
      }
    })

  function closeSelect() {
    // On ferme le faux select
    selectOptions.style.display = 'none'
    return (isOpen = false)
  }

  function handleButtonsOptions() {
    optionsButtons.forEach((button) => {
      button.onclick = () => {
        const buttonText = button.textContent
        button.innerHTML = firstButtonText.textContent
        firstButtonText.innerHTML = buttonText
        return closeSelect()
      }
    })
  }
}

//displayMedia affiche la liste de médias sur la page web.
const displayMedia = (medias) => {
  document.querySelector('.containerBody').innerHTML = ''
  medias.forEach((element) => {
    const media = element.display()
  })
}

async function init() {
  const photographerId = getId()
  const medias = await getMedia(photographerId)
  filter(medias)
  gestionSelect()
  console.log('ici')

  const span = document.querySelector('#select-first-option-text')
  console.log(span)
  // créer un nouvel observer
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        console.log('Le contenu du span a été modifié')
        // faire quelque chose ici

        sortMedias(medias)
        console.log('LOOOOL')
      }
    })
  })

  // configuration de l'observer : observer les modifications de texte dans l'élément span
  const observerConfig = { childList: true }

  // attacher l'observer à l'élément span
  observer.observe(span, observerConfig)

  //displayMedia affiche la liste de médias sur la page web.
}

init()
