
function calc_system() {
    let y = null;
    let x = parseFloat(document.getElementById('x').value);
    const a = 7.2;
    const b = 3.1;

    if (x < 3) {
        y = (a * x) + (b * Math.pow(x, 2));
        document.getElementById('result3').innerText = `${y}`;
    } else if (3 <= x && x <= 6) {
        y = (Math.pow(Math.E, x)) + (Math.pow(x, 2));
        document.getElementById('result3').innerText = `${y}`;
    } else {
        y = Math.pow(Math.sin(b * x), 2);
        document.getElementById('result3').innerText = `${y}`;
    }
}



// function calc_system(){
//     let number = 9732
//     let a = Math.floor(number/1000)%10
//     let b = Math.floor(number/100)%10
//     let c = Math.floor(number/10)%10
//     let d = Math.floor(number/1)%10
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
// }
