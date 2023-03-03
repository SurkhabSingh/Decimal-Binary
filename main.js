var decimalInput = document.querySelector("#number"); 
var display = document.querySelector("#binary");

function makeBinary(n) {
  let output = '';
  if (n != 0) {
    let dividend = n;
    while (dividend != 0) {
      output = (dividend % 2) + output;
      dividend = Math.floor(dividend/2);
    }
  } else { output = "0";}
  return output;
}

function updateDisplay () {
  display.textContent = makeBinary(Math.abs(decimalInput.value));
}


decimalInput.addEventListener("change", updateDisplay);
decimalInput.addEventListener("click", updateDisplay);
