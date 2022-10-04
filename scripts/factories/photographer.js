function photographerFactory(data) {
  const { name, portrait, city } = data;
  console.log(data);
  const picture = `assets/photographers/${portrait}`;

  function display() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    article.appendChild(img);
    article.appendChild(h2);
    h2.innerHTML = name;

    // Créer une Div
    const info = document.createElement("div");
    // Ajoute une class
    info.classList.add("info");
    // info et l'enfant de article
    article.appendChild(info);
    // on recupére le text de la bd avec city & inject avec inner
    info.innerHTML = city;

    return article;
  }
  return { name, picture, city, display };
}
