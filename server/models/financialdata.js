'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FinancialData extends Model {
    static associate(models) {
      
    }
  };
  FinancialData.init({
    SandiBank: DataTypes.INTEGER,
    Periode: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FinancialData',
  });
  return FinancialData;
};