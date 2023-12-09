const { User } = require('../models');
const CryptoJS = require('crypto-js');

require('dotenv').config();

let encryptedPassword = CryptoJS.AES.encrypt(
    'password',
    process.env.SECRET_KEY || '1234'
).toString();

const userData = [
    {
        username: 'admin',
        psn: 'PSZReviews',
        password: encryptedPassword,
        role: 'admin',
    },
    {
        username: 'EsotericZ',
        psn: 'Esoteric-Z',
        password: encryptedPassword,
        role: 'player',
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;