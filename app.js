var vidaJugador

var jugador = {
    name: 'Juan',
    age: 23,
    vida: {
        detalle: 'total de vida en porcentaje',
        cantidad: 30,
    },
    armas: [
        {
            name: 'arma1',
            balas: 5,
        },
        {
            name: 'arma2',
            balas: 0,
        },
        {
            name: 'arma3',
            balas: 3,
        }
    ],
    escudos: [
        {
            name: 'escudo1',
            porcentaje: 30,
        },
        {
            name: 'escudo2',
            porcentaje: 40,
        },
        {
            name: 'escudo3',
            porcentaje: 0,
        }
    ]
}

function sumarVida() {
    var cantVida = parseInt(document.getElementById('cantVida').value)
    console.log('Cantidad vida ingresada: ', cantVida)
    // Escriba su codigo debajo

    jugador.vida.cantidad = cantVida + jugador.vida.cantidad
        
    
    // ------------------------------
    console.log('sumarVida: ', jugador)
    document.getElementById('cantVida').value = ''
}

function sumarBalas() {
    var cantBalas = parseInt(document.getElementById('cantBalas').value)
    var nombreArma = document.getElementById('nombreArma').value
    console.log('Cantidad de balas ingresada:', cantBalas, 'Nombre Arma:', nombreArma)
    // Escriba su codigo debajo

    switch (nombreArma) {
        case 'arma1': jugador.armas[0].balas = cantBalas + jugador.armas[0].balas
            break;
        case 'arma2': jugador.armas[1].balas = cantBalas + jugador.armas[1].balas
            break;
        case 'arma3': jugador.armas[2].balas = cantBalas + jugador.armas[2].balas
            break;
    }
    
    // ------------------------------
    console.log('sumarBalas: ', jugador)
    document.getElementById('cantBalas').value = ''
    document.getElementById('nombreArma').value = ''
}

function sumarEscudo() {
    var cantEscudo = parseInt(document.getElementById('cantEscudo').value)
    var nombreEscudo = document.getElementById('nombreEscudo').value
    console.log('Cantidad de escudo ingresado:', cantEscudo, 'Nombre Escudo:', nombreEscudo)
    // Escriba su codigo debajo

    if(nombreEscudo === 'escudo1') {
        jugador.escudos[0].porcentaje = cantEscudo + jugador.escudos[0].porcentaje

 }  else if (nombreEscudo === 'escudo2') {
        jugador.escudos[1].porcentaje = cantEscudo + jugador.escudos[1].porcentaje
     }
    else if(nombreEscudo === 'escudo3') {
        jugador.escudos[2].porcentaje = cantEscudo + jugador.escudos[2].porcentaje
        }


    // ------------------------------
    console.log('sumarEscudo: ',jugador)
    document.getElementById('cantEscudo').value = ''
    document.getElementById('nombreEscudo').value = ''
}

function nuevaArma() {
    var nuevaArmaNombre = document.getElementById('nuevaArmaNombre').value
    var nuevaArmaCantBalas = parseInt(document.getElementById('nuevaArmaCantBalas').value)
    console.log('Nombre nueva arma:', nuevaArmaNombre, 'cant. Balas:', nuevaArmaCantBalas)
    // Escriba su codigo debajo

    var pusheandoConTrampa = {
        name: nuevaArmaNombre,
        balas: nuevaArmaCantBalas,
    }

    jugador.armas.push(pusheandoConTrampa)


    // ------------------------------
    console.log('nuevaArma: ', jugador)
    document.getElementById('nuevaArmaNombre').value = ''
    document.getElementById('nuevaArmaCantBalas').value = ''
}

window.onload = function () {
    console.log('Primer console log', jugador);
}
