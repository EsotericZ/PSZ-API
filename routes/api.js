const router = require('express').Router();
const verifyJWT = require('../middleware/verifyJWT');

const divisionRoutes = require('./divisionRoutes');
const eventRoutes = require('./eventRoutes');
const eventTypeRoutes = require('./eventTypeRoutes');
const formatRoutes = require('./formatRoutes');
const portalRoutes = require('./portalRoutes');
const r2eventRoutes = require('./r2eventRoutes');
const userRoutes = require('./userRoutes');

router.use('/portal', portalRoutes);

router.use(verifyJWT);
router.use('/divisions', divisionRoutes);
router.use('/events', eventRoutes);
router.use('/eventTypes', eventTypeRoutes);
router.use('/formats', formatRoutes);
router.use('/r2events', r2eventRoutes);
router.use('/users', userRoutes);

module.exports = router;