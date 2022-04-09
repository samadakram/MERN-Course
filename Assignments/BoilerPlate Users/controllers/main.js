const detail = require("../config/detail"); 

exports.get = (req, res) => {
    res.status(200).json(detail);
}

exports.post = (req, res) => {
    const data = req.body;
    detail.gender = data.gender;
    res.status(200).json(detail);
}

exports.put = (req, res) => {
    const data = req.body;
    res.status(200).json(data);
}

exports.patch = (req, res) => {
    const data = req.body;
    detail.city = data.city;
    res.status(200).json(detail);
}

exports.delete = (req, res) => {
    delete detail.course;
    res.status(200).json(detail);
}