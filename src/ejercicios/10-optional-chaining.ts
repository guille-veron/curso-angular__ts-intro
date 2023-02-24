/*
    ===== Código de TypeScript =====
*/
interface Pasajero {
    nombre:string,
    hijos?: string[],
}

const pasajero1:Pasajero ={
    nombre:'Guille'
}

const pasajero2:Pasajero = {
    nombre:'Jose',
    hijos:['Luis','Fernando']
}

function cuantosHijos(p:Pasajero){
    //evalua el parametro antes de ejecutar lo que sigue
    const hijos = p.hijos?.length || 0;
    console.log(hijos);
}

cuantosHijos(pasajero2);
cuantosHijos(pasajero1)