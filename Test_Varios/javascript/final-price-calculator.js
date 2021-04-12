var basePrice = 214;
var taxes = 21;
var discount = 35;
var currency = "$"

function netPrice(basePrice, taxes, discount){
    return basePrice + (basePrice*taxes)/100-discount;
}

var finalPrice = netPrice(basePrice,taxes,discount);
console.log("Our product with a base price of "+ basePrice + currency +" has a Tax of " + taxes + "% " + " with a discount of " + discount + currency + ". The final price is: " + finalPrice + currency);
