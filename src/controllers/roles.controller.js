const db = require('../../models');

// Obtener todos los roles
exports.getAllRoles = async (req, res) => {
  try {
    const roles = await db.Rol.findAll();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener un rol por id
exports.getRoleById = async (req, res) => {
  try {
    const role = await db.Rol.findByPk(req.params.id);
    if (!role) return res.status(404).json({ error: 'Rol no encontrado' });
    res.json(role);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear un rol
exports.createRole = async (req, res) => {
  try {
    const { name } = req.body;
    const newRole = await db.Rol.create({ name });
    res.status(201).json(newRole);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar un rol
exports.updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const role = await db.Rol.findByPk(id);
    if (!role) return res.status(404).json({ error: 'Rol no encontrado' });

    role.name = name;
    await role.save();

    res.json(role);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar un rol
exports.deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await db.Rol.findByPk(id);
    if (!role) return res.status(404).json({ error: 'Rol no encontrado' });

    await role.destroy();
    res.json({ message: 'Rol eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
