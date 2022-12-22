// Extends permet aux MediaPicture et MediaVideo de pouvoir “récupérer” la fonctionnalité Display
class MediaPicture extends Media {
  constructor(data) {
    // L’utilisation du super(data) permet de passer des paramètres, ici en l'occurrence data, à la classe  Media
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
    containerBodyCard.appendChild(containerBodyCardImg);

    const lien = document.createElement("a");
    lien.setAttribute("href", picture);
    lien.classList.add("lienImg");
    lien.setAttribute("data-type", "image");
    containerBodyCardImg.appendChild(lien);

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("loading", "lazy");
    img.classList.add("classImgCard");
    lien.appendChild(img);

    const containerBodyCardinfo = document.createElement("div");
    containerBodyCardinfo.classList.add("containerBodyCardinfo");
    containerBodyCard.appendChild(containerBodyCardinfo);

    const containerBodyCardH3 = document.createElement("div");
    containerBodyCardH3.classList.add("containerBodyCardH3");
    containerBodyCardinfo.appendChild(containerBodyCardH3);

    const titre = document.createElement("h3");
    titre.classList.add("titreH3");
    containerBodyCardH3.appendChild(titre);
    titre.innerHTML = this._title;

    const containerBodyCardLikes = document.createElement("div");
    containerBodyCardLikes.classList.add("containerBodyCardLikes");
    containerBodyCardinfo.appendChild(containerBodyCardLikes);

    const p = document.createElement("p");
    p.classList.add("numberLikes");
    containerBodyCardLikes.appendChild(p);
    p.innerHTML = this._likes;

    const divImg = document.createElement("div");
    divImg.setAttribute("data-id", this._id);
    divImg.classList.add("imgLikes");
    containerBodyCardLikes.appendChild(divImg);
    const icon = document.createElement("img");
    icon.setAttribute("src", pictureIcon);
    icon.classList.add("classSvgIcon");
    divImg.appendChild(icon);
  }
}
