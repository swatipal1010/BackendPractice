//External Modules
const express = require('express');

//Local Modules
const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');

const app = express();

//Middlewares
app.use(homeRouter);
app.use(contactRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});