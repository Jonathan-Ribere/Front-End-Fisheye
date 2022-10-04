function photographerFactory(data) {
  const { name, portrait, city } = data;
  console.log(data);
  const picture = `assets/photographers/${portrait}`;

  function display() {
    const article = document.createElement("article");
    const head = document.createElement("div");
    head.classList.add("enTete");
    article.appendChild(head);
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    head.appendChild(img);
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
