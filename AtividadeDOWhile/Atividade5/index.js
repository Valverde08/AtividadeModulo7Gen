const lerValor = require("readline-sync")


let numero 
let total = 0

do {
    
    numero = lerValor.questionFloat("Digite um número para ser somado:");

    if(numero>0)total+=numero
    
    
    
    
} while (numero != 0 );

console.log(`A soma dos números positivos é: ${total}`);

