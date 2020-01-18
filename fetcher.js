const argv = process.argv.slice(2);
const request = require('request');
const fs = require('fs');
const website = argv[0];
const file = argv[1];

request(website, (error, body, response) => {
fs.writeFile(file, body.body, (err) => {

    if (error) {
        throw err;
    };

    console.log(`Downloaded and saved  ${body.length} bytes to ${file}`)
  })
});