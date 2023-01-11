class Lightbox {
  static init() {
    const links = Array.from(
      document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]')
    );
    const gallery = links.map((link) => link.getAttribute("href"));
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        new Lightbox(e.currentTarget.getAttribute("href"), gallery);
      });
    });
  }
  constructor(url) {
    this.element = this.buildDOM(url);
    this.url = url;
    //this.images = images;
    this.loadMedia(url);
    this.onkeyUp = this.onkeyUp.bind(this);
    document.body.appendChild(this.element);
    document.addEventListener("keyup", this.onkeyUp);
  }
  loadMedia(url) {
    const ext = url.split(".").pop(); // Get file extension
    let media;
    if (ext === "jpg" || ext === "jpeg" || ext === "png") {
      media = new Image();
    } else if (ext === "mp4") {
      media = document.createElement("video");
      media.setAttribute("controls", "controls");
    }
    const container = this.element.querySelector(".lightbox__container");
    const loader = document.createElement("div");
    loader.classList.add("lightbox__loader");
    container.innerHTML = "";
    container.appendChild(loader);
    media.onload = () => {
      container.removeChild(loader);
      container.appendChild(media);
    };
    media.src = url;
  }

  onkeyUp(e) {
    if (e.key === "Escape") {
      this.close(e);
    } else if (e.key === "ArrowLeft") {
      this.prev(e);
    } else if (e.key === "ArrowRight") {
      this.next(e);
    }
  }
  close(e) {
    e.preventDefault();
    this.element.classList.add("fadeOut");
    window.setTimeout(() => {
      this.element.parentElement.removeChild(this.element);
    }, 500);
    document.removeEventListener("keyup", this.onkeyUp);
  }

  next(e) {
    e.preventDefault();
    const ext = this.url.split(".").pop(); // Get file extension
    if (ext === "jpg" || ext === "jpeg" || ext === "png" || ext === "mp4") {
      let i = this.images.findIndex((media) => media === this.url);
      if (i === this.images.length - 1) {
        i = -1;
      }
      this.loadMedia(this.images[i + 1]);
    }
  }
  prev(e) {
    e.preventDefault();
    const ext = this.url.split(".").pop(); // Get file extension
    if (ext === "jpg" || ext === "jpeg" || ext === "png" || ext === "mp4") {
      let i = this.images.findIndex((media) => media === this.url);
      if (i === 0) {
        i = this.images.length;
      }
      this.loadMedia(this.images[i - 1]);
    }
  }
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
