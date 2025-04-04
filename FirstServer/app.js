const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    process.exit();         //Stops event loop. Logs the 1st request received by server, logs it and then shuts down the server.
});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});