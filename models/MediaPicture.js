class MediaPicture extends Media {
  constructor(data) {
    super(data);
    this._image = data.image;
  }

  display() {
    const picture = `assets/medias/${this._photographerId + "/" + this._image}`;
    const pictureIcon = `assets/icons/heart.svg`;
    const mediaSection = document.querySelector(".containerBody");
    const section = document.createElement("section");
    section.classList.add("mediaSection");
    mediaSection.appendChild(section);

    const containerBodyCard = document.createElement("div");
    containerBodyCard.classList.add("containerBodyCard");
    section.appendChild(containerBodyCard);

    const containerBodyCardImg = document.createElement("div");
    containerBodyCardImg.classList.add("containerBodyCardImg");
    containerBodyCardImg.setAttribute("role", "img");
    containerBodyCardImg.setAttribute("aria-label", "Ouvre la vue lightbox");
    containerBodyCardImg.setAttribute("tabindex", "9");
    containerBodyCard.appendChild(containerBodyCardImg);

    const lien = document.createElement("a");
    lien.setAttribute("href", picture);
    lien.classList.add("lienImg");
    lien.setAttribute("data-type", "image");
    containerBodyCardImg.appendChild(lien);

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "Photo :" + this._title);
    img.setAttribute("loading", "lazy");
    img.classList.add("classImgCard");
    lien.appendChild(img);

    const containerBodyCardinfo = document.createElement("div");
    containerBodyCardinfo.classList.add("containerBodyCardinfo");
    containerBodyCard.appendChild(containerBodyCardinfo);

    const containerBodyCardH3 = document.createElement("div");
    containerBodyCardH3.classList.add("containerBodyCardH3");
    containerBodyCardH3.setAttribute("tabindex", "10");
    containerBodyCardinfo.appendChild(containerBodyCardH3);

    const titre = document.createElement("h3");
    titre.classList.add("titreH3");
    titre.setAttribute("role", "heading");
    containerBodyCardH3.appendChild(titre);
    titre.innerHTML = this._title;

    const containerBodyCardLikes = document.createElement("div");
    containerBodyCardLikes.classList.add("containerBodyCardLikes");
    containerBodyCardLikes.setAttribute("tabindex", "11");
    containerBodyCardinfo.appendChild(containerBodyCardLikes);

    const p = document.createElement("p");
    p.classList.add("numberLikes");
    containerBodyCardLikes.appendChild(p);
    p.innerHTML = this._likes;

    const divImg = document.createElement("div");
    divImg.setAttribute("data-id", this._id);
    divImg.setAttribute("data-like", false);
    divImg.classList.add("imgLikes");
    divImg.setAttribute("role", "img");
    containerBodyCardLikes.appendChild(divImg);
    const icon = document.createElement("img");
    icon.setAttribute("src", pictureIcon);
    icon.setAttribute("alt", "like");
    icon.setAttribute("aria-label", "likes");
    icon.classList.add("classSvgIcon");
    divImg.appendChild(icon);
  }
}
