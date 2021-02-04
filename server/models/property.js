'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Property.init({
    SandiBankId: DataTypes.INTEGER,
    KreditKol1: DataTypes.INTEGER,
    KreditKol2: DataTypes.INTEGER,
    KreditKol3: DataTypes.INTEGER,
    KreditKol4: DataTypes.INTEGER,
    KreditKol5: DataTypes.INTEGER,
    Laba: DataTypes.INTEGER,
    Modal: DataTypes.INTEGER,
    TotalAset: DataTypes.INTEGER,
    ATMR: DataTypes.INTEGER,
    BebanOperasional: DataTypes.INTEGER,
    Pendapatan: DataTypes.INTEGER,
    DanaPihakKetiga: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};