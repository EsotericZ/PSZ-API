const router = require('express').Router();
const divisionController = require('../../controllers/divisionController');
const ROLES = require('../../config/roles');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(verifyRoles(ROLES.Director), divisionController.getAllDivisions);

module.exports = router;