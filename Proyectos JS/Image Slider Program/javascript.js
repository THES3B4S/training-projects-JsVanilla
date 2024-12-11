let nodoImagenes = document.getElementById("SliderC").querySelectorAll("img")
let indexInicio = 0;
let intervalId;

document.addEventListener("DOMContentLoaded", inicioSlider)

function mostrarSlider() {
    nodoImagenes.forEach((elemento)=> {elemento.style.display = "none"; elemento.classList.remove("aparecer")})
    nodoImagenes[indexInicio].style.display = "block"
    nodoImagenes[indexInicio].classList.add("aparecer")
}

function inicioSlider() {
    nodoImagenes[indexInicio].style.display = "block";
    intervalId = setInterval(()=>{
        if (indexInicio < nodoImagenes.length -1){
            indexInicio++;
            mostrarSlider()
        } else {
            indexInicio = 0;
            mostrarSlider()
        }
    }, 1000)
}

function atrasBoton(){
    if (indexInicio > 0){
        clearInterval(intervalId);
        indexInicio--;
        mostrarSlider()
    }
}

function sigBoton(){
    if (indexInicio < nodoImagenes.length -1){
        clearInterval(intervalId);
        indexInicio++;
        mostrarSlider()
    }
}