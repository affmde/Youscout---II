const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const usersSchema = new mongoose.Schema({
    prefix:{
        type: String,
        required: false
    },
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        gender:{
            type: String,
            required: false
        },
        birthday:{
            type: Date,
            required: false
        },
        nationality:{
            type: String,
            required: false
        },
        phone: {
            type: Number,
            required: false
        },
        adress:{
            type: String,
            required: false
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true
        },
        confirmPassword:{
            type: String,
            required: true
        },
        companyName:{
            type: String,
            required: false
        },
        companyLevel:{
            type: String,
            required: false
        },
        companyCountry:{
            type: String,
            required: false
        },
})


const UsersModel = mongoose.model("users", usersSchema);
module.exports = UsersModel;