//Exemplo de objeto literal
var produto = {
  id: 9,
  nome: "X-tudo",
  preco: 15.00
};
//id, nome e preco são os dados do produto

//objeto literal produto reune diversos dados relacionados a um produto.

//=========================
//Sintaxe do objeto literal

var malucoBeleza = {
  id: 10,
  nome: "X-Maluco Beleza",
  preco: 25.00
};

//um par de chaves é utilizado para conter as propriedades do objeto literal.
//um objeto possui propriedades. Acima temos uma propriedade que representa o preço do produto.

//A sintaxe do objeto é caracterizada pelo nome da propriedade no caso preco e do valor da propriedade no caso 25.00


//=======================================

/*
              Objeto Literal
  Por que é útil?
Objeto Literal serve para reunir dados de forma que elas fiquem organizados



Armazenando dados de um produto
      id: 9
      Nome: X-Mata Fome
      Valor: 18.50

  Como podemos organizar os dados acima?
Utilizamos variáveis para armazenar os dados de um produto como aqui abaixo:
*/

var id = 9;
var nome = "X-Mata Fome";
var valor = 18.50;
//Utilizando uma variavel para armazenar cada  dado do produto.Mas será essa a melhor maneira?

console.log(id);
console.log(nome);
console.log(valor);

/*
Problema ao armazenar os dados.
E se no mesmo sistema precisamos armazenar o id e o nome tanto de um produto como o deu um cliente? segue abaixo exemplo dos dados de um produto e de um cliente.
*/

// var id = 2112;
// var nome = "Ultraman replica 40cm ";
// var valor = 80.00

// console.log(id);
// console.log(nome);
// console.log(valor);



// var id = 45
// var nome = "Jorge Maravilha"
// var telefone = "(21)99999-9999";
// console.log(id);
// console.log(nome);
// console.log(telefone);

/*
Essa situação gera um problema,pois não conseguimos identificar com clareza a qual domínio(contexto) uma variável pertence
Variável nome é do produto ou do cliente?

Agrupando dados em um objeto literal
Para resolver o problema temos o objeto literal que nos ajuda a agrupar os dados de uma maneira eficiente. olha abaixo os dados contidos dentro do objeto literal pertencem a um dominio(contexto)especifico,nesse caso o novoProduto
*/
var novoProduto ={
  id: 2,
  nome: "Ominitrix",
  valor: 125.00
}

console.log(novoProduto.id);
console.log(novoProduto.nome);
console.log(novoProduto.valor);

//Quando precisamos armazenar dados de um mesmo dominio o melhor camino é utilizar objeto literal.