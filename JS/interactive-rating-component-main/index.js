const submit = document.querySelector(".submit");
const thankState = document.querySelector(".thank-state");

const resultStart = document.querySelector(".result-start");

const numberButton = document.querySelectorAll(".number-button");
const numbers = Array.from(numberButton);

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    let num = e.target.innerText;

    console.log(num);

    submit.disabled = document.activeElement !== number;

    if (!submit.disabled) {
      submit.classList.add("active");
    } else {
      submit.classList.remove("active");
    }

    submit.addEventListener("click", () => {
      thankState.style.display = "flex";
      resultStart.innerText = num;
    });
  });
});

document.addEventListener("click", (event) => {
  if (!numbers.some((number) => number.contains(event.target))) {
    submit.disabled = true;
    submit.classList.remove("active");
  }
});
