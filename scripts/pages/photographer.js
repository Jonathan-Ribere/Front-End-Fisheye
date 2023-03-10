function getId() {
  const _id = new URL(location.href).searchParams.get('id')
  return _id
}

async function getPhotographer(id) {
  const data = await getData1()
  const photographer = data.photographers.find(function (element) {
    return element.id == id
  })
  return photographer
}

async function getMedia(idProfil) {
  const data = await getData1()
  const dataMedia = data.media
  let medias = dataMedia.filter(function (id) {
    return id.photographerId == idProfil
  })
  medias = medias.map(function (media) {
    if (media.hasOwnProperty('image')) {
      return creatMedia('image', media)
    }
    if (media.hasOwnProperty('video')) {
      return creatMedia('video', media)
    }
  })
  return medias
}

/* Partie qui regroupe tous les functions d'affichage */
function displayHeader(photographer) {
  const photographerHeader = document.querySelector('.photograph-header')
  const photographerHeaderContainer = document.createElement('div')
  photographerHeaderContainer.classList.add('photographerHeaderContainer')
  photographerHeaderContainer.setAttribute(
    'aria-label',
    'Informations sur le photographe'
  )
  photographerHeader.appendChild(photographerHeaderContainer)

  /* Je créer une "div" pour affichée les infos du photographe */
  const divHeader = document.createElement('div')
  divHeader.classList.add('divHeaderInfo')
  divHeader.setAttribute('aria-label', 'informations sur le photographe')
  photographerHeader.appendChild(divHeader)

  /* Je créer une div pour nom, pays, ville et tagline */
  const divInfo = document.createElement('div')
  divInfo.classList.add('divInfo')
  divInfo.setAttribute(
    'aria-label',
    "Contient le nom, l'emplacement et la profession du photographe"
  )
  divInfo.setAttribute('role', 'txt')
  divHeader.appendChild(divInfo)

  const namePhotographe = document.createElement('div')
  namePhotographe.classList.add('namePhotographe')
  divInfo.appendChild(namePhotographe)

  /* Je créer H1 qui sera dans la div "divInfo" */
  const h1 = document.createElement('h1')
  h1.classList.add('photographeh1')
  h1.setAttribute('aria-label', 'Nom du photographe')
  h1.setAttribute('role', 'heading')
  h1.setAttribute('tabindex', '2')
  h1.innerHTML = photographer.name
  namePhotographe.appendChild(h1)

  const info = document.createElement('div')
  info.classList.add('info')
  info.setAttribute('aria-label', 'info du photographe')
  info.setAttribute('tabindex', '3')
  divInfo.appendChild(info)

  /* Je créer un paragraphe pour affichée city*/
  const city = document.createElement('p')
  city.classList.add('city')
  city.setAttribute('aria-label', 'La ville du photographe')
  city.innerHTML = photographer.city + ', ' + photographer.country
  info.appendChild(city)

  /* Je créer un paragraphe pour affichée tagline*/
  const tagline = document.createElement('p')
  tagline.classList.add('tagline')
  tagline.setAttribute('aria-label', 'Citation du photographe')
  info.appendChild(tagline)
  tagline.innerHTML = photographer.tagline

  // Partie pour la photo //
  const sectionImg = document.createElement('section')
  photographerHeader.appendChild(sectionImg)

  const divImg = document.createElement('div')
  divInfo.classList.add('divImg')
  divImg.setAttribute('aria-label', 'Photo de profil du photographe')
  sectionImg.appendChild(divImg)

  const img = document.createElement('img')
  const portrait = photographer.portrait
  const picture1 = `../../assets/photographers/${portrait}`
  img.setAttribute('src', picture1)
  img.setAttribute('role', 'img')
  img.setAttribute('alt', 'Photo du photographe')
  img.setAttribute('tabindex', '5')
  img.classList.add('img')
  divImg.appendChild(img)
}

function filter(medias) {
  const divContainer = document.createElement('div')
  divContainer.classList.add('container')
  main.appendChild(divContainer)

  const divContainerHeader = document.createElement('div')
  divContainerHeader.classList.add('container-header')
  divContainer.appendChild(divContainerHeader)

  const divTitreH2 = document.createElement('div')
  divTitreH2.classList.add('divTitreH2')
  divContainerHeader.appendChild(divTitreH2)

  const titreH2 = document.createElement('h2')
  titreH2.classList.add('titreH2')
  titreH2.setAttribute('tabindex', '7')
  titreH2.innerHTML = 'Trier par '
  titreH2.setAttribute('aria-label', 'Trier par')
  titreH2.setAttribute('role', 'heading')
  divTitreH2.appendChild(titreH2)

  const select = document.querySelector('#select')
  divTitreH2.appendChild(select)

  const containerBody = document.createElement('div')
  containerBody.classList.add('containerBody')
  divContainer.appendChild(containerBody)
}

function gestionSelect(medias) {
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
    selectOptions.style.display = 'none'
    return (isOpen = false)
  }

  function handleButtonsOptions() {
    optionsButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const buttonText = button.textContent
        if (buttonText === 'Popularité') {
          displayMedia(medias.sort(customSortLikes))
          const lightbox = new Lightbox(medias)
          gestionnaireClicLikes(medias)
        } else if (buttonText === 'Date') {
          displayMedia(medias.sort(customSortDate))
          const lightbox = new Lightbox(medias)
          gestionnaireClicLikes(medias)
        } else if (buttonText === 'Titre') {
          displayMedia(medias.sort(customSortTitre))
          const lightbox = new Lightbox(medias)
          gestionnaireClicLikes(medias)
        }
        button.innerHTML = firstButtonText.textContent
        firstButtonText.innerHTML = buttonText
        return closeSelect()
      })
    })
  }
}

