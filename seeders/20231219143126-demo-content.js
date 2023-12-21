'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Contents', [{
      name: 'Salib Kasih',
      description: 'Salah satu objek wisata rohani di Tapanuli Utara',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Contents', null, {});
  }
};
