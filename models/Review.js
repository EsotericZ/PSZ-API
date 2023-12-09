const { Schema, default: mongoose } = require('mongoose');

const reviewSchema = new Schema({
    game_id: { 
        type: String,
        required: true,
    },
    user_id: { 
        type: String, 
        required: true
    },
    rating: {
        type: Number,
    }
});

module.exports = mongoose.model('Review', reviewSchema);