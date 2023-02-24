/*
    ===== Código de TypeScript =====
*/
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }
   
@reportableClassDecorator
class Avengerend {   
    constructor(public nombre:string,
                public equipo:string,
                public nombreReal?:string,            
                public puedePelear:boolean=true,
                public peleasGanadas:number=0) {}  

}

console.log(Avengerend);

let ave = new Avengerend('Fiu','Piu');
console.log(ave);

//los decoradores se usan para añadir o extender funcionalidades, para distinguir diferentes tipos de componentes