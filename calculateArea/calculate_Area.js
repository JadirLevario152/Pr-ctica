let lenght;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
   
    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

let val1;
let val2;
let val3;

function calculateMont() {
    val1 = parseFloat(document.getElementById('grocery1').value);
    val2 = parseFloat(document.getElementById('grocery2').value);
    val3 = parseFloat(document.getElementById('grocery3').value);
   
    let total = val1 + val2 + val3;
    document.getElementById('resultMont').innerText = `El monto total es: ${total}`;
}
