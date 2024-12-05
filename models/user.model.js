const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength:[3, 'username must be three characters long']
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength:[13, 'username must be thirteen characters long']
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: [5, 'password must be 5 characters long']
    }
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel;