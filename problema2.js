const {join} = require ('path')

const {readPass} = require('./utils/readfile')
const {cleanPass} = require('./utils/cleanPass')
const { validator1 } = require('./utils/validators/rule1');
const { validator2 } = require('./utils/validators/rule2');

const path = join(__dirname, 'src');
const file = 'input.txt';

const savedPass = readPass(path,file);
const listPass = cleanPass(savedPass)

validator1(listPass)

validator2(listPass)
