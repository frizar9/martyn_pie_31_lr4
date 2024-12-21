function swapDigits() {
    let input = document.getElementById("threeDigitNumber").value;
    let strNum = String(input);
    let hundreds = strNum[0];
    let tens = strNum[1];
    let units = strNum[2];
    let result = Number(hundreds + units + tens);
    document.getElementById("result2").innerText = `Ответ: ${result}`;
}