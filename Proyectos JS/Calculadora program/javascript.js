let Display = document.getElementById('Display'); // Obtenemos el elemento con id 'Display' del DOM y lo asignamos a la variable Display

// Función para agregar un valor al display
function agregarADisplay(input) {
    Display.value += input; // Concatenamos el valor del input al valor actual del display
}

// Función para borrar el contenido del display
function borrarDisplay() {
    Display.value = ""; // Establecemos el valor del display a una cadena vacía, limpiándolo
}

// Función para calcular el resultado de la expresión en el display
function calcular() {
    try {
        // Evaluamos la expresión en el display utilizando eval()
        Display.value = eval(Display.value);

        // Verificamos si el resultado es NaN (no es un número)
        if (isNaN(Display.value)) {
            throw Error; // Lanzamos un error si el resultado no es un número
        }

        // Verificamos si el resultado no es finito (Infinity o -Infinity)
        if (!isFinite(Display.value)) {
            throw Error; // Lanzamos un error si el resultado no es finito
        }
    } catch (error) {
        // Si ocurre un error, establecemos el display a "Error"
        Display.value = "Error";

        // Después de 500 milisegundos, limpiamos el display
        setTimeout(() => Display.value = "", 500);
    }
}
