// Object.preventExtensions
// Consegue excluir atributos e mexer nos atributos existentes
//mas nao consegue adicionar novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promocao'
});

console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto)

// Object.seal
// Nao consegue excluir ou adicionar atributos
//mas consegue mexer nos valores
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa)

// Object.freeze = selado + valores constantes
