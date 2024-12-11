console.log(`mensaje de consola`)
// TODO window.alert(`mensaje alerta ventana`)

document.getElementById("texto1").textContent = `Texto nuevo` //tomamos el elemento html con el id texto1 y cambiamos su contenido por texto nuevo

let xy; //crear variable
xy = 100; //declarar variable ya creada
let xyz = 100; //crear y declarar variable

const Pi = 3.1415 //crear variable que no se puede cambiar

console.log(typeof xy); //typeof saber tipo de variable string, int, float

console.log(`la variable xy es ${xy} y xyz ${xyz}`);

let boleano = true //boleano es V o F

//operadores arimeticos

let numero = 10

numero = numero + 2 //numero + 2
numero = numero - 2 //numero - 2
numero = numero * 2 //numero multiplicado por 2
numero = numero / 2 // numero divido en 2
numero = numero ** 2 // potenciado a la 2 10 x 10
numero = numero % 3 //residuo al dividir por 3 = 1

numero += 1 //numero +1
numero -= 1 //numero -1
numero *= 1 //numero mulplicado por 1
numero /= 1 //numero dividido por 1
numero **= 2 //potenciado a la 2 10 x 10
numero %= 3 //residuo al dividir por 3 = 1

numero++; //suma 1
numero--; //resta 1

console.log(`${6 / 2 ** (2 + 5)}`)//proceso -> 1. parentesis 2. potencias 3. multiplicaciones, divisiones, residuo 4. sumas y restas = 0.046875

//inputs

let input;

// TODO input = window.prompt(`texto el cual aparecera en el prompt`)
console.log(`escribiste esto en el prompt ${input}`)

document.getElementById("Enviarinput").onclick = function () {
    input = document.getElementById("input").value; // .value se utiliza para tomar el input como un valor
    console.log(input)
}

//convertir datos

let string = "21"
string = Number(string)
string = String(string)
string = Boolean(string)

//calcular circunferencia

document.getElementById("Enviarinput").onclick = function () {
    let input = Number(document.getElementById("input").value);
    console.log(`El radio es ${2 * input * Pi}`)
}

//contador
let contadorInicio = 0
document.getElementById("contador").textContent = contadorInicio

document.getElementById("incrementar").onclick = function () {
    contadorInicio++
    document.getElementById("contador").textContent = contadorInicio
}

document.getElementById("restar").onclick = function () {
    contadorInicio--
    document.getElementById("contador").textContent = contadorInicio
}

//Math objeto Math.funcion()
let mathobj;
mathobj = Math.round(Pi); // Redondea Pi al entero más cercano: 3
mathobj = Math.ceil(Pi);  // Redondea Pi hacia arriba: 4
mathobj = Math.trunc(Pi); // Trunca la parte decimal: 3
mathobj = Math.pow(Pi, 2); // Pi al cuadrado: 9.8696...
mathobj = Math.sqrt(Pi);  // Raíz cuadrada de Pi: 1.7724...
mathobj = Math.log(Pi);   // Logaritmo natural de Pi: 1.1447...
mathobj = Math.sin(Pi);   // Seno de Pi: 0 (muy cercano a cero)
mathobj = Math.cos(Pi);   // Coseno de Pi: -1
mathobj = Math.tan(Pi);   // Tangente de Pi: 0 (muy cercano a cero)
mathobj = Math.abs(Pi);   // Valor absoluto de Pi: 3.1415...
mathobj = Math.sign(Pi); //Signo de Pi: 1 (positivo)
mathobj = Math.floor(Pi); // Redondea Pi hacia abajo al entero más cercano Resultado: 3

let numtoFix = 123.462
console.log(numtoFix.toFixed(2)); // "123.46" / Redondea el número a dos decimales

