
const mongoose = require('mongoose');
mongoose.pluralize(null);


const categorySchema = new mongoose.Schema({
    cid:Number,
    cname:String
});

module.exports = mongoose.model('category',categorySchema); 
