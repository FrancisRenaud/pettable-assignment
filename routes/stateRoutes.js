const express = require('express');
const stateController = require('../controllers/stateController')
const router = express.Router()

router.get('/', stateController.getStates);
router.get('/:id/zip_ranges', stateController.zipRanges);
router.post('/', stateController.confirm_state);

module.exports = router;