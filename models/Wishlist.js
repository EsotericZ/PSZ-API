const { Schema } = require('mongoose');

const wishlistSchema = new Schema({
    gameId: {
        type: Number,
    }
});

module.exports = wishlistSchema;