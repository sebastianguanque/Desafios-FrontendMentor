const firstName = document.getElementById("input-first-name");
const lastName = document.getElementById("input-last-name");
const email = document.getElementById("input-email");
const password = document.getElementById("input-password");

const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

const button = document.getElementById("button");

button.addEventListener("click", () => {
  validate(
    firstName.value,
    firstName,
    firstNameError,
    "First Name cannot be empty"
  );

  validate(
    lastName.value,
    lastName,
    lastNameError,
    "Last Name cannot be empty"
  );

  validate(password.value, password, passwordError, "Password cannot be empty");

  validateEmail(email.value, email, emailError);
});

function validateEmail(valueInput, divInput, divError) {
  let regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (regExp.test(valueInput, divInput, divError)) {
    hideError(divInput, divError);
  } else {
    showError(divInput, divError, "Looks like this is not an email");
  }
}

function validate(valueInput, divInput, divError, nameInput) {
  if (valueInput.length === 0) {
    showError(divInput, divError, nameInput);
  } else {
    hideError(divInput, divError);
  }
}

function showError(divInput, divError, nameInput) {
  divInput.style.border = "1px solid red";
  divError.innerHTML = `<img src="images/icon-error.svg" alt="Icon error" class="error__img">
  <p class="error__paragraph">${nameInput} cannot be empty</p>`;
}

function hideError(divInput, divError) {
  divInput.style.border = "1px solid hsl(246, 25%, 77%)";
  divError.innerHTML = "";
}
