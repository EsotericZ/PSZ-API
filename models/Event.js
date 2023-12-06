const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
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
    },
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Participant',
        }
    ],
    divisions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Division',
        }
    ],
    matches: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Match',
        }
    ],
    weightIndex: {
        type: Schema.Types.ObjectId,
        ref: 'WeightIndex',
    }
});

module.exports = mongoose.model('Event', eventSchema);