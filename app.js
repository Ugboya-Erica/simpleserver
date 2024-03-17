const { createServer } = require ('http');
const hostname = '127.0.0.1';
const port = 8900;


const simpleServer = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader( 'content-type', 'text/html');
    res.write('<h1>Erica Ugboya</h1>');
    res.end();
});


simpleServer.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
//127.0.0.1:8900