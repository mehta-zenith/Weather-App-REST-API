const cityForm = document.querySelector('#cityForm');
const txtCity = document.querySelector('#city');

const DEAFULT_CITY = "Mumbai";
cityForm.addEventListener('submit', processWeatherRequest)

function processWeatherRequest(evt) {
    evt.preventDefault();
    let cityName = txtCity.value;
    if (cityName === "") {
        cityName = DEAFULT_CITY;
    }


    getWeather(cityName)
        .then(data => render(data))
        .catch(err => alert("Hey it seems you have entered wrong city name!"));

}

function render(data) {
    console.log(data);
}