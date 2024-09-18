const input = require ('prompt-sync')();
/** Estruturas de dados em js 
 * ARRAYS - vetores(unidimencionais) e matrizes(bidimencionais)
*/

/*
const arr1 = ['a', 'b', 'c', 'd'];
console.log(arr1[2]); // c

const arr2 = ['a', 'b', 'c', 'd'];
console.log(arr2.length); // 4

const arr3 = ['a', 'b', 'c', 'd'];
console.log(arr3); 

const arr4 = ['diego', 1, 'joao', 2, 'telefone', 3.14];
console.log(arr4);

const arr5 = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
console.log(arr5);
arr5[1][1] = true;
console.log(arr5[2][1]);
console.log(arr5);

/**Objetos
 * 
 */ /*
const pessoa = {
    Nome: "Paulo Cesar",
    Telefone: 519901176,
    Tipo: "branco"
}
console.log(pessoa.Nome);
console.log(pessoa.Telefone, pessoa.Tipo);

pessoa.Nome = "Diego";
console.log(pessoa.Nome); 

/** pilhas - filas - arvores binarias */ 

/** MINHA CONTRIBUIÇÃO by. vinisrf
 * Conta Bancaria
 * Em desenvolvimento!!!!!!!!!!!
 */


const contaCC = {
    NumeroConta: null,
    SaldoAtivo: null,
    Credito: null,
    Usuario: undefined,
    Transf: undefined,
    Recebimento: undefined,
}

/** Variaveis globais */

const entrada = parseInt(input("PARA ABRI CONTA DIGITE [1] ou [2] PARA CANCELAR:"));
let abreConta = entrada;

/**--------------------- */

/** Funções */

// função: criar usuário
function criaUser (){
            
    let nomeUser = input("INFORME SEU NOME: ");
    contaCC.Usuario = nomeUser;
    
    return contaCC.Usuario;
 }

// função: para aprovar crédito
function aprovaCredito (){
    let salarioMes = parseFloat(input("INFORME SEU RENDIMENTO MENSAL: "));
    contaCC.Credito = salarioMes * 1.5;
    
    return contaCC.Usuario;
    
}
// função: Após informar nome e renda mensal, o sistema pesrgunta se deseja confirmar e prosseguir ou se deseja editar os dados.
function confirmaDados(){
    let confDados = parseInt (input("PARA CONFIRMAR OS DADOS TECLE [1] PARA MUDAR OS DADO TECLE [2]: "));
    
    if(confDados == 1){
        console.log("CONTA CRIADA! ", "USUARIO: "  + contaCC.Usuario+ " CREDITO DISPONIVEL: " + contaCC.Credito.toFixed(3))
        

    }else if(confDados == 2){
        criaUser();
        aprovaCredito();
        confirmaDados();
    }
}

// Função: Criar nova conta

/**------------------------- */

switch (abreConta){
    
    case 1:
        
        criaUser();
        aprovaCredito();
        confirmaDados();


        break;

    case 2:
        console.log("Operação cancelada")
        
        break;

    default:
        console.log("OPÇÃO INCORRETA!")
     
}