customSortLikes = (a, b) => {
  const likesA = a._likes
  const likesB = b._likes
  if (likesA > likesB) return 1
  else if (likesA < likesB) return -1
  return 0
}

customSortDate = (a, b) => {
  const dateA = new Date(a._date)
  const dateB = new Date(b._date)
  if (dateA > dateB) return 1
  else if (dateA < dateB) return -1
  return 0
}

customSortTitre = (a, b) => {
  const titreA = a._title
  const titreB = b._title
  if (titreA > titreB) return 1
  else if (titreA < titreB) return -1
  return 0
}

function observeSelectFirstOptionTextChanges() {
  const span = document.querySelector('span')
  // créer un nouvel observer
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        // faire quelque chose ici
      }
    })
  })
  // configuration de l'observer : observer les modifications de texte dans l'élément span
  const observerConfig = { childList: true }
  // attacher l'observer à l'élément span
  observer.observe(span, observerConfig)
}
//displayMedia affiche la liste de médias sur la page web.
const displayMedia = (medias) => {
  document.querySelector('.containerBody').innerHTML = ''
  medias.forEach((element) => {
    const media = element.display()
  })
}

function gestionnaireClicLikes(medias) {
  // Récupère tous les éléments ayant la classe "imgLikes"
  const elementsLikes = document.getElementsByClassName('imgLikes')
  // Crée une référence à la liste de médias passée en paramètre
  const array = medias
  // Pour chaque élément ayant la classe "imgLikes"
  for (const elementsLike of elementsLikes) {
    // Ajoute un écouteur d'événement "click" à l'élément
    elementsLike.addEventListener('click', (e) => {
      // Récupère la valeur de l'attribut "data-id" de l'élément cliqué
      const id = e.currentTarget.dataset.id
      // Récupère le média correspondant à l'id
      const media = array.find((media) => {
        return media._id === Number(id)
      })
      // Récupère la valeur de l'attribut "data-like" de l'élément cliqué
      let atributValue = e.currentTarget.dataset.like

      // Si la valeur de l'attribut "data-like" est fausse, incrémente le nombre de likes
      if (atributValue === 'false') {
        media._likes += 1
        e.currentTarget.dataset.like = true
        // Si la valeur de l'attribut "data-like" est vraie, décrémente le nombre de likes
      } else if (atributValue === 'true') {
        media._likes -= 1
        e.currentTarget.dataset.like = false
      }

      // Récupère le noeud de compte
      const countNode = e.currentTarget.parentNode.firstChild

      countNode.textContent = media._likes
      numberLikeTotal()
    })

    // Ajoute un écouteur d'événement "keypress" à l'élément
    elementsLike.addEventListener('keypress', (e) => {
      // Vérifie si la touche appuyée est la touche "Entrée"
      if (e.key === 'Enter') {
        // Déclenche l'événement "click" sur l'élément
        e.currentTarget.click()
      }
    })
  }
}

function displayBar(photographer) {
  const pictureIcon = `/assets/icons/heart.svg`
  const main = document.querySelector('main')
  const bar = document.createElement('div')
  bar.classList.add('bar')
  bar.setAttribute('aria-label', 'Nombre total de likes et prix par jour')
  bar.setAttribute('tabindex', '6')
  main.appendChild(bar)

  const barInfo = document.createElement('div')
  barInfo.classList.add('barLikes')
  bar.appendChild(barInfo)

  const nombre = document.createElement('div')
  nombre.classList.add('nombre')
  barInfo.appendChild(nombre)

  const txtBar = document.createElement('p')
  txtBar.classList.add('txtBar')
  nombre.appendChild(txtBar)

  const coeur = document.createElement('div')
  coeur.classList.add('coeur')
  barInfo.appendChild(coeur)

  const pictureHeart = `assets/icons/heart.svg`
  const imgHeart = document.createElement('img')
  imgHeart.setAttribute('src', pictureHeart)
  imgHeart.setAttribute('alt', 'Icon représentant un coeur')
  imgHeart.classList.add('barHeart')
  coeur.appendChild(imgHeart)

  const barPrice = document.createElement('div')
  barPrice.classList.add('barPrice')
  bar.appendChild(barPrice)

  const priceDay = document.createElement('div')
  priceDay.classList.add('priceDay')
  barPrice.appendChild(priceDay)
  priceDay.innerHTML = '300 / jours'

  // Mise à jour du prix affiché sur la page web
  const prix = document.querySelector('.priceDay')
  prix.innerHTML = photographer.price + '€ /jour'
}

function numberLikeTotal() {
  const elements = document.querySelectorAll('.numberLikes')
  let total = 0
  for (let i = 0; i < elements.length; i++) {
    const str = elements[i].innerHTML
    const num = parseInt(str)
    total += num
  }
  const element = document.querySelector('.txtBar')
  element.innerHTML = total
}

async function init() {
  const photographerId = getId()
  const photographer = await getPhotographer(photographerId)
  const medias = await getMedia(photographerId)
  displayHeader(photographer)
  filter(medias)
  displayMedia(medias.sort(customSortLikes))
  gestionnaireClicLikes(medias)
  gestionSelect(medias)
  observeSelectFirstOptionTextChanges()
  displayMedia(medias)
  displayBar(photographer)
  gestionnaireClicLikes(medias)
  const lightbox = new Lightbox(medias)
  numberLikeTotal()
}
init()
