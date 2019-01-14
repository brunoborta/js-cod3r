function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)} `;
}

const produto = {
    nome: "Notebook",
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20;
global.desc = 0.1;
console.log(getPreco());
// IGUAIS
console.log(produto.getPreco());
console.log(getPreco.call(produto));
console.log(getPreco.apply(produto));

const carro = { preco: 49990, desc: 0.2}
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

// Apply só usa um array para adicionar os parametros
console.log(getPreco.call(carro, 0.17, '$'));
console.log(getPreco.apply(carro, [0.17, '$']));
console.log(getPreco.apply(global, [0.17, '$']));