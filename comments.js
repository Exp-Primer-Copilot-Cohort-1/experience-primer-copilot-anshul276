//create web server 
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });

    const readStream = fs.createReadStream('./views/index.html');
    readStream.pipe(res);
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});