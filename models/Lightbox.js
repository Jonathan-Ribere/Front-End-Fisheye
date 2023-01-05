/**
 * @property {HTMLElement} element
 * @property {string[]} images Chemins des images de la lightbox
 * @property {string} url Image actuellement affichée
 */

class Lightbox {
  static init() {
    const links = Array.from(
      document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]')
    );
    const gallery = links.map((link) => link.getAttribute("href"));
    // Pour chaque lien je fait un listener pour ecoutée au click les événements
    links.forEach((link) => {
      // Je lui ajoute un événement au click
      link.addEventListener("click", (e) => {
        // preventDefault pour stopé le comportement par defaut
        e.preventDefault();
        // j'initialise une nouvelle Lightbox
        // "e" pour récupérée mon événement
        // currentTarget me permet de séléctionée le lien sur le quel j'ai cliquée
        new Lightbox(e.currentTarget.getAttribute("href"), gallery);
      });
    });
  }
  // Je commente mon code
  /**
   * @param {string} url URL de l'image
   * @param {string[]} images Chemins des images de la lightbox
   */
  constructor(url, images) {
    this.element = this.buildDOM(url);
    this.images = images;
    this.loadImg(url);
    this.onkeyUp = this.onkeyUp.bind(this);
    document.body.appendChild(this.element);
    document.addEventListener("keyup", this.onkeyUp);
  }

  /**
   * @param {string} url URL de l'image
   */
  loadImg(url) {
    this.url = null;
    const image = new Image();
    const container = this.element.querySelector(".lightbox__container");
    const loader = document.createElement("div");
    loader.classList.add("lightbox__loader");
    container.innerHTML = "";
    container.appendChild(loader);
    image.onload = () => {
      container.removeChild(loader);
      container.appendChild(image);
      this.url = url;
    };
    image.src = url;
  }
  /**
   * @param {KeyboardEvent} e
   */
  onkeyUp(e) {
    if (e.key === "Escape") {
      this.close(e);
    } else if (e.key === "ArrowLeft") {
      this.prev(e);
    } else if (e.key === "ArrowRight") {
      this.next(e);
    }
  }

  /**
   * Ferme la lightbox
   * @param {MouseEvent/KeyboardEvent} e
   */
  close(e) {
    e.preventDefault();
    this.element.classList.add("fadeOut");
    window.setTimeout(() => {
      this.element.parentElement.removeChild(this.element);
    }, 500);
    document.removeEventListener("keyup", this.onkeyUp);
  }

  /**
   * @param {MouseEvent/KeyboardEvent} e
   */
  next(e) {
    e.preventDefault();
    let i = this.images.findIndex((image) => image === this.url);
    if (i === this.images.length - 1) {
      i = -1;
    }
    this.loadImg(this.images[i + 1]);
  }

  /**
   * @param {MouseEvent/KeyboardEvent} e
   */
  prev(e) {
    e.preventDefault();
    let i = this.images.findIndex((image) => image === this.url);
    if (i === 0) {
      i = this.images.length;
    }
    this.loadImg(this.images[i - 1]);
  }

  // Je commente mon code
  /**
   * @param {string} url URL de l'image
   * @return {HTMLElement}
   */

  buildDOM(url) {
    const dom = document.createElement("div");
    dom.classList.add("lightbox");

    dom.innerHTML = `
      <button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précédent</button>
        <div class="lightbox__container">
         
        </div>`;

    dom
      .querySelector(".lightbox__close")
      .addEventListener("click", this.close.bind(this));

    dom
      .querySelector(".lightbox__next")
      .addEventListener("click", this.next.bind(this));

    dom
      .querySelector(".lightbox__prev")
      .addEventListener("click", this.prev.bind(this));
    return dom;
  }
}
