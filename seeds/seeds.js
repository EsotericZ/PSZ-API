const mongoose = require('mongoose');
require('dotenv').config({path:__dirname+'/./../.env'});

const { Division } = require('../models');
const { EventType } = require('../models');
const { Format } = require('../models');

const seedDivisions = require('./divisionSeeds');
const seedEventTypes = require('./eventTypeSeeds');
const seedFormats = require('./formatSeeds');

mongoose.connect(process.env.DATABASE_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

const seedDB = async () => {
    await Division.deleteMany({});
    await Division.insertMany(seedDivisions);
    console.log('\n----- DIVISIONS SEEDED -----\n');

    await EventType.deleteMany({});
    await EventType.insertMany(seedEventTypes);
    console.log('\n----- EVENT TYPES SEEDED -----\n');

    await Format.deleteMany({});
    await Format.insertMany(seedFormats);
    console.log('\n----- FORMATS SEEDED -----\n');
};

seedDB().then(() => {
    console.log('\n----- DATABASE SEEDED -----\n');
    mongoose.connection.close();
})