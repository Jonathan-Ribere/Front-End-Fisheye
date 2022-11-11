// Extends permet aux MediaPicture et MediaVideo de pouvoir “récupérer” la fonctionnalité Display
class MediaPicture extends Media {
  constructor(data) {
    // L’utilisation du super(data) permet de passer des paramètres, ici en l'occurrence data, à la classe  Media
    super(data);

    this._image = data.image;
  }
  //get image() {
  //return `/assets/medias/$(this._id)/$(this._image)`;
  //}
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

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.classList.add("classImgCard");
    containerBodyCardImg.appendChild(img);

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
    containerBodyCardLikes.appendChild(p);
    p.innerHTML = this._likes;

    const icon = document.createElement("img");
    icon.setAttribute("src", pictureIcon);
    icon.classList.add("classSvgIcon");
    containerBodyCardLikes.appendChild(icon);
  }
}

/*const oko = new MediaPicture("okkkk");
console.log(oko);*/

//// PATTERN OBSERVER ////
/*class Media {
  constructor() {
    this.mediaFormats = {
      photo: [],
      video: [],
    };
  }

  addMediaFormat(type, callback) {
    this.mediaFormats[type].push(callback);
  }

  dispatch(type) {
    if (this.mediaFormats[type].length > 0) {
      for (let reaction of this.mediaFormats[type]) {
        reaction();
      }
    }
  }

  displayMedia() {
    this.dispatch("photo");
    this.dispatch("video");
  }
}

const newMedia = new Media();

newMedia.addMediaFormat("video", function () {
  console.log("Je suis une video");
});

newMedia.addMediaFormat("photo", function () {
  console.log("Je suis une photo");
});

newMedia.displayMedia();
*/
