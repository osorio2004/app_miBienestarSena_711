'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // Asociación definida directamente aquí
      Category.hasMany(models.Event, { foreignKey: 'categoryId' });
    }
  }
  Category.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};