const db = require("../models");
const User = db.User;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    console.log(req);
    
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    
    User.create(user)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the User."
        });
    });
};
    