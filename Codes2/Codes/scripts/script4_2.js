function pow_number(){
    let A = parseFloat(document.getElementById('A').value)
    let N = parseFloat(document.getElementById('N').value)
    let output = ""; // строка для вывода каждой степени числа до N
    for (let i = 1; i<= N;i++){
        let result = Math.pow(A,i);
        output += `${A}^${i} = ${result};`;
        document.getElementById("result2").innerText =`${output}`
    }
}