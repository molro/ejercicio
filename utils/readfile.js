const {readFileSync} = require ('fs')
const {join} = require ('path')

let readPass = (path, file) => {
    let savedPass = readFileSync(join(path,file),).toString().split('\n');
    return savedPass
};

module.exports = {readPass}