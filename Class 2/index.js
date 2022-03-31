const express = require('express');
const bodyParser = require('body-parser');
const morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.json());

const PORT = 4000;

const user = {
  name: "Abdul Samad",
  age: "22",
  qualification: "BS-SWE",
  city: "Hyderabad",
  course: "MERN STACK"
}

app.get('/user', (res, req) => {
  res.status(200).json(user);
});

app.post('/user', (req, res) => {
  const data = req.body;
  user.gender = data.gender;
  res.status(200).json(user);
});

app.put('/user', (req, res) => {
  const data = req.body;
  res.status(200).json(data);
})

app.patch('/user', (req, res) => {
  const data = req.body;
  user.city = data.city;
  res.status(200).json(user);
})

app.delete('/user', (req, res) => {
  delete user.course;
  res.status(200).json(user);
})

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log("Server is Running");
});
