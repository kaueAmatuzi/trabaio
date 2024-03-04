
function initialize() {
    let convertButton = document.getElementById("convert");
    let cleanButton = document.getElementById("clean");

    convertButton.addEventListener("click", convertTemperature);
    cleanButton.addEventListener("click", cleanInput);
}

function convertTemperature() {
    let inputValue = parseFloat(document.getElementById("input_value").value);
    let inputType = document.getElementById("input").value;
    let outputType = document.getElementById("output").value;
    let result = document.getElementById("result");

    if (inputType === "celsius" && outputType === "fahrenheit") {
        result.innerHTML = (inputValue * 9 / 5) + 32;
    } else if (inputType === "fahrenheit" && outputType === "celsius") {
        result.innerHTML = (inputValue - 32) * 5 / 9;
    } else {
        result.innerHTML = "Erro: Conversão não suportada";
    }
}

function cleanInput() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("input_value").value = "";
}

window.onload = initialize;
