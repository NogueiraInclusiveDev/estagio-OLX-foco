//Operadores de comparação servem para comparar os valores e retornando um booleano(true e false).
//Os operadores de comparação são: ==,!=,<,>,<=,>=,=== e !==.

//Operador de igualdade ==,!=
//Operador de igualdade == comparava dois valores e retorna true se eles foram iguais.

console.log(21 == 21);
console.log ( 120 == 100 );

//Operadores conseguem fazer a comparação,mesmo que os valores sejam os tipos diferentes
console.log( "20" == 20 );
console.log(true == 1); 

//Operador de igualdade e desigualdade estrita 
//Operador de igualdade estrita ou === assim como operador de igualdade  == vai comprar se dois  valores sao iguais . A diferença entre os dois é  que o operador === nao faz conversao de tipo oiu seja  ele vai comprar  se os dois  valores sao iguais  tanto em valor  quanto em tipo.

"21" === 21 //falso por tipagem diferente
1 === true //falso

//O mesmo vale pra desigualdade estrita(!==)
"21" !== 21 // verdadeiro
1 !== true //verdadeiro
