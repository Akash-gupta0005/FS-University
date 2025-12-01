const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema(({
    studentName: {
        type: String,
        required: true,
        trim: true
    },
    programName: {
        type: String,
        required: true,
        trim: true
    },
    cityName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('invalid email');
            }
        },
        phone: {
            type: Number,
            required: true,
            unique: true
        },
        message:[]
    }
}))

const users=new mongoose.model("users",userSchema);
module.exports=users;