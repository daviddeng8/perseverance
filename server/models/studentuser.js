const mongoose = require('mongoose');
const StudentUserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: false,
        default: "",
    },
    summary: {
        type: String,
        required: false,
        default: "",
    },
    college: {
        type: String,
        required: false,
        default: "",
    },
    graduation_year: {
        type: Number,
        required: false,
        default: 0,
    },
    resume: {
        type: String,
        required: false,
        default: "",
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    }

});

const User = mongoose.model('StudentUser', StudentUserSchema);

module.exports = User;
