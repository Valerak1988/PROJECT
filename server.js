

const http = require('http');
const srv = http.createServer(app);
const port = 9090;
const app = require('./app');


srv.listen(port,()=>{console.log('Server On Air');})