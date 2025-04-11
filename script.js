function appendToDisplay(innerText) {
  document.getElementById("display").innerText += innerText;
}

function clearDisplay() {
  document.getElementById("display").innerText = "";
  document.getElementById("history-list").innerHTML = "";
}

function calculate() {
  try {
    let display = document.getElementById("display").innerText;
    let result = eval(display);
    let historyList = document.getElementById("history-list");
    let historyItem = document.createElement("li");
    historyItem.textContent = `${
      document.getElementById("display").innerText
    } = ${result}`;
    historyList.insertBefore(historyItem, historyList.firstChild);

    document.getElementById("display").innerText = result;
  } catch (error) {
    document.getElementById("display").innerText = "error";
  }
}

function backspace() {
  var display = document.getElementById("display");
  display.innerText = display.innerText.slice(0, -1);
}

function squareroot() {
  try {
    var display = document.getElementById("display");
    display.innerText = Math.sqrt(display.innerText);
  } catch (error) {
    display.innerText = "error";
  }
}

function square() {
  try {
    var display = document.getElementById("display");
    display.innerText = display.innerText * display.innerText;
  } catch (error) {
    display.innerText = "error";
  }
}
