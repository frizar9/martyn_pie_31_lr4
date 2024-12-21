function find_avarage(){
    let input_array = document.getElementById('array').value;
    let array = input_array.split(',').map(Number);
    let K = parseFloat(document.getElementById("K").value);
    let L = parseFloat(document.getElementById("L").value);
    let i = K;
    let sum = 0
    let count = 0
    let result = 0
	for (i; i <= L ;i++){
		sum += array[i];
		count++;
        result = sum / count
	}
	document.getElementById('result1').innerText = `${result}`;
}