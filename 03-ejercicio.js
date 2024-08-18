//CATEGORIA AUMENTO
//A 15%
//B 30%
//C 10%
//D 20%
//Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
//Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
//aumento. Deberá demostrar los datos del empleado y el aumento salarial.

function calcularAumentoSalarial(nombre, salario, categoria) {
    let aumento;

    // Determinar el porcentaje de aumento según la categoría
    switch (categoria.toUpperCase()) {
        case 'A':
            aumento = salario * 0.15;
            break;
        case 'B':
            aumento = salario * 0.30;
            break;
        case 'C':
            aumento = salario * 0.10;
            break;
        case 'D':
            aumento = salario * 0.20;
            break;
        default:
            return `Categoría inválida para el empleado ${nombre}.`;
    }

    const nuevoSalario = salario + aumento;

    // Devolver los datos del empleado junto con el aumento salarial
    return `Nombre: ${nombre}\nSalario Base: $${salario.toFixed(2)}\nCategoría: ${categoria}\nAumento: $${aumento.toFixed(2)}\nNuevo Salario: $${nuevoSalario.toFixed(2)}`;
}

// Ejemplo de uso
const nombreEmpleado = "Ana Gómez";
const salarioEmpleado = 2000;
const categoriaEmpleado = "B";

console.log(calcularAumentoSalarial(nombreEmpleado, salarioEmpleado, categoriaEmpleado));
 