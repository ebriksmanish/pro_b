const express = require('express');
const router = express.Router();

// requiring model
 const userModel = require('../models/schema');

// define the home page route
// router.get('/', function (req, res) {
//   res.send('Birds home page')
// })
// define the about route

router.post('/register', function (req, res) {
  let value = {
      username : req.body.username,
      email : req.body.email,
      password : req.body.password
  };
  userModel.create(value, (err, result) => {
      if(err) return res.json(err)
      else return res.json(result)
  })
});

router.post('/login', function (req, res) {
    let value = {
        email : req.body.email,
        password : req.body.password
    };
    userModel.findOne(value, (err, result) => {
        if(err) return res.json(err)
        else {
            if(result === null){
                return res.json(err)
            }
            else return res.json(result)
        }
    })
 });
  
module.exports = router