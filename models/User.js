const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    // username: {
    //     type: String,
    //     required: true
    // },
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    ranks: {
        singlesMale: Number,
        singlesFemale: Number,
        doublesMale: Number,
        doublesFemale: Number,
        mixed: Number,
    },
    roles: {
        player: {
            type: Number,
            default: 2001
        },
        admin: Number,
        blogger: Number,
        director: Number,
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: [String],
});

module.exports = mongoose.model('User', userSchema);