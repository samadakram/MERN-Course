const todos = require('../config/todos');

exports.get = (req, res) => {
    res.status(200).json(todos);
  }

  exports.post = (req, res) => {
    const data = req.body;
    todos.gender = data.gender;
    res.status(200).json(todos);
  }

  exports.put = (req, res) => {
    const data = req.body;
    res.status(200).json(data);
  }

  exports.delete = (req, res) => {
    delete todos.course;
    res.status(200).json(todos);
  }