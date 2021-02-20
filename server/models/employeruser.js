const mongoose = require('mongoose');
const EmployerUserSchema = new mongoose.Schema({
    name: {
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
    date: {
        type: Date,
        required: true,
        default: Date.now,
    }

});

const User = mongoose.model('Employer_User', EmployerUserSchema);

module.exports = User;
