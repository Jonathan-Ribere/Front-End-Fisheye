class Lightbox {
  constructor(medias) {
    this.hrefImg = []
    this.currentIndex = 0
    this.medias = medias
    this.init()
  }

  init() {
    let hrefImg = document.querySelectorAll('.lienImg')
    this.hrefImg = Array.from(hrefImg)

    this.hrefImg.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        this.currentIndex = this.hrefImg.indexOf(e.currentTarget)
        this.open()
      })
    })
  }

  open() {
    this.lightbox = this.buildDOM()
    this.loadMedia()
    document.body.appendChild(this.lightbox)
    document.addEventListener('keyup', this.onKeyUp.bind(this))
  }

  loadMedia() {
    const currentMedia = this.medias[this.currentIndex]
    const idMedias = currentMedia._photographerId
    const mediaSelectImg = currentMedia._image
    const mediaSelectVideo = currentMedia._video
    this.media = null

    if (currentMedia instanceof MediaPicture) {
      const image = new Image()
      image.classList.add('imgLight')
      image.onload = () => {
        const container = document.querySelector('.boxImg')
        container.innerHTML = ''
        container.appendChild(image)
      }
      image.src = `/assets/medias/${idMedias}/${mediaSelectImg}`
    } else if (currentMedia instanceof MediaVideo) {
      const video = document.createElement('video')
      video.classList.add('imgLight')
      video.controls = true
      video.autoplay = false
      video.muted = false
      video.addEventListener('canplay', () => {
        const container = document.querySelector('.boxImg')
        container.appendChild(video)
      })
      video.src = `/assets/medias/${idMedias}/${mediaSelectVideo}`
    }
  }

  onKeyUp(e) {
    if (e.key === 'Escape') {
      this.close()
    } else if (e.key === 'ArrowLeft') {
      this.prev()
    } else if (e.key === 'ArrowRight') {
      this.next()
    }
  }

  close() {
    this.lightbox.remove()
    document.removeEventListener('keyup', this.onKeyUp)
  }

  next() {
    if (this.currentIndex < this.medias.length - 1) {
      this.currentIndex++
    } else {
      this.currentIndex = 0
    }
    this.loadMedia()
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--
    } else {
      this.currentIndex = this.medias.length - 1
    }
    this.loadMedia()
  }

  buildDOM() {
    const lightbox = document.createElement('div')
    lightbox.classList.add('lightbox')
    lightbox.innerHTML = `
   
      <div class="lightbox__container">
      <button class="lightbox__close"><i class="fa-sharp fa-solid fa-xmark"></i></button>
      <button class="lightbox__prev"><i class="fa-solid fa-angle-left"></i></button>
      <button class="lightbox__next"><i class="fa-solid fa-angle-right"></i></button>
      <div class="boxImg"></div>
      </div>
      `
    lightbox
      .querySelector('.lightbox__close')
      .addEventListener('click', this.close.bind(this))
    lightbox
      .querySelector('.lightbox__prev')
      .addEventListener('click', this.prev.bind(this))
    lightbox
      .querySelector('.lightbox__next')
      .addEventListener('click', this.next.bind(this))
    return lightbox
  }
}
