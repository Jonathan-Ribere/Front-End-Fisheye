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
    let thumbnailUrl = "../assets/medias/82/Art_Wooden_Horse_Sculpture.png";
    console.log(thumbnailUrl);
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

    const thumbnail_ = document.createElement("img");
    thumbnail_.setAttribute("src", thumbnailUrl);
    thumbnail_.setAttribute("id", "thumbnail1");
    thumbnail_.setAttribute("alt", "Vignette de la vidéo : " + this._title);
    thumbnail_.classList.add("classImgCard");
    containerBodyCardImg.appendChild(thumbnail_);

    const lienMp4 = document.createElement("a");
    lienMp4.setAttribute("href", video);
    lienMp4.classList.add("lienImg", "play-button");
    lienMp4.setAttribute("data-type", "video");
    lienMp4.setAttribute("aria-label", "lancer la video");
    containerBodyCardImg.appendChild(lienMp4);

    const v = document.createElement("video");
    v.setAttribute("poster", thumbnailUrl);
    v.setAttribute("id", "video1");
    v.setAttribute("controls", "controls");
    v.classList.add("classImgCard");
    containerBodyCardImg.appendChild(v);

    const source = document.createElement("source");
    source.setAttribute("src", video);
    source.setAttribute("type", "video/mp4");
    v.appendChild(source);

    const thumbnail1 = document.getElementById("thumbnail");
    const video1 = document.getElementById("video");
    const playButton = document.querySelector(".play-button");
    thumbnail1.addEventListener("click", function () {
      video1.play();
    });

    playButton.addEventListener("click", function () {
      video1.play();
    });

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
