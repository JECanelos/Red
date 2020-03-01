const express = require('express');
const router = express.Router();

router.get('/users', require('./showUsers'));
router.post('/users', require('./createUser'));
router.put('/users', require('./updateUser'));
router.delete('/users', require('./deleteUser'));

module.exports = router;