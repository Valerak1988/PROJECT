
const mongoose = require('mongoose');
mongoose.pluralize(null);  


const userSchema = new mongoose.Schema({
    userid:Number,
    email:String,
    pass:String,
    fullname:String,
    phone:String
});


module.exports = mongoose.model('users',userSchema); 