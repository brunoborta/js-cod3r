// novo recurso do ES2016 (ES6)

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
// Notacao ponto
console.log(pessoa.nome, pessoa.idade)

// Destructuring com variaveis do mesmo nome dos atributos do objeto
const { nome, idade } = pessoa
console.log(nome, idade)

// Destructuring com variaveis com nomes diferentes dos atributos do objeto
const { nome: n, idade: i } = pessoa
console.log(n, i)

// Atributos nao existem
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

// destructuring para um dado aninhado (objeto dentro de um objeto)
const {endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa
console.log(ag, num) // Vai dar ruim pq "conta" nao existe e esta tentando pegar um atributo de um undefined