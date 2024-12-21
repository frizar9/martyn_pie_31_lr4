function print_array(){
	let min = Infinity;
	let max = - Infinity;
	let min_index = null;
	let max_index = null;
	let input_numbers = document.getElementById('numbers').value;
    let numbers = input_numbers.split(',').map(Number);
	for (let i = 0; i < numbers.length; i++){
		if (numbers[i] < min) { 
			min = numbers[i];
			min_index = i;	
		}
		if (numbers[i] > max) {
			max = numbers[i];
			max_index = i;	
		}
	}
	let startIndex = min_index + 1;
	let endIndex = max_index - 1;
	let i = startIndex; 
	  while (i <= endIndex && i < numbers.length) {
	    numbers[i] = 0;
	    i++;
	  } 
	document.getElementById('result2').innerText = `${numbers}`;
}