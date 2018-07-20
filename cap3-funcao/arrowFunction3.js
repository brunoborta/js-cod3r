let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)
comparaComThis(this) // !== module.exports, ja que o contexto da funcao é global

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports) // === this
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj) //Oh my...
comparaComThisArrow(obj) // false. Arrow function nao muda o this interno
comparaComThisArrow(module.exports) // true, ja que o this nao varia nunca