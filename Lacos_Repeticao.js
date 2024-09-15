const teclado = require('prompt-sync')({sigint:true});
/*
var controle = parseInt(teclado("digite o número: "));
console.log(controle);
switch (controle) {

    case 1:
    console.log("Você digitou o número 1");
    break;

    case 2:
    console.log("Você digitou o número 2");
    break;

    case 3:
    console.log("Você digitou o número 3");
    break;

    default:
    console.log("Você digitou outro número");
    break;
}
*/
let controle = parseInt(teclado("digite o número: "));
/* Enquanto controle for menor que 10 o while retorna verdadeiro e o loop se repete
   quando ele for maior igual ou maior que 10 o while retorna false, dai termina a execução e sai */
/*
while(controle < 10){   // Se while(true) ?
    controle++;
    console.log(controle);
    if(controle < 0)
        break;
}   */
/* Neste laço a primeira execução vai acontecer antes de validar, ou seja sempre vai acontecer */
/*
do{
    controle++;
    console.log(controle);
    if(controle < 0)
        break;
}while(controle <= 10)  */
for(let i=0; i<10; i++){
    console.log(i);
}
