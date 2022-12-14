// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser')

const stateRoutes = require('./routes/stateRoutes')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use('/api/state', stateRoutes);

app.listen(8080)



