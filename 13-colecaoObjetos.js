/*
Coleção relembrando o conceito
Quando agrupamos múltiplos dados de um mesmo domínio(contexto),temos um coloção
*/
var alunos = [
  "Ramon Santos",
  "Leir da Silva Passos",
  "Vitor Medina Verly",
  "Keity Martin de Souza"
];

var notas_bimestre = [
  10,
  8,
  7,
  8
];

//Temos exemplos de coleções que guardam dados de dominios diferentes

console.log(alunos[1]);
console.log(alunos[2]);

console.log(notas_bimestre[0]);
console.log(notas_bimestre[1]);

//Podemos acessar os elementos de uma coleção através de um indice(posição) como vemos nos destaques.
//Uma coleção serve para reunir itens de um mesmo contexto dentro de uma variável.
console.log("O nosso aluno: "+ alunos[1]+ " neste bimestre teve a nota: "+ notas_bimestre[1]);

/*
            Coleção de objetos
  O que é?
Quando temos múltiplos objetos agrupados representando um mesmo contexto,temos uma coleção de objetos.
*/

//objeto
var disciplina = {
  id: 3,
  nome: "História",
  carga_horaria: 160
};

//coleção de objetos 
var colecao_disciplinas = [
  {id:1, nome: "Portugues", carga_horaria: 240 },
  {id:2, nome: "Matemática", carga_horaria: 220 },
  {id:3, nome: "História", carga_horaria: 160 },
  {id:4, nome: "Geografia", carga_horaria: 140 },
  {id:5, nome: "Química", carga_horaria: 160 },
  {id:6, nome: "Física", carga_horaria: 150 },
  {id:7, nome: "Inglês", carga_horaria: 120 },
];
console.log( colecao_disciplinas[2]);
//Temos um comparativo entre um objeto e uma coleçao de objeto.