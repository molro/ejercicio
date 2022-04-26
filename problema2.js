const {readPass} = require('./utils/readfile')
const {cleanPass} = require('./utils/cleanPass')
const {join} = require ('path')

const path = join(__dirname, 'src');
const file = 'input.txt';

const savedPass = readPass(path,file);
const listPass = cleanPass(savedPass)


let arrPrueba = [{ 
    key: [ '2', '13', 'j' ],
    pass: [
    'j', 'j', 'j', 'j',
    'j', 'j', 'j', 'b',
    'j', 'j', 'j', 'j',
    'j']
    }]
let e = verificar(arrPrueba)
console.log(e)
// console.log(listPass)
// console.log(passKey)