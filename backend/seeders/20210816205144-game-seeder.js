'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('games', [
    { 
      gameName: 'Warzone'
    },
    {
      gameName: 'Battlefield'
    },
    {
      gameName: 'Apex Legends'
    },
    {
      gameName: 'PUBG'
    },
    {
      gameName: 'CSGO'
    },
    {
      gameName: 'Doom'
    },
    {
      gameName: 'Rainbow Six'
    },
    {
      gameName: 'Black ops'
    }
  ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('games', {}, null);
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
