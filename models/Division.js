const mongoose = require('mongoose');
const { Schema } = mongoose;

const divisionSchema = new Schema({
    divisionType: {
        type: String,
        required: true,
    },
    divisionName: {
        type: String,
        required: true,
    },
    weightIndex: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('Division', divisionSchema);