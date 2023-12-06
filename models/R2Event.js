const mongoose = require('mongoose');
const { Schema } = mongoose;

const r2eventSchema = new Schema({
    eventName: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    club: {
        type: String,
        required: true,
        trim: true,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    director: {
        type: String,
        trim: true,
    },
    status: {
        type: String,
        default: 'future',
    },
    image: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    eventURL: {
        type: String,
        trim: true,
    }
});

module.exports = mongoose.model('R2Event', r2eventSchema);