const defaultResult = 0;
let currentResult = defaultResult;
const logEntreis = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calculationDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calculationDescription);
}

function writeToLog(
  operationIdentifer,
  previousResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifer,
    previousResult: previousResult,
    Nnumber: operationNumber,
    result: newResult,
  };

  logEntreis.push(logEntry);
  console.log(logEntreis);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserInput();
  const intialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  createAndWriteOutput(mathOperator, intialResult, enteredNumber);
  writeToLog(calculationType, intialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
}

function subtraction() {
  calculateResult('SUBTRACT');
}

function multiplication() {
  calculateResult('MULTIPLY');
}

function division() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtraction);
multiplyBtn.addEventListener('click', multiplication);
divideBtn.addEventListener('click', division);
