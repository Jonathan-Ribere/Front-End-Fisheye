//photographerFactory crée un objet modèle pour un photographe en utilisant les données fournies
// en paramètre.
// Elle définit une méthode display qui retourne l'élément HTML correspondant au photographe.
// Elle retourne l'objet modèle créé.
function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price } = data;
  const picture = `assets/photographers/${portrait}`;

  function display() {
    const article = document.createElement("article");
    const head = document.createElement("div");
    head.classList.add("enTete");
    article.appendChild(head);

    const divImg = document.createElement("div");
    divImg.classList.add("divImg");
    divImg.setAttribute("role", "img");
    divImg.setAttribute("alt", data.name);
    divImg.setAttribute("tabindex", "3");
    head.appendChild(divImg);

    const lien = document.createElement("a");
    lien.classList.add("lienProfil");
    const url = "photographer.html";
    const id = data.id;
    const test = `?id=${id}`;
    divImg.appendChild(lien);
    lien.href = url + test;

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "Photo de profile de : " + name);
    img.classList.add("classImg");
    lien.appendChild(img);

    const h2 = document.createElement("h2");
    lien.appendChild(h2);
    h2.innerHTML = name;

    const corps = document.createElement("div");
    corps.classList.add("corps");
    article.appendChild(corps);

    const ville = document.createElement("div");
    ville.classList.add("ville");
    ville.setAttribute("aria-label", "Information sur " + data.name);
    ville.setAttribute("tabindex", "4");
    corps.appendChild(ville);

    const h3 = document.createElement("h3");
    h3.classList.add("h3");
    ville.appendChild(h3);
    h3.innerHTML = city + ", " + country;

    const paragraphe = document.createElement("p");
    paragraphe.classList.add("paragraphe");
    ville.appendChild(paragraphe);
    paragraphe.innerHTML = tagline;

    const prix = document.createElement("p");
    prix.classList.add("prix");
    ville.appendChild(prix);
    prix.innerHTML = price + "€/jour";
    return article;
  }
  return { display };
}
