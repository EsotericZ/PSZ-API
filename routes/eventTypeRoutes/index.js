const router = require('express').Router();
const eventTypeController = require('../../controllers/eventTypeController');
const ROLES = require('../../config/roles');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(verifyRoles(ROLES.Director), eventTypeController.getAllEventTypes);

module.exports = router;