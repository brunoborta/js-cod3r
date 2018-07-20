function getInteroAleatorioEntre(min,max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1) {
    opcao = getInteroAleatorioEntre(-1, 10)
    console.log(`Opcao escolhida foi ${opcao}`)
}

console.log('Ate a proxima!')