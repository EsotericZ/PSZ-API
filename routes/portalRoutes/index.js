const router = require('express').Router();
const portalController = require('../../controllers/portalController');

router.post('/login', portalController.login);
router.get('/logout', portalController.logout);
router.get('/refresh', portalController.refreshToken);
router.post('/register', portalController.register);

module.exports = router;