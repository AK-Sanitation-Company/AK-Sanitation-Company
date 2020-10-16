const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost:27017/AK';

const db = mongoose.connect(mongoUri,{useNewUrlParser: true});

module.export = db;




