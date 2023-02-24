/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(arguemento:T){
    return arguemento;
}

let soyString = queTipoSoy('Soy String');
let soyNumber = queTipoSoy(100);
let soyArreglo = queTipoSoy([10,22,33]);

let soyExplicito = queTipoSoy<number>(1022);
