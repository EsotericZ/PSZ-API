const router = require('express').Router();
const r2eventController = require('../../controllers/r2eventController');
const ROLES = require('../../config/roles');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .post(verifyRoles(ROLES.Admin), r2eventController.createR2Event);

module.exports = router;