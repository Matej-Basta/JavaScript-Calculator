//accessing elements
const input = document.querySelector(".calc__input");
const result = document.querySelector(".calc__result");
const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const btnTimes = document.getElementById("btn-times");
const btnDivide = document.getElementById("btn-divide");
const btnClear = document.getElementById("btn-clear");
const btnEquals = document.getElementById("btn-equals");

let lastOperation = null;

btnPlus.addEventListener("click", () => {
  summingFunction();
  lastOperation = "plus";
});

btnMinus.addEventListener("click", () => {
  subtractionFunction();
  lastOperation = "minus";
});

btnTimes.addEventListener("click", () => {
  multiplicationFunction();
  lastOperation = "times";
});

btnDivide.addEventListener("click", () => {
  divisionFunction();
  lastOperation = "divide";
});

btnClear.addEventListener("click", () => {
  clearingFunction();
});

btnEquals.addEventListener("click", () => {
  switch (lastOperation) {
    case "plus":
      summingFunction();
      break;
    case "minus":
      subtractionFunction();
      break;
    case "times":
      multiplicationFunction();
      break;

    case "divide":
      divisionFunction();
      break;
  }
});

//function that does summing
const summingFunction = () => {
  const inputValue = Number(input.value);
  const resultValue = Number(result.innerText);
  const sum = inputValue + resultValue;
  result.innerText = sum;
};

//function that does subtraction
const subtractionFunction = () => {
  const inputValue = Number(input.value);
  const resultValue = Number(result.innerText);
  const difference = resultValue - inputValue;
  result.innerText = difference;
};

//fucntion that does multiplication
const multiplicationFunction = () => {
  const inputValue = Number(input.value);
  const resultValue = Number(result.innerText);
  const product = resultValue * inputValue;
  result.innerText = product;
};

//fucntion that does division
const divisionFunction = () => {
  const inputValue = Number(input.value);
  const resultValue = Number(result.innerText);
  const quotient = Math.round((resultValue / inputValue) * 1000) / 1000;
  result.innerText = quotient;
};

//function that clears the input and answer and sets them to 0
const clearingFunction = () => {
  input.value = 0;
  result.innerText = 0;
};
