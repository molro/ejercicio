const multiplo = require('./helpers/multiplos')

const list = new Array(100) // Crear nuevo Array de 100 Elementos
let a = 3;
let b = 5;

for (let i = 0; i < list.length; i++) { // Llenar el array como una matriz
    list[i] = [i+1, i+1]
}

for (let i = 0; i < list.length; i ++ ) {
    if(multiplo(list[i][1],a) === 0) {
        multiplo(list[i][1],b) === 0 ? list[i][1] = 'cyberclick' : list[i][1] = 'cyber'
    }
    if(multiplo(list[i][1],b) === 0) {
        multiplo(list[i][1],a) === 0 ? list[i][1] = 'cyberclick' : list[i][1] = 'click'
    }
}
console.log(list);