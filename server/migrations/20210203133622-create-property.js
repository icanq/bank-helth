'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      SandiBankId: {
        type: Sequelize.INTEGER
      },
      KreditKol1: {
        type: Sequelize.INTEGER
      },
      KreditKol2: {
        type: Sequelize.INTEGER
      },
      KreditKol3: {
        type: Sequelize.INTEGER
      },
      KreditKol4: {
        type: Sequelize.INTEGER
      },
      KreditKol5: {
        type: Sequelize.INTEGER
      },
      Laba: {
        type: Sequelize.INTEGER
      },
      Modal: {
        type: Sequelize.INTEGER
      },
      TotalAset: {
        type: Sequelize.INTEGER
      },
      ATMR: {
        type: Sequelize.INTEGER
      },
      BebanOperasional: {
        type: Sequelize.INTEGER
      },
      Pendapatan: {
        type: Sequelize.INTEGER
      },
      DanaPihakKetiga: {
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
    await queryInterface.dropTable('Properties');
  }
};