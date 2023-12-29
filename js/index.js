
function Interfaz() {
    this.formulario = document.getElementById('cotizarSeguroAuto');
  }

Interfaz.prototype.mostrarMensaje = function (mensaje, tipo) {
    const div = document.createElement("div");
    div.textContent = mensaje;

    if (tipo === 'error') {
        div.classList.add('mensaje', 'error');
    } else {
        div.classList.add("mensaje", "correcto");
    }

    const formGroup = this.formulario.querySelector(".form-group");
    if (formGroup) {
        formGroup.parentNode.insertBefore(div, formGroup.nextSibling);
    } else {
        this.formulario.appendChild(div);
    }

    setTimeout(function () {
        div.remove();
    }, 2000);
};
function obtenerEstadoAutenticacion(){
    return true;
}
function verificarSesionActiva(){
    const usuarioAuntenticado= obtenerEstadoAutenticacion();
    return usuarioAuntenticado;
}

document.addEventListener('DOMContentLoaded', function () {
    const sesionActiva = verificarSesionActiva();
    if (!sesionActiva) {
        mostrarFormularioInicioSesion();
    }
});
function iniciarSesion() {
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    const credencialesValidas = verificarCredenciales(correo, contrasena);

    if (credencialesValidas) {
        mostrarFormularioCotizacion();
    } else {
        mostrarMensajeError('Credenciales incorrectas. Inténtalo de nuevo.');
    }
}
function mostrarFormularioInicioSesion() {
    const formularioInicioSesion = document.getElementById('formularioInicioSesionAuto');
    formularioInicioSesion.classList.remove('ocultar');
}

function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function () {
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
};

function Interfaz() {
    this.formulario = document.getElementById('cotizarSeguroAuto');
 }

Interfaz.prototype.mostarMensaje = function (mensaje, tipo) {
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
};

Interfaz.prototype.mostrarResultado = function (seguro, total) {
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
    }

    const div = document.createElement('div');
    div.innerHTML = `
       <p class="header">Tu resumen:</p>
       <p>Marca: ${marca}</p>
       <p> Año: ${seguro.anio}</p>
       <p>Tipo: ${seguro.tipo}</p>
       <p>Total: $ ${total}</p>   
    `;

    resultado.appendChild(div);
};

document.addEventListener('DOMContentLoaded', function () {
    const formularioAuto = document.getElementById('cotizarSeguroAuto');
    formularioAuto.addEventListener('submit', function (e) {
        e.preventDefault();

        const marca = document.getElementById('marca');
        const marcaSeleccionada = marca.options[marca.selectedIndex].value;

        const anio = document.getElementById("anio");
        const anioSeleccionado = anio.options[anio.selectedIndex].value;

        const tipo = document.querySelector('input[name="tipo"]:checked').value;

        const interfaz = new Interfaz();

        if (marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
            interfaz.mostarMensaje('Faltan Datos, revisa e intenta de nuevo', 'error');
        } else {
            const resultados = document.querySelector('#resultado div');
            if (resultados != null) {
                resultados.remove();
            }

            const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
            const cantidad = seguro.cotizarSeguro(seguro);
            interfaz.mostrarResultado(seguro, cantidad);
            interfaz.mostarMensaje('Cotizando', 'correcto');
        }
    });

    const botonMostrarFormularioAuto = document.getElementById('mostrarFormularioAuto');
    const formularioSeguroAuto = document.getElementById('formularioSeguroAuto');

    botonMostrarFormularioAuto.addEventListener('click', function () {
        formularioSeguroAuto.classList.toggle('ocultar');
    });

    const max = new Date().getFullYear(),
        min = max - 20;
    const selectAnios = document.getElementById('anio');

    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        selectAnios.appendChild(option);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario');
    document.addEventListener('DOMContentLoaded', function (e) {
        e.preventDefault();
    });
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
