/**
 * Script pour masquer les éléments lorsque la modal est ouverte
 * et les révéler lorsque la modal est fermée.
 */

// Sélectionnez tous les éléments que vous souhaitez masquer
const elementsToHide = document.querySelector('#main')
console.log(elementsToHide)

// Parcourir chaque élément et ajouter l'attribut aria-hidden
elementsToHide.forEach(function (element) {
  element.setAttribute('aria-hidden', 'true')
})
