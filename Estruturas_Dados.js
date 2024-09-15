/** Estruturas de dados em js 
 * ARRAYS - vetores(unidimencionais) e matrizes(bidimencionais)
*/
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
 */
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