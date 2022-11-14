class Lightbox {
  static init() {
    // Je sélectionne tous mes lien "a" dans la const links
    const links = document
      .querySelectorAll('a[href$=".jpeg"], a[href$=".mp4"]')
      // Pour chaque lien je fait un listener pour ecoutée au click les événements
      .forEach((link) =>
        // Je lui ajoute un événement au click
        link.addEventListener("click", (e) => {
          // preventDefault pour stopé le comportement par defaut
          e.preventDefault();
          // j'initialise une nouvelle Lightbox
          // "e" pour récupérée mon événement
          // currentTarget me permet de séléctionée le lien sur le quel j'ai cliquée
          new Lightbox(e.currentTarget.getAttribute("href"));
        })
      );
    console.log(links);
  }
  // Je commente mon code
  /**
   *
   * @param {string} url URL de l'image
   */
  constructor(url) {
    const element = this.buildDom(url);
    document.body.appendChild(element);
  }
  // Je commente mon code
  /**
   *
   * @param {string} url URL de l'image
   * @return {HTMLElement}
   */
  buildDom(url) {
    const dom = document.createElement("div");
    dom.classList.add("lightbox");
    dom.innerHTML = `
    <button class="lightbox__close">Fermer</button>
      <button class="lightbox__next">Suivant</button>
      <button class="lightbox__prev">Précédent</button>
      <div class="lightbox__container">
        <img src=${url} alt="" />
      </div>`;
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

Lightbox.init();
