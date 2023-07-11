const express = require('express');
const verifyToken = require('../auth/verifyToken')

const app = express();

const bodyParser = require('body-parser'); 
const urlencodedParser = bodyParser.urlencoded({ 
    extended:false 
}); 

app.use(bodyParser.json);
app.use(urlencodedParser);