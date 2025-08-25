const db = require('../../models');

// Obtener todos los eventos
exports.getAllEvents = async (req, res) => {
  try {
    const events = await db.Event.findAll({
      include: [
        { model: db.User, attributes: ['id', 'username', 'email'] }, // Incluir info del creador
        { model: db.Category, attributes: ['id', 'name'] } // Incluir info de la categoría
      ]
    });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener un evento por id
exports.getEventById = async (req, res) => {
  try {
    const event = await db.Event.findByPk(req.params.id, {
      include: [
        { model: db.User, attributes: ['id', 'username', 'email'] },
        { model: db.Category, attributes: ['id', 'name'] }
      ]
    });
    if (!event) return res.status(404).json({ error: 'Evento no encontrado' });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear un evento
exports.createEvent = async (req, res) => {
  try {
    const { name, description, startDate, endDate, maxCapacity, CategoryId, UserId } = req.body;
    const newEvent = await db.Event.create({
      name,
      description,
      startDate,
      endDate,
      state: 'scheduled', // Estado por defecto
      maxCapacity,
      CategoryId,
      UserId
    });
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar un evento
exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, startDate, endDate, state, maxCapacity, CategoryId } = req.body;

    const event = await db.Event.findByPk(id);
    if (!event) return res.status(404).json({ error: 'Evento no encontrado' });

    event.name = name;
    event.description = description;
    event.startDate = startDate;
    event.endDate = endDate;
    event.state = state;
    event.maxCapacity = maxCapacity;
    event.CategoryId = CategoryId;
    await event.save();

    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar un evento
exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await db.Event.findByPk(id);
    if (!event) return res.status(404).json({ error: 'Evento no encontrado' });

    await event.destroy();
    res.json({ message: 'Evento eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};