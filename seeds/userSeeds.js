const CryptoJS = require('crypto-js');

require('dotenv').config();

let encryptedPassword = CryptoJS.AES.encrypt(
    'password',
    process.env.SECRET_KEY || '1234'
).toString();

const seedUsers = [
    {
        username: 'admin',
        psn: 'PSZReviews',
        password: encryptedPassword,
        roles: {
            'admin': 1089,
        },
    },
    {
        username: 'EsotericZ',
        psn: 'Esoteric-Z',
        password: encryptedPassword,
        roles: {
            'admin': 1089,
            'player': 2001,
        },
    },
    {
        username: 'player',
        psn: 'player',
        password: encryptedPassword,
        roles: {
            'player': 2001,
        },
    },
]

module.exports = seedUsers;