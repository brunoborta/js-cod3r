const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const chineses = f => f.pais === 'China';
const mulheres = f => f.genero = 'F';
const menorSalario = (funcionario, functionarioAtual) => {
    return funcionario.salario < functionarioAtual.salario ? funcionario : functionarioAtual;
}

axios.get(url).then(response => {
    const funcionarios = response.data;

    //Mulher chinesa com o menor salario
    const chinesaComMenorSalario = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario);
    console.log(chinesaComMenorSalario);
});