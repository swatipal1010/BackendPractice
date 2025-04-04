const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    //process.exit();         //Stops event loop. Logs the 1st request received by server, logs it and then shuts down the server.


    if(req.url==='/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Webpage</title></head>');
        res.write('<body><h1>Welcome to our homepage!</h1></body>');
        res.write('</html>');   
        return res.end();
    }else if(req.url==='/products'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Webpage</title></head>');
        res.write('<body><h1>Check our latest collection of products!!</h1></body>');
        res.write('</html>');   
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Webpage</title></head>');
    res.write('<body><h1>Like / Share / Subscribe</h1></body>');
    res.write('</html>');   
    res.end();
});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});