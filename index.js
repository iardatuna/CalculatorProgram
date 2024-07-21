
const displayElement = document.getElementById("display");

function AppendToDisplay(inputValue) {
    displayElement.value += inputValue;
}
function Calculate() {
    try {
        displayElement.value = eval(displayElement.value);
    }
    catch {
        displayElement.value = "NaN";
    }
}
function Clear() {
    displayElement.value = "";
}