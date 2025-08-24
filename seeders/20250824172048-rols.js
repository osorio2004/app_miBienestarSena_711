'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert('rols', [
      {
        name: 'Coordinador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Instructor', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aprendiz', 
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('rols', null, {});
  }
};
