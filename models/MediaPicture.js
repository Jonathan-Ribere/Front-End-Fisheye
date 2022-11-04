class MediaPicture extends Media {
  constructor(data) {
    super(data);

    this._image = data.image;
  }

  get image() {
    return `/assets/medias/$(this._id)/$(this._image)`;
  }
}

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
