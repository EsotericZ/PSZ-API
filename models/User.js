const mongoose = require('mongoose');
const { Schema } = mongoose;

const wishlistSchema = require('./Wishlist');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    psn: {
        type: String,
        required: true,
    },
    roles: {
        player: {
            type: Number,
            default: 2001
        },
        admin: Number,
    },
    password: {
        type: String,
        required: true
    },
    wishlist: [wishlistSchema],
    refreshToken: [String],
});

module.exports = mongoose.model('User', userSchema);