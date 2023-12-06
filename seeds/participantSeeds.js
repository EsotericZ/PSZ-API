const { Participant } = require('../models');

const participantData = [
    {
        id: 3001,
        ProfileId: 2001,
        TournamentId: 4001,
        DivisionId: 5002,
    },
    {
        id: 3002,
        ProfileId: 2002,
        TournamentId: 4001,
        DivisionId: 5001,
    },
    {
        id: 3003,
        ProfileId: 2003,
        TournamentId: 4001,
        DivisionId: 5003,
    },
    {
        id: 3004,
        ProfileId: 2004,
        TournamentId: 4001,
        DivisionId: 5002,
    },
    {
        id: 3006,
        ProfileId: 2006,
        TournamentId: 4001,
        DivisionId: 5001,
    },
    {
        id: 3007,
        ProfileId: 2007,
        TournamentId: 4001,
        DivisionId: 5004,
    },
    {
        id: 3008,
        ProfileId: 2008,
        TournamentId: 4001,
        DivisionId: 5001,
    },
    {
        id: 3011,
        ProfileId: 2011,
        TournamentId: 4001,
        DivisionId: 5003,
    },
    {
        id: 3013,
        ProfileId: 2013,
        TournamentId: 4001,
        DivisionId: 5003,
    },
    {
        id: 3014,
        ProfileId: 2014,
        TournamentId: 4001,
        DivisionId: 5003,
    },
    {
        id: 3016,
        ProfileId: 2016,
        TournamentId: 4001,
        DivisionId: 5004,
    },
    {
        id: 3017,
        ProfileId: 2017,
        TournamentId: 4001,
        DivisionId: 5001,
    },
    {
        id: 3018,
        ProfileId: 2018,
        TournamentId: 4001,
        DivisionId: 5001,
    },
    {
        id: 3019,
        ProfileId: 2019,
        TournamentId: 4001,
        DivisionId: 5003,
    },
    {
        id: 3020,
        ProfileId: 2020,
        TournamentId: 4001,
        DivisionId: 5002,
    },
    {
        id: 3022,
        ProfileId: 2022,
        TournamentId: 4001,
        DivisionId: 5004,
    },
    {
        id: 3024,
        ProfileId: 2024,
        TournamentId: 4001,
        DivisionId: 5002,
    },
    {
        id: 3026,
        ProfileId: 2026,
        TournamentId: 4001,
        DivisionId: 5001,
    },
    {
        id: 3027,
        ProfileId: 2027,
        TournamentId: 4001,
        DivisionId: 5001,
    },
    {
        id: 3028,
        ProfileId: 2028,
        TournamentId: 4001,
        DivisionId: 5003,
    },
    {
        id: 3029,
        ProfileId: 2029,
        TournamentId: 4001,
        DivisionId: 5003,
    },
    {
        id: 3032,
        ProfileId: 2032,
        TournamentId: 4001,
        DivisionId: 5003,
    },
    {
        id: 3033,
        ProfileId: 2033,
        TournamentId: 4001,
        DivisionId: 5002,
    },
    {
        id: 3034,
        ProfileId: 2034,
        TournamentId: 4001,
        DivisionId: 5003,
    },
    {
        id: 3035,
        ProfileId: 2035,
        TournamentId: 4001,
        DivisionId: 5003,
    },
    {
        id: 3038,
        ProfileId: 2038,
        TournamentId: 4001,
        DivisionId: 5002,
    },
    {
        id: 3039,
        ProfileId: 2039,
        TournamentId: 4001,
        DivisionId: 5001,
    },
    {
        id: 3040,
        ProfileId: 2040,
        TournamentId: 4001,
        DivisionId: 5002,
    },
    {
        id: 3041,
        ProfileId: 2041,
        TournamentId: 4001,
        DivisionId: 5001,
    },
    {
        id: 3043,
        ProfileId: 2043,
        TournamentId: 4001,
        DivisionId: 5003,
    },
    {
        id: 3044,
        ProfileId: 2044,
        TournamentId: 4001,
        DivisionId: 5001,
    },
    {
        id: 3045,
        ProfileId: 2045,
        TournamentId: 4001,
        DivisionId: 5002,
    },
    {
        id: 3046,
        ProfileId: 2046,
        TournamentId: 4001,
        DivisionId: 5002,
    },
    {
        id: 3047,
        ProfileId: 2047,
        TournamentId: 4001,
        DivisionId: 5004,
    },
    {
        id: 3048,
        ProfileId: 2048,
        TournamentId: 4001,
        DivisionId: 5003,
    },
    {
        id: 3049,
        ProfileId: 2049,
        TournamentId: 4001,
        DivisionId: 5004,
    },
    {
        id: 3050,
        ProfileId: 2050,
        TournamentId: 4001,
        DivisionId: 5004,
    },
    {
        id: 3051,
        ProfileId: 2051,
        TournamentId: 4001,
        DivisionId: 5003,
    },
    {
        id: 3052,
        ProfileId: 2052,
        TournamentId: 4001,
        DivisionId: 5002,
    },
    {
        id: 3053,
        ProfileId: 2053,
        TournamentId: 4001,
        DivisionId: 5001,
    },
    {
        id: 3054,
        ProfileId: 2054,
        TournamentId: 4001,
        DivisionId: 5002,
    },
    {
        id: 3055,
        ProfileId: 2055,
        TournamentId: 4001,
        DivisionId: 5003,
    },
    {
        id: 3056,
        ProfileId: 2056,
        TournamentId: 4001,
        DivisionId: 5002,
    },
    {
        id: 3057,
        ProfileId: 2057,
        TournamentId: 4001,
        DivisionId: 5002,
    },
    {
        id: 3059,
        ProfileId: 2059,
        TournamentId: 4001,
        DivisionId: 5002,
    },
    {
        id: 3060,
        ProfileId: 2060,
        TournamentId: 4001,
        DivisionId: 5001,
    },
    {
        id: 3061,
        ProfileId: 2061,
        TournamentId: 4001,
        DivisionId: 5001,
    },
    {
        id: 3062,
        ProfileId: 2062,
        TournamentId: 4001,
        DivisionId: 5002,
    },
]

const seedParticipants = () => Participant.bulkCreate(participantData);

module.exports = seedParticipants;