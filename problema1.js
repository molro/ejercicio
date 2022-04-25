const multiplo = require('./helpers/multiplos')

const list = new Array(100) // Crear nuevo Array de 100 Elementos
let a = 3;
let b = 5;

for (let i = 0; i < list.length; i++) { // Llenar el array como una matriz
    list[i] = {origin:i+1, verify:i+1}
}

for (let i = 0; i < list.length; i ++ ) {
    if(multiplo(list[i].verify,a) === 0) {
        multiplo(list[i].verify,b) === 0 ? list[i].verify = 'cyberclick' : list[i].verify = 'cyber'
    }
    if(multiplo(list[i].verify,b) === 0) {
        multiplo(list[i].verify,a) === 0 ? list[i].verify = 'cyberclick' : list[i].verify = 'click'
    }
}
console.table(list);