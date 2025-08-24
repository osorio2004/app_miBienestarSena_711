const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/roles.controller');

// GET /roles
router.get('/', rolesController.getAllRoles);

// GET /roles/:id
router.get('/:id', rolesController.getRoleById);

// POST /roles
router.post('/', rolesController.createRole);

// PUT /roles/:id
router.put('/:id', rolesController.updateRole);

// DELETE /roles/:id
router.delete('/:id', rolesController.deleteRole);

module.exports = router;
