class Media {
  constructor(data) {
    this._date = data.date;
    this._id = data.id;
    this._likes = data.likes;
    this._photographerId = data.photographerId;
    this._title = data.title;
    this._media_img = data.image;
    this._media_video = data.video;
  }
  /*setDate(callback) {
    this.date = callback;
  }*/

  get date() {
    return this._date;
  }
  get id() {
    return this._id;
  }
  get photographerId() {
    return this._photographerIds;
  }
  get title() {
    return this._title;
  }

  get media() {
    return this._media_img ? this._media_img : this._media_video;
  }
}

const fullMedia = new Media();

fullMedia.data();

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
