function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
const registeredClose = document.querySelectorAll("#registered-close-btn");
const displayThanks = document.querySelectorAll("#thanks");
const modalBody = document.querySelectorAll("#modal-body");
const formDisplay = document.querySelectorAll("#registrationForm");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  formDisplay[0].style.display = "block";
}

// close modal form
modalClose.forEach(close => close.addEventListener("click", closeModal));
registeredClose.forEach(close => close.addEventListener("click", closeModal));

function closeModal() {
  modalbg.style.display = "none";
  displayThanks[0].style.display = "none";
}

function thanksForRegistering() {
  let thanksHeight = formDisplay[0].offsetHeight;

  formDisplay[0].style.display = "none";
  displayThanks[0].style.display = "flex";
  displayThanks[0].style.height = thanksHeight + "px";
}

// form recovery
let form = document.querySelector('#registrationForm');

// firstName recovery + validation

function validFirstName() {
    const firstNameValue = document.getElementById("first").value;
    const errorFirstName = document.querySelector("#error-message-first-name");
    
    if(firstNameValue.length < 2) {
      return errorFirstName.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    }
    errorFirstName.textContent = "";
    return true;
};

// lastName recovery + validation

function validLastName() {
    const lastNameValue = document.getElementById("last").value;
    const errorLastName = document.querySelector("#error-message-last-name");

    if(lastNameValue.length < 2) {
      return errorLastName.textContent = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    }
    errorLastName.textContent = "";
    return true;
};

// email RegExp + validation

function validEmail() {
    const email = document.getElementById("email").value;
    const errorEmail = document.querySelector("#error-message-email");
    let emailRegExp = RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
    
    if(emailRegExp.test(email)) {
      errorEmail.textContent = "";
      return true;
    }
    errorEmail.textContent ='Veuillez entrer une adresse email valide.';
};

// birthdate validation

function validBirthdate() {
    const birthdate = document.querySelector("#birthdate").value;
    const errorBirthdate = document.querySelector("#error-message-birthdate");

    if(birthdate === "") {
      return errorBirthdate.textContent = "Veuillez entrer un date.";
    }

    const date = new Date(birthdate);
    const userDateYear = date.getFullYear();

    if(userDateYear < 1922) {
      return errorBirthdate.textContent = "Vous n'êtes pas centenaire.";
    }

    const timestamp = Date.now();
    const dateNow = new Date(timestamp);
    const getNowFullYear = dateNow.getFullYear();

    if (userDateYear > getNowFullYear) {
      return errorBirthdate.textContent = "Vous êtes dans le futur.";
    }
    errorBirthdate.textContent = "";
    return true;
};

// tournament validation

function validQuantity() {
  const quantity = document.querySelector("#quantity").value;
  const errorQuantity = document.querySelector('#error-quantity');

  if(!/^[0-9]+$/.test(quantity)) {
    return errorQuantity.textContent = 'Veuiller rentrer le nombre de tournoi GameOn auquel vous avez participé.';
  }
  errorQuantity.textContent = "";
  return true;
};

// checkbox validation

function validCheckedBox() {
    const errorCheckbox = document.querySelector('#error-location');

    if(document.querySelector('[name=location]:checked')) {
      errorCheckbox.textContent = "";  
      return true;
    }
    errorCheckbox.textContent = 'Veuillez selectionner une ville.';
};

// terms and conditions checked

function validCheckedTerms() {
    const errorTerms = document.querySelector('#error-terms');
    let termsChecked = document.getElementById('checkbox1').checked;
  

    if(termsChecked==false) {
      errorTerms.textContent = "Veuillez accepter les termes et conditions.";
      return false;
    }
      errorTerms.textContent = "";
      return true;
};

// event listener for form submission
form.addEventListener('submit', function(e){
    e.preventDefault();

    const checkValidFirstName = validFirstName();

    const checkValidLastName = validLastName();

    const checkValidEmail = validEmail();

    const checkValidBirthdate = validBirthdate();
    
    const checkedCheckbox = validCheckedBox();

    const checkValidQuantity = validQuantity();

    const checkedTerms = validCheckedTerms();
  
     if(checkValidFirstName === true && checkValidLastName === true && checkValidEmail === true && checkValidBirthdate === true && checkedCheckbox === true && checkValidQuantity === true && checkedTerms)

      thanksForRegistering();   
});


