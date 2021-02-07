'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BankData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      periode: {
        type: Sequelize.INTEGER
      },
      sandiBank: {
        type: Sequelize.INTEGER
      },
      kreditKol1: {
        type: Sequelize.INTEGER
      },
      kreditKol2: {
        type: Sequelize.INTEGER
      },
      kreditKol3: {
        type: Sequelize.INTEGER
      },
      kreditKkol4: {
        type: Sequelize.INTEGER
      },
      kreditKol5: {
        type: Sequelize.INTEGER
      },
      laba: {
        type: Sequelize.INTEGER
      },
      modal: {
        type: Sequelize.INTEGER
      },
      totalAset: {
        type: Sequelize.INTEGER
      },
      ATMR: {
        type: Sequelize.INTEGER
      },
      bebanOperasional: {
        type: Sequelize.INTEGER
      },
      pendapatan: {
        type: Sequelize.INTEGER
      },
      danaPihakKetiga: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BankData');
  }
};