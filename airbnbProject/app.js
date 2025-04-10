//Core Module
const path = require('path');

//External Module
const express = require('express');

const app = express();

//Local Module
const userRouter = require('./Routes/userRouter');
const hostRouter = require('./Routes/hostRouter');
const rootDir = require('./utils/pathUtils');

app.use((req,res,next)=>{
    console.log(req.url, res.method);
    next();
});

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);

app.use((req,res,next)=>{     //Handling request for pages/URLs that don't exist. This middleware shoyldn't be placed before other middlewares handling other routes. Otherwise we'll always get Page Not Found response.
  res.status(404).sendFile(path.join(rootDir, 'views','404page.html'));
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});