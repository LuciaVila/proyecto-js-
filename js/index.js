//costo de seguro y pagos en cuotas
function calcularSeguro() {
    let edad = parseInt(document.getElementById("edad").value);
    let tipo = document.getElementById("tipo").value;
    let monto = parseFloat(document.getElementById("monto").value);
    let cuotas = parseInt(document.getElementById("cuotas").value);

    let costo;

    if (tipo === 'auto') {
        costo = 100 + (edad - 18) * 20;
    } else if (tipo === 'hogar') {
        costo = 120 + (edad - 18) * 25;
    } else if (tipo === 'vida') {
        costo = 150 + (edad - 18) * 30;
    }

    let pagoMensual = monto / cuotas;
    let resultado = `El costo del seguro es: ${costo}, y el pago mensual es: ${pagoMensual}`;
    
    document.getElementById("resultado").innerHTML = resultado;
}

//impuestos y descuentos.
function calcularValorFinal(precio, impuestos, descuentos) {
    let valorFinal = precio + (precio * impuestos / 100) - (precio * descuentos / 100);
    return valorFinal;
}
let precio = 100;
let impuestos = 10;
let descuentos = 5;
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
turnosEjemplo.push({ tiempoEspera: 12 });
turnosEjemplo.push({ tiempoEspera: 18 });

let tiempoPromedio = calcularTiempoPromedioEspera(turnosEjemplo);
console.log(`El tiempo de espera promedio para ${turnosEjemplo.length} turnos registrados es: ${tiempoPromedio}`);

