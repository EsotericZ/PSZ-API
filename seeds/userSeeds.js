const bcrypt = require('bcrypt');
require('dotenv').config();

let hashedPassword = bcrypt.hashSync(process.env.USER_PASS, process.env.SALT_ROUNDS);

const seedUsers = [
    {
        username: 'admin',
        psn: 'PSZReviews',
        password: hashedPassword,
        roles: {
            'admin': 1089,
            'player': 2001,
        },
    },
    {
        username: 'EsotericZ',
        psn: 'Esoteric-Z',
        password: hashedPassword,
        roles: {
            'admin': 1089,
            'player': 2001,
        },
    },
    {
        username: 'player',
        psn: 'player',
        password: hashedPassword,
        roles: {
            'player': 2001,
        },
    },
]

module.exports = seedUsers;