const router = require('express').Router();
const rawgController = require('../../controllers/rawgController');

router.route('/')
    .get(rawgController.getRawg);

module.exports = router;