//Math.random()
let numaleatorio = Math.trunc(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
let numaleatoriorango = Math.trunc(Math.random() * (10 - 3 + 1) + 3);
// Genera un número aleatorio entre 3 y 10 usando la fórmula Math.random() * (máximo - mínimo + 1) + mínimo
let minNum = 3; // Establece el valor mínimo del rango
let maxNum = 10; // Establece el valor máximo del rango
let numaleatoriorangov = Math.trunc(Math.random() * (maxNum - minNum + 1) + minNum);
// Genera un número aleatorio entre minNum (3) y maxNum (10) usando las variables


//IF, ELSE, ELSE IF condicionales
let edad = 13;
if (edad >= 18) { //Si edad es mayor o igual a 18
    console.log(`es mayor de 18`)
} else { //De lo contrario
    console.log(`es menor de 18`)
}
//Boolean
let Licencia = false;
if (Licencia) { //Tiene licencia
    console.log(`True`)
} else { //No tiene
    console.log(`False`)
}
//Truthy sera verdadero en un contexto boleano, lo contrario a falsy, es decir todo es truthy excepto las keywords falsy
//Falsy sera falso en un contexto boleano, es decir que en un if, si se usa solo el falsy sin una condicion, contara como falso
// false, 0, -0, "", null, undefined, NaN, 0n, document.all
if (0) {
    console.log(`truthy`)
} else {
    console.log(`0 es truthy`)
}// en este caso como podemos ver abajo al lado izquierdo esta el valor que va a tomar la variable si es truthy || valor en caso de ser falsy
const valorDefault = undefined || "falsy"


//Invertir boolean negacion / doble negacion
console.log(!Licencia) // True
let nombreBol = `Seba`;
console.log(!!nombreBol.startsWith(`S`)) // True

//Se empieza con IF y se termina con ELSE, en medio van los los ELSE IF, se termina al primer true
if (edad >= 18) { //Si es mayor o igual a 18
    console.log(`es mayor de 18`)
    if (Licencia) { //2/ Si tiene licencia
        console.log(`Si tiene licencia`)
    } else { //2/ De lo contrario
        console.log(`No tiene licencia`)
    }
} else if (edad < 0) { //Si edad es menor a 0
    console.log(`Su edad no puede ser menor a 0`)
} else if (edad == 0) { //Si edad es exactamente 0
    console.log(`Su edad es igual a 0`)
} else { // De lo contrario
    console.log(`Necesita tener 18 o mas`)
}

//AND = && / OR = || / NOT = !
if (edad < 18 && edad > 0) {
    console.log(`Esta dentro del rango de 0 a 17`); // Si la edad es menor a 18 y mayor a 0, imprime "Está dentro del rango de 0 a 17"
}
if (edad > 18 || edad < 0) {
    console.log(`Esta fuera del rango de 0 a 17`); // Si la edad es mayor a 18 o menor a 0, imprime "Está fuera del rango de 0 a 17"
} else {
    console.log(`Esta dentro del rango`); // De lo contario , imprime "Está dentro del rango"
}
if (!edad) { // Si edad no es 13, ejecutar
    console.log(`No tiene 13`);
} else { // Si edad es 13, ejecutar
    console.log(`Si tiene 13`);
}

// comparador estricto / == es igual, no coincide datatype/ === es igual, coincide datatype/ != no es igual, no coincide datatype/ !== no es igual, coincide el datatype
let PInumber = 3.14; // Inicializa la variable 'PInumber' con el valor 3.14

if (PInumber == "3.14") { // Compara el valor de 'PInumber' con la cadena "3.14" (conversión de tipos permitida)
    console.log(`es PI`); // Si son iguales, imprime "es PI"
} else {
    console.log(`no es PI`); // Si no son iguales, imprime "no es PI"
}

if (PInumber === "3.14") { // Compara el valor y el tipo de 'PInumber' con la cadena "3.14" (sin conversión de tipos)
    console.log(`es PI`); // Si son exactamente iguales, imprime "es PI"
} else {
    console.log(`no es exactamente PI, datatype diferente`); // Si no son exactamente iguales, imprime "no es exactamente PI, datatype diferente"
}

if (PInumber != "3.14") { // Compara si 'PInumber' no es igual a la cadena "3.14" (conversión de tipos permitida)
    console.log(`No es pi`); // Si no son iguales, imprime "No es pi"
} else {
    console.log(`es Pi`); // Si son iguales, imprime "es Pi"
}

if (PInumber !== "3.14") { // Compara si 'PInumber' no es exactamente igual a la cadena "3.14" (sin conversión de tipos)
    console.log(`No es exactamente PI, datatype diferente`); // Si no son exactamente iguales, imprime "No es exactamente PI, datatype diferente"
} else {
    console.log(`Es PI`); // Si son exactamente iguales, imprime "Es PI"
}

/* TODO FUNCIONA
// WHILE loop, ejecuta el bloque mientras la condición sea verdadera
let GameOver = false; // Inicializa la variable 'GameOver' en false
let primerNum;
let segundoNum;
while (!GameOver) { // Mientras 'GameOver' sea false, ejecuta el bloque
    window.alert(`Adivina los 2 números`); // Muestra un mensaje de alerta
    do {
        primerNum = window.prompt(`Ingresa el primer número`); // Solicita el primer número
    } while (primerNum==null || primerNum.trim()==``) // Si el prompt esta vacio, el while continua
    do {
        segundoNum = window.prompt(`Ingresa el segundo número`); // Solicita el segundo número
    } while (segundoNum==null || segundoNum.trim()==``) // Si el prompt esta vacio, el while continua

    if (primerNum == 1 && segundoNum == 2) { // Si el primer número es 1 y el segundo es 2
        window.alert(`¡Has adivinado!`); // Muestra un mensaje de éxito
        GameOver = true; // Cambia 'GameOver' a true para salir del bucle
    }
}
// Do-While loop, se ejecuta primero el bloque, después se verifica la condición
GameOver = false; // Reinicia la variable 'GameOver' a false
do {
    if (window.prompt(`Ingresa un número del 1 al 3`) == 2) { // Si el número ingresado es 2
        GameOver = true; // Cambia 'GameOver' a true para salir del bucle
        window.alert(`¡Has adivinado!`); // Muestra un mensaje de éxito
    }
} while (!GameOver); // Mientras 'GameOver' sea false, sigue ejecutando el bloque
     */

// FOR loop, se ejecuta un numero de veces limitado
//for (inicio ; condicion si es true se ejecuta si es false se termina ; frecuencia o patron)
for (let i = 1; i <= 5; i++) {
    if (i == 3) { //omite el codigo restante del bucle en caso de que sea true
        continue; //en caso de que sea break detiene el bucle por completo
    }
    console.log(i);
}

//Checkbox
//.checked
document.getElementById("enviarcheck").onclick = function () {
    if (document.getElementById("Echeckbox").checked) { // Si está seleccionado
        console.log("Checked")
    } else { // Si no está seleccionado
        console.log("Unchecked")
    }

    if (document.getElementById("visa").checked) { // Si se selecciona la opción Visa
        console.log("Visa")
    } else if (document.getElementById("mastercard").checked) { // Si se selecciona la opción Mastercard
        console.log("Mastercard")
    } else if (document.getElementById("paypal").checked) { // Si se selecciona la opción PayPal
        console.log("Paypal")
    } else { // Si no se selecciona ninguna opción
        console.log("Selecciona una opción")
    }
}

//Ternario / Condicion ? codeIfTrue : codeIfFalse
let esMayor = edad >= 18 ? "Si" : "No"; // Verifica si la edad es mayor o igual a 18, si es así, es "Si", de lo contrario, es "No"
let compra = 100; // Establece el valor de la compra en 100
let descuento = compra >= 100 ? 10 : 0; // Verifica si la compra es mayor o igual a 100, si es así, aplica un descuento de 10, de lo contrario, el descuento es 0

//SWITCH se utiliza para ser mas eficiente replazando varios else if
let nota = 30; // Inicializa la variable 'nota' con un valor de 30
switch (true) { // Usamos 'true' para evaluar cada caso como una expresión booleana, solo se ejecuta el bloque sea true, si colocaramos false, solo se ejecutaria el bloque que de false
    case nota >= 90: // Si 'nota' es mayor o igual a 90
        console.log(`A`); // Muestra "A" en la consola
        break; // se rompe el switch en caso de que se cumpla el case
    case nota >= 80: // Si 'nota' es mayor o igual a 80
        console.log(`B`); // Muestra "B" en la consola
        break;
    case nota >= 70: // Si 'nota' es mayor o igual a 70
        console.log(`C`); // Muestra "C" en la consola
        break;
    default: // Si 'nota' no coincide con ningún caso anterior
        console.log(`F`); // Muestra "F" en la consola
}
let diaSem = 1; // Inicializa la variable 'diaSem' con el valor 1
switch (diaSem) { // Evaluamos el valor de 'diaSem'
    case 1: // Si 'diaSem' es 1
        console.log(`Lunes`); // Imprime "Lunes" en la consola
        break;
    case 2: // Si 'diaSem' es 2
        console.log(`Martes`); // Imprime "Martes" en la consola
        break;
    case 3: // Si 'diaSem' es 3
        console.log(`Miercoles`); // Imprime "Miércoles" en la consola
        break;
}

//String Methods manipular strings y extraer variable.funcion
let letras = "ABCDB ";
console.log(letras.charAt(1)); // Muestra el carácter en la posición 1: "B"
console.log(letras.indexOf("B")); // Encuentra la primera aparición de "B": 1
console.log(letras.lastIndexOf("B")); // Encuentra la última aparición de "B": 4
console.log(letras.length); // Muestra la longitud de la cadena: 6
console.log(letras.trim()); // Elimina espacios en blanco al principio y al final: "ABCDB"
console.log(letras.toUpperCase()); // Convierte a mayúsculas: "ABCDB "
console.log(letras.toLowerCase()); // Convierte a minúsculas: "abcdb "
console.log(letras.repeat(3)); // Repite la cadena 3 veces: "ABCDB ABCDB ABCDB "
console.log(letras.startsWith(`A`)); // Verifica si empieza con "A": true
console.log(letras.endsWith(` `)); // Verifica si termina con un espacio: true
console.log(letras.includes(`C`)); // Verifica si incluye "C": true
console.log(letras.replaceAll(`D`, `Remplazado`)); // Reemplaza todas las apariciones de "D" por "Remplazado": "ABCRemplazadoB "
console.log(letras.padStart(7, `P`)); // Rellena la cadena al principio hasta la longitud 7 con "P": "PABCDB "
console.log(letras.padEnd(7, `P`)); // Rellena la cadena al final hasta la longitud 7 con "P": "ABCDB P"
console.log(letras.split(``)) //Divide la cadena por separador indicado en este caso no hay pero si hubiese se puede colocar `,``-``/` ["A", "B", "C", "D", "B"]
//Slicing / cortar
let nombreP = `Seba Ink`; // Inicializa la variable 'nombreP' con el valor "Seba Ink"
console.log(nombreP.slice(0, 4)); // Muestra los caracteres del índice 0 al 4 (no inclusivo): "Seba"
console.log(nombreP.slice(5, 8)); // Muestra los caracteres del índice 5 al 8 (no inclusivo): "Ink"
console.log(nombreP.slice(-1)); // Muestra el último carácter: "k"
console.log(nombreP.slice(0, nombreP.indexOf(` `))); // Muestra los caracteres desde el inicio hasta el espacio: "Seba"
console.log(nombreP.slice(nombreP.indexOf(` `) + 1)); // Muestra los caracteres después del espacio: "Ink"
let mailP = `sebas@seba.ink`
console.log(mailP.slice(mailP.indexOf(`@`) + 1)); // Muestra el dominio del correo electrónico (todo lo que está después del "@")
//Acceder a un caracter en especifico de un string
console.log(nombreP[0]) //En este caso el index 0 es la S


//Chaining method, metodo de cadena
nombreP = `SEbA INk`
console.log(nombreP.trim().charAt(0).toUpperCase() + nombreP.replaceAll(` `, ``).slice(1).toLowerCase());
/*console.log(
    nombreP.trim().charAt(0).toUpperCase() + // Elimina espacios en blanco a los lados, obtiene el primer carácter y lo convierte a mayúscula
    nombreP.replaceAll(` `,``).slice(1).toLowerCase() // Elimina todos los espacios y convierte el resto a minúsculas
);*/

//Function Funciones / se utiliza para ahorrar codigo, en caso de tener solo parentesis() es void (no devuelve nada), si acepta parametros (x,y) entonces estos devolveran un valor
//Void
function happyBirthday() {
    console.log(`Happy birthday to you`);
}

happyBirthday()

//parametros
function happyBirthdayP(persona, edad) {
    console.log(`Happy birthday to you ${persona}`); // Imprime un mensaje de cumpleaños con el nombre de la persona
    console.log(`Cumples ${edad} años`); // Imprime la edad de la persona
}

function sumarDosNum(num1, num2) {
    let resultado = num1 + num2; // Suma los dos números
    return resultado; // Devuelve el resultado de la suma
}

console.log(sumarDosNum(1, 2)); // Llama a la función sumarDosNum con 1 y 2 como argumentos y muestra el resultado (3) en la consola

function isMail(mail) {
    return !!mail.includes(`@`); // Usa la doble negación para verificar si el mail contiene un '@', devuelve true o false
}

function isMailT(mail) {
    return mail.includes(`@`) ? true : false; // Usa el operador ternario para verificar si el mail contiene un '@', devuelve true o false
}

isMail(`sebas@seba.ink`); // Llama a la función isMail con el correo 'sebas@seba.ink' y verifica si contiene un '@'

//declaracion en bloques, var declara en ambito de funciones, let o const en bloques locales multiples let con mismo nombre de variable / Variable scope
let startV = true;
if (startV) {
    let x = 1 //Misma variable, diferente output / let / const
    console.log(x);
}
if (startV) {
    let x = 2 //Misma variable, diferente output / let /const
    console.log(x)
}
//Var / sin ninguna de las 3, es declaracion global.
if (startV) {
    var xx = 1 //Misma variable
    console.log(xx);
}
if (startV) {
    var xx = 2 //Misma variable, sobreescribe la variable xx / var declara en todo el bloque
    console.log(xx)
}

//ARRAYS = estructura que puede almacenar mas de un valor

let frutas = [`pera`, `banana`, `naranja`]
//acceder a informacion de un array
console.log(frutas[0]); // posicion siempre empieza en 0, pera
//reasignar un elemento de array
frutas[2] = `manzana` //naranja remplazada por manzana
//manipulacion de arrays
frutas.push(`papaya`) //agrega un elemento al final del array
frutas.pop() //elimina el ultimo elemento
frutas.unshift(`mango`) //agrega un elemento al inicio del array
frutas.shift() //Elimina el primer elemento de un array
frutas.length //Numero de elementos en un array
frutas.indexOf(`banana`) //Encuentra el elemento el cual coincida, en este caso la banana es decir 1, si no existe -1
frutas.find(fruta => fruta === "pera") //funciona similar al filter pero deja de ejecutarse solo con 1 condicion true, en este caso solo devuelve el elemento pera
frutas.splice(1, 1) //En este caso elimina la banana del array
frutas.findIndex(fruta => fruta === "naranja") //util para array de objetos, nos entrega un objeto y con ello podemos hacer condicionales
//Ejemplo de combinacion de las 2 / cart.splice(cart.findIndex(cartItem => cartItem.id === productId), 1);

// Recorrer un array con FOR o con FOR OF, ambas son válidas
for (let i = 0; i < frutas.length; i++) { // Itera desde 0 hasta la longitud del array 'frutas'
    console.log(frutas[i]); // Imprime cada elemento del array 'frutas' en la consola
}
for (let i = frutas.length - 1; i >= 0; i--) { // Itera desde el último elemento hasta el primero
    console.log(frutas[i]); // Imprime cada elemento del array 'frutas' en orden inverso en la consola
}
for (let fruta of frutas) { // Itera sobre cada elemento del array 'frutas'
    console.log(fruta); // Imprime cada elemento del array 'frutas' en la consola
}
// Ordenar array
frutas.sort(); //Ordena array ascendiente
frutas.sort().reverse(); //Ordena array descendiente

//Separador Unpacking array ...array / separa strings
let numerosArray = [1, 3, 5, 2, 4]
// console.log(Math.max(numerosArray)); Esto daria NaN
console.log(Math.max(...numerosArray)) //encuentra el elemento con valor mas alto
console.log(Math.min(...numerosArray)) //encuentra el elemento con valor minimo
//Separar Strings
let stringALista = [...letras] //separa el string y lo convierte a array [A,B,C]
stringALista = [...letras].join(`-`) //separa el string y agrega divisiones A-B-C (array a string)
//Combinar 2 arrays
let arrayCombinado = [...frutas, ...numerosArray, `fresa`, `coco`] //Combinacion de arrays, se le pueden agregar mas elementos

// ...rest ayuda a convertir diferentes strings en un array
function cajonObjetos(...objetos) { // El parámetro ...objetos convierte los argumentos en un array
    return objetos; // Retorna el array de objetos
}

console.log(cajonObjetos(`llaves`, `peine`, `chanclas`)); // ["llaves", "peine", "chanclas"]

function totalIngreso(...ingreso) { // El parámetro ...ingreso convierte los argumentos en un array
    let suma = 0; // Inicializa la suma en 0
    for (let ing of ingreso) { // Itera sobre cada elemento del array ingreso
        suma += ing; // Suma cada elemento a suma
    }
    return suma; // Retorna la suma total
}

console.log(totalIngreso(1, 2, 3, 4, 5)); // 15

function combinarStrings(...strings) {
    return strings.join(` `)
}

console.log(combinarStrings(`sebastian`, `monroy`, `suarez`))

// Callbacks: cuando esté listo, haz esto después
hello(bye); // Llama a la función hello y pasa la función bye como callback
function hello(callback) { // Define la función hello que recibe un callback como argumento
    console.log(`hi`); // Imprime "hi" en la consola
    callback(); // Llama a la función callback
}

function bye() { // Define la función bye
    console.log("bye"); // Imprime "bye" en la consola
}

// .ForEach() metodo para iterar sobre elementos de un array y aplicar funciones (callback) a cada elemento
// 'elemento', 'index', 'array' son proporcionados al usar ForEach
let arrayNumeros = [1, 2, 3, 4, 5];
arrayNumeros.forEach(doblarElementos); // Aplica la función 'doblarElementos' a cada elemento del array
arrayNumeros.forEach(mostrarElemento); // Aplica la función 'mostrarElemento' a cada elemento del array
function doblarElementos(elemento, index, array) {
    array[index] = elemento * 2; // Doble el valor de cada elemento y lo guarda en su posición original
}

function mostrarElemento(elemento) {
    console.log(elemento); // Imprime cada elemento del array en la consola
}

let arrayLetras = ['a', 'b', 'c'];
arrayLetras.forEach((elemento, index, array) => {
    array[index] = elemento.toUpperCase(); // Convierte cada elemento del array a mayúsculas
});

// .map() acepta un callback y aplica la función a cada elemento, devolviendo un nuevo array
let arrayLetrasMayus = arrayLetras.map(convertirAMayus); // Aplica la función convertirAMayus a cada elemento de arrayLetras y devuelve un nuevo array
function convertirAMayus(elemento) { // Define la función convertirAMayus que recibe un elemento
    return elemento.toUpperCase(); // Devuelve el elemento en mayúsculas
}

let fechas = [`2024-1-10`, `2025-2-20`, `2025-3-30`]; // Array de fechas en formato "AAAA-M-D"
let fechasCol = fechas.map(organizarFormato); // Usa map() para aplicar la función organizarFormato a cada elemento del array
function organizarFormato(elemento) { // Define la función organizarFormato
    let fecha = elemento.split(`-`); // Divide la cadena en un array usando el carácter "-"
    return `${fecha[1]}-${fecha[2]}-${fecha[0]}`; // Reorganiza el formato a "M-D-AAAA"
}

console.log(fechasCol); // Imprime el array de fechas con el nuevo formato

// .Filter() Solo los elementos que devuelven true en la función callback se incluyen en el nuevo array
let arrayNumeross = [1, 2, 3, 4, 5, 6, 7]; // Array inicial de números
let arrayPares = arrayNumeross.filter(esPar); // Filtra los números pares usando la función esPar
let arrayImpares = arrayNumeross.filter(esImpar); // Filtra los números impares usando la función esImpar
function esPar(elemento) { // Define la función esPar
    return elemento % 2 === 0; // Retorna true si el elemento es par (divisible por 2 sin residuo)
}

function esImpar(elemento) { // Define la función esImpar
    return elemento % 2 !== 0; // Retorna true si el elemento es impar (no divisible por 2 sin residuo)
}

// .reduce() metodo que ejecuta una función de callback sobre cada elemento del array, acumulando el resultado
let compras = [20, 10, 30, 5, 10, 30, 3, 5]; // Array de valores de compras
function total(previo, siguiente) { // Define la función callback 'total'
    return previo + siguiente; // Suma el valor previo con el siguiente
}

function maximo(previo, siguiente) { // Define la función callback 'maximo'
    return Math.max(previo, siguiente); // Devuelve el valor máximo entre el previo y el siguiente
}

console.log(compras.reduce(total)); // Usa reduce() para obtener la suma total de los valores en 'compras'
console.log(compras.reduce(maximo)); // Usa reduce() para obtener el valor máximo en 'compras'

// function expressions = un modo de definir funciones como valores o variables
let comprasPares = compras.filter(function (elemento) {
    return elemento % 2 === 0;
})
console.log(comprasPares);

// Arrow function () => {}
const holaa = (nombre, segundonombre) => console.log(nombre, segundonombre); //variable declarada como funcion
holaa(`Seba`, `ink`) //podemos llamar la funcion
setTimeout(function () {
    console.log(`test1`)
}, 3000) //setTimeout(function(){}, delay)
setTimeout(() => {
    console.log(`test2`)
}, 3000) //setTimeout(()=>{}, delay)
const hola3 = (nombre, segundonombre) => setTimeout(console.log(nombre + segundonombre), 3000)
hola3(`seba`, `ink`);
//definir funciones como variables combinando .map, variable = array.metodo( (elemento)=> {Math.pow(elemento, 2)} )
const alCuadrado = arrayNumeross.map((elemento) => Math.pow(elemento, 2));
console.log(alCuadrado);
const alCubo = arrayNumeross.map((elemento) => Math.pow(elemento, 3))
console.log(alCubo);

//Object Objetos Coleccion de propiedades relacionada o metodos, puede representar objetos reales(personas, productos, lugares)
//object = {key:value or function}
const persona1 = {
    nombre: `Seba`,
    apellido: `ink`,
    empleado: false,
    saludo: function () {
        console.log(`Hola soy ${this.nombre}`)
    } //this. no funciona con arrows ()=>
}

//Constructores
function construirCarro(referencia, modelo, color) { //creamos un constructor el cual recibira 3 parametros
    this.referencia = referencia; //this.variable = variable parametro function
    this.modelo = modelo;
    this.color = color;
    this.claxon = function () {
        console.log(`Claxon del ${this.referencia} suena Piii`)
    };
}

const carro11 = new construirCarro(`mercedez benz`, 2024, `rojo`) //declaramos una variable y al asignar
carro11.claxon();                                                                         //colocamos los parametros que nos exige el constructor

//Clases = otorga una forma mas estructurada y limpia de trabajar con objetos comparado a la forma tradicional de constructores
//static keyword, encapsulamiento, herencia
class Producto { //Creamos la clase producto
    constructor(nombre, precio) { //Creamos un constructor ! debe llamarse constructor(valores a recibir, ,)
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarProducto() { //Funciones no es necesario colocar function
        console.log(`Producto:${this.nombre} Precio:$${this.precio}`);
    }
}

const pantaloness = new Producto(`pantalones`, 35000); //creamos variable y le asignamos un objeto (new clase o objeto(parametros))
pantaloness.mostrarProducto(); //llamamos a la clase Producto.funcion()

// La palabra clave 'static' se utiliza para declarar variables de clase y no de instancia.
class Users {
    static usersCount = 0;                   // La variable 'usersCount' es una propiedad estática de la clase Users.
    constructor(nombre) {
        this.nombre = nombre;                // La variable 'nombre' es una propiedad de instancia.
        Users.usersCount++;                  // Incrementa el contador de usuarios cada vez que se crea una nueva instancia.
    }

    mostrarNombre() {
        console.log(`Mi nombre es ${this.nombre}`);   // Metodo para mostrar el nombre del usuario.
    }

    static contadorUsuarios() {
        console.log(`El número de usuarios creados es ${Users.usersCount}`); // Metodo estático para mostrar el número de usuarios creados.
    }
}

const Usuario1 = new Users('Juan');         // Creación de nuevas instancias de la clase Users.
const Usuario2 = new Users('Juan2');        // Creación de nuevas instancias de la clase Users.
console.log(Users.usersCount);              // Muestra el número total de usuarios creados hasta el momento.
Usuario2.mostrarNombre();                   // Muestra el nombre del segundo usuario.
Users.contadorUsuarios();                   // Muestra el número de usuarios creados utilizando el metodo estático.

// Herencia se utiliza para ahorrar líneas de código
// Clase base Animal
class Animal {
    constructor(nombre) { // Constructor que inicializa el nombre del animal
        this.Nombreanimal = nombre;
        this.Estavivo = true; // Propiedad para determinar si el animal está vivo
    }

    comer() { // Metodo que retorna un mensaje indicando que el animal está comiendo
        return `este ${this.Nombreanimal} está comiendo`;
    }

    dormir() { // Meéetodo que retorna un mensaje indicando que el animal está durmiendo
        return `este ${this.Nombreanimal} está durmiendo`;
    }
}

// Clase hija Conejo que hereda de Animal
class Conejo extends Animal {
    constructor(velocidadCorrida) {
        super("Conejo"); // Llama al constructor de la clase base con el nombre del animal
        this.velocidadCorrida = velocidadCorrida; // Propiedad específica de Conejo
    }

    correr() { // Metodo que retorna un mensaje indicando que el conejo está corriendo
        return `este ${this.Nombreanimal} está corriendo a ${this.velocidadCorrida}`;
    }
}

// Clase hija Pez que hereda de Animal
class Pez extends Animal {
    constructor(velocidadNadado) {
        super("Pez"); // Llama al constructor de la clase base con el nombre del animal
        this.velocidadNadado = velocidadNadado; // Propiedad específica de Pez
    }

    nadar() { // Metodo que retorna un mensaje indicando que el pez está nadando
        return `este ${this.Nombreanimal} está nadando a ${this.velocidadNadado}`;
    }
}

// Clase hija Pájaro que hereda de Animal
class Pajaro extends Animal {
    constructor(velocidadVuelo) {
        super("Pájaro"); // Llama al constructor de la clase base con el nombre del animal
        this.velocidadVuelo = velocidadVuelo; // Propiedad específica de Pájaro
    }

    volar() { // Metodo que retorna un mensaje indicando que el pájaro está volando
        return `este ${this.Nombreanimal} está volando a ${this.velocidadVuelo}`;
    }
}

// Crear una instancia de la clase Conejo
let conejo1 = new Conejo();
// Cambiar la propiedad Estavivo del conejo a false
conejo1.Estavivo = false;
// Imprimir el estado del conejo
console.log(conejo1.Estavivo); // Output: false
// Imprimir mensajes utilizando métodos de las clases
console.log(new Pajaro(`20Km/h`).volar()); // Output: este Pájaro está volando a 20Km/h
console.log(new Pez().comer()); // Output: este Pez está comiendo
console.log(new Pajaro().comer()); // Output: este Pájaro está comiendo

// GETTERS y SETTERS podemos validar y modificar un valor cuando es leido o escrita una propiedad
// Definimos una clase llamada Rectangulo
class Rectangulo {
    // El constructor se llama cuando creamos una nueva instancia de la clase
    constructor(ancho, altura) {
        // Aquí estamos utilizando los setters para asignar los valores
        this.ancho = ancho; // Llama al setter de 'ancho'
        this.altura = altura; // Llama al setter de 'altura'
    }

    // El setter para 'ancho' se asegura de que el valor sea válido antes de asignarlo
    set ancho(Nuevoancho) {
        if (typeof Nuevoancho === 'number' && Nuevoancho > 0) {
            this._ancho = Nuevoancho; // Asigna el valor si es un número positivo
        } else {
            console.error('El valor ancho debe ser un número y mayor a 0'); // Muestra un error si el valor es inválido
        }
    }

    // El setter para 'altura' se asegura de que el valor sea válido antes de asignarlo
    set altura(Nuevoaltura) {
        if (typeof Nuevoaltura === 'number' && Nuevoaltura > 0) {
            this._altura = Nuevoaltura; // Asigna el valor si es un número positivo
        } else {
            console.error('El valor altura debe ser un número y mayor a 0'); // Muestra un error si el valor es inválido
        }
    }

    // El getter para 'ancho' devuelve el valor almacenado formateado a 1 decimal
    get ancho() {
        return this._ancho.toFixed(1); // Devuelve el valor de 'ancho' formateado a 1 decimal
    }

    // El getter para 'altura' devuelve el valor almacenado formateado a 1 decimal
    get altura() {
        return this._altura.toFixed(1); // Devuelve el valor de 'altura' formateado a 1 decimal
    }

    // Metodo para calcular el área del rectángulo
    Area() {
        return (this._ancho * this._altura).toFixed(1); // Calcula el área y la devuelve formateada a 1 decimal
    }
}

// Intentamos crear una instancia de la clase Rectangulo con valores inválidos
console.log(new Rectangulo(-1000, 'hola')); // Debería mostrar errores en la consola
// Crear una instancia de la clase Rectangulo con valores válidos
let Rectangulo1 = new Rectangulo(2, 3);
// Imprimir la altura y el ancho del rectángulo utilizando los getters
console.log(`La altura de Rectangulo1 es ${Rectangulo1.altura} y el ancho es ${Rectangulo1.ancho}`); // Output: La altura de Rectangulo1 es 3.0 y el ancho es 2.0

//Destructuracion = extraer valores de arrays y objetos
// SWAP / Intercambio de variables
let var1 = 1; // Declaramos y asignamos el valor 1 a var1
let var2 = 2; // Declaramos y asignamos el valor 2 a var2
[var1, var2] = [var2, var1] // Utilizamos la desestructuración de arreglos para intercambiar los valores
console.log(var1); // Imprimimos el valor de var1 (debería ser 2)
console.log(var2); // Imprimimos el valor de var2 (debería ser 1)

// Array SWAP / Intercambio de elementos en un array
let ordenNumero = [1, 2, 3, 4]; // Declaramos un array con los números 1, 2, 3 y 4
[ordenNumero[0], ordenNumero[3]] = [ordenNumero[3], ordenNumero[0]]; // Utilizamos la desestructuración de arreglos para intercambiar el primer y el último elemento
console.log(ordenNumero); // Imprimimos el array modificado (debería ser [4, 2, 3, 1])

// Asignar array a una variable desestructuracion
let Abecedario = [`A`, `B`, `C`, `D`, `E`, `F`];
const [primeraLetra, segundaLetra, terceraLetra, ...restanteLetras] = Abecedario;
console.log(primeraLetra, segundaLetra)
console.log(restanteLetras)

// Extraer valores de objetos
let Persona1 = { // Definimos un objeto con dos propiedades
    nombre: `Juan`, // Propiedad 'nombre' con valor 'Juan'
    empleado: true  // Propiedad 'empleado' con valor true
}
let Persona2 = { // Definimos otro objeto con dos propiedades
    nombre: `Sebastian`, // Propiedad 'nombre' con valor 'Sebastian'
    empleado: false      // Propiedad 'empleado' con valor false
}
// Desestructuración de objetos: deben llamarse igual que las propiedades del objeto
let {nombre, empleado} = Persona1; // Extraemos 'nombre' y 'empleado' de Persona1
console.log(nombre, empleado); // Imprimimos los valores extraídos (Output: 'Juan', true)
// Desestructuración de objetos con valor por defecto
//  let {nombre, empleado, empresa = `KFC`} = Persona2; // Extraemos 'nombre', 'empleado', y asignamos un valor por defecto a 'empresa'
//  console.log(nombre, empleado, empresa); // Imprimimos los valores extraídos y el valor por defecto (Output: 'Sebastian', false, 'KFC')

// Desestructuración en funciones
function mostrarPersona({nombre, empleado, empresa = `Desempleado`}) { // Definimos una función que utiliza desestructuración en su parámetro, en caso de que empresa este vacio coloca `Desempleado`
    console.log(`Nombre: ${nombre} Empleado: ${empleado} Empresa: ${empresa}`); // Imprime los valores desestructurados
}

mostrarPersona(Persona2); // Llamamos a la función mostrarPersona pasando el objeto Persona2

// Nested Object / Objeto o lista dentro de una lista o objeto
const datosPersona = { // Definimos un objeto llamado datosPersona
    nombre: `Jacinto`, // Propiedad 'nombre' con el valor 'Jacinto'
    edad: 20, // Propiedad 'edad' con el valor 20
    esEstudiante: true, // Propiedad 'esEstudiante' con el valor true
    hobbies: [`karate`, `videojuegos`, `yoga`], // Propiedad 'hobbies' que es un array de strings
    direccion: { // Propiedad 'direccion' que es un objeto
        barrio: `Centenario`, // Propiedad 'barrio' con el valor 'Centenario'
        ciudad: `Girardot`, // Propiedad 'ciudad' con el valor 'Girardot'
        casa: `#12` // Propiedad 'casa' con el valor '#12'
    }
}
// Formas de extraer datos de un objeto
console.log(datosPersona.hobbies[0]); // Imprimimos el primer hobbi ('karate')
console.log(datosPersona.direccion.casa); // Imprimimos el valor de la propiedad 'casa' ('#12')
for (const property in datosPersona.direccion) { // Iteramos sobre cada propiedad del objeto 'direccion'
    console.log(datosPersona.direccion[property]); // Imprimimos el valor de cada propiedad
}

// Uso en clases
class PersonaC { // Definimos una clase llamada PersonaC
    constructor(nombre, edad, ...direcciones) { // El constructor se llama al crear una nueva instancia de la clase
        this.nombre = nombre;
        this.edad = edad;
        this.direcciones = new Direcciones(...direcciones); // Creamos una nueva instancia de la clase Direcciones con los parámetros restantes
    }
}

class Direcciones { // Definimos una clase llamada Direcciones
    constructor(barrio, ciudad, casa) { // El constructor se llama al crear una nueva instancia de la clase
        this.barrio = barrio;
        this.ciudad = ciudad;
        this.casa = casa;
    }
}

let persona11 = new PersonaC('Sebastian', 22, 'centenario', 'girardot', '#13'); // Creamos una nueva PersonaC con nombre, edad y dirección
console.log(persona11.direcciones.barrio); // output: centenario

// Array de objetos / array objects
const ArrayObjFrutas = [ // Definimos un array de objetos, cada uno representa una fruta con propiedades específicas
    {name: `manzana`, color: `rojo`, calorias: 95},    // Objeto para 'manzana' con propiedades 'name', 'color' y 'calorias'
    {name: `naranja`, color: `naranja`, calorias: 45},    // Objeto para 'naranja' con propiedades 'name', 'color' y 'calorias'
    {name: `banana`, color: `amarillo`, calorias: 105}, // Objeto para 'banana' con propiedades 'name', 'color' y 'calorias'
    {name: `coconut`, color: `blanco`, calorias: 159},  // Objeto para 'coconut' con propiedades 'name', 'color' y 'calorias'
    {name: `pinia`, color: `amarillo`, calorias: 37}    // Objeto para 'piña' con propiedades 'name', 'color' y 'calorias'
];
// Filtramos las frutas con menos de 99 calorías
const caloriasBajas = ArrayObjFrutas.filter((objeto) => objeto.calorias < 99);
// Filtramos las frutas con más de 99 calorías
const caloriasAltas = ArrayObjFrutas.filter((objeto) => objeto.calorias > 99);
// Filtramos las frutas que son de color amarillo
const frutasAmarillas = ArrayObjFrutas.filter((objeto) => objeto.color === `amarillo`);
// Encontramos la fruta con más calorías utilizando reduce
const frutaAltaC = ArrayObjFrutas.reduce((anterior, siguiente) => anterior.calorias > siguiente.calorias ? anterior : siguiente);
// Encontramos la fruta con menos calorías utilizando reduce
const frutaBajac = ArrayObjFrutas.reduce((anterior, siguiente) => anterior.calorias < siguiente.calorias ? anterior : siguiente);

// Sort() method, se utiliza para ordenar los elementos de un array en orden lexicográfico (alfabético + números + símbolos)
let ArraydeNumeros = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6]; // Definimos un array de números desordenados
console.log(ArraydeNumeros.sort((a, b) => a - b)); // Ordenamos el array en orden ascendente
console.log(ArraydeNumeros.sort((a, b) => b - a)); // Ordenamos el array en orden descendente

console.log(ArrayObjFrutas.sort((a, b) => a.calorias - b.calorias)); // Ordenamos el array de frutas por calorías de menor a mayor
console.log(ArrayObjFrutas.sort((a, b) => a.color.localeCompare(b.color))); // Ordenamos el array de frutas por color en orden alfabético

// Shuffle an array / Barajar un array / Revolver / Fisher-Yates algoritmo
const Cartas = [`A`, 2, 3, 4, 5, 6, 7, 8, 9, 10, `J`, `Q`, `K`]; // Definimos un array de cartas
RevolverCartas(Cartas); // Llamamos a la función para barajar el array de cartas
console.log(Cartas); // Imprimimos el array barajado
// Definimos la función para barajar un array utilizando el algoritmo de Fisher-Yates
function RevolverCartas(array) {
    for (let i = array.length - 1; i > 0; i--) { // Recorremos el array desde el final hasta el principio
        const random = Math.floor(Math.random() * (i + 1)); // Generamos un índice aleatorio
        [array[i], array[random]] = [array[random], array[i]]; // Intercambiamos los elementos en las posiciones 'i' y 'random'
    }
}

// Date / Fechas
const FechaHoy = new Date(); // Si está vacío nos dará la fecha actual
console.log(FechaHoy); // Imprime la fecha y hora actual
const FechaPersonalizada = new Date(2023, 12, 13, 3, 13, 33, 33); // Date(year, month, day, hour, minute, second, ms)
console.log(new Date("2024-01-02T12:00:00Z")); // Crea una fecha a partir de una cadena ISO
console.log(new Date(100000000)); // Crea una fecha a partir de un valor de milisegundos
// Tomar datos de Date
console.log(FechaPersonalizada.getFullYear()); // Obtiene el año (2024)
console.log(FechaPersonalizada.getMonth()); // Obtiene el mes (enero es 0, diciembre es 11)
console.log(FechaPersonalizada.getDate()); // Obtiene el día del mes
console.log(FechaPersonalizada.getHours()); // Obtiene la hora
console.log(FechaPersonalizada.getMinutes()); // Obtiene los minutos
console.log(FechaPersonalizada.getSeconds()); // Obtiene los segundos
console.log(FechaPersonalizada.getDay()); // Obtiene el día de la semana (domingo es 0, sábado es 6)
// Reemplazar datos de Date
FechaPersonalizada.setFullYear(2024); // Establece el año a 2024
FechaPersonalizada.setMonth(1); // Establece el mes a febrero (enero es 0)
// Comparar fechas
const Fecha1 = new Date("2023-12-31"); // Crea una fecha para el 31 de diciembre de 2023
const Fecha2 = new Date("2024-01-01"); // Crea una fecha para el 1 de enero de 2024
if (Fecha2 > Fecha1) { // Compara las dos fechas
    console.log(`Feliz año ${Fecha2.getFullYear()}`); // Si Fecha2 es mayor, imprime un mensaje de feliz año nuevo
}

// Closure / Clausuras, Función dentro de otra función, se utiliza para proteger las variables permitiendo un scope, variables privadas
function aumentarNum() { // Definimos una función llamada aumentarNum
    let inicioNume = 0; // Variable privada, solo accesible dentro de aumentarNum y sus funciones internas
    function aumentar() { // Función interna que incrementa inicioNume
        inicioNume++;
        console.log(inicioNume); // Imprime el valor incrementado de inicioNume
    }

    function cuentaTotal() { // Función interna que imprime el valor actual de inicioNume
        console.log(`Cuenta total ${inicioNume}`);
    }

    return {aumentar, cuentaTotal}; // Retorna un objeto con las funciones aumentar y cuentaTotal, exponiéndolas al exterior
}

const aumentoNum = aumentarNum(); // Creamos una instancia de aumentarNum y la guardamos en aumentoNum
aumentoNum.aumentar(); // Llamamos a la función aumentar (Output: 1)
aumentoNum.aumentar(); // Llamamos nuevamente a la función aumentar (Output: 2)
aumentoNum.cuentaTotal(); // Llamamos a la función cuentaTotal (Output: Cuenta total 2)

// setTimeout() = función en JavaScript la cual ejecuta una función después de cierto tiempo
let timeoutId; // Declaramos una variable para almacenar el ID del timeout
function Iniciar() {
    timeoutId = setTimeout(() => window.alert("Han pasado 3 segundos"), 3000); // Establecemos un timeout que muestra una alerta después de 3 segundos
    console.log(`Iniciado!`); // Imprimimos un mensaje indicando que el timeout ha iniciado
}

function Parar() {
    clearTimeout(timeoutId); // Limpiamos el timeout utilizando el ID almacenado en timeoutId
    console.log(`Parado!`); // Imprimimos un mensaje indicando que el timeout ha sido detenido
}

// ES6 Modules: Importa archivos JavaScript en HTML utilizando <script> con type="module"
// En tu archivo HTML, asegúrate de tener <script type="module" src="ruta_a_tu_archivo.js"></script>
// Supongamos que has creado otro archivo JavaScript llamado "javascriptModule.js"
// Aquí está cómo importar utilidades matemáticas desde "javascriptModule.js"
import {PI as numeroPi, TomarSuperficie, TomarArea, CalcularCircunferencia} from "./javascriptModule.js";
// Importa la constante PI y la llama numeroPi y las funciones TomarSuperficie, TomarArea y CalcularCircunferencia desde el módulo especificado
// "./javascriptModule.js" es la ruta relativa al archivo del módulo que estás importando
console.log(numeroPi); // Imprime el valor de PI importado desde "javascriptModule.js"
console.log(TomarSuperficie(10)); // Llama a la función TomarSuperficie con el argumento 10 e imprime el resultado
console.log(TomarArea(5)); // Llama a la función TomarArea con el argumento 5 e imprime el resultado

// Async Asynchronous, se ejecuta y no interrumple el flujo del codigo
//(I/0 operations, network requests, fetching data)
// Handled with: Callbacks, Promises, Async/Await
function funct1(callback) {
    setTimeout(() => {
        console.log(`task1`);
        callback()
    }) //En este caso setTimeout no irrumpe con el flujo del codigo y se ejecutan las siguientes lineas de codigo
}

function funct2() {
    console.log(`task2`);
    console.log(`task3`);
}

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up. ex. close files, close connections, release resources
// Error handling / Manejo de errores
// Se usa para manejar errores de red, rechazos de promesas, errores de seguridad. Habilita la continuidad del programa.
try {
    console.log(varinexistente); // Esta variable no existe y causará un error
} catch (error) {// Este bloque se ejecuta si hay un error en el bloque try
    console.error(`la variable no existe`);
} finally {
    console.log(`esto siempre se ejecuta`);  // Este bloque siempre se ejecuta, haya o no error
}
console.log(`Parte final de error handling`); // Este mensaje se muestra independientemente de si hubo un error o no

try {
    var divisor = 0; // Definimos el divisor
    var dividendo = 1; // Definimos el dividendo
    if (divisor == 0 || dividendo == 0) { // Validamos las condiciones que podrían causar errores
        throw new Error(`No puede ser dividido 0`); // Lanzamos un error si el divisor o el dividendo es 0
    }
    if (isNaN(divisor) || isNaN(dividendo)) {
        throw new Error(`Recuerda ingresar un numero`); // Lanzamos un error si el divisor o el dividendo no es un número
    }
    console.log(divisor / dividendo); // Si no hay errores, imprimimos el resultado de la división
} catch (error) { // Este bloque se ejecuta si hay un error en el bloque try
    console.error(error); // Imprime el error que se lanzó
} finally { // Este bloque siempre se ejecuta, haya o no error
    [divisor, dividendo] = [0, 0]; // Reiniciamos las variables
}

// Introducción al DOM
console.log(document); // Imprime el objeto 'document' en la consola, mostrando la estructura del documento HTML
console.dir(document); // Imprime el objeto 'document' en la consola en un formato más detallado y legible
document.title = `Diccionario Javascript`; // Cambia el título del documento a 'Diccionario Javascript'
document.body.style.backgroundColor = `gray`; // Cambia el color de fondo del cuerpo del documento a gris
let nombreAutor = "SebainK"; // Declara una variable con el nombre del autor
document.getElementById(`h1Elemento`).textContent += nombreAutor === "" ? "Guest" : nombreAutor; // Selecciona el elemento con el id 'h1Elemento' y añade el nombre del autor al texto del elemento

// Element selectors = se usa para seleccionar elementos HTML y editarlos
// document.getElementById(`Elemento`) / Devuelve el elemento o null si no existe
document.getElementById(`h1Elemento`).style.backgroundColor = `red`; // Selecciona el elemento con id 'h1Elemento' y cambia el color de fondo a rojo
document.getElementById(`h1Elemento`).style.textAlign = `center`; // Selecciona el elemento con id 'h1Elemento' y alinea el texto al centro

// document.getElementsByClassName(`Class`) / Devuelve una colección HTML, no puede ser usada con forEach, usar Array.from("Class").forEach
const collectionFrutas = document.getElementsByClassName('frutas'); // Selecciona todos los elementos con la clase 'frutas' y devuelve una colección HTML
for (let fruta of collectionFrutas) { // Itera sobre cada elemento de la colección
    fruta.style.color = "white"; // Cambia el color de texto de cada elemento a blanco
}
Array.from(collectionFrutas).forEach((fruta) => {
    fruta.style.color = "blue";
}); // Convierte la colección a un array y cambia el color de texto de cada elemento a azul
collectionFrutas[0].style.color = "green"; // Selecciona el primer elemento de la colección y cambia el color de texto a verde

// document.getElementsByTagName("tagHTML") / Devuelve una colección HTML
const collectionFrutasTag = document.getElementsByTagName("p"); // Selecciona todos los elementos <p> y devuelve una colección HTML
for (let fruta of collectionFrutasTag) { // Itera sobre cada elemento de la colección
    fruta.style.backgroundColor = `red`; // Cambia el color de fondo de cada elemento a rojo
}
Array.from(collectionFrutasTag).forEach((fruta) => {
    fruta.style.backgroundColor = "yellow";
}); // Convierte la colección a un array y cambia el color de fondo de cada elemento a amarillo
collectionFrutasTag[0].style.color = "purple"; // Selecciona el primer elemento de la colección y cambia el color de texto a morado

// document.querySelector("tag o .class") / Devuelve el primer elemento que encuentra o null
document.querySelector(".frutas").style.fontSize = "30px"; // Selecciona el primer elemento con la clase 'frutas' y cambia el tamaño de la fuente a 30px

// document.querySelectorAll("tag o .class") / Devuelve todos los elementos que tienen la misma clase o tag
const nodeListFrutas = document.querySelectorAll(".frutas"); // Selecciona todos los elementos con la clase 'frutas' y devuelve una NodeList
nodeListFrutas.forEach(fruta => {
    fruta.style.borderBottom = "3px solid blue";
}); // Itera sobre cada elemento de la NodeList y añade un borde inferior azul de 3px a cada uno
nodeListFrutas[0].style.borderBottom = "3px solid green"; // Selecciona el primer elemento de la NodeList y añade un borde inferior verde de 3px

// .parentElement ayuda a seleccionar el elemento padre de un hijo, util para botones de borrado
document.getElementById('fresa').parentElement // en este caso el elemento padre de fresa seria frutasLista

//DOM navigation = proceso de navegacion a traves de la estructura de un html usando javascript
document.getElementById("frutasLista").firstElementChild.style.color = "red"; // Primer child del elemento frutasLista
document.getElementById("frutasLista").lastElementChild.style.color = "orange"; // Ultimo child del elemento frutasLista
document.getElementById("patata").nextElementSibling.style.color = "yellow"; // elemento hermano despues del elemento patata
document.getElementById("patata").previousElementSibling.style.color = "green"; // elemento hermano anterior al elemento patata
document.getElementById("verdurasLista").previousElementSibling.style.backgroundColor = "wheat"; // elemento hermano anterior al elemento verdurasLista
document.getElementById("patata").parentElement.style.backgroundColor = "purple"; // elemento padre del elemento patata

//Itera por cada elemento ul y selecciona el ultimo hijo y aumenta el fontzise a 30px
document.querySelectorAll("ul").forEach((el) => {
    el.lastElementChild.style.fontSize = "30px";
});

//Crea un array apartir de un html Collection despues accede a un elemento en especifico por medio de su index y cambia el font size a 40px
Array.from(document.getElementById("frutasLista").children)[1].style.fontSize = "40px"; // acceso por medio de index

let tamanioFuente = 10 // aumenta +10 por cada recorrido que hace el forEach
Array.from(document.getElementById("verdurasLista").children).forEach( // elemento.children crea un html Collection con todos los children
    (fruta) => {
        fruta.style.fontSize = `${tamanioFuente}px`;
        tamanioFuente += 10
    } // por cada elemento children de verdurasLista, le aumentamos su fuente +10px
);

//Agregar y cambiar HTML
//1.Creacion de elementos
const newH1 = document.createElement("h1"); // document.createElement("tagName")
//2.Edicion de elementos
newH1.textContent = "Nuevo elemento creado desde Js"; // Asignamos el contenido del nuevo elemento
newH1.id = "myH1" // Asignamos una id al nuevo elemento
newH1.style.color = "blue"; // Cambiamos el color del nuevo elemento
newH1.style.textAlign = "center"; // alineamos el texto del nuevo elemento
//3.Append element al DOM
document.getElementById("cajas").appendChild(newH1); // ubicamos el nuevo elemento como ultimo child de cajas
document.getElementById("cajas").prepend(newH1); //ubicamos el nuevo elemento como primer child de cajas
document.getElementById("box2").appendChild(newH1); //ubicamos el nuevo elemento como ultimo child de box2
document.getElementById("box2").prepend(newH1); //ubicamos el nuevo elemento como primer child de box2
//elemento.insertBefore(elemento a insertar, insertar antes de este elemento) / inserta elemento antes de otro elemento
document.getElementById("cajas").insertBefore(newH1, document.getElementById("box2"))
//en caso de que no exista id
const cajas = document.querySelectorAll(".box") //creamos un nodeList con los elementos con class .box
document.getElementById("cajas").insertBefore(newH1, cajas[2]) //elemento.insertBefore(elemento a insertar, nodeList[index])
//Remove
document.getElementById("cajas").removeChild(newH1); //Seleccionamos el elemento cajas y removemos su hijo newH1

//Event Listeners / Mouse Events
const clickCaja = document.getElementById("clickCaja")
clickCaja.addEventListener("click", (e) => { //creamos un addEventListener("evento", callback(e))
    e.target.textContent = "Ouch! 😓" //en el evento click, este nos devuelve MouseEvent el cual contiene distintos tipos de informacion
    e.target.style.backgroundColor = "tomato" //en este caso el e.targe vendria siendo clickCaja
})
clickCaja.addEventListener("mouseover", (e) => { // mouseover es para cuando el cursor esta encima
    e.target.textContent = "No Porfa 😔"
    e.target.style.backgroundColor = "yellow"
})
clickCaja.addEventListener("mouseout", (e) => { // mouseout es para cuando el cursor no esta encima
    e.target.textContent = "Clickeame 😊" // envia el target que el puntero selecciono
    e.target.style.backgroundColor = "greenyellow"
    e.currentTarget.textContent = "Container" // envia el target principal del evetento, es decir el container
})

// Key Events
document.addEventListener("keydown", (e) => {
    console.log(e)
}) // Podemos mirar las propiedades del evento
document.addEventListener("keydown", (e) => {
    console.log(`pulsando ${e.key}`)
}) // mostramos que tecla se esta pulsando
document.addEventListener("keyup", (e) => {
    console.log(`${e.key} se dejo de pulsar`)
}) // mostramos que tecla dejo de pulsarse

const cajaMovible = document.getElementById("cajaMovible")
document.addEventListener("keydown", (e) => { // detecta cualquier tecla presionada en el documento y envia informacion del evento a traves de e
    if (e.key.startsWith("Arrow")) { // si e.key empieza por Arrow /
        cajaMovible.style.backgroundColor = "red" // ejecutar este bloque
    }
})
document.addEventListener("keyup", (e) => { // detecta cualquier tecla que haya dejado de ser pulsada en el documento y envia informacion del evento a traves de e
    if (e.key.startsWith("Arrow")) { // si e.key empieza por Arrow /
        cajaMovible.style.backgroundColor = "lightblue" //ejecutar este bloque
    }
})

let posX = 0; //posicion inicial x
let posY = 0; //posicion inicial y
const movimiento = 10; //numero de pixeles en el que sera ira displazando la cajaMovible

document.addEventListener("keydown", (e) => { // detecta cualquier tecla presionada en el documento y envia informacion del evento a traves de e
    if (e.key.startsWith("Arrow")) { // si e.key empieza por Arrow /
        e.preventDefault(); // Permite el desbordamiento de cajaMovible
        switch (e.key) { // Ejecuta este switch el cual el valor que recibe es e.key
            case "ArrowUp": // Ejecuta este bloque si e.key es igual a ArrowUp
                posY -= movimiento; //Resta 10 a la posicion Y
                break;
            case "ArrowDown": // Ejecuta este bloque si e.key es igual a ArrowDown
                posY += movimiento; //Suma 10 a la posicion Y
                break;
            case "ArrowLeft": // Ejecuta este bloque si e.key es igual a ArrowLeft
                posX -= movimiento; //Resta 10 a la posicion X
                break;
            case "ArrowRight": // Ejecuta este bloque si e.key es igual a ArrowRight
                posX += movimiento; //Suma 10 a la posicion X
                break;
        }
    }
    cajaMovible.style.top = `${posY}px`; //Debido a que cajaMovible tiene una position: relative se le asigna un top = ${posY}px
    cajaMovible.style.left = `${posX}px`; //Debido a que cajaMovible tiene una position: relative se le asigna un left = ${posX}px
})

const imagenMyO = document.getElementById("imageMyO")
const botonMyO = document.getElementById("botonMyO")
const botonMyOV = document.getElementById("botonMyOV")
botonMyO.addEventListener("click", (e) => { // creamos eventlistener a botonMyO
    if (imagenMyO.style.display === "none") { // si la propiedad style.display de imagenMyO esta oculta /
        imagenMyO.style.display = "block"; // Ejecutar este bloque, display = "block" muestra el elemento
        botonMyO.textContent = "Ocultar" // Cambiamos el contenido de botonMyO por "Ocultar"
    } else {
        imagenMyO.style.display = "none"; // Ocultamos por completo el elemento display = "none"
        botonMyO.textContent = "Mostrar" // Cambiamos el contenido de botonMyO por "Mostrar"
    }
})
botonMyOV.addEventListener("click", (e) => { // creamos eventlistener a botonMyO
    if (imagenMyO.style.visibility === "hidden") { // si la propiedad style.visibility de imagenMyO esta invisible /
        imagenMyO.style.visibility = "visible"; // Ejecutar este bloque, visibility = "visible" hace visible el elemento, conserva dimensiones
        botonMyOV.textContent = "Invisible" // Cambiamos el contenido de botonMyOV por "Invisible"
    } else {
        imagenMyO.style.visibility = "hidden"; // Ponemos el elemento invisible visibility = "hidden", similar a transparente
        botonMyOV.textContent = "Visible" // Cambiamos el cotenido de botonMyOV por "Visible"
    }
})

//NodeList = Static HTML collection, puede ser creada con querySelectorAll, similar a un array pero no se puede usar (map, filter, reduce)
//Los NodeList no se actualizan automaticamente en caso de que este declarado en una variable y lo llamen, se necesita reasignar para actualizar
//Elemento.querySelectorAll("tag, id, class") nos devuelve un NodeList, el cual nos permite recorrerlo con un forEach((HTMLElement)=> {funcion por cada elemento})
document.getElementById("BotonesN").querySelectorAll("button").forEach((HTMLElement) => {
    HTMLElement.addEventListener("click", (e) => { //Asignamos un addEventListener a cada HTMLElement el cual se ejecuta cuando da click, envia informacion de click
        e.target.remove(); //e.target = Elemento clickeado .remove() Borra el elemento del DOM
        console.log(document.getElementById("BotonesN").querySelectorAll("button")); //Actualizamos el nodelist y verificamos que ya no exista en el DOM
    })
})

//classList = Manipulacion de clases css desde javascript
document.getElementById("BotonesC").firstElementChild.classList.add("hover") //tomamos el primer elemento hijo de BotonesC y le agregamos la clase hover
document.getElementById("BotonesC").firstElementChild.classList.remove("hover") //tomamos el primer elemento hijo de BotonesC y quitamos la clase hover
document.getElementById("BotonesC").firstElementChild.addEventListener("mouseover", (e) => { //tomamos el primer elemento hijo de BotonesC y le agregamos un eventListener
    e.target.classList.toggle("hover") //classList.toggle remueve la clase si esta presente y si no esta, la agrega
})
document.getElementById("BotonesC").firstElementChild.addEventListener("mouseout", (e) => { //tomamos el primer elemento hijo de BotonesC y le agregamos un eventListener
    e.target.classList.toggle("hover") //classList.toggle remueve la clase si esta presente y si no esta, la agrega
})

const ultimoBoton = document.getElementById("BotonesC").lastElementChild // Seleccionamos el ultimo hijo de BotonesC
ultimoBoton.classList.add("habilitado") //agregamos la clase habiltiado a ultimoBoton
ultimoBoton.addEventListener("click", (e) => { //Creamos un eventListener y entregamos detalles del evento a traves de e
    if (e.target.classList.contains("inhabilitado")) { //Si el target del evento e contiene la clase inhabilitado /
        e.target.textContent += "💀" //ejecuta esto
    } else {
        e.target.classList.replace("habilitado", "inhabilitado") // de lo contrario remplaza la clase habilitado por inhabilitado
    }
})

//Callback Hell
function tarea1(callback) {
    setTimeout(() => {
        console.log("tarea1");
        callback()
    }, 2000)
}

function tarea2(callback) {
    setTimeout(() => {
        console.log("tarea2");
        callback()
    }, 1000)
}

function tarea3(callback) {
    setTimeout(() => {
        console.log("tarea3");
        callback()
    }, 2500)
}

tarea1(() => {
    tarea2(() => {
        tarea3(() => console.log("completado"))
    })
})

//Promises promesas
function pasearPerro() { //creamos una funciona
    return new Promise((resolve, reject) => { // creamos la promesa y esta nos devuelve 2 valores resolver y reject
        setTimeout(() => {
            let pasearPerro = true
            if (pasearPerro) { //si la variable pasearPerro es true, ejectura el bloque de abajo
                resolve("Has paseado al perro") //envia esta respuesta
            } else {
                reject("No has paseado el perro") //de lo contrario envia este rechazo
            }
        }, 2000)
    })
}

function limpiarCocina() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let limpiarCocina = true
            if (limpiarCocina) {
                resolve("Has limpiado la cocina")
            } else {
                reject("No has limpiado la cocina")
            }
        }, 1000)
    })
}

