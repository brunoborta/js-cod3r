const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.5 }',
]

// Retornar um array apenas com os preços (minha solucao)
const arrPreco = carrinho.map((objJson) => {
    result = JSON.parse(objJson);
    return result.preco;
})

console.log(arrPreco);

// Solucao Curso
const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);