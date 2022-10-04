function photographerFactory(data) {
  const { name, portrait, city } = data;
  console.log(data);
  const picture = `assets/photographers/${portrait}`;

  function display() {
    // Créer l'article
    const article = document.createElement("article");

    // Création de la div avec la class "enTete"
    const head = document.createElement("div");
    head.classList.add("enTete");
    // Head(Div avec la class "enTete" et l'enfant de l'article)
    article.appendChild(head);

    // Création de la div qui englobe la photo de profile
    const divImg = document.createElement("div");
    divImg.classList.add("divImg");
    head.appendChild(divImg);

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.classList.add("classImg");
    divImg.appendChild(img);

    const h2 = document.createElement("h2");
    head.appendChild(h2);
    h2.innerHTML = name;

    // Créer une Div
    const ville = document.createElement("div");
    // Ajoute une class
    ville.classList.add("ville");
    // info et l'enfant de article
    article.appendChild(ville);
    // on recupére le text de la bd avec city & inject avec inner
    ville.innerHTML = city;

    return article;
  }
  return { name, picture, city, display };
}
