var lerValor = require("readline-sync")

let idade = lerValor.questionInt("Digite a idade da pessoa: ")

let menor21 =[]

let maior50 = []

while(idade >= 0){

    
    if(idade<21) menor21.push(idade)
    
    if(idade>50) maior50.push(idade)

    idade =lerValor.questionInt("Qual a próxima idade? ")
    

}

console.log(`Total de pessoas menores de 21 anos: ${menor21.length }`);

console.log(`Total de pessoas maiores de 50 anos: ${maior50.length }`);
