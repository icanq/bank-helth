'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProcessedData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProcessedData.belongsTo(models.BankData)
    }
  };
  ProcessedData.init({
    periode: DataTypes.INTEGER,
    NPL: DataTypes.INTEGER,
    ROE: DataTypes.INTEGER,
    ROA: DataTypes.INTEGER,
    CAR: DataTypes.INTEGER,
    BOPO: DataTypes.INTEGER,
    LDR: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProcessedData',
  });
  return ProcessedData;
};