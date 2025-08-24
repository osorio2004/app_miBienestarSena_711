'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    static associate(models) {
      Rol.hasMany(models.User, { foreignKey: 'roleId' });
    }
  }

  Rol.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Rol',
      tableName: 'roles',
      timestamps: true
    }
  );

  return Rol;
};
