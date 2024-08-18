//Crear una función que en base a 2 números enteros que ingrese el usuario,
//calcular cual número es el mayor y devolverlo. 

function encontrarMayor(numero1, numero2) {
    // Comparamos los dos números y devolvemos el mayor
    if (numero1 > numero2) {
        return `El número mayor es: ${numero1}`;
    } else if (numero2 > numero1) {
        return `El número mayor es: ${numero2}`;
    } else {
        return "Ambos números son iguales.";
    }
}

// Ejemplo de uso
const numero1 = 8;
const numero2 = 12;

console.log(encontrarMayor(numero1, numero2));
