# proyecto-js-
//costo del seguro
function calcularSeguro(edad, tipo) {
    let costo;

    if (tipo === 'auto') {
        costo = 100 + (edad - 18) * 20;
    } else if (tipo === 'hogar') {
        costo = 120 + (edad - 18) * 25;
    } else if (tipo === 'vida') {
        costo = 150 + (edad - 18) * 30;
    }

    return costo;
}

let edadEjemplo = 25;
let tipoEjemplo = 'auto';
let costoSeguro = calcularSeguro(edadEjemplo, tipoEjemplo);
console.log(`El costo del seguro para una persona de ${edadEjemplo} años y tipo de seguro ${tipoEjemplo} es: ${costoSeguro}`);

//pagos en cuotas
function calcularPagosEnCuotas(monto, cuotas) {
    return monto / cuotas;
}

let monto = 1000;
let cuotas = 12;
let pagoMensual = calcularPagosEnCuotas(monto, cuotas);
console.log("Pago mensual:", pagoMensual);

//impuestos y descuentos.
function calcularValorFinal(precio, impuestos, descuentos) {
    let valorFinal = precio + (precio * impuestos / 100) - (precio * descuentos / 100);
    return valorFinal;
}
let precio = 100; // Precio base del producto
let impuestos = 10; // Porcentaje de impuestos
let descuentos = 5; // Porcentaje de descuentos
let valorFinal = calcularValorFinal(precio, impuestos, descuentos);
console.log(`El valor final del producto con un precio de ${precio}, impuestos del ${impuestos}% y descuentos del ${descuentos}% es: ${valorFinal}`);

//turnos registrados.
function calcularTiempoPromedioEspera(turnos) {
    let tiempoTotal = 0;
    for (let turno of turnos) {
        tiempoTotal += turno.tiempoEspera;
    }
    return tiempoTotal / turnos.length;
}
let turnosEjemplo = [
    { tiempoEspera: 10 },
    { tiempoEspera: 15 },
    { tiempoEspera: 5 },
    { tiempoEspera: 20 }
]; 
let tiempoPromedio = calcularTiempoPromedioEspera(turnosEjemplo);
console.log(`El tiempo de espera promedio para ${turnosEjemplo.length} turnos registrados es: ${tiempoPromedio}`);

//edad promedio de personas registradas.
function calcularEdadPromedio(personas) {
    let edadTotal = 0;
    for (let persona of personas) {
        edadTotal += persona.edad;
    }
    return edadTotal / personas.length;
}
let personasEjemplo = [
    { nombre: 'Persona 1', edad: 25 },
    { nombre: 'Persona 2', edad: 30 },
    { nombre: 'Persona 3', edad: 35 },
    { nombre: 'Persona 4', edad: 40 }
]; 
let edadPromedio = calcularEdadPromedio(personasEjemplo);
console.log(`La edad promedio de las ${personasEjemplo.length} personas registradas es: ${edadPromedio}`);
