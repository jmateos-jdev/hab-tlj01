// VAR TIENE UN SCOPE DE FUNCION
// LET TIENE UN SCOPE DE BLOQUE
// CONST TIENE UN SCOPE DE BLOQUE

var x = 0

function ejemploVar() {
    console.log(x) // undefined // HOISTING declarada pero no asignada
    var x = 1
    if(true) {
        console.log(x) // 1
        var x = 2
        console.log(x) // 2
    }
    console.log(x) // 1
}

console.log("Ejemplo de var")
ejemploVar()

function ejemploLet() {
    console.log(x) // ReferenceError: x is not defined // HOISTING no declarada ni asignada
    let x = 1
    let y = 3
    if(true) {
        console.log(y) // 3
        console.log(x) // ReferenceError: x is not defined // HOISTING no declarada ni asignada
        let x = 2
        console.log(x) // 2
    }
    console.log(x) // 1
}

console.log("Ejemplo de let")
ejemploLet()

console.log("Ejemplo de global")
console.log(x)


