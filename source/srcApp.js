const express = require('express');
const path = require('path');
const hbs = require('hbs');
const request = require('postman-request');
const geoCode = require('./node/geocode');
const forecast = require('./node/forecast');

const app = express();

// Define paths for Express config
const rootDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../template/views');
const partialsPath = path.join(__dirname, '../template/partials');

// Setup handlebars engine and view location
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve 
app.use(express.static(rootDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: "Handle Bar Dynamic app",
        name: "Harikumar Prakash"
    });
})

app.get('/about', (req, res) => {
    // res.render('about')
    res.render('about', {
        title: "Handle Bar Dynamic app for About",
        name: "Dhanasekar Dhanu"
    });
})

app.get('/help', (req, res) => {
    // res.render('help')
    res.render('help', {
        title: "Handle Bar Dynamic app for Help",
        name: "Raju Ravi"
    });
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "please enter the address in Query string"
        })
    } else {
        geoCode(req.query.address, (error, { lat, long, location } = {}) => { // we are using object parameter
            if (error) {
                return res.send({ error })
            }

            forecast(long, lat, (error, data) => {
                if (error) {
                    return res.send({ error });
                }
                res.send({
                    forcast: data,
                    location,
                    address: req.query.address
                });
            })
        })
    }

})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "enter search term"
        })
    }
    console.log(req.query)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404Page', {
        title: "404 Page",
        name: "Harikumar Prakash",
        errorMessage: "Help Page Not Message"
    });
})

app.get('*', (req, res) => {
    res.render('404Page', {
        title: "404 Page",
        name: "Harikumar Prakash",
        errorMessage: "Page Not Message"
    });
})
app.listen(3000, () => {
    console.log("Server is up and running in 3000..")
})