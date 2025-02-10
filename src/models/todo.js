const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: String,
        required: true
    }
}); 
module.exports = mongoose.model('todo', todoSchema);