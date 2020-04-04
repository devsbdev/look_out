const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        requried: true,
        trim: true,
        minlength: 5
    },
    phone: {
        type: Number,
        required: true,
        unique: true,
        length: 9,
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },

    date:
    {
        type: Date,
        required: true,
    }
},{
    timestamps: true,
})

const User = mongoose.model('User', userSchema);

module.exports = User;