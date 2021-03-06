const request = require('request-promise-native');

function http_get(url) {
    return request(url).promise()
        .then(function (body) {
            console.log("length:" + body.length);
        })
        .catch(function (err) {
            console.error(err.toString());
        });
}

console.log("start");
Promise.resolve()
    .then(() => {
        console.log("1");
    })
    .then(() => {
        console.log("2");
        return http_get('https://www.google.com');
    })
    .then(() => {
        console.log("3");
    })
    .catch(err => {
        console.error("catch:" + err);
    })
    .then(() => {
        console.log("callback");
        console.log("fin");
    });
