const valor = 'Global';

function minhaFuncao() {
    console.log(valor);
}

function exec() {
    const valor = 'Local';
    minhaFuncao(); // carrega o contexto de onde é definida
}

exec();