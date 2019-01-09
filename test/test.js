let http = require('http');


const api = process.env.VOTING_URL || "http://localhost:5000/api/voting";


function start_voting(options) {

    var post_options = {
        host: 'localhost',
        port: '5000',
        path: '/api/voting',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    // Set up the request
    var post_req = http.request(post_options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    // post the data
    post_req.write(options);
    post_req.end();

}

function vote(option) {

    var post_options = {
        host: 'localhost',
        port: '5000',
        path: '/api/voting',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    // Set up the request
    var post_req = http.request(post_options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    // post the data
    post_req.write(option);
    post_req.end();

}

function finish_voting() {

    var post_options = {
        host: 'localhost',
        port: '5000',
        path: '/api/voting',
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    // Set up the request
    var post_req = http.request(post_options, function (res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);

            if (chunk.includes(expected_winner)) {
                console.log("Test passed");
                return 0;
            } else {
                console.log("Test Failed!");
                return 1;
            }
        });
    });

    // post the data
    post_req.write("");
    post_req.end();

}

function getRequestConfig(body = null) {
    return {
        body: body,
        url: api,
        json: true,
        maxAttempts: 3,
        retryDelay: 5,
        retryStrategy: request.RetryStrategies.HTTPOrNetworkError
    }
}

let voting_options = "['go','bash', 'node', 'python']";
let voted_options = ['python', 'go', 'bash', 'bash'];
let expected_winner = 'bash';

console.log('Given ', voting_options, ' voting options, When voted for ', voted_options, ', Then winner is ', expected_winner);

start_voting(voting_options)
vote('"go"');
vote('"bash"');
vote('"bash"');
finish_voting();

