const express = require('express')
const { Users } = require('./database-mongodb/users')
const bodyParser = require('body-parser')
const app = express()
const MAIL_CONFIG = require('./SendEmail')
const port = 5000
const db = require('./database-mongodb/users.js')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



// Get request to Users
app.get('/users', async(req, res) => {
   let users = await Users.getAllUsers()
  res.json(users)
});

// Get requeste to for user send there information
app.get('/sendEmail', async(req, res) => {
  let SendEmail= {
    user: MAIL_CONFIG.user,
    password: MAIL_CONFIG.password
  }

})


//Post request to Login
app.post('/signIn', function(req, res, next) {
  console.log(req.body)
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


//Post request to SignUp
app.post('/signUp', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let phoneNumber = req.body.phoneNumber;
  let adress = req.body.adress;
 console.log(req.body)
  let newUsers = {
   name: name,
   email: email,
   phoneNumber: phoneNumber,
   adress: adress,
  }
  db.addUser(newUsers)
  .then(res=>{
    console.log(res)
  })
  .catch(err=>{console.log(err)})

 })
 //Post request to SignUp
app.post('/reservation', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let phoneNumber = req.body.phoneNumber;
  let adress = req.body.adress;
  let message = req.body.message;
 console.log(req.body)
 
 let newUsers = {
   name: name,
   email: email,
   phoneNumber: phoneNumber,
   adress: adress,
   message: message
  }
  db.addUser(newUsers)
  .then(res=>{
    console.log(res)
  })
  .catch(err=>{console.log(err)})

 })
//Post to update the new Users
 app.post('/update/:id', (req, res) => {
  let users = {}
  if (req.body.name) users.name = req.body.name
  if (req.body.email) users.email = req.body.email
  if (req.body.phoneNumber) users.phoneNumber = req.body.phoneNumber
  if (req.body.adress) users.adress = req.body.adress

  users = { $set: users }
 users.update({_id: req.params.id}, users).then(() => {
   res.send(users)
  }).catch((err) => {
   console.log(err)
  })
 })

 //Post to hash password in signUp
//  app.post('/signUp',(req,res,next)=> {
//      const myPlaintextPassword = req.body.password
//      bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//      });
//  }),




//Post to update the undefined Users
 app.post('/update/:id', (req, res) => {
  let users = {}
  if (req.body.name) users.name = req.body.name
  if (req.body.email) users.email = req.body.email
  if (req.body.phoneNumber) users.phoneNumber = req.body.phoneNumber
  if (req.body.adress) users.adress = req.body.adress
  if (req.body.message) users.message = req.body.message

  users = { $set: users }
 users.update({_id: req.params.id}, users).then(() => {
   res.send(users)
  }).catch((err) => {
   console.log(err)
  })
 })







 




exports.create = (req, res) => {

  const user = new User({
    email: req.body.email,
    name: req.body.name,
    adress: req.body.adress,
    message: req.body.message,
    phoneNumber: req.body.phoneNumber
  });
  
  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};













 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
