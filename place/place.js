const axios = require('axios');

const getCoords = async (direction) => {
    const param = encodeURI(direction);
    const http = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
        headers: { 'x-rapidapi-key': 'f24e1cba26msh487172e4a8e8c25p1fd0edjsn208207789abb' }
    });

    const res = await http.get(`?location=${param}`);
    const results = res.data.Results;

    if (results.length === 0) {
        throw new Error(`No found results to ${param}`);
    }

    const { name, lat, lon } = results[0];
    return { name, lat, lon };
}

module.exports = { getCoords };