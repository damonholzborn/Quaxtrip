const Max = require('max-api');

const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const results = Object.create(null); // or just '{}', an empty object


for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }

            results[name].push(net.address);
        }
    }
}
const localIP = results["en0"][0];


const http = require('http');

let externalIP;

var options = {
  host: 'ipv4bot.whatismyipaddress.com',
  port: 80,
  path: '/'
};

http.get(options, function(res) {
  console.log("status: " + res.statusCode);

  res.on("data", function(chunk) {
    externalIP = chunk;
    console.log(localIP, '' + chunk);
    Max.outlet('Local IP Address: ' + localIP + '\n\nPublic IP Address: ' + chunk);

  });
}).on('error', function(e) {
  console.log("error: " + e.message);
});

