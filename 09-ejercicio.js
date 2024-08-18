//Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
//Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
//• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
//• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
//• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
//• Si no está entre ningún caso anterior la frase “Temperatura desconocida”

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese la temperatura en grados Celsius: ', (input) => {
    const celsius = parseFloat(input);

    if (isNaN(celsius)) {
        console.log("Por favor, ingrese un valor numérico válido.");
        rl.close();
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;
    console.log(`La temperatura en Fahrenheit es: ${fahrenheit.toFixed(2)} ºF`);

    if (fahrenheit >= 14 && fahrenheit < 32) {
        console.log("Temperatura baja");
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        console.log("Temperatura adecuada");
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        console.log("Temperatura alta");
    } else {
        console.log("Temperatura desconocida");
    }

    rl.close();
});

