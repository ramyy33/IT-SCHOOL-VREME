
const API_KEY = "e0f79e1c64faf2afa7389f0d708afe84";


function getCurrentWeatherEndpoint(city) {
 
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}