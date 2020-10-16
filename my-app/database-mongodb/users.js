const mongoose = require('mongoose');
const db = require('./index.js');


const UsersSchema = new mongoose.Schema({
  name: String,
  adress: String,
  email: String,
  phoneNumber: Number,
  password: String,
  role: String
},
  {
    timestamps: true
  }
);


const Users = mongoose.model('users', UsersSchema);



var getAllUsers = async() => {
    return await Users.find();
};



var addUser = async( user)=>{
  return await Users.create(user);
};



var authenticate = (email, password, callback)=>{
  Users.findOne({email:email,password:password},(err,user)=>{
    callback(err,user)
  })
};

module.exports.Users={getAllUsers,addUser,authenticate}
module.exports.addUser = addUser