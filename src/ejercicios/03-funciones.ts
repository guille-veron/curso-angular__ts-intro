/*
    ===== Código de TypeScript =====
*/

const miFuncion = function(a:string){
    return a.toUpperCase();
}

const miFuncionF = (a:string) => a.toUpperCase();

const sumarN = function(a:number, b:number){
    return a+b;
}

const sumarF = (a:number, b:number) =>a+b;

interface Personaje {
    nombre: string,
    smash: () => void,
}

const hulk:Personaje = {
   nombre:'Hulk',
   smash(){
       setTimeout(()=>{
           console.log(`${this.nombre} smash!!`);
       },1000)
   }
};
hulk.smash();

//valor por defecto y parámetro opcional
function multiplicar(numero: number, base=2, otroNumero?: number) {
    return numero * base;
}

const mult = multiplicar(12);
console.log(mult);