const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const path = require('path');
const port = 3001;

//app.use(express.json());




app.get('/', function (req, res) {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});

/* Add headers
app.use((req, res, next) => {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


*/
//app.use(cookieParser());


//app.use(bodyParser.urlencoded({ extended: false }));

//Configuracio

//Middlewares

//Control de credenciales

app.use('/users',require('./routes/users'));
//app.use('/users',require('./routes/users'));



//Iniciando el Servidor
app.listen(app.get('port'), () => {
  console.log("server ready");
});