// Incremento e Decremento

/*
Os operadores de incremento ++ e decremento --
São utilizados para adicionar ou subtrair  o valor 1 de uma variável 
*/

var contador = 5
contador++
console.log(contador);

contador --
console.log(contador);

//Perceba que  contador  = contador +1 ou contador += 1 ou contador ++ tem o mesmo efeito em todos os casos o valor em contador será aumentado em 1.

//Ordem das operações de incremento e decremento

let numero = 9;
console.log (++numero);
// o primeiro valor  sera alterado de 9 para 10 e depois ele será impresso.
//pré e pós incremento e decremento .

console.log("O valor contido nessa variável: "+ numero);

let numero1 = 9;
console.log(numero1 ++);
console.log("Valor da variável: " + numero1);



