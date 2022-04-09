require('dotenv').config();
const express = require('express');
const mainRoute = require('./routes/main');
const middlewares = require('./middlewares');


const app = express();

app.use(middlewares.morgan());
app.use(middlewares.bodyParser());
app.use('/', mainRoute);

//const PORT = 4000;


app.listen(process.env.PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server is Running on PORT ${process.env.PORT}`);
});
