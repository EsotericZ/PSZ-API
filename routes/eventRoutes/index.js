const router = require('express').Router();
const eventController = require('../../controllers/eventController');
const ROLES = require('../../config/roles');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .post(verifyRoles(ROLES.Director), eventController.createEvent);

module.exports = router;