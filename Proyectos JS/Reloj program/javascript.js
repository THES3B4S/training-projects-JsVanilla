function Reloj(){
    let tiempoActual = new Date();
    let horas = tiempoActual.getHours().toString().padStart(2, 0);
    let amopm = tiempoActual.getHours() >= 12 ? `P.M` : `A.M`
    horas = horas % 12 || 12;
    let minutos = tiempoActual.getMinutes().toString().padStart(2, 0);
    let segundos = tiempoActual.getSeconds().toString().padStart(2, 0);
    document.getElementById("outputHora").textContent = `${horas}:${minutos}:${segundos} ${amopm}`;
}
setInterval(Reloj, 1000);