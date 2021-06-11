// basic knowledge
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

//example

// fetch('http://localhost:3000/weather?address=erode').then((response) => {
//         response.json().then((data) => {
//             if (data.error) {
//                 console.log(data.error)
//             } else {
//                 console.log(data.forcast)
//                 console.log(data.location)
//             }
//         })
//     })
//example ends

const weather = document.querySelector('form');
const search = document.querySelector('input');
const hariContent1 = document.querySelector('#hari1')
const hariContent2 = document.querySelector('#hari2')

weather.addEventListener('submit', (event) => {
    event.preventDefault();
    hariContent1.textContent = 'Loading...';
    hariContent2.textContent = '';
    fetch('http://localhost:3000/weather?address=' + search.value + '').then((response) => {
        response.json().then((data) => {
            if (data.error) {
                // console.log(data.error)
                hariContent1.textContent = data.error;
            } else {
                // console.log(data.forcast)
                hariContent1.textContent = data.forcast;
                hariContent2.textContent = data.location;
                // console.log(data.location)
            }
        })
    })
})