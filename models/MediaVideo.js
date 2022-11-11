class MediaVideo extends Media {
  constructor(data) {
    super(data);
    this._video = data.video;
  }

  get video() {
    return `/assets/medias/$(this._id)/$(this._video)`;
  }
  // ici créer function pour afficher les video
  display() {}
}
//const media = createMedia("video", data);
