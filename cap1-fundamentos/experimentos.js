// Browser != Node

let a = 3

global.b = 123 // Global equivale ao window

this.c = 456
this.d = false
this.e = 'teste'

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

// criando uma variavel sem var, let ou const
abc = 3 // Péssima pratica: bad smell
console.log(global.abc) //a variavel vai direto para o global
