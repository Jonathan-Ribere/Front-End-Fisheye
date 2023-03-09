const button = document.getElementById('open-modal-btn')
button.addEventListener('click', function () {
  displayModal()
})

function displayModal() {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
}

const imgElement = document.getElementById('closeForm')
imgElement.addEventListener('click', function () {
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
