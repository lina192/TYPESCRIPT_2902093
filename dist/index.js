let nombre = "Cristian";
nombre = "Buitrago";
console.log(nombre);

let numero = 23;
console.log(numero);

// Crear objeto en JavaScript

// Definir la estructura del estudiante sin tipado
let estudiantes = [];

// Función para agregar un estudiante al arreglo
const agregarEstudiante = (estudiante) => {
    estudiantes.push(estudiante);
};

// Agregar estudiantes
agregarEstudiante({
    fistName: "Carlos",
    lastName: "Ortega",
    age: 22
});

agregarEstudiante({
    fistName: "Felix",
    lastName: "Lorenzo",
    age: 22
});

// Función para buscar y actualizar el apellido del estudiante
const buscarEstudiante = (nombre) => {
    const e = estudiantes.filter((est) => est.fistName === nombre);
    if (e.length >= 1) {
        e[0].lastName = nombre;
    }
    return [...estudiantes, ...e];
};

buscarEstudiante("Felix");
console.log(estudiantes);

// Recorrer el arreglo de estudiantes
// imprimiendo nombre y apellido utilizando forEach
estudiantes.forEach((estudiante) => {
    console.log(estudiante.fistName, estudiante.lastName);
});
