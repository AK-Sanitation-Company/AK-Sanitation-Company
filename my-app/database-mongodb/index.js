const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/AK',{useNewUrlParser: true}, (err) => {
    if (err){
        console.error(err);
    }
        console.log("Connected to the mongodb"); 
});







