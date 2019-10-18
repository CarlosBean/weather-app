const place = require('./place/place');
const weather = require('./weather/weather');
const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'city name for get weather',
        demand: true
    }
}).argv;

const getTemp = async () => {
    try {
        const coords = await place.getCoords(argv.direction);
        const temp = await weather.getTemp(coords.lat, coords.lon);
        return `Temperature in ${coords.name} is ${temp} centigrades`;
    } catch (e) {
        return `It cant determine temperature in ${argv.direction}`
    }
}

getTemp()
    .then(console.log)
    .catch(console.log)

