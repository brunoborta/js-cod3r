// Função sem retorno
function imprimirSome(a,b) {
    console.log(a+b);
}

imprimirSome(2,3)
imprimirSome(2) // b é undefined: retorna NaN
imprimirSome(2, 10, 3, 4, 5, 6, 7, 8) //os outros numeros sao ignorados
imprimirSome() // undefined + undefined

//Função com retorno

function soma(a,b = 1) {
    return a + b;
}

console.log(soma(2, 4));
console.log(soma(2));
console.log(soma()); // NaN