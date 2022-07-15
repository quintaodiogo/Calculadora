const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButtons = document.querySelector("[data-equals]");
const deleteButtons = document.querySelector("[data-delete]");
const allClearButtons = document.querySelectorAll("[data-all-clear]");
const previousOperandTextElement = document.querySelectorAll(
  "[data-previous-opereand]"
);
const currentOperandTextElement = document.querySelectorAll(
  "[data-current-opereand]"
);

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }
  clear() {
    this.currentOperand = "";
    this.previousOperan = "";
    this.operation = undefined;
  }
}
