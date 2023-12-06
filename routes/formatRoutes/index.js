const router = require('express').Router();
const formatController = require('../../controllers/formatController');
const ROLES = require('../../config/roles');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(verifyRoles(ROLES.Director), formatController.getAllFormats);

module.exports = router;