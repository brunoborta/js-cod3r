const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop() // Remove o ultimo elemento do array
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift(); // Remove o primeiro elemento do array;
console.log(pilotos);

pilotos.unshift('Hamilton')
console.log(pilotos);

// Splice por remover como adicionar

// Adicionando
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// Removendo
pilotos.splice(3, 1); // Massa caiu fora
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2);
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);