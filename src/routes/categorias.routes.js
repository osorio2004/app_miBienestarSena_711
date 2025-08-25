const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categorias.controller');

router.get('/', categoriasController.getAllCategories);
router.get('/:id', categoriasController.getCategoryById);
router.post('/', categoriasController.createCategory);
router.put('/:id', categoriasController.updateCategory);
router.delete('/:id', categoriasController.deleteCategory);

module.exports = router;