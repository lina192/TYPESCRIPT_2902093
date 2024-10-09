let nombre: string = "Cristian";
nombre = "Buitrago";
console.log(nombre)


let numero: number = 23;
console.log(numero);




/*type address = {
    city : string;
    country : string;
    ad : string;
    address : address;
}*/


// Crear ob en typescript


type Estudiante ={
    fistName: string; 
    lastName: string;
    age?: number;
}


/*const e1 : estudiante = {
    fistName : "Carlos",
    lastName : "Rodrigez",
    age : 22,
    address :  {
        city : "Bogota",
        country: "Colombia",
        ad: "calle 57 22 "
    }
}


const e2 : estudiante = {
    fistName : "Felix",
    lastName : "Lorenzo",
    age : 22,
    address :  {
        city : "Bogota",
        country: "Colombia",
        ad: "calle 57 22 "
    }
}


// FUNCION PARA MOSTRAR INFO DEL ESTUDIANTE
// VERSION DECLARATIVA 


//const mostrarestudiante=
     //(estudiante: estudiante): string => {
        //const { fistName, lastName } = estudiante;
        //return `Nombre de Estudiante: ${ fistName}
                //apellido: ${lastName}`;
        //}        




console.log (mostrarestudiante(e1));


//ARREGLOS
//Crear un arreglo de estudiantes:*/


let estudiantes: Estudiante[] = []


const agregarEstudiante = (estudiante: Estudiante) => {
    estudiantes.push(estudiante)
}








agregarEstudiante ({
    fistName: "Carlos",
    lastName: "Ortega",
    age:22
})


agregarEstudiante ({
    fistName: "Felix",
    lastName: "lorenzo",
    age:22
})


/*const eliminarEstudiante = (indice: number) => {
    estudiantes = estudiantes.splice(indice, 1)
}*/






//filtrar por nombre y actualizar el apellido


const buscarEstudiante = (nombre: string ) => {
    const e:Estudiante[] = estudiantes.filter(( est )=> est.fistName === nombre);
    if(e.length >= 1){
        e[0].lastName = nombre;
    }
    return [... estudiantes , e]


};


buscarEstudiante("Felix");
console.log(estudiantes);
 






// Recorrer el arreglo de etudaintes 
// imprimiendo nombre y apellido 
//utilizando el metodo de arreglo forEach 


/*estudiante.forEach (function(fistName , lastName){
    console.log(fistName , lastName)
})*/