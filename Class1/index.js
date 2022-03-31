//console.log("Hello Haji Sahab!");

// var http = require('http');
// console.log("Server is running");
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello Haji Sahab from htttp module!');
//   res.end();
// }).listen(8080);

const express = require('express')
const app = express()

const routeName = 'samad';

app.get('/', function (req, res) {
  res.send('Hello World from express to Samad Akram! from route /');
})

app.get(`/${routeName}`, function (req, res) {
    res.send(`Hello World from express to Abdul Samad! from route /${routeName}`);
  })

app.listen(3000, (err) => {
    if(err) console.log(err);
    else console.log("Server is running");
})