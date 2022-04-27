const cleanPass = (savedPass) => {
    const passTo = savedPass.map( e => e.split(':'));
    const listPass = new Array() 

    for (let i = 0; i < passTo.length; i++) {
        const cleanKey = (arr) => (String(arr[i][0].split('-')).trim()).split(' ')
        const cleanPassword = (arr) => (String(arr[i][1]).trim())
        listPass[i] = {
            key: (cleanKey(passTo).toString()).split(','),
            pass: (cleanPassword(passTo)).split(''),
            state: 'No verificada'
        }
    } 
    return listPass
}

module.exports = {cleanPass}