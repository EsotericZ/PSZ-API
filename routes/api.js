const router = require('express').Router();
const verifyJWT = require('../middleware/verifyJWT');

const portalRoutes = require('./portalRoutes');
const rawgRoutes = require('./rawgRoutes');
const userRoutes = require('./userRoutes');
const wishlistRoutes = require('./wishlistRoutes');

router.use('/portal', portalRoutes);
router.use('/rawg', rawgRoutes);

router.use(verifyJWT);
router.use('/users', userRoutes);
router.use('/wishlist', wishlistRoutes);

module.exports = router;