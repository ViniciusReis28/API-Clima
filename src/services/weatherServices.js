const axios = require("axios");
require("dotenv").config();

exports.fetchWeather = async (city) => {
    const API_KEY = process.env.API_KEY;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt`;

    try {
        const response = await axios.get(URL);
        return {
            cidade: response.data.name,
            temperatura: response.data.main.temp,
            descricao: response.data.weather[0].description,
            umidade: response.data.main.humidity,
            vento: response.data.wind.speed
        };
    } catch (error) {
        console.error("Erro detalhado:", error.response ? error.response.data : error.message);
        throw new Error("Erro ao buscar dados do clima");
    }
};
