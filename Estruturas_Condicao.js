/*  Ajusta o prompt para ler dados do  teclado 
    É necessário também instalar pelo gerenciador de pacotes "npm install prompt-sync"
    no diretório do arquivo com terminal bash 
*/
const teclado = require('prompt-sync')({sigint:true});
/** Cast para float pro script tratar numeros com virgula
 * também cria duas variaveis e pega os dados pelo teclado
 */
let num1 = parseFloat(teclado("digite a nota 1: "));
let num2 = parseFloat(teclado("Digite a nota 2: "));
/** Executa as operações matemáticas
 * 
 */
let resultado = (num1 + num2) / 2;

/** Tomada de decisões no código */
if(resultado >= 7.0)
{
    /** Se o aluno estiver aprovado da um bonus de 1 ponto */
    resultado++;
    console.log("Aprovado");
    console.log(resultado);
}
else if(resultado == 0){
    /** se aluno tiro zero e pq não estudo */
    console.log("Você não estudou");
}
else{
    /** se o aluno esta reprovado pode inserir a recuperação */
    console.log("Reprovado");
    console.log(resultado);
    console.log("Insira a nota da recuperação: ");
    /** Um aluno para ser aprovado pela recuperação precisa ter tirado no
     * minimo 4 nas promeiras provas
     */
    if(num1 > 4 && num2 > 4){
        let Recuperacao = parseFloat(teclado("digite a nota da recuperação: "));
        resultado = Recuperacao;
        /**Se o aluno tirou nota superior a 7 na recuperacao */
        if(Recuperacao >= 7){
            console.log("Aprovado");
            console.log(resultado);
        }
    }else{
        console.log("O aluno não atingiu");
    }
}
/* OUTRO EXEMPLO COM OPERADOR TERNARIO 
    var idade,eleitor;
    idade = 25;
    eleitor = (idade < 18) ? "Não é eleitor" : "Sim é eleitor";
    console.log(eleitor);
*/
