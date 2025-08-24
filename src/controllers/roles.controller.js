const db = require('../../models');

exports.getAllRoles = async (req, res) => {
  try {
    const roles = await db.Rol.findAll();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
