// com promises
const http = require('http');

// Arquivos:
// files.cod3r.com.br/curso-js/turmaA.json
// files.cod3r.com.br/curso-js/turmaB.json
// files.cod3r.com.br/curso-js/turmaC.json
const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = "";
      res.on('data', dados => {
        resultado += dados;
      });
  
      res.on('end', () => {
        try {
          resolve(JSON.parse(resultado));
        } catch(e) {
          reject(e);
        }
      });
    });
  });
}

// Recurso do ES8
// Objetivo é simplificar o uso de promises
let obterAlunos = async () => {
  const turmaA = await getTurma('A');
  const turmaB = await getTurma('B');
  const turmaC = await getTurma('C');
  return [...turmaA, ...turmaB, ...turmaC];
} //retorna um objeto AsyncFunction

obterAlunos()
  .then(alunos => alunos.map(a => a.nome))
  .then(nomes => console.log(nomes));