/*
createMedia crée un objet modèle pour un média en fonction de son type.
Elle prend en paramètres le type du média ("image" ou "video") et les données du média.
Si le type est "image", elle crée un objet de type MediaPicture en utilisant les données en paramètre.
Si le type est "video", elle crée un objet de type MediaVideo en utilisant les données en paramètre.
Si le type est autre chose, elle lève une exception.
Elle retourne l'objet créé. 
*/
function creatMedia(type, data) {
  if (type === "image") {
    return new MediaPicture(data);
  } else if (type === "video") {
    return new MediaVideo(data);
  } else {
    throw "Mauvais type de format ";
  }
}
