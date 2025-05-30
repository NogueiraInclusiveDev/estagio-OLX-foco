//1- Por que eu preciso de operadores?

/*
O que são operadores!
Os operadores são simbolos usados para modificar ou até mesmo gerar um novo valor.Na programação , em muitos casos precisamos que um valor seja gerado a partir da análise, combinação ou comparação entre valores e são os operadores que faem isso:
*/

// let atendeClassificacaoEtária = idade >= 18;

/*
No Javascript,a precedência de operadores determina a ordem em que eles são lidos.
*/

//Segue exemplos de adiçao,subtração,multiplicação e divisão.

var quantidadeVagas = 3 + 6;
var contratados = 7 - 2;
var valorContribuicao = 2500* 0.10;
var primeiraParcela = 2500/4;

//Operador modulo é o resto da divisão.
let resto1 = 15  % 3;

//Usar o módulo com número de ponto fluturante requer um pouco mais de atenção.
// Se você fizer uma divisão onde 3/1.2 da o resultado de 2.5 o que pode levar a acreditar que o módulo deveria retornar 0.5. Entao que momento o resto da divisao entre 3%1.2 foi 0.6? 3 dividido por 1.2 -> 3/1.2 = 2, pois 1.2 cabe 2 vezes dentro do número 3.1x1.2 =2.4. Sendo assim , o numero resto da divisão será 0.6 pos 3-2.4 =0.6.

//Este operador pode ser usado para verificar se um numero é par. Para fazer isso basta verificar se o numero dividido por 2 gere um numero inteiro e o resro esteja zerado (0).

let verificarSeEPar = 20 ;
if(verificarSeEPar  % 2 == 0){
  console.log("Esse número  é par.")
}else{
  console.log("Esse número é impar")
};

//Neste exemplo  de cima 20 dividido por 2 da resultado igual a 10 ,que é inteiro com resto 0 , por isso ele é numero par  e a variavel verificaSeEPar é true.

//Juntando string com operador de adição (+)

console.log(" Romulo " + " Nogueira ");

console.log ("5" + "6");

/*
É importante  notar que em ambos os exemplos estamos utilizando tipos iguais as strings texto, e complemento 5 entre as aspas ,e 6 tambem entre as aspas.

Quando a gente usa operador de adição com tipos diferentes, digamos uma string e um number, o operador de adição primeiro coverte os valores para string e depois as une.Vamos ver?
*/
console.log("batata " + 3.99);
console.log("Esse cara é " + true);
console.log("Essa caso ficou " + null);
console.log ("Tem o definido e indefinido mas preciso do " + undefined);
console.log(['um','dois','tres'] + " un pasito pa'lante, María"
);
console.log({nome:'Keity'} + 30);


