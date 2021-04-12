var numFiled1 = document.getElementById('numField1');
var numFiled2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY');


var calcFunction = function() {
  if(!numField1.value || !numFiled2.value){
    alert("Some fields are empty!");
  } else {
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);
    var result = x / y;
    var percent = result *100;

    resultField.innerText = numField1.value + " is the " + percent + "% of " + numField2.value;
    event.preventDefault();
  }
}


form.addEventListener('submit', calcFunction);
