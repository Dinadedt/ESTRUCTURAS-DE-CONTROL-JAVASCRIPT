//Crear una Función para calcular el descuento en viajes turísticos tomando
//en cuenta lo siguiente:
//Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
//descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
//es Puerto el Triunfo el descuento será del 15%.

function calcularDescuentoViaje(origen, destino, precio) {
    let descuento = 0;

    // Convertir a mayúsculas para evitar problemas de comparación por mayúsculas/minúsculas
    origen = origen.toUpperCase();
    destino = destino.toUpperCase();

    // Determinar el descuento según el destino
    if (origen === "PALMA") {
        if (destino === "LA COSTA DEL SOL") {
            descuento = 0.05; // 5% de descuento
        } else if (destino === "PANCHIMALCO") {
            descuento = 0.10; // 10% de descuento
        } else if (destino === "PUERTO EL TRIUNFO") {
            descuento = 0.15; // 15% de descuento
        }
    }

    // Calcular el descuento y el precio final
    const descuentoAplicado = precio * descuento;
    const precioFinal = precio - descuentoAplicado;

    // Devolver los resultados
    return `Origen: ${origen}\nDestino: ${destino}\nPrecio original: $${precio.toFixed(2)}\nDescuento: $${descuentoAplicado.toFixed(2)}\nPrecio final: $${precioFinal.toFixed(2)}`;
}

// Ejemplo de uso
const origen = "Palma";
const destino = "Panchimalco";
const precio = 200;

console.log(calcularDescuentoViaje(origen, destino, precio));
