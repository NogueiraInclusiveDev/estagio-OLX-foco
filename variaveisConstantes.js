// 1º questão

const valor1 = !(true || false);
const valor2 = !(true && false);
const valor3 = false && true && true;
console.log("O resultado do  valor 1 é: " + valor1, " O valor 2 é: " + valor2, " O valor 3 é: " + valor3);

//questão 2

const restaurante = "Comida boa";
var tipoDeComida = "Brasileira";
var aberto = false;

console.log("Eu quero comer no restaurante. " + restaurante + " o tipo de comida que mais gosto é a comida " + tipoDeComida + " eu estou ligando pra saber se está aberto  " + aberto);

// 3º questão

var numero_1 = 10;
var numero_2 = 8;

var soma = numero_1 + numero_2;
var subtracao = numero_1 - numero_2;

console.log(" A soma entre os números é " + soma);
console.log(" A subtração entre os números é " + subtracao);


//Questão 4

var numeros_1 = 2;
var numeros_2 = 3;
var numeros_3 = 1;

var resultado = (numeros_1 > numeros_2) && (numeros_1 > numeros_3);
console.log("O resultado da questão é: " + resultado);

//5º Questão
var materia = null;
console.log("Comparação solicitada é: ", materia == null);

//6º Questão 

var salario = 2000;
var bonus = 500;
var salario_total = 2500;

console.log("O salario total é de ", salario_total + " reais ");

// 7º Questão
var graus_celsius = 15;

var graus_fahrenheit = (graus_celsius * 9 / 5)+ 32;

console.log(
  graus_celsius
  + "°C equivalem a " +
  graus_fahrenheit
  + "°F");
  

  //8º Questão 
var idade = 18;
var atendeAClassificacaoEtaria = (idade >= 18);
console.log("Ele atende a classificação etária: ",atendeAClassificacaoEtaria);

// 9º Questão

var numero_5 = 4;
var numero_6 = 7;

numero_5 += 1;
numero_6 -= 1;

console.log(numero_5);
console.log(numero_6);

//10º Questão

var preco = 10;
var desconto = 0.1;

var novo_preco = preco -  ( ( preco / desconto ) / 100 );
console.log(novo_preco)
;


//11º Questão 
var nome = "Caio";
var sobrenome = "Teixeira";

var nome_completo = (nome + " " + sobrenome)
;

console.log("Nome completo: " + 
nome_completo
);

//12ºQuestão

var maior_de_idade = true;
var habilitado = false;
console.log(maior_de_idade);
console.log(habilitado);


//13ºQuestão

var numero = 10;
numero = numero++;
console.log(numero);

//14ºQuestão
var forca
; // N
var massa = 2
; // kg
var aceleracao = 6
; // m/s²

var forca = massa * aceleracao
;

console.log
("O valor da força é de " + forca + "N");

//15ºQuestão
var nota_1 = 10;
var nota_2 = 8;
var nota_3 = 7;
var nota_4 = 5;

var media = (nota_1 + nota_2 + nota_3 + nota_4) / 4;

console.log
("Média: " + media);

//16ºQuestão
var posicao_inicial = 5; // m
var posicao_final = 23; // m

var tempo = 6; // s

var deslocamento = posicao_final - posicao_inicial;

var velocidade_media = deslocamento / tempo;

console.log("A velocidade média foi de " + velocidade_media + "m/s");

//17ºQuestão

var nome = "João";

nome =  nome + " Pedro";

console.log(nome);





//18ºQuestão
//19ºQuestão
//20ºQuestão
//21ºQuestão
