const fromNumberElement = document.querySelector("#from-number");
const toNumberElement = document.querySelector("#to-number");

const form = document.querySelector(".form");
const divResult = document.querySelector(".result");
const buttonSubmit = document.querySelector(".btn-sub");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fromNumber = Number(fromNumberElement.value);
  const toNumber = Number(toNumberElement.value);

  const numberSorted = sortRandomNumber(fromNumber, toNumber);

  let seconds = 3;

  toogleDisableElements();
  divResult.innerHTML = `Sorteando em 4`;

  const sortTimer = setInterval(() => {
    divResult.innerHTML = `Sorteando em ${seconds}`;
    seconds -= 1;

    if (seconds === -1) {
      clearInterval(sortTimer);
      divResult.innerHTML = `O número sorteado foi: <br /> <strong class="text-8xl">??</strong>`;

      setTimeout(() => {
        divResult.innerHTML = `O número sorteado foi: <br /> <strong class="text-8xl">${numberSorted}</strong>`;
        toogleDisableElements();
      }, 1500);
    }
  }, 1000);
});

function sortRandomNumber(from, to) {
  if (from === to) return from;
  else if (from > to) {
    return Math.floor(Math.random() * (from - to + 1)) + to;
  }
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

function toogleDisableElements() {
  buttonSubmit.disabled = !buttonSubmit.disabled;
  fromNumberElement.disabled = !fromNumberElement.disabled;
  toNumberElement.disabled = !toNumberElement.disabled;
}
