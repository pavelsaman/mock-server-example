const config = require('./config.json');
const mockServer = require('mockserver-node');
const mockClient = require('./server-client');

mockServer
    .start_mockserver({serverPort: config.port, verbose: true})
    .then(
        mockClient,
        function (error) {
            console.log(JSON.stringify(error, null, " "));
        }
    );