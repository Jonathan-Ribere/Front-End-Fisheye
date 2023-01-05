function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price } = data;
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
    divImg.setAttribute("role", "img");
    divImg.setAttribute("alt", data.name);

    head.appendChild(divImg);

    // ajoute de "a" pour le lien
    const lien = document.createElement("a");
    lien.classList.add("lienProfil");
    const url = "photographer.html";
    // on récupére id dans le data
    const id = data.id;
    const test = `?id=${id}`;
    divImg.appendChild(lien);

    lien.href = url + test;

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "Photo de profile de : " + name);
    img.classList.add("classImg");
    lien.appendChild(img);

    // Création du h2 sous la photo de profile
    const h2 = document.createElement("h2");
    lien.appendChild(h2);
    //head.appendChild(h2);
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
    ville.setAttribute("arial-label", "Information sur " + data.name);
    // info et l'enfant de article
    corps.appendChild(ville);

    // Créer un h3 avec la class "h3"
    const h3 = document.createElement("h3");
    // Ajoute une class
    h3.classList.add("h3");
    ville.appendChild(h3);
    // on recupére le text de la bd avec city & inject avec inner
    h3.innerHTML = city + ", " + country;
    /* FIN DE LA DIV VILLE */

    /* DEBUT DU PARAGRAPHE */
    // Créer un P avec la class "paragraphe"
    const paragraphe = document.createElement("p");
    paragraphe.classList.add("paragraphe");
    ville.appendChild(paragraphe);
    paragraphe.innerHTML = tagline;
    /* FIN DU PARAGRAPHE */

    /* DEBUT DU PARAGRAPHE PRIX*/
    // Créer un P avec la class "prix"
    const prix = document.createElement("p");
    prix.classList.add("prix");
    ville.appendChild(prix);
    prix.innerHTML = price + "€/jour";
    /* FIN DU PARAGRAPHE PRIX */
    return article;
  }
  return { display };
}
