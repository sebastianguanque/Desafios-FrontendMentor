const inputEmail = document.getElementById("email");
const button = document.getElementById("button");
const error = document.getElementById("error");

button.addEventListener("click", () => {
  validarEmail(inputEmail.value);
});

function validarEmail(email) {
  let regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (regExp.test(email)) {
    inputEmail.style.border = "1px solid hsl(223, 87%, 63%)";
    error.style.visibility = "hidden";
    inputEmail.value = "";
  } else {
    inputEmail.style.border = "1px solid red";
    error.style.visibility = "visible";
  }
}
