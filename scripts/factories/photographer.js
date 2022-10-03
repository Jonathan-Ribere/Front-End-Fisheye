function photographerFactory(data) {
  const { name, portrait, city } = data;
  console.log(data);
  const picture = `assets/photographers/${portrait}`;

  function display() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = data.name;
    const txt = document.createElement("p");
    txt.textContent = city;
    article.appendChild(img);
    article.appendChild(h2);

    h2.innerHTML = name;
    txt.innerHTML = city;

    return article;
  }
  return { name, picture, city, display };
}
