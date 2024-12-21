function check_row_numbers(){
    let A = parseFloat((document.getElementById('A').value));
    let B = parseFloat((document.getElementById('B').value));
    let C = parseFloat((document.getElementById('C').value));
    if (A < B && B < C || A > B && B > C){
        A = A*2;
        B = B*2;
        C = C*2;
        document.getElementById('result2').innerText = `A:${A}, B:${B}, C:${C}`;
    } else{
        A = A - A*2;
        B = B - B*2;
        C = C - C*2;
        document.getElementById('result2').innerText = `C:${C}, B:${B}, A:${A}`;
    }
}