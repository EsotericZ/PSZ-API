const mongoose = require('mongoose');
require('dotenv').config({path:__dirname+'/./../.env'});

const { User } = require('../models');

const seedUsers = require('./userSeeds');

mongoose.connect(process.env.DATABASE_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

const seedDB = async () => {
    await User.deleteMany({});
    await User.insertMany(seedUsers);
    console.log('\n----- USERS SEEDED -----\n');
};

seedDB().then(() => {
    console.log('\n----- DATABASE SEEDED -----\n');
    mongoose.connection.close();
})