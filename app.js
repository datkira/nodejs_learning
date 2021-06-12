const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  console.log('In the middleware');
  res.send("<form action='/product' method='POST'><input type='text' name='title'> <input type='submit' value='Submit Form'> </form>");
});

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  console.log('In the middleware');
  res.send("Hello from ExpressJS");
});

server.listen(3000);
