/*
Propriedade de objeto
Propriedade é a relação de chave/valor que armazena um dado de um objeto.
Cada propriedade é umma relação entre uma chave e um valor. Abaixo temos a propriedade nome do produto em destaque.
*/
var produto = {
  id: 9,
  nome: "Cafeteira Elétrica",//->Chave: nome e Valor: Cafeteira Elétrica
  valor: 99.99
}
console.log("O id do produto é: " + produto.id);
console.log("Produto: " + produto.nome);
console.log("O valor do produto é: " + produto.valor);

/*
A chave funciona como um identificador da propriedade. Com ela podemos acessar o valor de um dado do produto.O valor é o conteúdo de uma propriedade.Para acessar esse conteúdo precisamos da chave relativa à essa propriedade.

Um objeto literal tem várias propriedades.Objeto tem as propriedades id,nome e valor. 

Propriedades de objeto
  Como acessar propriedades de objeto?
  Para acessar uma propriedade de um objeto devemos utilizar o nome do objeto e a chave da propriedade
*/

var mercadoria = {
  id: 1,
  nome: "Café PilleDriver",
  valor: 45.00
}

console.log("Eu só compro café da marca "+ mercadoria.nome); //Acessando a propriedade nome do objeto produto.

//mercadoria é o nome do objeto
//nome: é a chave da propriedade
// console.log(mercadoria.nome ); imprimindo a propriedade que armazena o nome do produto.


var aluno_academia ={
  id:10,
  nome: "Maromba Silva",
  altura: 1.75,
  peso: 75
};// Criação do objeto para guardar os dados de um aluno da academia

var nome_aluno = aluno_academia.nome;
var peso_aluno = aluno_academia.peso;
var altura_aluno = aluno_academia.altura;
//Armazenando os dados do aluno em variáveis.

var imc_aluno = peso_aluno / (altura_aluno * altura_aluno);//calculo do IMC

console.log("O IMC do aluno é: " + imc_aluno);

if(imc_aluno < 18.5){
  console.log("O aluno " + nome_aluno + " está abaixo do peso. "); 
} else if(imc_aluno >=18.5 && imc_aluno <= 24.99 ){
  console.log(" O aluno " + nome_aluno + " esta com o peso normal ");
} else {
  console.log (" O aluno " + nome_aluno + " esta acima do peso ");
}
// O imc do aluno é de : 24.489795918367346
// O aluno Maromba Silva esta com o peso normal 
//A exibição dos resultados do aluno. Mais pra frente veremos como limitar o numero de casas decimais  de um valor commo o numero destacado.

