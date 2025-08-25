const db = require('../../models');

// Obtener todas las categorías
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await db.Category.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener una categoría por id
exports.getCategoryById = async (req, res) => {
  try {
    const category = await db.Category.findByPk(req.params.id);
    if (!category) return res.status(404).json({ error: 'Categoría no encontrada' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear una categoría
exports.createCategory = async (req, res) => {
  try {
    const { name, description, image } = req.body;
    const newCategory = await db.Category.create({ name, description, image });
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar una categoría
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, image } = req.body;

    const category = await db.Category.findByPk(id);
    if (!category) return res.status(404).json({ error: 'Categoría no encontrada' });

    category.name = name;
    category.description = description;
    category.image = image;
    await category.save();

    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar una categoría
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await db.Category.findByPk(id);
    if (!category) return res.status(404).json({ error: 'Categoría no encontrada' });

    await category.destroy();
    res.json({ message: 'Categoría eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};