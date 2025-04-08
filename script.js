function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
    document.getElementById("history-list").innerHTML = "";
}

function calculate() {
    try {
        let display = document.getElementById("display").value;
        let result = eval(display);
        let historyList = document.getElementById("history-list");
        let historyItem = document.createElement("li");
        historyItem.textContent = `${
            document.getElementById("display").value
        } = ${result}`;
        historyList.insertBefore(historyItem, historyList.firstChild);

        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "error";
    }
}

function backspace() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function squareroot() {
    try {
        var display = document.getElementById("display");
        display.value = Math.sqrt(display.value);
    } catch (error) {
        display.value = "error";
    }
}

function square() {
    try {
        var display = document.getElementById("display");
        display.value = display.value * display.value;
    } catch (error) {
        display.value = "error";
    }
}