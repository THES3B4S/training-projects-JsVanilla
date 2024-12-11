const apiKey = 'a4a94acf955a595d42d0e7c17753cb0e' //declaramos la apikey para despues ser usada en la peticion

mostrarInfoClima(apiKey, "bogota"); // establecemos que por default se muestre el clima de bogota

//seleccionamos el dom despues usamos el metodo querySelector para seleccionar una clase, en este caso el formulario,
//el cual tiene un evento, en este caso solo lo usaremos para evitar que se recargue la pagina
document.querySelector('.climaFormulario').addEventListener('submit', event => {
    event.preventDefault(); //previene que el evento submit recargue la pagina
    const ciudadInput = document.querySelector('.inputCiudad').value.toLowerCase(); //declaramos el input de la ciudad para despues ser usado en la peticion, todo a minuscula
    mostrarInfoClima(apiKey, ciudadInput); //enviamos la apiKey y el input del formulario a la funcion mostrarInfoClima que sera la encargada de enviar la peticion y mostrarla
})

async function mostrarInfoClima(apiKey, Ciudad){

        try{ // como esta la probabilidad que una api no responda, es mejor usar catch, para que nuestro codigo no se irrumpa en caso de no dar response
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Ciudad}&appid=${apiKey}&lang=es`); //declaramos y enviamos la peticion
            // el await obliga a que se siga un orden, esto en caso de que una response se tarde mas que otra
            if(!response.ok){ // si la response no fue exitosa, ejecuta el bloque de abajo
                throw Error('Failed to fetch city'); // lanza un error al catch
            } else { // si la response fue exitosa ejecuta el bloque de abajo
                const data = await response.json(); //accedemos al json de la response, segundo await

                const {name, main: {temp, humidity}, weather:[{description, id}]} = data // destructuramos el objeto que nos entrego el response.json()

                document.querySelector('.infoFrame').style.opacity = '0' // establecemos la opacidad en 0 para que cuando volvamos a darle click, se desaparezca para despues ser llamado
                document.querySelector('.ciudadDisplay').textContent = name // seleccionamos los elementos por clase, con queryselector y los modificamos con queryselector
                document.querySelector('.tempDisplay').textContent = (temp - 273.15).toFixed(1) // formula para convertir kelvin a celcius, limitamos las fracciones a max 1
                document.querySelector('.humedadDisplay').textContent = humidity;
                document.querySelector('.climaStatus').textContent = description[0].toUpperCase() + description.slice(1); //accedemos al index 0 del string y lo convertimos a mayus, concatenamos lo restante con slice
                document.querySelector('.emojiClima').textContent = cambioEmoji(id) // creamos una funcion para q dependiendo de la id del clima se cambia el emoji
                setTimeout(()=>document.querySelector('.infoFrame').style.opacity = '1',200) //creamos un timer para que le de tiempo a la animacion de css de desaparecer
            }

        } catch (error) { // en caso de que haya algun error, lo captura el catch y lo muestra en consola
            console.log(error);
        }

        function cambioEmoji(idClima){ //recibimos la id del clima
            switch (true){ // se ejecuta el case que de true
                case (idClima >= 200 && idClima < 309):
                    return "🌧️";
                case (idClima >= 300 && idClima < 400):
                    return "🌧️";
                case (idClima >= 500 && idClima < 608):
                    return "🌧️";
                case (idClima >= 600 && idClima < 700):
                    return "❄️";
                case (idClima >= 700 && idClima < 800):
                    return "🍃";
                case (idClima === 800):
                    return "🔆";
                case (idClima >= 801 && idClima < 810):
                    return "☁️";
                default:
                    return "🕊️";
            }
        }
}