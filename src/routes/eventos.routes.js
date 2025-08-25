const express = require('express');
const router = express.Router();
const eventosController = require('../controllers/eventos.controller');

router.get('/', eventosController.getAllEvents);
router.get('/:id', eventosController.getEventById);
router.post('/', eventosController.createEvent);
router.put('/:id', eventosController.updateEvent);
router.delete('/:id', eventosController.deleteEvent);

module.exports = router;
