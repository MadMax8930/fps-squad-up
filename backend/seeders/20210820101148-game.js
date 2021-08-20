'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('games', [
      { 
        gameName: 'Apex Legends'
      },
      {
        gameName: 'Battlefield series'
      },
      {
        gameName: 'Borderlands 2'
      },
      {
        gameName: 'Call of Duty series'
      },
      {
        gameName: 'Counter Strike: Global Offensive'
      },
      {
        gameName: 'Crysis series'
      },
      {
        gameName: 'Destiny series'
      },
      {
        gameName: 'Doom series'
      },
      {
        gameName: 'Dying Light'
      },
      {
        gameName: 'Escape from Tarkov'
      },
      {
        gameName: 'Far Cry series'
      },
      {
        gameName: 'Ghost Recon Series'
      },
      {
        gameName: 'GTA 5'
      },
      {
        gameName: 'Hunt: Showdown'
      },
      {
        gameName: 'Insurgency'
      },
      {
        gameName: 'Left 4 Dead'
      },
      {
        gameName: 'Overwatch'
      },
      {
        gameName: 'Rising Storm 2'
      },
      {
        gameName: 'Rainbow Six Siege'
      },
      {
        gameName: 'Titanfall series'
      },
      {
        gameName: 'Warzone'
      },
      {
        gameName: 'Warface'
      },
      {
        gameName: 'Payday'
      },
      {
        gameName: 'PUBG'
      },
      {
        gameName: 'Quake Champions'
      },
      {
        gameName: 'Squad'
      },
      {
        gameName: 'Valorant'
      },
      {
        gameName: 'World War 3'
      },
      {
        gameName: 'Wolfenstein series'
      },
      {
        gameName: 'Other'
      },
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
