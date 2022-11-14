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
    console.log(video);

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

    const v = document.createElement("video");
    v.setAttribute("src", video);
    v.controls = true;
    v.muted = false;
    v.classList.add("classVideoCard");
    containerBodyCardImg.appendChild(v);

    //const img = document.createElement("img");
    //img.setAttribute("src", picture);
    //img.classList.add("classImgCard");
    //containerBodyCardImg.appendChild(img);

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
//const media = createMedia("video", data);