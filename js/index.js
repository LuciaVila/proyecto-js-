document.addEventListener('DOMContentLoaded', function () {
    const enlaceIniciarSesion = document.getElementById('enlaceIniciarSesion');
    const formularioInicioSesion = document.getElementById('formularioInicioSesion');

    enlaceIniciarSesion.addEventListener('mouseenter', function () {
        formularioInicioSesion.classList.remove('ocultar');
    });

    enlaceIniciarSesion.addEventListener('mouseleave', function () {
        formularioInicioSesion.classList.add('ocultar');
    });

    formularioInicioSesion.addEventListener('submit', function (event) {
        event.preventDefault();
        const correo = document.getElementById('correo').value;
        const contrasena = document.getElementById('contrasena').value;

        const credencialesValidas = verificarCredenciales(correo, contrasena);

        if (credencialesValidas) {
            console.log('Inicio de sesión exitoso');
            mostrarFormularioCotizacion();
        } else {
            console.log('Credenciales incorrectas. Inténtalo de nuevo.');
            mostrarMensajeError('Credenciales incorrectas. Inténtalo de nuevo.');
        }
    });

});

async function validarCorreoElectronico(correo) {
    const url = 'https://email-validator8.p.rapidapi.com/api/v2.0/email';
    const apiKey = 'eaa42ca13emshb5020265f8d06dcp10cb9fjs';

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'email-validator8.p.rapidapi.com'
        },
        body: new URLSearchParams({
            email: correo
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
class Seguro {
    constructor(marca, anio, tipo) {
        this.marca = marca;
        this.anio = anio;
        this.tipo = tipo;
    }
    cotizarSeguro() {
        let cantidad;
        const base = 2000;

        switch (this.marca) {
            case '1':
                cantidad = base * 1.15;
                break;
            case '2':
                cantidad = base * 1.05;
                break;
            case '3':
                cantidad = base * 1.35;
                break;
        }

        const diferencia = new Date().getFullYear() - this.anio;
        cantidad -= ((diferencia * 3) * cantidad) / 100;

        if (this.tipo === 'basico') {
            cantidad *= 1.30;
        } else {
            cantidad *= 1.50;
        }
        return cantidad;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.value

    const tipo = document.querySelector('input[name="tipo"]:checked');
    const tipoSeleccionado = tipo ? tipo.value : null;

    if (marcaSeleccionada === '' || anioSeleccionado === '' || tipoSeleccionado === null) {
        interfaz.mostrarMensaje('Faltan Datos, revisa e intenta de nuevo', 'error');
    } else {
        const resultados = document.querySelector('#resultado div');
        if (resultados !== null) {
            resultados.remove();
        }
        const interfaz = new Interfaz();
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipoSeleccionado);
        const cantidad = seguro.cotizarSeguro();
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje('Cotizando', 'correcto');
    } 

    const botonMostrarFormularioAuto = document.getElementById('botonMostrarFormularioAuto');
    const formularioSeguroAuto = document.getElementById('formularioSeguroAuto');

    botonMostrarFormularioAuto.addEventListener('click', function () {
        formularioSeguroAuto.classList.toggle('ocultar');
    });

    const botonCotizarAuto = document.getElementById('botonCotizarAuto');
    botonCotizarAuto.addEventListener('click', function () {
    });
});

class Interfaz {
    constructor() {
        this.formulario = document.getElementById('cotizarSeguroAuto');
    }
    mostrarMensaje(mensaje, tipo) {
        const div = document.createElement("div");

        if (tipo === 'error') {
            div.classList.add('mensaje', 'error');
        } else {
            div.classList.add("mensaje", "correcto");
        }

        div.innerHTML = `${mensaje}`;
        const formGroup = this.formulario.querySelector(".form-group");

        if (formGroup) {
            formGroup.parentNode.insertBefore(div, formGroup);
        } else {
            this.formulario.appendChild(div);
        }

        setTimeout(function () {
            document.querySelector('.mensaje').remove();
        }, 2000);
    }

    mostrarResultado(seguro, cantidad) {
        const resultado = document.getElementById('resultado');
        let marca;

        switch (seguro.marca) {
            case '1':
                marca = 'Americano';
                break;
            case '2':
                marca = 'Asiático';
                break;
            case '3':
                marca = 'Europeo';
                break;
            default:
                marca = 'Desconocido';
                break;
        }

        const div = document.createElement('div');
        div.innerHTML = `
           <p class="header">Tu resumen:</p>
           <p>Marca: ${marca}</p>
           <p>Año: ${seguro.anio}</p>
           <p>Tipo: ${seguro.tipo}</p>
           <p>Total: $ ${cantidad}</p>   
        `;

        resultado.appendChild(div);
    }
}

const max = new Date().getFullYear();
const min = max - 20;
const selectAnios = document.getElementById('anio');

for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}

