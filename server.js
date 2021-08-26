const mockServer = require('mockserver-node');
const mockClient = require('./server-client');
const mockserverPort = 1080;

mockServer
    .start_mockserver({serverPort: mockserverPort, verbose: true})
    .then(
        mockClient,
        function (error) {
            console.log(JSON.stringify(error, null, " "));
        }
    );