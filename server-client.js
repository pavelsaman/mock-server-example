const mockServerClient = require('mockserver-client').mockServerClient;

const simpleAdReqRes = require('./resources/simple-ad-response.json');
const adSearchQuery = require('./resources/ad-response-search-query.json');

function mockMatchers () {
    mockServerClient("localhost", 1080).mockAnyResponse(adSearchQuery).then(
        function () {
            console.log('created "/ads?name=abc" expectation');
        },
        function (error) {
            console.log(error.body);
        }
    );
    mockServerClient("localhost", 1080).mockAnyResponse(simpleAdReqRes).then(
        function () {
            console.log('created "/ads" expectation');
        },
        function (error) {
            console.log(error.body);
        }
    );
}

module.exports = mockMatchers;
