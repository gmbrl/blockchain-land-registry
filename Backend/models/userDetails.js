const mongoose = require("mongoose");

const userDetailsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: Number,
        required: true,
        unique: true,
    },
    mwauraNo: {
        type: Number,
        required: true,
        unique: true,
    },
    otp: {
        type: Number,
    },
    otpValidTill: {
        type: Date,
    },
});

module.exports = mongoose.model('UserDetails', userDetailsSchema);