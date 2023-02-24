/*
    ===== Código de TypeScript =====
*/

let habilidades = ['comer','beber', 'correr']

interface XMen {
    nombre: string;
    edad: number;
    habilidades: string[],
    poder?: string //opcional
}

const enviarMision = (xmen: XMen) =>{
   console.log(`Enviando a ${xmen.nombre} a la Misión`);
   console.table(xmen);
}

const wolv:XMen = {
   nombre: "Wolf",
   edad: 33,
   habilidades: habilidades
}

enviarMision(wolv);
