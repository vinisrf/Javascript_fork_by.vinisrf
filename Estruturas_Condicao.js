/*  Ajusta o prompt para ler dados do  teclado 
    É necessário também instalar pelo gerenciador de pacotes "npm install prompt-sync"
    no diretório do arquivo com terminal bash 
*/
const input = require('prompt-sync')({sigint:true});
/** Cast para float pro script tratar numeros com virgula
 * também cria 3 variaveis e pega os dados pelo teclado
 */
let nota1 = parseFloat(input("digite a nota do 1° semestre: "));
let nota2 = parseFloat(input("Digite a nota do 2° semestre: "));
let nota3 = parseFloat(input("Digite a nota do 3° semestre: "));
/** Executa as operações matemáticas
 * 
 */
let resultado = (nota1 + nota2 + nota3) / 3;

/** Tomada de decisões no código */
if(resultado >= 7.0){
    /** Se o aluno estiver aprovado da um bonus de 1 ponto */
    resultado++;
    console.log("média do aluno: " +resultado.toFixed(2)+ " APROVADO!");
}
else if(resultado == 0){
    /** se aluno tiro zero e pq não não está apto a realizar recuperação */
    console.log("REPROVADO! Você não estudou o mínimo, não está apto a realizar recuperação!");
}
else{
    /** se o aluno esta reprovado pode inserir a recuperação */
    console.log("média do aluno: " +resultado.toFixed(2)+" REPROVADO!");

    /** Um aluno para ser apto a realizar a recuperação, precisa ter tirado no
     * entre 4.5 e 5.5 e nas somas das notas dos 3 semestres.
     */
    if(resultado>=4.5 && resultado<=5.5){
        console.log("Aluno apto a realizar a prova de recuperação!")
        let recuperacao = parseFloat(input("digite a nota da recuperação: "));
        
        /** Um aluno para ser aprovado pela recuperação, precisa ter tirado no
        minimo 6 na nota da recuperação.
         */
        if(recuperacao >= 6){
            console.log("média do aluno: " +recuperacao.toFixed(2)+" APROVADO!");
        }
        else{
            console.log("média do aluno: " +recuperacao.toFixed(2)+ " REPRVADO! O aluno não atingiu!");
        }
    }
}

