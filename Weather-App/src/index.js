function fetchWeather(response) {
    let temperature = Math.round(response.data.temperature.current);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = temperature;

    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
    let apiKey = "03a1od824e34f4b433a55ct759776fa6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(fetchWeather);
}

function searchSubmit(event) {
    event.preventDefault();
    let searchInput =  document.querySelector("#search-form-input");

    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);

searchCity("Nottingham");