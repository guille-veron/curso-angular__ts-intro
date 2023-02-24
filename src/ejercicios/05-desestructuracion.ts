/*
    ===== Código de TypeScript =====
*/

const avenger = {
    nombre: 'Esteve',
    codigo: 'capitan America',
    poder: 'Drogas'
}
//desestruct de argumentos
const extraer = ({nombre,poder}:any) => {
    console.log(nombre);
    console.log(poder);
}
//extraer(avenger);

//desestructuracion de arreglos
const avengers:string[]=['Thor','Spider','Iron'];
const [,,tres] = avengers;

//desestruct de argumentos
const extraerArr = ([,,tres]:string[]) => {
    console.log(tres);
    
}

extraerArr(avengers);
//console.log(uno);
//console.log(dos);
//console.log(tres);

