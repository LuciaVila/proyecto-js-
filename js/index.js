
function calcularSeguroAuto() {
    let edad = parseInt(document.getElementById("edad_auto").value);
    let tipo = document.getElementById("tipo_modal").value;

    if (!edad || !tipo) {
        alert("Por favor complete todos los campos para calcular el seguro de auto");
        return;
    }

    const modal = document.getElementById("modal");
    modal.classList.remove("ocultar");

    const modalContenido = document.querySelector(".modal-contenido");
    modalContenido.innerHTML = `El costo del seguro para ${tipo} es: [costo calculado]`; // Reemplaza [costo calculado] con el valor calculado
}

function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.classList.add("ocultar");
}

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

