function displayModal() {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
}

function closeModal() {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
}

document.addEventListener('keyup', function (e) {
  if (e.key === 'Escape') {
    closeModal()
  }
})
