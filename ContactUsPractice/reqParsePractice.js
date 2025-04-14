const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Middlewares
app.get('/',(req,res,next)=>{
    console.log('Handling / for GET request.',req.url, req.method);
    res.send(`<p>Hello EveryOne!!</p>`);
});
app.get('/contact-us',(req,res,next)=>{
    console.log('Handling /contact-us for GET request', req.url, req.method);
    res.send(`
        <html>
            <head><title>Testing Middlewares</title></head>
            <body><h1>Enter Your Details:</h1>
            <form action="/contact-us" method="POST">
            <input type="text" name="username" placeholder="Enter your name"><br>
            <input type="text" name="email" placeholder="Enter your email"><br>
            <input type="submit" value="Submit">
        </html>
    `);
});

app.use(bodyParser.urlencoded());           //Middleware that parse the body(containing data filled by user in form) and add it inside the body

app.post('/contact-us',(req,res,next)=>{
    console.log('Handling /contact-us for POST request.',req.url, req.method, req.body);    //req.body give the details passed by user in the form
    res.send('<h1>Thanks for your details.</h1>');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});