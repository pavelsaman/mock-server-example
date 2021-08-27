const config = require('./config.json');
const mockServerClient = require('mockserver-client').mockServerClient;

const simpleAdReqRes = require('./resources/simple-ad-response.json');
const adSearchQuery = require('./resources/ad-response-search-query.json');

function mockMatchers () {
    mockServerClient(config.host, config.port).mockAnyResponse(adSearchQuery).then(
        function () {
            console.log('created "/ads?name=abc" expectation');
        },
        function (error) {
            console.log(error.body);
        }
    );
    mockServerClient(config.host, config.port).mockAnyResponse(simpleAdReqRes).then(
        function () {
            console.log('created "/ads" expectation');
        },
        function (error) {
            console.log(error.body);
        }
    );
}

module.exports = mockMatchers;
