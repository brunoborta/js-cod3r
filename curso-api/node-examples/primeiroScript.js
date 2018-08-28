console.log('Fatorial');

const fatorial = (num) => {
    if(num === 0) {
        return 1;
    }

    return num * fatorial(num - 1);
}

console.log(`O fatorial de 5 = a ${fatorial(5)}`);