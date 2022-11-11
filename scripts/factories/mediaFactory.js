// La fonction createMedia() va créer un objet média (photo ou vidéo) et le retourner.
function creatMedia(type, data) {
  if (type === "image") {
    return new MediaPicture(data);
  } else if (type === "video") {
    return new MediaVideo(data);
  } else {
    throw "Mauvais type de format ";
  }
}
/*
class MediaFactory {
  constructor(data, type) {
    if (type === "image") {
      return new MediaPicture(data);
    } else if (type === "video") {
      return new MediaVideo(data);
    } else {
      throw "Mauvais type de format ";
    }
  }
}*/
