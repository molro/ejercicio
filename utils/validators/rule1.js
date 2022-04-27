const validator1 = (passList) => { // Recorre el listado
   let validas = 0
   for (let i = 0; i < passList.length; i++) { // Desestructura 
      const min = passList[i].key[0]
      const max = passList[i].key[1]
      const char = passList[i].key[2]
      const pass = passList[i].pass
      let counter = 0;
      pass.forEach((e)=> e === char ? counter++ : counter) // Contador del caracter en la pass
      
      let verify = (min, max, counter) => { //Verifica politica, Número de veces que se repite el caracter en el la pass
         if ((min <= counter) && (counter <= max)) {
            passList[i].state = 'Válida'
            validas++
    
         } else {
            passList[i].state = 'No válida'
         }
      }
      verify(min, max, counter)

   }
   console.log(`Contraseñas válidas política 1: ${validas}`)
}

module.exports = {validator1}
