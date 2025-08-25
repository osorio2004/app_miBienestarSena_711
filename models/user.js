'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Asociaciones definidas directamente aquí
      User.belongsTo(models.Rol, { foreignKey: 'roleId' });
      User.hasMany(models.Event, { foreignKey: 'userId' });
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    birthday: DataTypes.DATE,
    document: DataTypes.STRING,
    gender: DataTypes.STRING,
    state: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    passwordResetToken: DataTypes.STRING,
    passwordResetExpires: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};