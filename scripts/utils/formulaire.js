/*const formH2 = document.querySelector("#formH2");
console.log(formH2);
let nomPhotographe = document.createElement("p");
nomPhotographe.classList.add("nomPhotographe");
formH2.appendChild(nomPhotographe);
nomPhotographe.innerHTML = data.name;*/

// La récupération des éléments
const form = document.querySelector("#form");

// Ecouter les modfi
form.prenom.addEventListener("change", function () {
  validPrenom(this);
});

const validPrenom = function (inputPrenom) {
  // Création de la reg exp pour valid le prénom
  let prenomRegexp = new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");

  // On teste l'expression reguliere
  let testPrenom = prenomRegexp.test(inputPrenom.value);
  let small = inputPrenom.nextElementSibling;

  if (testPrenom) {
    small.innerHTML = "Prénom valide";
    small.classList.remove("error");
    small.classList.add("success");
  } else {
    small.innerHTML = "Prénom Invalide";
    small.classList.remove("success");
    small.classList.add("error");
  }
};
