// Función para calcular la caducidad del alimento
function calcularCaducidad() {
    // Opciones de caducidad por alimento
    const opciones = {
        1: { dias: 1, horas1: 24, horas2: 24, atempere: 0, bolsa:35, descongelacion:0 },
        2: {  dias: 0, horas1: 24, horas2: 4, atempere: 0, bolsa:7, descongelacion:0},
        3: {  dias: 1, horas1: 24, horas2: 24, atempere: 0, bolsa:10, descongelacion:0  },
        4: {  dias: 2, horas1: 24, horas2: 24, atempere: 2, bolsa:4, descongelacion:0 },
        5: { dias: 0, horas1: 24, horas2: 4, atempere: 2, bolsa:4, descongelacion:0 },
        6: { dias: 0, horas1: 24, horas2: 6, atempere: 2, bolsa:1, descongelacion:0 },
        7: { dias: 2, horas1: 24, horas2: 24, atempere: 2, bolsa:2, descongelacion:0 },
        8: { dias: 0, horas1: 12, horas2: 6, atempere: 0, bolsa:3, descongelacion:0 },
        9: { dias: 0, horas1: 24, horas2: 4, atempere: 0, bolsa:4, descongelacion:0},
        10: { dias: 0, horas1: 24, horas2: 4, atempere: 0, bolsa:4, descongelacion:0 },
        11: { dias: 0, horas1: 24, horas2: 4, atempere: 0, bolsa:1, descongelacion:0 },
        12: { dias: 0, horas1: 12, horas2: 4, atempere: 2, bolsa:0, descongelacion:0 },
        13: { dias: 0, horas1: 12, horas2: 4, atempere: 2, bolsa:0, descongelacion:0 },
        14: { dias: 0, horas1: 12, horas2: 6, atempere: 0, bolsa:3, descongelacion:0 },
        15: { dias: 2, horas1: 24, horas2: 24, atempere: 0, bolsa:2, descongelacion:0 },
        16: { dias: 0, horas1: 24, horas2: 4, atempere: 0, bolsa:3, descongelacion:0 },
        17: { dias: 0, horas1: 24, horas2: 8, atempere: 2, bolsa:2, descongelacion:0},
        18: { dias: 0, horas1: 24, horas2: 8, atempere: 0, bolsa:14, descongelacion:0 },
        19: {dias: 0, horas1: 24, horas2: 6, atempere: 1, bolsa:3, descongelacion:12},
        20: {dias: 0, horas1: 24, horas2: 4, atempere: 2, bolsa:2, descongelacion:0},
        21: {dias: 0, horas1: 24, horas2: 24, atempere: 0, bolsa:3, descongelacion:0},
        22: {dias: 3, horas1: 24, horas2: 24, atempere: 0, bolsa:3, descongelacion:12},
        23: {dias: 2, horas1: 24, horas2: 24, atempere: 1, bolsa:2, descongelacion:6},
        24: {dias: 30, horas1: 24, horas2: 24, atempere: 0, bolsa:30, descongelacion:0 },
        25: {dias: 4, horas1: 24, horas2: 24, atempere: 0, bolsa:4, descongelacion:0},
        26: {dias: 30, horas1: 24, horas2: 24, atempere: 0, bolsa:30, descongelacion:0},
        27: {dias: 4, horas1: 24, horas2: 24, atempere: 0, bolsa:4, descongelacion:0},
        28: {dias: 7, horas1: 24, horas2: 24, atempere: 0, bolsa:120, descongelacion:0},
        29: {dias: 4, horas1: 24, horas2: 24, atempere: 0, bolsa:4, descongelacion:0},
        30: {dias: 4, horas1: 24, horas2: 24, atempere: 0, bolsa:4, descongelacion:0},
        31: {dias: 0, horas1: 24, horas2: 12, atempere: 0, bolsa:5, descongelacion:12},
        32: {dias: 5, horas1: 24, horas2: 24, atempere: 0, bolsa:5, descongelacion:12}
    };

    // Obtener la opción seleccionada
    const opcion = parseInt(document.getElementById('opcion').value);
    const { dias1: dias, horas1: horas1, horas2:horas2,atemperes:atempere,dias2:bolsa,descongelado:descongelacion } = opciones[opcion] || { dias1: 0, horas1: 0,horas2:0,atemperes:0,dias2:0,descongelado:0 };

    // Fecha y hora actual
    const ahora = new Date(); // fecha y hora actual
    let fechaActual = new Date(ahora); 
    fechaActual.setDate(ahora.getDate() + dia_caducidad);

    let hora_final = ahora.getHours() + hora_caducidad;
    let fechaCaducidad = fechaActual.toLocaleDateString('es-ES');
    let horaCaducidad = hora_final >= 24 ? hora_final - 24 : hora_final;

    // Ajustar la fecha final si excede los días en el mes
    let fecha_final = fechaActual.getDate();
    let mes = fechaActual.getMonth() + 1;
    if ([1, 3, 5, 7, 8, 10, 12].includes(mes)) {
        if (fecha_final > 31) {
            fecha_final -= 31;
        }
    } else if ([4, 6, 9, 11].includes(mes)) {
        if (fecha_final > 30) {
            fecha_final -= 30;
        }
    } else if (mes === 2) {
        let mes_bisiesto = (fechaActual.getFullYear() % 4 === 0) ? 29 : 28;
        if (fecha_final > mes_bisiesto) {
            fecha_final -= mes_bisiesto;
        }
    }

    // Mostrar los resultados
    document.getElementById('resultado').innerHTML = `
        Fecha actual: ${ahora.toLocaleDateString('es-ES')}<br>
        Hora actual: ${ahora.toLocaleTimeString('es-ES')}<br>
        Caducidad: ${fecha_final.toString().padStart(2, '0')}/${(mes).toString().padStart(2, '0')}<br>
        Hora caducidad: ${horaCaducidad.toString().padStart(2, '0')}:00
    `;
}

// Añadir evento al cargar la página para asegurar que el script funciona
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcular').addEventListener('click', calcularCaducidad);
});
