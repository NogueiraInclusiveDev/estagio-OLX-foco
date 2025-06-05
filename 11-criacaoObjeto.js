/*
          Objeto literalcomo criar?
    Antes de criarmos um objeto literal no codigo precisamos definir qual o dominio(contexto)que iremos representar nesse objeto.

    No exemplo vamos criar um objeto literal que vai armazenar dados de um produto.

      id
      nome    -> dados de produto que 
      valor      vamos usar no exemplo.

PRODUTO é o dominio (contexto) representado nesse exemplo

  Criando objeto literal
  nome do objeto literal
  var produto
  A primeira coisa a fazer é definir um nome pelo qual vamos identificar o objeto.
  As PROPRIEDADES do objeto serão colocadas entre as chaves.
  
    var produto = {}
Após isso devem ser usados os simbolos de chaves que vao definir o bloco onde serão colocadas as propriedades do objeto

    var produto = {
      id: 8,
      nome: "Medalha rara Metabee",
      valor: 250.00
    }; As propriedades do objeto são formadas por chaves e valores.

Agora que criamos as propriedades do nosso objeto. No exemplo o objeto produto terá os seguintes dados id,nome e valor.

*/

var produto = {
      id: 8,
      nome: "Medalha rara Metabee",
      valor: 250.00
    };

/*
As chaves estão com destaque vermelho e os valores com destaque em outras cores no meu caso string em verde e number em laranja.Veremos mais a frente o que cada um deles representa na propriedade de um objeto.

Dessa forma,temos o nosso objeto literal criado,com um nome e um conjunto de chaves/valores dentro de um bloco delimitado por simbolos de chaves.

Quando usarmos?

Um objeto literal deve ser usado quando precisamos agrupar dados de um mesmo domínio(contexto)

No objeto literal que criamos temos um produto com alguns dados armazenados.
Poderiamos armazenar dados como peso, altura,data de fabricação e qualquer outro dado que seja relativo a um produto.

O objeto literal produto armazena dados de um mesmo dominio(contexto)

E se quisermos armazenar dados de cliente como email ou telefone?

É correto agrupar dados de produto e cliente em um mesmo objeto?
NÂO ISSO NAO DEVE SER FEITO POIS UM OBJETO DEVE CONTER SOMENTE DADOS DE UM OBJETO DE UM MESMO DOMINIO(CONTEXTO)

Como cliente e produto são 2 dominios(contextos) distintos,devemos criar um objeto para cada um deles.
*/

var produtoUnico = {
  id: 100,
  nome: "Master ball",
  valor: 999999.00
};

var cliente = {
  id: 4,
  nome: "Ash Ketchum",
  telefone: "(21)99999-9999"
};
//Criando objetos para cada dominio(contexto),temos uma melhor organização dos dados.Veremos agora como acessamos um dado de um objeto literal

console.log(produtoUnico.id);
console.log(produtoUnico.nome);
console.log(produtoUnico.valor);
//Nome do objeto literal é o nome do objeto.
// ponto (.) indica que vamos acessar um dado do objeto.
//nome do dado o dado que queremos acessar no objeto.

//Dados armazenados de formas diferentes.
var aula ={
  id: 10,
  titulo: "Objetos literais", 
  tecnologia: "Javascript"
};// Objeto literal com dados da aula


var usuario_logado = true;//variavel que verifica usuario logado

console.log(aula.id);
console.log(aula.titulo);
console.log(aula.tecnologia);
//exibindo dados do objeto

console.log(usuario_logado);//exibindo valor da variavel

//Utilizar objetos deixa o codigo mais organizado, pois sabemos claramente quais variáveis pertencem ao dominio Aula e quais nao pertencem.

var usuario = {
  id: 3,
  nome: "Romulo Nogueira de Souza",
  idade:40
}//Ibjeto literal usuario

var atendeClassificaçãoEtaria = usuario.idade >= 18 //operador condicional ternario verificando se a idade do usuario é igual ou maior a 18

if(atendeClassificaçãoEtaria = usuario.idade >= 18){
  console.log("Acesso permitido ao conteúdo");
} else{
  console.log("O usuário ainda nao pode asssistir o conteúdo");//Aqui tivemos uma estrutura condicional validando a classificação etária
}