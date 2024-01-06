const User = require('../models/User');

const addToWishlist = async (req, res) => {
    const gameId = req.body.gameId;
    const refreshToken = req.cookies.jwt;
    const userFound = await User.findOne({ refreshToken }).exec();

    let currentWishlist = userFound.wishlist;
    let inWishlist = currentWishlist.some(function(game){ return game.gameId === gameId });

    if (inWishlist) {
        userFound.wishlist = currentWishlist.filter(function(game) { return game.gameId != gameId; });
        await userFound.save();
        console.log(`${gameId} Removed`)
    } else {
        userFound.wishlist = [...currentWishlist, { gameId: gameId}];
        await userFound.save();
        console.log(`${gameId} Added`)
    }
}

module.exports = {
    addToWishlist,
}