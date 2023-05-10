const { Router } = require('express');
const { getMessage, saveMessage } = require('./FormController');

const router = Router();

router.get('/', getMessage);
router.post('/', saveMessage);

module.exports = router
