class LightboxImage extends Lightbox {
  constructor(data) {
    // L’utilisation du super(data) permet de passer des paramètres, ici en l'occurrence data, à la classe  Media
    super(data);

    this._image = data.image;
  }

  buildDOM() {
    const dom = document.createElement("div");
    dom.classList.add("lightbox");
    dom.innerHTML = `
        <button class="lightbox__close">Fermer</button>
          <button class="lightbox__next">Suivant</button>
          <button class="lightbox__prev">Précédent</button>
          <div class="lightbox__container">
            <img src=${this._image} alt="" />
          </div>`;
    body.appendChild(dom);
    return dom;
  }
}
