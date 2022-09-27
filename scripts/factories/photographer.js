function photographerFactory(data) {
  const { name, portrait } = data;
  console.log(name);
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    article.appendChild(img);
    article.appendChild(h2);

    h2.innerHTML = name;

    return article;
  }
  return { name, picture, getUserCardDOM };
}
