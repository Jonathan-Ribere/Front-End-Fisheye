//// PATTERN OBSERVER ////
class Media {
  constructor() {
    this.reactions = {
      photo: [],
      video: [],
    };
  }

  addReaction(type, callback) {
    this.reactions[type].push(callback);
  }

  displayMedia() {
    console.log("Je prepare mon IMAGE");
    if (this.reactions.video.length > 0) {
      for (let reaction of this.reactions.video) {
        reaction();
      }
    }
    console.log("Mon image et en place ");
    if (this.reactions.photo.length > 0) {
      for (let reaction of this.reactions.photo) {
        reaction();
      }
    }

    console.log("Mon image patiente");
  }
}

const newMedia = new Media();

newMedia.addReaction("video", function () {
  console.log("comportement supllementaire");
});

newMedia.addReaction("photo", function () {
  console.log("comportement supllementaire 2");
});

newMedia.displayMedia();
