function photographerFactory(data) {
  const { name, city, country, id, price, tagline, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    article.setAttribute("data-id", id);

    // Ajout de la photo et du Nom du photographe
    const picAndNameContainerPhotographer = document.createElement("div");
    picAndNameContainerPhotographer.classList.add(
      "picAndNameContainerPhotographer"
    );
    article.appendChild(picAndNameContainerPhotographer);

    const picPhotographer = document.createElement("img");
    picPhotographer.setAttribute("src", picture);
    picPhotographer.setAttribute("alt", "Photo de profile de : " + name);
    picPhotographer.classList.add("picPhotographer");
    picAndNameContainerPhotographer.appendChild(picPhotographer);

    const nameContainerPhotographer = document.createElement("div");
    nameContainerPhotographer.classList.add("NameContainerPhotographer");
    picPhotographer.appendChild(nameContainerPhotographer);
    const namePhotographer = document.createElement("h2");
    namePhotographer.classList.add("namePhotographer");
    namePhotographer.innerHTML = name;
    picAndNameContainerPhotographer.appendChild(namePhotographer);

    // Ajout de la Ville du Tagline et du prix
    const infoContainerPhotographer = document.createElement("div");
    infoContainerPhotographer.classList.add("infoContainerPhotographer");
    article.appendChild(infoContainerPhotographer);

    const originePhotographer = document.createElement("p");
    originePhotographer.classList.add("originePhotographer");
    originePhotographer.innerHTML = city + ", " + country;
    infoContainerPhotographer.appendChild(originePhotographer);

    const taglinePhotographer = document.createElement("p");
    taglinePhotographer.classList.add("taglinePhotographer");
    taglinePhotographer.innerHTML = tagline;
    infoContainerPhotographer.appendChild(taglinePhotographer);

    const pricePhotographer = document.createElement("p");
    pricePhotographer.classList.add("pricePhotographer");
    pricePhotographer.innerHTML = price + "€/jour";
    infoContainerPhotographer.appendChild(pricePhotographer);

    return article;
  }
  return { name, picture, getUserCardDOM };
}
