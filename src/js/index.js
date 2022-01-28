//accessing elements
const input = document.querySelector(".calc__input");
const result = document.querySelector(".calc__result");
const btnPlus = document.getElementById("btn-plus");
const btnMinus = document.getElementById("btn-minus");
const btnTimes = document.getElementById("btn-times");
const btnDivide = document.getElementById("btn-divide");
const btnClear = document.getElementById("btn-clear");
const btnEquals = document.getElementById("btn-equals");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const btnComma = document.getElementById("btn-comma");
const btn0 = document.getElementById("btn-0");

let arrayOfNumberButtons = [
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
  btn6,
  btn7,
  btn8,
  btn9,
  btnComma,
  btn0,
];

let lastOperation = null;
let lastValue = null;

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

arrayOfNumberButtons.forEach((element) => {
  element.addEventListener("click", () => {
    let value = null;
    if (element.innerText !== ",") {
      value = element.innerText;
    } else {
      value = ".";
    }
    input.value += value;
  });
});

//function that does summing
const summingFunction = () => {
  let inputValue = Number(input.value);
  const resultValue = Number(result.innerText);
  if (inputValue == false) {
    inputValue = lastValue;
  }

  const sum = inputValue + resultValue;
  result.innerText = sum;
  input.value = "";
  lastValue = inputValue;
};

//function that does subtraction
const subtractionFunction = () => {
  let inputValue = Number(input.value);
  const resultValue = Number(result.innerText);
  if (inputValue == false) {
    inputValue = lastValue;
  }
  const difference = resultValue - inputValue;
  result.innerText = difference;
  input.value = "";
  lastValue = inputValue;
};

//fucntion that does multiplication
const multiplicationFunction = () => {
  let inputValue = Number(input.value);
  const resultValue = Number(result.innerText);
  if (inputValue == false) {
    inputValue = lastValue;
  }
  const product = Math.round(resultValue * inputValue * 1000) / 1000;
  result.innerText = product;
  input.value = "";
  lastValue = inputValue;
};

//fucntion that does division
const divisionFunction = () => {
  let inputValue = Number(input.value);
  const resultValue = Number(result.innerText);
  if (inputValue == false) {
    inputValue = lastValue;
  }
  const quotient = Math.round((resultValue / inputValue) * 1000) / 1000;
  result.innerText = quotient;
  input.value = "";
  lastValue = inputValue;
};

//function that clears the input and answer and sets them to 0
const clearingFunction = () => {
  input.value = "";
  result.innerText = 0;
};
