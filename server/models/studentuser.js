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
    }
    location: {
        type: String,
        required: true,
    }
    summary: {
        type: String,
        required: true,
    }
    college: {
        type: String,
        required: true,
    }
    graduation_year: {
        type: Number,
        required: true,
    }
    resume: {
        type: String,
        required: true,
    }
    date: {
        type: Date,
        default: Date.now,
    }

});

const User = mongoose.model('StudentUser', StudentUserSchema);

module.exports = User;