function sacarBasura() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sacarBasura = true
            if (sacarBasura) {
                resolve("Has sacado la basura")
            } else {
                reject("No has sacado la basura")
            }
        }, 500)
    })
}

//chainmethod para atrapar los valores de la promesa
pasearPerro().then(value => {
    console.log(value);
    return limpiarCocina();
}) // llamamos la funcion y seguido de ello usamos el metodo .then(value), value es el resultado de la promesa, por ultimo retornamos la siguiente funcion
    .then(value => {
        console.log(value);
        return sacarBasura();
    })//seguimos con el siguiente callback y realizamos el mismo proceso, finalmente llamando el siguiente callback
    .then(value => {
        console.log(value);
        console.log("tareas terminadas")
    })
    .catch(error => console.error(error)); // en caso de que sea rechazada una promesa, capta el reject y lo muestra en consola.

//Async= hace que una funcion retorne una promesa / Await= crea una funcion asincronica esperando una promesa
async function hacerLabores() {
    const pasearPerroResultado = await pasearPerro();
    console.log(pasearPerroResultado)

    const limpiarCocinaResultado = await limpiarCocina();
    console.log(limpiarCocinaResultado);

    const sacarBasuraResultado = await sacarBasura();
    console.log(sacarBasuraResultado);

    console.log("Hast terminado todos tus deberes")
}

