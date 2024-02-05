
const mongoose = require('mongoose');
mongoose.pluralize(null);


const productSchema = new mongoose.Schema({
    pid:Number,
    cid:Number,
    pname:String,
    price:Number,
    picname:String
});

module.exports = mongoose.model('products',productSchema);