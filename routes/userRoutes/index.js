const router = require('express').Router();
const userController = require('../../controllers/userController');
const ROLES = require('../../config/roles');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(verifyRoles(ROLES.Admin), userController.getAllUsers);

module.exports = router;