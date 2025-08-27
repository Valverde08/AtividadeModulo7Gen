const lerValor = require("readline-sync")

let lista = [2,5,1,3,4,9,7,8,10,6]

let numero = lerValor.questionInt("Insira um valor e veja se está no array e em qual posição:")



for (let index = 0; index < lista.length; index++) {
        
    if(numero == lista[index]) return console.log(`Número ${numero} encontrdo na posição ${index}`);
       

}

console.log(`Número ${numero} não foi encontrado`);
