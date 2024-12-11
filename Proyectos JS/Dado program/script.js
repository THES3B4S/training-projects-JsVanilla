document.getElementById(`lanzarD`).onclick = function () {
    let dadosResultado=[]
    let imagenes=[]
    for (let i = 1 ; i <= document.getElementById(`numeroD`).value; i++) {
        let dado = Math.trunc( Math.random()*6) +1
        dadosResultado.push(dado)
        imagenes.push(`<img src='Caras/${dado}.svg' alt='numero ${dado}' width="30px">`)
    }
    document.getElementById(`outputTexto`).textContent = dadosResultado.join(' ')
    document.getElementById(`outputImagenes`).innerHTML = imagenes.join(' ')
}