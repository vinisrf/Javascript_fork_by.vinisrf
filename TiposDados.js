const teclado = require('prompt-sync')({sigint:true});
/**Tipos primitivos 
 * String - cadeia de caracteres
*/
let Nome = "Diego";
var Mensagem = "ola, pessoas";

/**Tipo number
 * Os números são usados para representar valores numéricos. Isso pode ser um número inteiro ou um número de ponto flutuante.
 */
let Numero = 990512343;
var altura = 1.72;
console.log(Numero, altura);
/**Tipo booleano 
 * Os valores booleanos representam verdadeiro ou falso e são usados em lógica condicional
*/
let buleano = true;
console.log(buleano);
/** Tipo indefinido e NULL 
 * Undefined representa uma variável que foi declarada, mas não foi inicializada. Null é usado para representar a ausência de valor
*/
var valorNaoInicializado;
var valorNulo = null;
console.log(valorNaoInicializado, valorNulo);
/**Tipo symbol
 * Símbolos são valores únicos e imutáveis, frequentemente usados como chaves de propriedades em objetos
 */
var simbolo1 = Symbol('chave');
var simbolo2 = Symbol('chave');
console.log(simbolo1, simbolo2);
/**Tipos de referência
 * Objeto
 * Os objetos são estruturas de dados complexas que podem conter várias propriedades e métodos
 */
var pessoa = {
    nome: "Maria",
    idade: 25,
    cidade: "Lisboa"
};
console.log(pessoa.nome, pessoa.idade, pessoa.cidade);
/**Tipo Arrays
 *  são objetos especiais que permitem armazenar vários valores em uma única variável */
var frutas = ["maçã", "banana", "laranja"];
var numeros = [1, 2, 3, 4, 5];
console.log(frutas);
console.log(numeros);
/** Funções
 * As funções são blocos de código reutilizáveis que podem ser chamados para executar tarefas específicas.
 */
function somar(a, b) {
    return a + b;
}
/**Tipagem dinamica
 * significa que você não precisa declarar explicitamente o tipo de uma variável
 */
var variavel = "Isso é uma string";
variavel = 42; // Agora é um número

/** Conversao de tipos */
var numero = 42;
var texto = String(numero); // Converte para string
var valor = "3.14";
var numeroDecimal = parseFloat(valor); // Converte para número de ponto flutuante