const formulario = document.getElementById('formularioSeguroAuto');
formulario.addEventListener('submit', function (e) {
    e.preventDefault();
});

//seguro vida
function calcularSeguroVida() {
    const edad = parseInt(document.getElementById("edad_vida").value);
    const cantidadHijos = parseInt(document.getElementById("hijos_vida").value);
    const fumador = document.getElementById("fumador_vida").checked;

    let costoSeguro = 1000;

    if (edad < 30) {
        costoSeguro += 200;
    } else if (edad >= 30 && edad <= 60) {
        costoSeguro += 500;
    } else {
        costoSeguro += 1000;
    }

    if (cantidadHijos > 0) {
        costoSeguro += cantidadHijos * 100;
    }

    if (fumador) {
        costoSeguro *= 1.5;
    }

    const contenidoModalVida = document.getElementById("resultadoVida");
    contenidoModalVida.innerHTML = `El costo del seguro de vida es: $${costoSeguro}`;
}

document.addEventListener('DOMContentLoaded', function () {
    const botonMostrarFormularioVida = document.getElementById('botonMostrarFormularioVida');
    const formularioSeguroVida = document.getElementById('formularioSeguroVida');

    botonMostrarFormularioVida.addEventListener('click', function () {
        formularioSeguroVida.classList.toggle('ocultar');
    });
});

//seguro hogar
function calcularSeguroHogar() {
    const metrosCuadrados = parseFloat(document.getElementById("metros_cuadrados").value);
    const valorContenido = parseFloat(document.getElementById("valor_contenido").value);
    const ubicacion = document.getElementById("ubicacion").value;

    if (!metrosCuadrados || !valorContenido || !ubicacion) {
        mostrarMensaje("Por favor completa todos los campos para calcular el seguro de hogar", "error");
        return;
    }

    const costoSeguro = calcularCostoSeguroHogar(metrosCuadrados, valorContenido, ubicacion);
    mostrarCostoSeguroHogar(costoSeguro);
}

function calcularCostoSeguroHogar(metrosCuadrados, valorContenido, ubicacion) {
    let costoBase = 0.1 * metrosCuadrados + 0.05 * valorContenido;

    if (ubicacion === "suburbana") {
        costoBase *= 1.2;
    } else if (ubicacion === "rural") {
        costoBase *= 1.5;
    }

    return costoBase;
}

function mostrarCostoSeguroHogar(costoSeguro) {
    const resultadoHogar = document.getElementById("resultadoHogar");
    resultadoHogar.innerHTML = `El costo del seguro de hogar es: $${costoSeguro}`;
}

document.addEventListener('DOMContentLoaded', function () {
    const botonMostrarFormularioHogar = document.getElementById('botonMostrarFormularioHogar');
    const formularioSeguroHogar = document.getElementById('formularioSeguroHogar');

    botonMostrarFormularioHogar.addEventListener('click', function () {
        formularioSeguroHogar.classList.toggle('ocultar');
    });
});

tippy('#opcion1', {
    content: document.querySelector('#tooltipOpcion1').innerHTML,
    interactive: true,
});

tippy('#opcion2', {
    content: document.querySelector('#tooltipOpcion2').innerHTML,
    interactive: true,
});

tippy('#opcion4', {
    content: document.querySelector('#tooltipOpcion4').innerHTML,
    interactive: true,
});