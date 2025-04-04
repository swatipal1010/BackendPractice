const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    //process.exit();         //Stops event loop. Logs the 1st request received by server, logs it and then shuts down the server.

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Webpage</title></head>');

    if(req.url==='/'){
        res.write('<h1>Enter your details</h1>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" id="name" name="name" placeholder="Enter your name"<br><br>');
        res.write('<label for="gender">Gender:</label>');
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write('<lable for="female">Female</lable><br>');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        return res.end();
    }else if(req.url==='/products'){  
        res.write('<body><h1>Check our latest collection of products!!</h1></body>');
        return res.end();
    }

    res.write('<body><h1>Like / Share / Subscribe</h1></body>');
    res.write('</html>');   
    return res.end();
});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});