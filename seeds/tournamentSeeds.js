const { Tournament } = require('../models');

const tournamentData = [
    {
        id: 4001,
        name: 'DAC Shootout',
        club: 'DAC',
        startDate: '07/15',
        endDate: '07/15',
        status: 'future',
        image: '',
    },
]

const seedTournaments = () => Tournament.bulkCreate(tournamentData);

module.exports = seedTournaments;