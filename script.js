
let CurrentVal = "";

function append(char) {
  CurrentVal += char;
  document.querySelector('#display').value = CurrentVal;
}

function clearDisplay() {
  CurrentVal = "";
  document.querySelector('#display').value = "";
}

function calculate() {
  try {
    const result = eval(CurrentVal);
    document.querySelector('#display').value = result;
    CurrentVal = result.toString();
  } catch {
    document.querySelector('#display').value = "Error";
    CurrentVal = "";
  }
}
