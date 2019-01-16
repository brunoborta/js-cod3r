const moduloA = require('../../moduloA');
// const moduloA = require('/home/objectedge/Documents/Projects/js-cod3r/cap6-node/moduloA');
console.log(moduloA.ola);

const c = require('./pastaC');
console.log(c.ola2);

const http = require('http');
http.createServer((req, res) => {
    res.write('Bom dia');
    res.end();
}).listen(8080);