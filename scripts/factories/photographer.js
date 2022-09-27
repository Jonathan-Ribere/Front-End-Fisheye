function photographerFactory(data) {
  const { name, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.innerText = article.appendChild(img);
    article.appendChild(h2);

    fetch("/data/photographers.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let fiche = data.photographers[3];
        article.innerText = fiche.name;
        // const name = data.photographers[0].name;
        console.log(fiche);
      })
      /*.then(function (data) {
    let authors = data.photographers;
    console.log(authors);
    return authors.map(function (authors) {});
  })*/
      .catch((error) => {
        console.log(error);
      });
    return article;
  }
  return { name, picture, getUserCardDOM };
}
