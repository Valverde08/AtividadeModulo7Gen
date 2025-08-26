var lerValor = require("readline-sync")

let num1 = lerValor.questionInt("Digite o primerio número:")

let num2 = lerValor.questionInt("Digite o segundo número:")


if(num1 > num2){
    console.log("É necessário que o primerio número seja menor que o primeiro!!\n Intervalo Inválido");
    
} else{
    for (num1; num1 <= num2; num1++){
        if(num1 % 3 === 0 && num1 % 5 === 0){
            console.log(`${num1} é multiplo de 3 e 5`);
            
        }
    }
}

