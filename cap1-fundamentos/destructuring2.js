const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

// destructuring aninhado em array
// Ignora o primeiro elemento, pega o segundo elemento (array), ignora o primeiro elemento deste array e pega o 2o elemento
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)