hacerLabores();

//JSON
const arrayObjetos =
    [{
        "nombre": "Sebastian",
        "edad": 22,
        "empleado": false
    },
        {
            "nombre": "Julio",
            "edad": 32,
            "empleado": true
        },
        {
            "nombre": "Pedro",
            "edad": 26,
            "empleado": true
        }]
//JSON.stringify(objeto o array) convierte un objeto o array en JSON string
const jsonString = JSON.stringify(arrayObjetos)
console.log(jsonString)
//JSON.parse(JSON string) convierte un JSON string a un objeto o array de js
console.log(JSON.parse(jsonString))
//fetch
fetch("archivo.json").then(respuesta => respuesta.json()).then(data => {
    console.log(data)
}).catch(error => console.log(error));
// hacemos la solicitud de info, este nos devuelve una respuesta, con esta respuesta
//podemos podemos convertirla a json con respuesta.json() despues de ello solicitamos la data
//json y le colocamos como queramos en este caso data, despues de eso dependiendo del tipo de estructura del
//json podemos mostrar su contenido con forEach o en caso de ser objeto for in
//finalmente captamos el error con .catch en caso de que suceda alguno

//API fetch
async function enviarFetch() {
    const inputBusqueda = document.getElementById("inputBusquedaP").value.toLowerCase()
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputBusqueda}`) // mandamos el fetch y usamos await para que se ejecuten en orden

    try { // usamos try para que en caso de que no nos de response, el codigo siga fluyendo
        if (!response.ok) { // si no se dio response, ejecuta este bloque de abajo
            throw Error("Sin exito") // lanza error
        } else { // si la response se dio, ejecuta este bloque de abajo
            const data = await response.json() // await para que se ejecuten en orden, .json le indica a la response enviarnos la data en json
            const imgElement = document.createElement("img") //creamos un elemento img
            imgElement.src = data.sprites.front_default //le asignamos un src que es una imagen proveniente de un objeto de la api
            document.getElementById("buscadorPokemon").appendChild(imgElement); //agregamos como hijo el imgElement a buscadorPokemon
        }
    } catch (error) { // en caso de que haya algun error, lo toma y lo tira en consola
        console.log(error)
    }
}

//API Xhr
const xhr = new XMLHttpRequest(); //Crea el nuevo objeto con las funciones para poder realizar request
xhr.open('GET', 'https://supersimplebackend.dev/products'); //xhr.open('GET/POST/UPDATE/DELETE', url)
xhr.send(); //xhr.send() envia la request
xhr.addEventListener('load', () => {//agrega un eventlistener para que no se ejecute inmediatamente y espera a que el servidor de respuesta
    let products = JSON.parse(xhr.response); //declaramos una variable y le asignamos un JSON convertido a objeto usando el JSON.parse(xhr.response)
    console.log(products) //mostramos en consola el array de objetos
});


/*
try{ // usamos try para que en caso de que no nos de response, el codigo siga fluyendo
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputBusqueda}`) // enviamos el fetch a la direccion con la variable
            .then(response => { //despues tomamos esa response
                if (!response.ok) { // si la response no fue exitosa, ejecuta el bloque de abajo
                    throw Error("Sin exito") // lanza error para el catch
                } else { // si la response respondio correctamente, ejecuta el bloque de abajo
                    return response.json(); //sacamos el json de la response
                }
            })
            .then(data => { //tomamos la data que nos dio el response.json
                let pokemonImg = document.createElement("img") //creamos un elemento img
                pokemonImg.src = data.sprites.front_defaultf //le asignamos un src que es una imagen proveniente de un objeto de la api
                document.getElementById("buscadorPokemon").appendChild(pokemonImg); //agregamos como hijo el imgElement a buscadorPokemon
            })
    } catch (error) {
        console.log(error)
    }
 */

