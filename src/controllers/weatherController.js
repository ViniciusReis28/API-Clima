const weatherService = require("../services/weatherServices");

exports.getWeather = async (req, res) => {
    const city = req.params.city;
    try {
        const weatherData = await weatherService.fetchWeather(city);
        res.json(weatherData);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar dados do clima" });
    }
};
