/** Funções
 *  Variaveis globais e locais
 *  Escopo
 *  Programação estruturada
 *  Programação orientada a objetos
 */
const teclado = require('prompt-sync')({sigint:true});

function MinhaFuncao(array,valor) {
    let flag = true;
    console.log(array);
    console.log(valor);
    return flag;
}
let Flag = false;
let Nome = teclado("Digite seu nome: ");
let Numero = teclado("Digite seu telefone: ");

Flag = MinhaFuncao(Nome, Numero);
console.log(Flag);
