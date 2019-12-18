'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    name: DataTypes.STRING,
    is_published: DataTypes.TINYINT,
    is_archived: DataTypes.TINYINT
  }, {});
  Categories.associate = function (models) {
    // associations can be defined here
    Categories.hasMany(models.Articles, {
      foreignKey: "category_id",
      as: "articles"


    })
  };
  return Categories;
};