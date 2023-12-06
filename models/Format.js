const mongoose = require('mongoose');
const { Schema } = mongoose;

const formatSchema = new Schema({
    eventName: {
        type: String,
        required: true,
        trim: true,
    },
});

        // games: {
        //     type: DataTypes.INTEGER,
        //     defaultValue: 3,
        // },
        // totalPoints: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: false,
        // },
        // gameLimit: {
        //     type: DataTypes.INTEGER,
        //     defaultValue: 15,
        // },
        // timeouts: {
        //     type: DataTypes.INTEGER,
        //     defaultValue: 3,
        // },
        // tieBreaker: {
        //     type: DataTypes.BOOLEAN,
        //     defaultValue: true,
        // },
        // tieBreakLimit: {
        //     type: DataTypes.INTEGER,
        //     defaultValue: 11,
        // },
        // tieBreakTimeouts: {
        //     type: DataTypes.INTEGER,
        //     defaultValue: 2,
        // },


module.exports = mongoose.model('Format', formatSchema);