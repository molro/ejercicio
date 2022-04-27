const validator2 = (passList) => { // Recorre el listado
    let validas = 0
    for (let i = 0; i < passList.length; i++) { // Desestructura 
        const pos1 = passList[i].key[0]
        const pos2 = passList[i].key[1]
        const char = passList[i].key[2]
        const pass = passList[i].pass
    
        let checkPos = pass.lastIndexOf(char)// Busca la última posición del caracter
    
        let checkPosCorrected = checkPos + 1
     
        let verify = (pos1, pos2, checkPos) => { //Verifica la politica, Caracter se encuentra en al menos un de las dos posiciones
          if ((pos1 == checkPos) || (pos2 == checkPos)) {
             passList[i].state = 'Válida'
             validas++
          } else {
             passList[i].state = 'No válida'
          }
       }
       verify(pos1, pos2, checkPosCorrected)
    }
    console.log(`Contraseñas válidas Política 2: ${validas}`)
 }
 
 module.exports = {validator2}