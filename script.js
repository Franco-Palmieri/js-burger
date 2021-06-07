var calculateSum = document.getElementById("calcola");
var total = document.getElementById("result");


calculateSum.addEventListener('click', function(){
    var resultInt = 0 ;
    var checkPrice = document.getElementsByClassName('sum-check');
    
    for(i = 0; i < checkPrice.length; i++){
        if(checkPrice[i].checked){
            resultInt += parseInt(checkPrice[i].value)
        }
    }
    total.innerHTML = resultInt + "$";
});





