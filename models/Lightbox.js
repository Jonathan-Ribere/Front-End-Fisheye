/** La classe Lightbox est une classe JavaScript qui crée une visionneuse
 *  de diaporama d'images/vidéos. Elle prend en entrée un tableau de liens
 *  d'images, et lorsqu'un de ces liens est cliqué, cela ouvre le diaporama
 *  et affiche le média correspondant. */
class Lightbox {
  /** définit les propriétés imageLinks et currentIndex,
   * et appelle la méthode init. */
  constructor(imageLinks) {
    this.imageLinks = imageLinks;
    this.currentIndex = 0;
    this.init();
  }
  /** La méthode init met en place un écouteur d'événement sur
   *  chaque lien dans le tableau imageLinks, de sorte qu'au moment où
   * l'un des liens est cliqué,la méthode open est appelée
   *  et le diaporama s'ouvre. */
  init() {
    this.imageLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.currentIndex = this.imageLinks.indexOf(e.currentTarget);
        this.open();
      });
    });
  }

  /** La méthode open crée l'élément DOM du diaporama en appelant la méthode
   *  buildDOM, puis charge le média approprié (image ou vidéo) dans le
   *  diaporama en appelant la méthode loadMedia. Elle met également en
   *  place un écouteur d'événement sur le document, de sorte que le
   *  diaporama peut être fermé en appuyant sur la touche Échap. */
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
    const currentImage = this.imageLinks[this.currentIndex];
    const ext = currentImage.split(".").pop();
    let media;
    if (ext === "jpg" || ext === "jpeg" || ext === "png") {
      media = new Image();
    } else if (ext === "mp4") {
      media = document.createElement("video");
      media.setAttribute("controls", "controls");
    }
    media.onload = () => {
      this.lightbox.querySelector(".lightbox__container").appendChild(media);
    };
    media.src = currentImage;
  }

  /** La méthode onKeyUp permet à l'utilisateur de naviguer à travers
   *  les images du diaporama à l'aide des touches fléchées gauche et droite,
   *  et de fermer le diaporama en appuyant sur la touche Échap. */
  onKeyUp(e) {
    if (e.key === "Escape") {
      this.close();
    } else if (e.key === "ArrowLeft") {
      this.prev();
    } else if (e.key === "ArrowRight") {
      this.next();
    }
  }

  /** La méthode close supprime l'élément diaporama du DOM
   *  et supprime l'écouteur d'événement keyup du document. */
  close() {
    this.lightbox.remove();
    document.removeEventListener("keyup", this.onKeyUp);
  }

  /** La méthode next incrémente la propriété currentIndex,
   *  en s'assurant qu'elle revient à la première image lorsque la dernière
   *  image est atteinte. Elle appelle ensuite la méthode loadMedia pour
   *  mettre à jour le diaporama avec la prochaine image. */
  next() {
    this.currentIndex = this.currentIndex + 1;
    if (this.currentIndex === this.imageLinks.length) {
      this.currentIndex = 0;
    }
    this.loadMedia();
  }

  /** La méthode prev fait la même chose que la méthode next,
   *  mais décrémente la propriété currentIndex à la place d'incrémenter. */
  prev() {
    this.currentIndex = this.currentIndex - 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.imageLinks.length - 1;
    }
    this.loadMedia();
  }

  /** La méthode buildDOM crée l'élément diaporama et ses éléments enfants,
   *  et met en place des écouteurs d'événements sur les boutons
   *  de fermeture, précédent et suivant. Elle renvoie également l'élément
   *  diaporama. */
  buildDOM() {
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    lightbox.innerHTML = `
    <button class="lightbox__close">Close</button>
    <button class="lightbox__prev">Previous</button>
    <button class="lightbox__next">Next</button>
    <div class="lightbox__container"></div>
    `;
    lightbox
      .querySelector(".lightbox__close")
      .addEventListener("click", this.close.bind(this));
    lightbox
      .querySelector(".lightbox__prev")
      .addEventListener("click", this.prev.bind(this));
    lightbox
      .querySelector(".lightbox__next")
      .addEventListener("click", this.next.bind(this));
    return lightbox;
  }
}
