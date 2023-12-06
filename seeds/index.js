const seedUsers = require('./userSeeds');
const seedParticipants = require('./participantSeeds');
const seedProfiles = require('./profileSeeds');
const seedTournaments = require('./tournamentSeeds');
const seedDivisions = require('./divisionSeeds');
const seedFormats = require('./formatSeeds');

const { Match } = require('../models');
const { WeightIndex } = require('../models');

const sequelize = require('../config');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');

    await seedProfiles();
    console.log('\n----- PROFILES SEEDED -----\n');

    await seedFormats();
    console.log('\n----- FORMATS SEEDED -----\n');

    await seedTournaments();
    console.log('\n----- TOURNAMENTS SEEDED -----\n');

    await seedDivisions();
    console.log('\n----- DIVISIONS SEEDED -----\n');

    await seedParticipants();
    console.log('\n----- PARTICIPANTS SEEDED -----\n');


    process.exit(0);
}

seedAll();