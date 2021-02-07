'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProcessedData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      periode: {
        type: Sequelize.INTEGER
      },
      NPL: {
        type: Sequelize.INTEGER
      },
      ROE: {
        type: Sequelize.INTEGER
      },
      ROA: {
        type: Sequelize.INTEGER
      },
      CAR: {
        type: Sequelize.INTEGER
      },
      BOPO: {
        type: Sequelize.INTEGER
      },
      LDR: {
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
    await queryInterface.dropTable('ProcessedData');
  }
};