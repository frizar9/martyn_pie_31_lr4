function check(){
    let number = parseFloat(document.getElementById('number').value)
    if ((String(number).length === 3) && (number % 2 === 0)){
        document.getElementById('result1').innerText = `${'True'}`;
    } else {
        document.getElementById('result1').innerText = `${'False'}`; 
    }  
}