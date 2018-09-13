const request = require('request-promise-native');

function http_get(url) {
    return request(url)
        .then(function (body) {
            console.log("length:" + body.length);
        })
        .catch(function (err) {
            console.error(err.toString());
        });
}

function main() {
    console.log("start");
    return Promise.resolve()
        .then(() => {
            console.log("1");
        })
        .then(async () => {
            console.log("2");
            await http_get('https://www.google.com');
        })
        .then(() => {
            console.log("3");
        })
        .catch(err => {
            console.error("catch:" + err);
        })
        .then(() => {
            console.log("callback");
        });
}

(async function () {
    await main();
    console.log('fin')
})();
