const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/roles.controller');

// GET /api/roles
router.get('/roles', rolesController.getAllRoles);

module.exports = router;
