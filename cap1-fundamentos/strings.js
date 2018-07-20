const escola = "cod3r";

console.log(escola.charAt(4));
console.log(escola.charAt(5)); // Nao gera erro. Retorna vazio ('')
console.log(escola.charCodeAt(3)); // Codigo da tabela Unicode
console.log(escola.indexOf('c')); // Indice da string que esta o char

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log("Escola ".concat(escola).concat('!'));
console.log("Escola " + escola + '!');
console.log(escola.replace(3, 'e'));

console.log('Ana,Maria,Pedro'.split(/,/))