<h1 align="center"> Prueba Junior Developer👋</h1>

> Ejercicio creado para puesto de Jr Backend Developer, resuelto con Javascript

## Instrucciones de instalación
**Necesario Instalar NODEJS**  
- Descargar : [https://nodejs.org/es/]

**Necesario utilizar NPM**  
- Como Instalar : [https://docs.npmjs.com/cli/v8/configuring-npm/install]

## Como utilizar  
**Clonar**  
- Clonar Repositorio: [https://github.com/molro/ejercicio.git]  

**Descargar** 
- Descargar : [https://github.com/molro/ejercicio/archive/refs/heads/main.zip]  

## Ejecución  
Para ejecutar, debemos ingresar en el directorio y ejecutar los comandos desde allí.   
``node problema1.js``  -> Ejecuta el problema 1  
``node problema2.js``  - > Ejecuta el problema 2  

## Estructura General
- ``\utils\`` -> Contiene funciones "Helpers" Para el problema 1 y problema 2.  
- ``\utils\validators\``-> Funciones que validan las politicas de contraseñas del problema 2. 
- ``\src\`` -> Contiene recursos Pej: el archivo con las pass. 

**Problema 1**
- **Archivo principal:** problema1.js. Ejecuta el programa. 
- **Dependencias:** multiplos.js (Verifica si el número 'a' es múltiplo de 'b') 

**Problema 2** 
- Archivo principal: problema2.js. Ejecuta el programa.  
  - **Dependencias**
  - readfile.js -> Lee el input.txt, lo transforma de texto a un array legible por Javascript.  
  - cleanPass -> Lee el array de contraseñas obtenidos con readfile.js y lo estructura en key, pass y state.  
  - key: Contiene la clave para verificar la contraseñas.  
  - pass: contiene la contraseñas como string.  
  - state: Por defecto, se inicia en no verificada.  
  - **\Validators\ -> Contiene y ejecuta las políticas de contraseñas.** 
  -  rule1.js -> Las políticas del problema 2.1.  
  -  rule2.js -> Las políticas del problema 2.2.  
## Authors
👤 **Mauricio**

- Github: [@molro] (https://github.com/molro)

## Dame tu apoyo

Una ⭐️ si te ha gustado y/o ayudado

---

