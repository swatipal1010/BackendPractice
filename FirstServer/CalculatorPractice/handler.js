const { sumReqHandler } = require('./sum');

const reqHandler = (req,res)=>{
console.log(req.url, req.method);
if(req.url==='/'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head><title>Calcultor</title></head>
            <body>
                <h1>Welcome to our Calculator!!</h1>
                <a href = "/calculator">Go to Calculator</a>
            </body>
        </html>
    `);
   return res.end();
}else if(req.url.toLowerCase()=='/calculator'){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head><title>Calcultor</title></head>
            <body>
                <h1>Congratulations! You landed to use our Calculator.</h1>
                <form action="calculate-result" method="POST">
                    <input type="text" placeholder = "First Number" name="first" />
                    <input type="text" placeholder = "Second Number" name="second" />
                    <input type="submit" value="Sum" />
                </form>
            </body>
        </html>
    `);
   return res.end();
}else if(req.url.toLowerCase()==='/calculate-result' && req.method==='POST'){
    return sumReqHandler(req,res);
}
res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head><title>Calcultor</title></head>
            <body>
                <h1>404 Page does not exist.</h1>
                <a href = "/">Go to Home</a>
            </body>
        </html>
    `);
   return res.end();
}

exports.reqHandler = reqHandler;