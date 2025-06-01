//escreva um programa executando os seguintes passos

const primeiraVariavel = 2148;
let segundaVariavel;

console.log(`O valor da primeira variável é ${primeiraVariavel}`);

segundaVariavel = 25;

console.log(`Minha segunda variável vale ${segundaVariavel} e o valor da soma das variáveis é: ${primeiraVariavel + segundaVariavel}`);

console.log("A segunda variável elevada ao quadrado é: "+ segundaVariavel ** 2);

console.log("A segunda variável após elevar ao quadrado e dividir por 3  é : ", (segundaVariavel ** 2)/3);

const boolean1 = true;
const boolean2 = false;

console.log(`Operação AND entre as duas variáveis: ${boolean1&&boolean2}`);
console.log(`Operação OR entre as duas variáveis: ${boolean1||boolean2}`);

const boolean3 = false;
console.log(`Operação entre três variáveis: ${boolean1||boolean2||boolean3}`);
console.log(`Operação entre três variáveis: ${boolean1||boolean2&&boolean3}`);
console.log(`Operação entre três variáveis: ${boolean1&&boolean2&&boolean3}`);
