async function getPhotographers() {
  fetch("/data/photographers.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let authors = data.photographers;
      console.log(authors);
      authors.map(function (author) {
        let name = document.createElement("h2");
        let city = document.createElement("h3");

        name.innerHTML = `${author.name}`;
        console.log(name.innerHTML);

        city.innerHTML = `${author.city}`;
        console.log(city.innerHTML);
      });
    });

  // Penser à remplacer par les données récupérées dans le json
  const photographers = [
    {
      name: "Ma data test",
      id: 1,
      city: "Paris",
      country: "France",
      tagline: "Ceci est ma data test",
      price: 400,
      portrait: "account.png",
    },
    {
      name: "Autre data test",
      id: 2,
      city: "Londres",
      country: "UK",
      tagline: "Ceci est ma data test 2",
      price: 500,
      portrait: "account.png",
    },
  ];
  // et bien retourner le tableau photographers seulement une fois
  return {
    photographers: [...photographers, ...photographers, ...photographers],
  };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
