const express = require('express')
const { Users } = require('./database-mongodb/users')
const bodyParser = require('body-parser')
const app = express()
const port = 5000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get('/users', async(req, res) => {
   let users = await Users.getAllUsers()
  res.json(users)
});



app.post('/login', function(req, res, next) {
  if (req.body.email && req.body.password) {
    Users.authenticate(req.body.email, req.body.password, function (error, user) {
      if (error || !user) {
        res.status(400).send("wrong email or password")
      }  else {
        res.json(user)
      }
    });
  } else {
    res.status(400).send("wrong email or password")
  }
});



app.post('/signUp', function(req, res, next) {
  if (req.body.email && req.body.name && req.body.adress && req.body.phoneNumber && req.body.message) {
    Users.authenticate(req.body.email, req.body.name, req.body.adress, req.body.phoneNumber, req.body.message, function (error, user) {
      if (error || !user) {
        res.status(400).send("wrong email or password")
      }  else {
        res.json(user)
      }
    });
  } else {
    res.status(400).send("wrong email or password")
  }
});









app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
