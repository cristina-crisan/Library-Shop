import { useEffect, useState } from 'react';
import "./weather.scss"

const Weather = () => {
  const apiKey = "559cbc7c38c9b3f121d872cda7ae476c";
  const baseUrl = `http://api.openweathermap.org/data/2.5/weather`;

  const [city, setCity] = useState("Cluj-Napoca");
  const [weather, setWeather] = useState(null);

  function changeCity(event) {
    let city = event.target.value;
    setCity(city)
  }
  useEffect(() => {
    fetch(`${baseUrl}?q=${city}&units=metric&appid=${apiKey}`)
      .then(responese => responese.json())
      .then(data => {
        setWeather(data)
      })
  }, [city])
  return (
    <div className="wrapper-content">
      <label>Select City:</label>
      <select onChange={changeCity} >
        <option value="Cluj-Napoca">Cluj-Napoca</option>
        <option value="Oradea">Oradea</option>
        <option value="Bucharest">Bucuresti</option>
        <option value="Brasov">Brasov</option>
        <option value="Orastie">Orastie</option>
        <option value="Deva">Deva</option>
        <option value="Timisoara">Timisoara</option>
        <option value="Constanta">Constanta</option>
        <option value="Iasi">Iasi</option>
      </select>
      <div className="weather-details">
        <p>Temperature: {weather && weather.main && weather.main.temp} &#8451;</p>
        <p>Humidity: {weather && weather.main && weather.main.humidity}</p>
        <p>Temperature max: {weather && weather.main && weather.main.temp_max} &#8451;</p>
        <p>Temperature min: {weather && weather.main && weather.main.temp_min} &#8451;</p>
        <p>Wind speed: {weather && weather.wind && weather.wind.speed} km/h</p>
      </div>
    </div>);
}

export default Weather;