function photographerFactory(data) {
  const { name, portrait, city } = data;
  console.log(data);
  const picture = `assets/photographers/${portrait}`;

  function display() {
    // Créer l'article
    const article = document.createElement("article");

    /* DEBUT DE LA DIV ENTETE */
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

    // Création du h2 sous la photo de profile
    const h2 = document.createElement("h2");
    head.appendChild(h2);
    h2.innerHTML = name;
    /* FIN DE LA DIV ENTETE */

    /* DEBUT DE LA DIV CORPS */
    const corps = document.createElement("div");
    corps.classList.add("corps");
    article.appendChild(corps);

    /* DEBUT DE LA DIV VILLE */
    // Créer une Div avec la class "ville"
    const ville = document.createElement("div");
    // Ajoute une class
    ville.classList.add("ville");
    // info et l'enfant de article
    corps.appendChild(ville);

    // Créer un h3 avec la class "h3"
    const h3 = document.createElement("h3");
    // Ajoute une class
    h3.classList.add("h3");
    ville.appendChild(h3);
    // on recupére le text de la bd avec city & inject avec inner
    h3.innerHTML = city;
    /* FIN DE LA DIV VILLE */

    return article;
  }
  return { name, picture, city, display };
}
