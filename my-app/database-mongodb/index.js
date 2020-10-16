const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/blogmodo';

mongoose.connect('mongodb://localhost:27017/AK',{useNewUrlParser: true}, (err) => {
    if (err)
        console.error(err);
    else
        console.log("Connected to the mongodb"); 
});







