// créer une function (creatMedia)

// 2 paramétre (types, data)
function creatMedia(type, data) {
  if (type === data.img) {
    return MediaPicture;
  } else {
    return MediaVideo;
  }
}
