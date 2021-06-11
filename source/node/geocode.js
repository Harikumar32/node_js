//callback abstration example accessing from another file.

// const request = require('postman-request');
// const chalk = require('chalk');


// const geoCode = (address, callback) => {

//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaGFyaWt1bWFyMzIiLCJhIjoiY2twYzZsaXplMTQxYTJwcW1obmhwaXFtaiJ9.ayi3zgz0SG6QAfZRImY9BA&limit=1';

//     request({ url: url, json: true }, (error, response) => {
//         if (error) {
//             callback(chalk.white.inverse("Unable to trace the URL"));
//         } else if (response.body.features.length == 0) {
//             callback(chalk.red.inverse("Unable to find location"));
//         } else {
//             callback(undefined, {
//                 lat: response.body.features[0].center[1],
//                 long: response.body.features[0].center[0],
//                 location: response.body.features[0].place_name
//             })
//         }
//     })
// }

// module.exports = geoCode;

// callback abstration example accessing from another file. ends

//object destructuring example
const request = require('postman-request');
const chalk = require('chalk');


const geoCode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaGFyaWt1bWFyMzIiLCJhIjoiY2twYzZsaXplMTQxYTJwcW1obmhwaXFtaiJ9.ayi3zgz0SG6QAfZRImY9BA&limit=1';

    request({ url, json: true }, (error, { body }) => { // url: url -> variable and property are same so we are using object property shorthand, also object destructuring
        if (error) {
            callback(chalk.white.inverse("Unable to trace the URL"));
        } else if (body.features.length == 0) {
            callback(chalk.red.inverse("Unable to find location"));
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                long: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode;
//object destructuring example ends