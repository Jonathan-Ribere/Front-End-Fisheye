//displayName affiche le nom du photographe dans un élément HTML spécifié
function displayName(photographer) {
  const nomPhotographer = document.querySelector("#nomPhotographer");
  nomPhotographer.innerHTML = `${photographer.name}`;
}

//Récupération des éléments
const form = document.querySelector("#form");

// Ecouter les modfi sur l'input
form.prenom.addEventListener("change", function () {
  validPrenom(this);
});

form.nom.addEventListener("change", function () {
  validPrenom(this);
});

form.email.addEventListener("change", function () {
  validEmail(this);
});

// Ecouter la soumission du formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    validPrenom(form.prenom) &&
    validPrenom(form.nom) &&
    validEmail(form.email)
  ) {
    getValue(); // appel de la fonction getValue() ici
  }
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
    return true;
  } else {
    small.innerHTML = "Champs Invalide";
    small.classList.remove("success");
    small.classList.add("error");
    return false;
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
    return true;
  } else {
    small.innerHTML = "Email Invalide";
    small.classList.remove("success");
    small.classList.add("error");
    return false;
  }
};

function getValue() {
  // Sélectionner l'élément input et récupérer sa valeur
  var input = document.getElementById("nom").value;
  var inpu1 = document.getElementById("prenom").value;
  var input2 = document.getElementById("email").value;

  // Afficher la valeur
  console.log(input, inpu1, input2);
}
