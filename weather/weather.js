const axios = require('axios');

const appid = '88016e96fdb73d15f4e1e74773ebdba9';
const http = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather',
});

const getTemp = async (lat, lon, units = 'metric') => {
    const params = { lat, lon, units, appid }
    const res = await http.get(null, { params });
    return res.data.main.temp;
}

module.exports = { getTemp };