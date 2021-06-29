import { useState } from "react";
import axios from "axios";

const Home = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const getWeather = (e) => {
    e.preventDefault();
    setWeatherData(null);
    setError("");
    let apiKey = "08f07c56c86fd2ec1656b1a45a15dd0b";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
  };

  return (
    <div>
      <form onSubmit={getWeather}>
        <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          placeholder="enter a city"
        />
      </form>
      {error && <div>{error}</div>}
      {weatherData && (
        <div>
          <div>
            {"Temperature in kelvin of your city: " + weatherData.main.temp}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
