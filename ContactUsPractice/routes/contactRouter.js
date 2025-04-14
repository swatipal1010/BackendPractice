//Core Module
const path = require('path');

//External Module
const express = require('express');
const contactRouter = express.Router();

//Local Module
const rootDir = require('../utils/pathUtils');

contactRouter.get('/contact-us',(req,res,next)=>{
    console.log('Handling /contact-us for GET request.',req.url, req.method);
    res.sendFile(path.join(rootDir,"views","contactus.html"));
});
contactRouter.post('/contact-us',(req,res,next)=>{
    console.log('Handling /contact-us for POST request.',req.url, req.method);
    res.sendFile(path.join(rootDir,"views","contactsuccess.html"));
});

module.exports = contactRouter;