let userInput = document.getElementById('temp');
let c = document.getElementById('celcius');
let f = document.getElementById('fahrenheit');

let convertedTemp = document.getElementById('converted-temp');

let convertBtn = document.getElementById('convert-btn');
convertBtn.addEventListener('click', convert);

function convert() {  
  if (c.checked) {
    return convertedTemp.innerHTML = Math.round((userInput.value*9/5)+32).toFixed(2);
  } else if (f.checked) {
    return convertedTemp.innerHTML = Math.round((userInput.value-32)*5/9).toFixed(2);
  }
}