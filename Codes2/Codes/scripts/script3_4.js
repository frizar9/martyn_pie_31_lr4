function calc_switch() {
    let y = null;
    let x = parseFloat(document.getElementById('X').value);
    const a = 7.2;
    const b = 3.1;


    switch(x) {
        case 3:
            y = (a * x) + (b * Math.pow(x, 2));
            break;
        case 6:
            y = (Math.pow(Math.E, x)) + (Math.pow(x, 2));
            break;
        case 9:
            y = Math.pow(Math.sin(b * x), 2);
            break;
        default:
            y = "Значение x не соответствует заданным случаям";
    }
    document.getElementById('result4').innerText = `${y}`;
}


