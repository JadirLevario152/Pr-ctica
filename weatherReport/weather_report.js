function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value.trim();
    const apiKey = 'tu api key';  // Reemplaza con tu clave API real
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);  // Muestra la respuesta completa en la consola
        const weatherInfo = document.getElementById('weatherInfo');
        if (data.cod === 200) {  // Si el código de respuesta es 200, se muestran los datos
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        } else {
            weatherInfo.innerHTML = `<p>Error: ${data.message}</p>`;
        }
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
    });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
