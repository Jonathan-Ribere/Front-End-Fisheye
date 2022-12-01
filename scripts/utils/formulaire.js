/*const formH2 = document.querySelector("#formH2");
console.log(formH2);
let nomPhotographe = document.createElement("p");
nomPhotographe.classList.add("nomPhotographe");
formH2.appendChild(nomPhotographe);
nomPhotographe.innerHTML = data.name;*/

// La récupération des éléments
const form = document.querySelector("#form");

// Ecouter les modfi sur l'input prénom
form.prenom.addEventListener("change", function () {
  validPrenom(this);
});
// Ecouter les modfi sur l'input Nom
form.nom.addEventListener("change", function () {
  validPrenom(this);
});
// Ecouter les modfi sur l'input Email
form.email.addEventListener("change", function () {
  validEmail(this);
});

//VALIDATION DU PRÉNOM /////
const validPrenom = function (inputPrenom) {
  // Création de la reg exp pour valid le prénom
  let prenomRegexp = new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");

  // Récup de la balise small
  let small = inputPrenom.nextElementSibling;

  // On teste l'expression reguliere
  if (prenomRegexp.test(inputPrenom.value)) {
    small.innerHTML = "Champs valide";
    small.classList.remove("error");
    small.classList.add("success");
  } else {
    small.innerHTML = "Champs Invalide";
    small.classList.remove("success");
    small.classList.add("error");
  }
};

//VALIDATION DE L'EMAIL /////
const validEmail = function (inputEmail) {
  // Création de la reg exp pour valid l'email
  let emailRegexp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );

  // Récup de la balise small
  let small = inputEmail.nextElementSibling;

  // On teste l'expression reguliere
  if (emailRegexp.test(inputEmail.value)) {
    small.innerHTML = "Email valide";
    small.classList.remove("error");
    small.classList.add("success");
  } else {
    small.innerHTML = "Email Invalide";
    small.classList.remove("success");
    small.classList.add("error");
  }
};
