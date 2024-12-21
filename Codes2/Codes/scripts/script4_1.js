function print_array() {
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  let b = parseFloat(document.getElementById('B').value)
  let result = [];
  let b_in_arr = false; // флаг для определения что b было вставлено

    for (let i = 0; i < numbers.length; i++) {
      if (b_in_arr == false && numbers[i] > b) {
        result.push(b);
        result.push(numbers[i])
        b_in_arr = true;
      }
      else{
        result.push(numbers[i]);
      }
    }
    if (b_in_arr == false){
      result.push(b);
    }
  document.getElementById('result1').innerText = `${result}`
}