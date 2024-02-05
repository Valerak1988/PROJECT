
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();

const productRouter = require('./API/V1/Routers/Product');
const categoryRouter = require('./API/V1/Routers/Category');
const userRouter = require('./API/V1/Routers/User');

const connStr = process.env.MONGO_CONN;

mongoose.connect(connStr).then((status)=>
{
    if(status)
        console.log('MongoDB Connected');
    else
        console.log('Not Connected');
});

const productModel = require('./API/V1/Models/Product');
productModel.find().then((data)=>{
    console.log(data);
});

const categoryModel = require('./API/V1/Models/Category');
categoryModel.find().then((data)=>{
    console.log(data);
});

const userModel = require('./API/V1/Models/User');
userModel.find().then((data)=>{
    console.log(data);
});


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/product',productRouter);
app.use('/category',categoryRouter);
app.use('/user',userRouter);

app.all('*',(req,res)=>{
    return res.status(404).json({msg:"Not Found"});
});

module.exports = app;