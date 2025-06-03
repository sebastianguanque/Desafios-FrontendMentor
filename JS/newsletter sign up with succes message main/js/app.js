const inputEmail = document.getElementById("form-input");
const submit = document.getElementById("submit");
const error = document.getElementById("error");
const successButton = document.getElementById("success-button");
const overlay = "with--overlay";

submit.addEventListener("click", () => {
  validarEmail(inputEmail.value);
});
successButton.addEventListener("click", () => {
  document.body.classList.remove(overlay);
});

function validarEmail(email) {
  let regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (regExp.test(email)) {
    inputEmail.style.border = "1px solid hsl(223, 87%, 63%)";
    error.style.visibility = "hidden";
    inputEmail.value = "";
    document.body.classList.add(overlay);
  } else {
    inputEmail.style.border = "1px solid red";
    error.style.visibility = "visible";
  }
}
