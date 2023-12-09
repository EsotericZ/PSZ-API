const { Schema } = require('mongoose');

const wishlistSchema = new Schema({
    title: {
        type: String,
    }
});

module.exports = wishlistSchema;