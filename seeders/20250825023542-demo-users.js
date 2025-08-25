'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Hasheamos las contraseñas antes de insertarlas
    const hashedPassword = await bcrypt.hash('password123', 10);

    await queryInterface.bulkInsert('Users', [
      {
        username: 'adminUser',
        email: 'admin@example.com',
        password: hashedPassword,
        phone: '3001234567',
        birthday: new Date('1990-05-15'),
        document: '123456789',
        gender: 'Otro',
        state: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'anaGomez',
        email: 'ana.gomez@example.com',
        password: hashedPassword,
        phone: '3017654321',
        birthday: new Date('1995-08-22'),
        document: '987654321',
        gender: 'Femenino',
        state: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'carlosPerez',
        email: 'carlos.perez@example.com',
        password: hashedPassword,
        phone: '3109876543',
        birthday: new Date('1988-11-30'),
        document: '192837465',
        gender: 'Masculino',
        state: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'lauraDiaz',
        email: 'laura.diaz@example.com',
        password: hashedPassword,
        phone: '3201239876',
        birthday: new Date('2000-01-10'),
        document: '564738291',
        gender: 'Femenino',
        state: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'jorgeLopez',
        email: 'jorge.lopez@example.com',
        password: hashedPassword,
        phone: '3157894561',
        birthday: new Date('1992-03-25'),
        document: '1122334455',
        gender: 'Masculino',
        state: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};