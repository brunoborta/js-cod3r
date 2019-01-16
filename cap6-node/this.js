console.log(this === global); // false
console.log(this === module);

console.log(this === module.exports); // true
console.log(this === exports);

function logThis() {
    console.log('Dentro de uma funcao...');
    console.log(this === exports); // false
    console.log(this === module.exports);
    console.log(this === global); // true
}

logThis();