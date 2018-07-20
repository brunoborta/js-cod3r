console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

// const Obj = nome => {this.nome = nome} nao funciona.
// Arrow function nao serve para criar funçōes-classes
function Obj(nome) {
    this.nome = nome
    this.exec = () => {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()