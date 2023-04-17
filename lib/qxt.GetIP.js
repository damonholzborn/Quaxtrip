const Max = require('max-api');

const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const localInterfaces = [];

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            localInterfaces.push(net.address);
        }
    }
}

const http = require('http');

let externalIP;

var options = {
  host: 'ifconfig.me',
  port: 80,
  path: '/'
};

http.get(options, function(res) {
  console.log("status: " + res.statusCode);

  res.on("data", function(chunk) {
    externalIP = chunk;
    let ipString = 'Local IP Address(es):\n';
    for (let i = 0; i < localInterfaces.length; i++) {
      ipString += '   ' + localInterfaces[i] + '\n';
    }
    ipString += '\nPublic IP Address:\n   ' + chunk;
    Max.outlet(ipString);
  });
}).on('error', function(e) {
  console.log("error: " + e.message);
});

