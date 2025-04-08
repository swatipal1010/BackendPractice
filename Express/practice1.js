const express = require('express');

const app = express();

//Middlewares
app.use((req,res,next)=>{
    console.log("First middleware",req.url, req.method);
    next();
});
app.use((req,res,next)=>{
    console.log("Second middleware",req.url, req.method);
    next();
});
// app.use((req,res,next)=>{
//     res.send("<p>Hello EveryOne!!</p>");
// });
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
app.post('/contact-us',(req,res,next)=>{
    console.log('Handling /contact-us for POST request.',req.url, req.method);
    res.send('<h1>Thanks for your details.</h1>');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});