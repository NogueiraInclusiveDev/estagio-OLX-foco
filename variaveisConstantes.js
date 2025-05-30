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
  