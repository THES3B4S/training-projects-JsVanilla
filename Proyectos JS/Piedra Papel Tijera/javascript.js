const outputScoreJugador = document.getElementById('outputScoreJugador'); //declaramos output visual
const outputScoreMaquina = document.getElementById('outputScoreMaquina'); //declaramos output visual
const outputResultado = document.body.querySelector("h1") //seleccionamos el primer h1 que se encuentre
let scoreJugador = 0; //declaramos variable para guardar score
let scoreMaquina = 0; //declaramos variable para guardar score

function decision(decisionJugador) {
    let arrayDecisiones = ["Piedra", "Papel", "Tijera"] // Lista de decisiones posibles para la maquina
    let decisionMaquina = arrayDecisiones[Math.floor(Math.random() * (arrayDecisiones.length))] // selecciona un index en el rango 0-2, el 3 se excluye
    document.getElementById('outputMaquina').textContent = decisionMaquina; //mostramos en el output la decisionMaquina
    document.getElementById('outputJugador').textContent = decisionJugador; //mostramos en el output el outputJugador
    if (decisionMaquina === decisionJugador) { //Si ambas decisiones son iguales, es un empate
        outputResultado.textContent = "EMPATE!" //cambia el outputResultado por EMPATE!
        outputResultado.style.color = "yellow" //cambia el color de outputResultado por amarillo
    } else {
        let haGanado; //declaramos variable con scope privado para que solo pueda ser usada localmente por el bloque
        switch (decisionJugador) { //tomamos la decision del jugador
            case "Piedra": //si es piedra
                haGanado = decisionMaquina === "Tijera" //haGanado = true porque decisionMaquina es igual a tijera
                break;
            case "Papel": //si es papel
                haGanado = decisionMaquina === "Piedra" //haGanado = true porque decisionMaquina es igual a piedra
                break;
            case "Tijera": //si es tijera
                haGanado = decisionMaquina === "Papel" //haGanado = true porque decisionMaquina es igual a papel
                break;
        }
        switch (true) { //tomamos el primer valor true que nos de cualquier case
            case haGanado: //supongamos que la var haGanado es false, en este caso este case lo omitiria
                outputResultado.textContent = "Has Ganado!"
                outputResultado.style.color = "lightgreen"
                scoreJugador++ //sumamos +1 al score del jugador
                break;

            case !haGanado: //con simbolo de negacion revertimos el false y da true, es decir la maquina ha ganado
                outputResultado.textContent = "Has Perdido!"
                outputResultado.style.color = "red"
                scoreMaquina++ //sumamos +1 al score de la maquina
                break;
        }
    }
    outputScoreJugador.textContent = String(scoreJugador); //por ultimo dentro del evento principal, mostramos el contenido en el outputScore
    outputScoreMaquina.textContent = String(scoreMaquina); //utilizamos String(var) para convertir el tipo de dato a String
}