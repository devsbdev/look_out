const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = new Schema({
    index: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
     
}, {
    timestamps: true,
})

const Form = mongoose.model('Form', formSchema);

module.exports = Form