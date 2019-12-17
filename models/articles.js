'use strict';
module.exports = (sequelize, DataTypes) => {
  const Articles = sequelize.define('Articles', {
    author_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    category_name: DataTypes.INTEGER,
    is_published: DataTypes.TINYINT,
    is_archiver: DataTypes.TINYINT,
    slug: DataTypes.STRING
  }, {});
  Articles.associate = function(models) {
    // associations can be defined here
  };
  return Articles;
};