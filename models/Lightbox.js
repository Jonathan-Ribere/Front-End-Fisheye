class Lightbox {
  static init() {
    // Je sélectionne tous mes lien "a" dans la const links
    const links = document
      .querySelectorAll('a[href$=".jpg"]', 'a[href$=".mp4"]')
      // Pour chaque lien je fait un listener pour ecoutée au click les événements
      .forEach((link) => {
        // Je lui ajoute un événement au click
        link.addEventListener("click", (e) => {
          // preventDefault pour stopé le comportement par defaut
          e.preventDefault();
          // j'initialise une nouvelle Lightbox
          // "e" pour récupérée mon événement
          // currentTarget me permet de séléctionée le lien sur le quel j'ai cliquée
          new Lightbox(e.currentTarget.getAttribute("href"));
        });
      });
    console.log(
      document.querySelectorAll('a[href$=".jpg"]', 'a[href$=".mp4"]')
    );
    for (const link of document.querySelectorAll(
      'a[href$=".jpg"]',
      'a[href$=".mp4"]'
    )) {
      console.log(link);
    }
  }
  // Je commente mon code
  /**
   * @param {string} url URL de l'image
   */
  constructor(url) {
    this.element = this.buildDOM(url);
    this.loadImg(url);
    this.onkeyUp = this.onkeyUp.bind(this);
    document.body.appendChild(this.element);
    document.addEventListener("keyup", this.onkeyUp);
  }

  /**
   * @param {string} url URL de l'image
   */
  loadImg(url) {
    const image = new Image();
    const container = this.element.querySelector(".lightbox__container");
    const loader = document.createElement("div");
    loader.classList.add("lightbox__loader");
    container.appendChild(loader);
    image.onload = function () {
      container.removeChild(loader);
      container.appendChild(image);
    };
    image.src = url;
  }
  /**
   * @param {KeyboardEvent} e
   */
  onkeyUp(e) {
    if (e.key === "Escape") {
      this.close(e);
    }
  }

  /**
   * Ferme la lightbox
   * @param {MouseEvent} e
   */
  close(e) {
    e.preventDefault();
    this.element.classList.add("fadeOut");
    window.setTimeout(() => {
      this.element.parentElement.removeChild(this.element);
    }, 500);
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
    return dom;
  }
}

/*

    <div class="lightbox">
      <button class="lightbox__close">Fermer</button>
      <button class="lightbox__next">Suivant</button>
      <button class="lightbox__prev">Précédent</button>
      <div class="lightbox__container">
        <img src="./assets/medias/195/Architecture_Corner_Room.jpg" alt="" />
      </div>
    </div>

*/
