const db = require('../../models');
const bcrypt = require('bcryptjs');

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const users = await db.User.findAll({
      // Excluimos el password del resultado por seguridad
      attributes: { exclude: ['password'] }
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener un usuario por id
exports.getUserById = async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] }
    });
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear un usuario
exports.createUser = async (req, res) => {
  try {
    const { username, email, password, phone, birthday, document, gender, rolId } = req.body;
    
    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.User.create({
      username,
      email,
      password: hashedPassword,
      phone,
      birthday,
      document,
      gender,
      rolId,
      state: 'active' // Estado por defecto
    });

    // No devolver el password hasheado
    const userResponse = newUser.toJSON();
    delete userResponse.password;

    res.status(201).json(userResponse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar un usuario
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    // Excluimos password de la actualización directa por seguridad
    const { username, email, phone, birthday, document, gender, state, rolId } = req.body;

    const user = await db.User.findByPk(id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    user.username = username;
    user.email = email;
    user.phone = phone;
    user.birthday = birthday;
    user.document = document;
    user.gender = gender;
    user.state = state;
    user.rolId = rolId;
    await user.save();
    
    const userResponse = user.toJSON();
    delete userResponse.password;

    res.json(userResponse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar un usuario
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await db.User.findByPk(id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    await user.destroy();
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};