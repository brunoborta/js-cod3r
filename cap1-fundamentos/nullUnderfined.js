let valor // declarado, mas nao inicializada
console.log(valor);
// console.log(valor2); // nao declarado

valor = null // ausencia de valor
console.log(valor)
// console.log(valor.toString()); // Erro

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // Deleta atributo do objeto
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)