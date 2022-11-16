class Lightbox {
  static init() {
    const links = document
      .querySelectorAll('a[href$=".jpg"]', 'a[href$=".mp4"]')
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
  }

  constructor(data) {
    const element = this.buildDOM(data);
    containerBodyCardImg.appendChild(element);
  }
}
Lightbox.init();
