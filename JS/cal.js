var num1=document.getElementById("num1");
var num2=document.getElementById("num2");
var resultField=document.getElementById("resultField");
var formCalculator=document.getElementById("formCalculator");

formCalculator.addEventListener('submit', function(event){
    let result= num1.value/num2.value;

    resultField.innerText= result*100 + '%' ;
    event.preventDefault();
})
