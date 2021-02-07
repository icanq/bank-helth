'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BankData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BankData.hasOne(models.ProcessedData)
    }
  };
  BankData.init({
    periode: DataTypes.INTEGER,
    sandiBank: DataTypes.INTEGER,
    kreditKol1: DataTypes.INTEGER,
    kreditKol2: DataTypes.INTEGER,
    kreditKol3: DataTypes.INTEGER,
    kreditKkol4: DataTypes.INTEGER,
    kreditKol5: DataTypes.INTEGER,
    laba: DataTypes.INTEGER,
    modal: DataTypes.INTEGER,
    totalAset: DataTypes.INTEGER,
    ATMR: DataTypes.INTEGER,
    bebanOperasional: DataTypes.INTEGER,
    pendapatan: DataTypes.INTEGER,
    danaPihakKetiga: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BankData',
  });
  return BankData;
};