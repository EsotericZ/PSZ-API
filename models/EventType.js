const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventTypeSchema = new Schema({
    eventTypeName: {
        type: String,
        required: true,
    },
    weightIndex: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('EventType', eventTypeSchema);