//en base a la edad que ingreso el 
//usuario devolver un mensaje si la persona es mayor
// de edad o no. Utilizar para la condición el 
//operador ternario.


function verificarEdad(edad) {
    // Usamos el operador ternario para verificar si es mayor de edad
    const mensaje = edad >= 18 ? "La persona es mayor de edad." : "La persona es menor de edad.";
    return mensaje;
}

// Ejemplo de uso
const edadUsuario = 20; // Cambia este valor para probar con diferentes edades
console.log(verificarEdad(edadUsuario));