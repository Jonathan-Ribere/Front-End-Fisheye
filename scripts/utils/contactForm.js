const modal = document.querySelector('#contact_modal')
const triggerBtn = document.querySelector('#open-modal-btn')
const modalContent = document.querySelector('.modal')
const focusableElems = modalContent.querySelectorAll(
  ' input:not([type="hidden"]), select, textarea, button'
)
const bodyElems = document.body.querySelectorAll('*:not(#contact_modal)')

function displayModal() {
  modal.style.display = 'block'

  for (let elem of bodyElems) {
    if (elem.tagName.toLowerCase() !== 'form') {
      elem.setAttribute('tabindex', '-1')
    }
  }

  const formElems = modalContent.querySelectorAll(
    ' input:not([type="hidden"]), textarea, button, label[htmlFor="prenom"], label[htmlFor="nom"], label[htmlFor="email"], label[htmlFor="textarea"]'
  )

  for (let i = 0; i < formElems.length; i++) {
    formElems[i].setAttribute('tabindex', 1)
  }

  formElems[0].focus()

  modal.addEventListener('keydown', trapFocusInsideModal)
  modal.addEventListener('keydown', closeModalOnEsc)
}

function closeModal() {
  modal.style.display = 'none'

  // rétablit la navigation par tabulation pour les éléments en arrière-plan
  for (let elem of bodyElems) {
    elem.removeAttribute('aria-hidden')
    elem.removeAttribute('tabindex')
  }

  triggerBtn.focus()
  modal.removeEventListener('keydown', trapFocusInsideModal)
  modal.removeEventListener('keydown', closeModalOnEsc)
}

function closeModal() {
  modal.style.display = 'none'

  for (let elem of bodyElems) {
    elem.removeAttribute('tabindex')
  }

  triggerBtn.focus()
  modal.removeEventListener('keydown', trapFocusInsideModal)
  modal.removeEventListener('keydown', closeModalOnEsc)
}

function trapFocusInsideModal(event) {
  const firstElem = focusableElems[0]
  const lastElem = focusableElems[focusableElems.length - 1]

  if (event.key === 'Tab') {
    if (event.shiftKey && document.activeElement === firstElem) {
      event.preventDefault()
      lastElem.focus()
    } else if (!event.shiftKey && document.activeElement === lastElem) {
      event.preventDefault()
      firstElem.focus()
    }
  }
}

function closeModalOnEsc(event) {
  if (event.key === 'Escape') {
    closeModal()
  }
}

triggerBtn.addEventListener('click', displayModal)
modalContent.querySelector('#closeForm').addEventListener('click', closeModal)
