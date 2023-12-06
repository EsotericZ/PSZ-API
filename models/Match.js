const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const matchSchema = new Schema({
    name: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Match', matchSchema);