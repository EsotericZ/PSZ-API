const mongoose = require('mongoose');
const { Schema } = mongoose;

const participantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
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
})

module.exports = mongoose.model('Participant', participantSchema);