//ATIVIDADE – 31/01/2024
//Desenvolva uma tabuada que possa realizar o cálculo de qualquer número.
// a. Deverá ser utilizado laços de repetição

let prompt = require('prompt-sync')();

let valor;

valor = parseInt(prompt("Digite o valor da tabuada: "));

while(valor<=0){
    valor = parseInt(prompt(" O valor precisa ser maior que zero!, digite um novo valor. "));
}

for (i=1; i<=10; i++){    
    
    console.log(valor + " x " + i + " = " + i*valor);

}


