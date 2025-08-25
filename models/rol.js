'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    static associate(models) {
      // Asociación definida directamente aquí
      Rol.hasMany(models.User, { foreignKey: 'roleId' });
    }
  }
  Rol.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rol',
    tableName: 'rols'
  });
  return Rol;
};
