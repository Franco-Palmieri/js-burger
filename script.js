var calculateSum = document.getElementById("calcola");
var total = document.getElementById("result");
var burgerName = document.getElementById("burger-name")
var nameBurger = prompt("inserisci nome burger");

alert(nameBurger);
burgerName.innerHTML = nameBurger;

calculateSum.addEventListener('click', function(){
    var resultInt = 0 ;
    var checkPrice = document.getElementsByClassName('sum-check');
    
    for(i = 0; i < checkPrice.length; i++){
        if(checkPrice[i].checked){
            resultInt += parseInt(checkPrice[i].value)
        }
    }
    total.innerHTML = resultInt + "$";

    var calcDiscount = resultInt * 20 / 100;
    var totalDiscount = resultInt - calcDiscount;
    var discountCode = document.getElementById("text-area")
    var promoCode = "magnachetepassa";
    var flag = false;
    
    if(discountCode.value.length > 0 && discountCode.value === promoCode){
        total.innerHTML = totalDiscount + "$"
        flag = true;
    }else if (discountCode.value.length > 0){
        alert("Nce provà!");
    }
   
});





