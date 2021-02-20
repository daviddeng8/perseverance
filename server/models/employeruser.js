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
    }
    location: {
        type: String,
        required: true,
    }
    summary: {
        type: String,
        required: true,
    }
    date: {
        type: Date,
        default: Date.now,
    }

});

const User = mongoose.model('EmployerUser', EmployerUserSchema);

module.exports = User;
