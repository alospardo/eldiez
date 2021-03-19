const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    tournament: String,
    title: {
        type: String,
        unique: true
    },
    URLimage: {
        type: String,
        unique: true
    },
    caption: String, 
    content: String,
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = model('Note', noteSchema)