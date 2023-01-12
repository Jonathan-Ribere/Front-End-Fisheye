class MediaVideo extends Media {
  constructor(data) {
    super(data);
    this._video = data.video;
  }

  //get video() {
  //return `/assets/medias/$(this._id)/$(this._video)`;
  //}
  // ici créer function pour afficher les video
  display() {
    const video = `assets/medias/${this._photographerId + "/" + this._video}`;
    let thumbnail = "../assets/medias/82/Art_Wooden_Horse_Sculpture.png";
    console.log(thumbnail);
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
    containerBodyCardImg.setAttribute("role", "video");
    containerBodyCardImg.setAttribute("aria-label", "Ouvre la vue lightbox");
    containerBodyCardImg.setAttribute("tabindex", "9");
    containerBodyCard.appendChild(containerBodyCardImg);

    const lienMp4 = document.createElement("a");
    lienMp4.setAttribute("href", video);
    lienMp4.classList.add("lienImg");
    lienMp4.setAttribute("data-type", "video");
    lienMp4.setAttribute("aria-label", "lien de la video");
    containerBodyCardImg.appendChild(lienMp4);

    const v = document.createElement("video");
    v.setAttribute("src", video);
    v.setAttribute("poster", thumbnail);
    v.setAttribute("alt", "Video : " + this._title);
    v.controls = true;
    v.muted = false;
    v.classList.add("classVideoCard");
    lienMp4.appendChild(v);

    const containerBodyCardinfo = document.createElement("div");
    containerBodyCardinfo.classList.add("containerBodyCardinfo");
    containerBodyCard.appendChild(containerBodyCardinfo);

    const containerBodyCardH3 = document.createElement("div");
    containerBodyCardH3.classList.add("containerBodyCardH3");
    containerBodyCardH3.setAttribute("tabindex", "10");
    containerBodyCardinfo.appendChild(containerBodyCardH3);

    const titre = document.createElement("h3");
    titre.classList.add("titreH3");
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
    divImg.setAttribute("role", "img");
    divImg.classList.add("imgLikes");
    containerBodyCardLikes.appendChild(divImg);
    const icon = document.createElement("img");
    icon.setAttribute("src", pictureIcon);
    icon.setAttribute("alt", "like");
    icon.setAttribute("aria-label", "likes");
    icon.classList.add("classSvgIcon");
    divImg.appendChild(icon);
  }
}
//const media = createMedia("video", data);
