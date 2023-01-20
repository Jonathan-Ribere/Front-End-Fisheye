class Lightbox {
  /** définit les propriétés imageLinks et currentIndex,
   * et appelle la méthode init. */
  constructor(medias) {
    this.hrefImg = [];
    this.currentIndex = 0;
    this.medias = medias;
    this.init();
  }

  init() {
    let hrefImg = document.querySelectorAll(".lienImg");
    this.hrefImg = Array.from(hrefImg);

    this.hrefImg.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.currentIndex = this.hrefImg.indexOf(e.currentTarget);
        this.open();
      });
    });
  }

  open() {
    this.lightbox = this.buildDOM();
    this.loadMedia();
    document.body.appendChild(this.lightbox);
    document.addEventListener("keyup", this.onKeyUp.bind(this));
  }

  /** La méthode loadMedia utilise l'extension de fichier du lien href
   *  pour déterminer si le média est une image ou une vidéo.
   *  Il crée un nouvel élément Image ou vidéo en conséquence, et l'ajoute
   *  à l'élément container du diaporama. */

  loadMedia() {
    const currentMedia = this.medias[this.currentIndex];
    console.log(currentMedia);
    //let media;

    /*
    if (currentImage.dataset.type === "image") {
      media = new Lightbox(this.currentIndex);
      console.log(media);
    } else if (currentImage.dataset.type === "video") {
      media = document.createElement("video");
    }
    media.onload = () => {
      this.lightbox.querySelector(".lightbox__container").appendChild(media);
    };
    media.src = currentImage.href;
    */
  }

  onKeyUp(e) {
    if (e.key === "Escape") {
      this.close();
    } else if (e.key === "ArrowLeft") {
      this.prev();
    } else if (e.key === "ArrowRight") {
      this.next();
    }
  }

  close() {
    this.lightbox.remove();
    document.removeEventListener("keyup", this.onKeyUp);
  }

  next() {
    if (this.currentIndex < this.imageLinks.length - 1) {
      this.currentIndex++;
      this.loadMedia();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.loadMedia();
    }
  }

  buildDOM() {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    const container = document.createElement("div");
    container.classList.add("lightbox__container");

    const prevButton = document.createElement("button");
    prevButton.classList.add("lightbox__prev");
    prevButton.textContent = "<";
    prevButton.addEventListener("click", this.prev.bind(this));

    const nextButton = document.createElement("button");
    nextButton.classList.add("lightbox__next");
    nextButton.textContent = ">";
    nextButton.addEventListener("click", this.next.bind(this));

    const closeButton = document.createElement("button");
    closeButton.classList.add("lightbox__close");
    closeButton.textContent = "X";
    closeButton.addEventListener("click", this.close.bind(this));

    lightbox.appendChild(container);
    lightbox.appendChild(prevButton);
    lightbox.appendChild(nextButton);
    lightbox.appendChild(closeButton);

    return lightbox;
  }
}
