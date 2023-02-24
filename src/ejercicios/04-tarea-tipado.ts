/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => void
}

export interface Direccion { 
    calle: string;
    ciudad: string;
    pais: string
}

const superHeroe:SuperHeroe = {
    nombre: 'IronMan',
    edad: 30,
    direccion: {
        calle: 'Main St',
        ciudad: 'Mdz',
        pais: 'ARG'
    } ,
    mostrarDireccion(){
        return this.nombre + ', '+ this.direccion.ciudad + ', '+ this.direccion.pais
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);

