/*leeftijd = 19

const age = function (leeftijd) {
    
    if (leeftijd >= 18){
        console.log ("true");
    } else {
        console.log("false");
    }
};
  
age();

const theAge = function age() {

    if (age = "true"){
        console.log ("Hello there");
    } else {
        console.log ("Hey kiddo");
    }
};

theAge();*/

basePrice = 200
vat = 1.21
totalPrice = 242

//Function declaration

function inclVAT(basePrice, vat) {
    console.log("total price (=baseprice * vat)")
    return basePrice * vat;
}

function amtVAT(totalPrice, vat) {
    console.log("Totale hoeveelheid VAT (= totprice - totprice / vat)")
    return totalPrice-totalPrice / vat;
}

function add3(totalPrice, result2){
    console.log("base price met alleen vat en totaalprijs")
    return totalPrice - result2;
}



const result1 = inclVAT(basePrice, vat);
console.log(result1);

const result2 = amtVAT(totalPrice, vat);
console.log(result2);

const result3 = add3(result1, result2);
console.log(result3)
