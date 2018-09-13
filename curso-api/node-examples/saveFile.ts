import * as fs from 'fs';
import yargs from 'yargs';
const argv = yargs
    .alias('f', 'filename')
    .alias('c', 'content')
    .demandOption('filename')
    .demandOption('content')
    .argv;

fs.writeFile(argv.filename, argv.content, (err) => {
    if(err) {
        throw err;
    }
    console.log(`Arquivo ${argv.filename} for salvo com sucesso!`);
});