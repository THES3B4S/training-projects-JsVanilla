let iniciado = false; // Variable para controlar si el cronómetro está en funcionamiento
let tiempoInicio = 0; // Variable para almacenar el tiempo de inicio
let elapsado = 0; // Variable para almacenar el tiempo transcurrido
let temporizador; // Variable para almacenar el ID del temporizador

function iniciar() {
    if (!iniciado) { // Verifica si el cronómetro no está en funcionamiento
        tiempoInicio = Date.now() - elapsado; // Calcula el tiempo de inicio considerando el tiempo ya transcurrido
        temporizador = setInterval(Actualizar, 10); // Configura el temporizador para llamar a la función Actualizar cada 10 milisegundos
        iniciado = true; // Cambia el estado a iniciado
    }
}

function detener() {
    if (iniciado) { // Verifica si el cronómetro está en funcionamiento
        clearInterval(temporizador); // Detiene el temporizador
        iniciado = false; // Cambia el estado a no iniciado
    }
}

function reiniciar() {
    clearInterval(temporizador); // Detiene el temporizador
    tiempoInicio = 0; // Resetea el tiempo de inicio
    elapsado = 0; // Resetea el tiempo transcurrido
    document.getElementById(`Contador`).textContent = `00:00:00:00`; // Resetea el contenido del contador a 00:00:00:00
    iniciado = false; // Cambia el estado a no iniciado
}

function Actualizar() {
    elapsado = Date.now() - tiempoInicio; // Calcula el tiempo transcurrido desde el inicio
    let horas = Math.floor(elapsado / (1000 * 60 * 60)); // Calcula las horas transcurridas
    let minutos = Math.floor((elapsado / (1000 * 60)) % 60); // Calcula los minutos transcurridos
    let segundos = Math.floor((elapsado / 1000) % 60); // Calcula los segundos transcurridos
    let milisegundos = Math.floor((elapsado % 1000) / 10); // Calcula los milisegundos transcurridos

    // Actualiza el contenido del elemento con id "Contador" con el tiempo formateado
    document.getElementById(`Contador`).textContent = `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}:${String(milisegundos).padStart(2, "0")}`;
}

/*
Variables Globales:
let iniciado = false;
Declara una variable booleana para controlar si el cronómetro está activo.
let tiempoInicio = 0;
Declara una variable para almacenar el momento exacto en que el cronómetro inicia.
let elapsado = 0;
Declara una variable para almacenar el tiempo transcurrido.
let temporizador;
Declara una variable para almacenar el ID del temporizador que será usado por setInterval.
Función iniciar:
Verifica si el cronómetro no está activo usando if (!iniciado).
Si no está activo, establece el tiempo de inicio restando elapsado del tiempo actual (Date.now()).
Inicia un temporizador que llama a la función Actualizar cada 10 milisegundos (setInterval(Actualizar, 10)).
Cambia el estado de iniciado a true para indicar que el cronómetro está en funcionamiento.
Función detener:
Verifica si el cronómetro está activo usando if (iniciado).
Si está activo, detiene el temporizador usando clearInterval(temporizador).
Cambia el estado de iniciado a false para indicar que el cronómetro se ha detenido.
Función reiniciar:
Detiene el temporizador usando clearInterval(temporizador).
Reinicia tiempoInicio y elapsado a 0.
Actualiza el contenido del elemento con id Contador en el DOM a 00:00:00:00.
Cambia el estado de iniciado a false para indicar que el cronómetro se ha reiniciado.
Función Actualizar:
Calcula el tiempo transcurrido restando tiempoInicio del tiempo actual (Date.now()).
Calcula las horas, minutos, segundos y milisegundos transcurridos:
Math.floor(elapsado / (1000 * 60 * 60)) para horas.
Math.floor((elapsado / (1000 * 60)) % 60) para minutos.
Math.floor((elapsado / 1000) % 60) para segundos.
Math.floor((elapsado % 1000) / 10) para milisegundos.
Actualiza el contenido del elemento con id Contador con el tiempo formateado, usando padStart(2, "0") para asegurarse de que cada parte tenga al menos dos dígitos.
 */