const {readFileSync} = require ('fs')
const {join} = require ('path')
// const path = join(__dirname, 'src');
// const file = 'input.txt';

let readPass = (path, file) => {
    let savedPass = readFileSync(join(path,file),).toString().split('\n');
    return savedPass
};

module.exports = {readPass}