const { Component } = require("react");

let primeiroNumero = 9;
let segundoNumero = 4;
console.log(primeiroNumero +segundoNumero);

console.log("==========================================")

var terceiroNumero = 10;
var quartoNumero = 11;

var somarNumero = function(terceiroNumero,quartoNumero){
  return terceiroNumero + quartoNumero;
}

console.log(somarNumero(terceiroNumero,quartoNumero));

console.log("==========================================");

class calculadora extends Component {
  constructor(props){
    super(props);
    this.somar = this.somar.bind(this);
  }
  somar(n1,n2){
    return n1+n2;
  }
}

