'use strict';
module.exports = (sequelize, DataTypes) => {
  const Articles = sequelize.define('Articles', {
    author_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    category_name: DataTypes.STRING,
    is_published: DataTypes.TINYINT,
    is_archived: DataTypes.TINYINT,
    slug: DataTypes.STRING
  }, {});
  Articles.associate = function (models) {
    Articles.belongsTo(models.Categories, {
      foreignKey: "category_id",
      as: "categories",
      sourceKey: "id"

    })
    Articles.belongsTo(models.Users, {
      foreignKey: "author_id",
      as: "users",
      sourceKey: "id"

    });
  };
  return Articles;
};