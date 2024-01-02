const router = require('express').Router();
const verifyJWT = require('../middleware/verifyJWT');

const portalRoutes = require('./portalRoutes');
const rawgRoutes = require('./rawgRoutes');
const userRoutes = require('./userRoutes');

router.use('/portal', portalRoutes);
router.use('/rawg', rawgRoutes);

router.use(verifyJWT);
router.use('/users', userRoutes);

module.exports = router;