const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false;
}))

const fragil = obj => obj.fragil;
const caro = obj => obj.preco >= 500;

console.log(produtos.filter(fragil).filter(caro));