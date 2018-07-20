function criarProduto(nome, preco) {
    return {
        nome, //mesmo nome do atributo
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Bruno', 123));