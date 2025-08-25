'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Events', [
      {
        name: 'Torneo de Baloncesto',
        description: 'Torneo relámpago de baloncesto 3x3. ¡Inscribe a tu equipo!',
        startDate: new Date('2025-09-15T10:00:00'),
        endDate: new Date('2025-09-15T14:00:00'),
        state: 'scheduled',
        maxCapacity: 50,
        categoryId: 1, // Deporte
        userId: 2,     // Creado por Ana Gomez
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Concierto de Rock Local',
        description: 'Presentación de las mejores bandas de rock de la ciudad.',
        startDate: new Date('2025-10-05T20:00:00'),
        endDate: new Date('2025-10-05T23:00:00'),
        state: 'scheduled',
        maxCapacity: 200,
        categoryId: 2, // Cultura
        userId: 3,     // Creado por Carlos Perez
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Taller de Programación en Node.js',
        description: 'Aprende a construir APIs REST desde cero con Node.js y Express.',
        startDate: new Date('2025-09-20T09:00:00'),
        endDate: new Date('2025-09-20T13:00:00'),
        state: 'scheduled',
        maxCapacity: 30,
        categoryId: 3, // Educación
        userId: 4,     // Creado por Laura Diaz
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Clase de Yoga al Aire Libre',
        description: 'Relájate y conecta con la naturaleza en esta sesión de yoga para todos los niveles.',
        startDate: new Date('2025-09-21T08:00:00'),
        endDate: new Date('2025-09-21T09:30:00'),
        state: 'scheduled',
        maxCapacity: 40,
        categoryId: 4, // Salud y Bienestar
        userId: 5,     // Creado por Jorge Lopez
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rueda de Negocios para Startups',
        description: 'Conecta con inversores y otros emprendedores para llevar tu idea al siguiente nivel.',
        startDate: new Date('2025-11-10T14:00:00'),
        endDate: new Date('2025-11-10T18:00:00'),
        state: 'scheduled',
        maxCapacity: 100,
        categoryId: 5, // Emprendimiento
        userId: 2,     // Creado por Ana Gomez
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Events', null, {});
  }
};
