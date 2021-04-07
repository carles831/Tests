var form = document.getElementById('usersForm');
var fieldBasePrice = document.getElementById('fieldBasePrice');
var fieldPaymentsAmount = document.getElementById('fieldPaymentsAmount');
var fieldTaxes = document.getElementById('fieldTaxes');

var resultField = document.getElementById('resultField');

var checkUser = function(){
  if(!fieldBasePrice.value){
    alert("Rellena el formulario");
  }else{

    var basePrice = parseFloat(fieldBasePrice.value).;
    var paymentsAmount = parseFloat(fieldPaymentsAmount.value);
    var taxes = parseFloat(fieldTaxes.value);

    var monthlyPayment = basePrice/paymentsAmount;

    var result =  (monthlyPayment - ((monthlyPayment*taxes)/100))toFixed(2);


    resultField.innerText="Tu salario neto aproximado es de: " +result +"€";
    event.preventDefault();
  }
}


form.addEventListener('submit', checkUser);
