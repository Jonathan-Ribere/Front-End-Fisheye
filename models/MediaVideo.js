class MediaVideo extends Media {
  constructor(data) {
    super(data);
    this._media_video = data.video;
  }
  // ici créer function pour afficher les video
}
const mediaVideo = new MediaVideo();
console.log(mediaVideo);
