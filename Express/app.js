//Core Module
//const http = require('http');

//External Module
const express = require('express');

//Local Module
const reqHandler = require('./user');


const app = express();

//Middleware
app.get("/",(req,res,next)=>{                               //Route matches based on HTTP request
  console.log("Came in first middleware: ",req.url, req.method);
  next();
});
app.post("/submit-details",(req,res,next)=>{          //Route matches based on HTTP request. Only matches with complte route '/submit-details'
  console.log("Came in second middleware: ",req.url, req.method);
  res.send('<p>Welcome to my HomePage.</p>');
});
app.use("/",(req,res,next)=>{        //Route matches based on path(URL). Use works for all wildcard paths i.e. matches for all paths having '/' in their path
  console.log("Came in another middleware: ",req.url, req.method);
});



//const server = http.createServer(app);  We will now create server using Express

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

