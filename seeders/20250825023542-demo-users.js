// ... (el código de arriba no cambia)
'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('password123', 10);

    await queryInterface.bulkInsert('Users', [
      {
        username: 'adminUser',
        email: 'admin@example.com',
        // ... (otros campos)
        state: 'active',
        roleId: 1, // CORREGIDO AQUÍ
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'anaGomez',
        email: 'ana.gomez@example.com',
        // ... (otros campos)
        state: 'active',
        roleId: 2, // CORREGIDO AQUÍ
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // ... Haz el mismo cambio para los otros usuarios
      {
        username: 'carlosPerez',
        // ...
        roleId: 2, // CORREGIDO AQUÍ
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'lauraDiaz',
        // ...
        roleId: 2, // CORREGIDO AQUÍ
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'jorgeLopez',
        // ...
        roleId: 2, // CORREGIDO AQUÍ
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
