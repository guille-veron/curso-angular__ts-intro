/*
    ===== Código de TypeScript =====
*/

   class Avenger {
       nombre:string;
       equipo:string;
       static nombreReal:string;

       puedePelear:boolean;
       peleasGanadas:number;

       constructor(nombre, equipo) {
        this.nombre = nombre;
        this.equipo = equipo;
        Avenger.nombreReal = "Nombre eeee";
        
       }   

   }

   console.log(Avenger.nombreReal);
   

//extender una clase

class Persona {
    // es importante aclarar la visibilidad del parámetro
    constructor(public nombre:string, public edad:number) {
        
    }
}


class Avenger2 extends Persona{   
    constructor(public equipo:string,
                public nombreReal?:string,            
                public puedePelear:boolean=true,
                public peleasGanadas:number=0) {
                    super(nombreReal, 25);
                    
                }  

}

const antman = new Avenger("Antman","Capi");
const antman2 = new Avenger2("Antman","Capi");
console.log(Avenger.nombreReal);
   
console.log(antman2);