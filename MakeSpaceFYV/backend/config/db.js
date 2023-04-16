const mongoose = require('mongoose')
const dotenv = require('dotenv');
const path = require('path');

require("dotenv").config({
    path: path.resolve(__dirname, '../.env')
});

const mongoDB = async() => {
    const uri = process.env.ATLAS_URI;

    try{
        conn = await mongoose.connect(uri)
        console.log(`MongoDB database connection established successfully : ${conn.connection.host}`.cyan.underline);
    } catch (error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = mongoDB; //we don't want to call it here, we want to export it so don't use () method here..!
