const API_KEY = "54d3bc416fbcbd04732b67080d30d214";
const BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";

const http = new slHTTP();

async function getWeather(cityName) {
    let queryString = `?units=metric&q=${cityName}&appid=${API_KEY}`;
    const URL = BASE_URL + queryString;
    const data = await http.get(URL)
    return data;
}