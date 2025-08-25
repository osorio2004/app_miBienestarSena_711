// En el archivo ...-demo-categories.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Deporte',
        description: 'Eventos relacionados con actividad física y competencias deportivas.',
        image: 'https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cultura',
        description: 'Eventos que celebran el arte, la música, el teatro y las tradiciones.',
        image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Educación',
        description: 'Talleres, conferencias y cursos para el desarrollo de habilidades.',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Salud y Bienestar',
        description: 'Actividades enfocadas en el bienestar físico y mental.',
        image: 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Emprendimiento',
        description: 'Eventos para networking, innovación y desarrollo de negocios.',
        image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};