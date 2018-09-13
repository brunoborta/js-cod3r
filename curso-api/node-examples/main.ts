import { fatorial } from './fatorial';
import yargs from 'yargs';
const argv = yargs.demandOption('num').argv;

console.log('=== n-fatorial ===');

// console.log(`Executando o script a partir do diretorio ${process.cwd()}`);

// Process herda de EventEmitter, então da para ouvir eventos como o exit
// process.on('exit', () => {
//     console.log('script esta prestes a terminar!');
// })

// const fatorial = (num) => {
//     if(num === 0) {
//         return 1;
//     }

//     return num * fatorial(num - 1);
// }
// Argumentos:                                [0]           [1]            [2]
// pega o 3o argumento quando executado. Ex.: node modificando-fatorial.js 10
// Caso não haja o 3o argumento, da um stack overflow xD
const num = parseInt(argv.num);

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`);

// console.log(module.paths)