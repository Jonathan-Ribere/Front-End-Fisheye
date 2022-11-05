// créer une function (creatMedia)

// 2 paramétre (types, data)
function creatMedia(type, data) {
  if (type === "image") {
    return new MediaPicture(data);
  } else if (type === "video") {
    return new MediaVideo(data);
  } else {
    throw "Mauvais type de format ";
  }
}
