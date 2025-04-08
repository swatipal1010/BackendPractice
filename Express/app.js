//Core Module
const http = require('http');

//External Module
const express = require('express');

//Local Module
const reqHandler = require('./user');


const app = express();
//Middleware
app.use((req,res,next)=>{
  console.log("Came in first middleware: ",req.url, req.method);
  next();
});
app.use((req,res,next)=>{
  console.log("Came in second middleware: ",req.url, req.method);
  res.send('<p>Welcome to my HomePage.</p>');
})

const server = http.createServer(app);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

