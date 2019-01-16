require('./global');

//Poderia ser global.MinhaApp.saudacao(), mas não é necessário
console.log(MinhaApp.saudacao());

// Não trocará pq MinhaApp é um objeto freezado
MinhaApp.nome = 'Eita!';
console.log(MinhaApp.nome);