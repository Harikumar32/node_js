// callback abstruction example challenge
// const request = require('postman-request');
// const chalk = require('chalk');

// const forecast = (long, lat, callback) => {

//     // const url = 'http://api.weatherstack.com/current?access_key=1236771029676622c739667e6c3d0a5a&query=' + lat + ',' + long + '&units=f;'
//     const url = 'http://api.weatherstack.com/current?access_key=1236771029676622c739667e6c3d0a5a&query=' + lat + ',' + long + '&units=f';

//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback(chalk.white.inverse("Unable to trace the weather data"));
//         } else if (response.body.error) {
//             callback(chalk.red.inverse("Unable to find weather location"));
//         } else {
//             callback(undefined, "It is currently " + response.body.current.temperature + " degrees out. There is a " + response.body.current.feelslike + "% chance of rain")
//         }
//     })
// }

// module.exports = forecast;

// callback abstruction example 

// object destructuring example
const request = require('postman-request');
const chalk = require('chalk');

const forecast = (long, lat, callback) => {

    // const url = 'http://api.weatherstack.com/current?access_key=1236771029676622c739667e6c3d0a5a&query=' + lat + ',' + long + '&units=f;'
    const url = 'http://api.weatherstack.com/current?access_key=1236771029676622c739667e6c3d0a5a&query=' + lat + ',' + long + '&units=f';

    request({ url, json: true }, (error, { body }) => { // url: url -> variable and property are same so we are using object property shorthand, and also object destructuring
        if (error) {
            callback(chalk.white.inverse("Unable to trace the weather data"));
        } else if (body.error) {
            callback(chalk.red.inverse("Unable to find weather location"));
        } else {
            callback(undefined, "It is currently " + body.current.temperature + " degrees out. There is a " + body.current.feelslike + "% chance of rain")
        }
    })
}

module.exports = forecast;

// object destructuring example ends