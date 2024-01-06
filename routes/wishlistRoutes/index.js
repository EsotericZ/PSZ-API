const router = require('express').Router();
const wishlistController = require('../../controllers/wishlistController');
const ROLES = require('../../config/roles');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .post(verifyRoles(ROLES.Player), wishlistController.addToWishlist);

module.exports = router;