//Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
//por el usuario.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un número para mostrar su tabla de multiplicar: ', (input) => {
    const numero = parseInt(input, 10);

    if (isNaN(numero)) {
        console.log('Por favor, ingrese un número válido.');
    } else {
        console.log(`Tabla de multiplicar del ${numero}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }

    rl.close();
});