//Funciones avanzadas
//Pipe Functions
const curryFunction = x => x => x * 2;
console.log(curryFunction(10)(10))

const pipe = (...fn) => val => fn.reduce((prevFn, nextFn) => nextFn(prevFn), val)

const add2 = x => x + 2;
const res1 = x => x - 1;
const doblar = x => x * 2

console.log(doblar(res1(add2(2))))

const pipeResultado = pipe(add2, res1, doblar)(5)
console.log(pipe(add2, res1, doblar)(2))


//Almacenar llaves dinamicas
// Crear un objeto vacío para almacenar los temporizadores
const addedMessageTimeouts = {};

// Supongamos que el productId es "2aa" y tenemos un timeoutId (digamos, 123)
const productId = "2aa";
const timeoutID = 123;

// Agregar una propiedad al objeto usando productId como clave
addedMessageTimeouts[productId] = timeoutID;

// El objeto addedMessageTimeouts ahora se ve así:
console.log(addedMessageTimeouts);
// { "2aa": 123 }


//Destructuracion usando el dataset
//Elemento Html
//<button class="js-add-to-cart" data-product-id="1">Añadir al carrito</button>
//al usar data- la variable pasa a javascript en forma de camel case,
// y se eliminan los guiones es decir en este caso es productId
//const {productId} = document.queryselector('.js-add-to-cart').dataset

